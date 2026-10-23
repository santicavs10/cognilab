// Convierte un emoji/ilustración de trazo de un color sobre fondo blanco en una silueta
// transparente para usar como máscara CSS (public/images/iconos/<nombre>.png).
//
// Uso (desde la raíz del repo):
//   node scripts/emoji-a-icono.cjs "../banco-imagenes/emoji psicologia_cerebro_abrazo.png" psicologia-cerebro
//
// - Alfa = qué tan lejos del blanco está cada píxel, normalizado por el color del trazo.
// - Descarta fragmentos chicos que tocan el borde (restos de recortes) y motas sueltas.
// - Recorta márgenes y deja un lienzo cuadrado de 192 px con 4 % de aire.
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const [src, name] = process.argv.slice(2);
if (!src || !name) {
  console.error('Uso: node scripts/emoji-a-icono.cjs <imagen.png> <nombre-de-salida>');
  process.exit(1);
}
const OUT = 192;

(async () => {
  const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;
  const dist = (p) => 765 - data[p * 3] - data[p * 3 + 1] - data[p * 3 + 2];

  let inkDist = 0;
  for (let p = 0; p < W * H; p++) inkDist = Math.max(inkDist, dist(p));
  const alpha = new Uint8Array(W * H);
  for (let p = 0; p < W * H; p++) {
    alpha[p] = Math.max(0, Math.min(255, Math.round(((dist(p) / inkDist) * 255 - 20) * 1.1)));
  }

  // Componentes conectados del trazo (alfa > 40)
  const label = new Int32Array(W * H).fill(-1);
  const comps = [];
  for (let s = 0; s < W * H; s++) {
    if (label[s] !== -1 || alpha[s] <= 40) continue;
    const id = comps.length;
    const stack = [s];
    label[s] = id;
    let n = 0;
    let edge = false;
    while (stack.length) {
      const p = stack.pop();
      const x = p % W;
      const y = (p - x) / W;
      n++;
      if (x === 0 || y === 0 || x === W - 1 || y === H - 1) edge = true;
      for (const q of [p - 1, p + 1, p - W, p + W]) {
        if (q < 0 || q >= W * H || label[q] !== -1 || alpha[q] <= 40) continue;
        if ((q === p - 1 && x === 0) || (q === p + 1 && x === W - 1)) continue;
        label[q] = id;
        stack.push(q);
      }
    }
    comps.push({ n, edge });
  }
  const total = comps.reduce((sum, c) => sum + c.n, 0);
  const drop = new Set(comps.map((c, i) => ((c.edge && c.n < total * 0.06) || c.n < 30 ? i : -1)).filter((i) => i >= 0));

  // Silueta blanca; el antialias (alfa baja, sin componente) se conserva solo junto a trazos válidos
  const rgba = Buffer.alloc(W * H * 4);
  let minX = W, minY = H, maxX = 0, maxY = 0;
  for (let p = 0; p < W * H; p++) {
    let a = alpha[p];
    if (label[p] !== -1 && drop.has(label[p])) a = 0;
    if (label[p] === -1 && a > 0) {
      const x = p % W;
      let keep = false;
      for (const q of [p - 1, p + 1, p - W, p + W, p - W - 1, p - W + 1, p + W - 1, p + W + 1]) {
        if (q >= 0 && q < W * H && Math.abs((q % W) - x) <= 1 && label[q] !== -1 && !drop.has(label[q])) {
          keep = true;
          break;
        }
      }
      if (!keep) a = 0;
    }
    rgba[p * 4] = rgba[p * 4 + 1] = rgba[p * 4 + 2] = 255;
    rgba[p * 4 + 3] = a;
    if (a > 20) {
      const x = p % W;
      const y = (p - x) / W;
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    }
  }

  const w = maxX - minX + 1;
  const h = maxY - minY + 1;
  const side = Math.max(w, h);
  const pad = Math.round(side * 0.04);
  // sharp aplica resize antes que extend dentro de un mismo pipeline: se hace en dos pasos
  const squared = await sharp(rgba, { raw: { width: W, height: H, channels: 4 } })
    .extract({ left: minX, top: minY, width: w, height: h })
    .extend({
      top: Math.floor((side - h) / 2) + pad,
      bottom: Math.ceil((side - h) / 2) + pad,
      left: Math.floor((side - w) / 2) + pad,
      right: Math.ceil((side - w) / 2) + pad,
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .png()
    .toBuffer();

  const outDir = path.join(__dirname, '..', 'public', 'images', 'iconos');
  fs.mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, `${name}.png`);
  await sharp(squared).resize(OUT, OUT).png({ compressionLevel: 9 }).toFile(out);
  console.log(`${path.relative(process.cwd(), out)} (${comps.length} trazos, ${drop.size} fragmentos descartados)`);
})();

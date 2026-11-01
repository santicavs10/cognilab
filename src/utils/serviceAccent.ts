// Color de cada servicio, en el orden de `services`: tarjeta, ventana "+ info", /servicios y su página propia
const accents = [
  'var(--color-primary)',
  'var(--color-secondary-strong)',
  'var(--color-purple)',
  'var(--color-pink)',
  'var(--color-orange)',
  'var(--color-secondary)'
];

export const serviceAccent = (i: number) => accents[i % accents.length];

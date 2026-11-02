export const siteConfig = {
  name: 'CogniLab',
  tagline: 'Psicología y psicopedagogía para niños, adolescentes y familias',
  // Meta descripción (Google y links compartidos): primer párrafo de "Conocé CogniLab", sin negritas
  description:
    'En CogniLab trabajamos desde una mirada integral e interdisciplinaria, acompañando a niños, adolescentes y sus familias en desafíos vinculados al aprendizaje, el desarrollo y el bienestar emocional.',
  phone: '+54 9 11 7385-5741',
  whatsapp: '5491173855741',
  whatsappMessage: 'Hola, quiero pedir información',
  email: 'equipo.cognilab@gmail.com',
  address: 'Av. Juramento 2017 6 "B", Belgrano, CABA',
  instagram: 'https://www.instagram.com/equipo.cognilab/',
  maps: 'https://www.google.com/maps/search/Av.+Juramento+2017+6+B,+Belgrano,+Buenos+Aires',
  hours: 'Lunes a viernes de 9:00 a 19:00'
};

// Estadísticas de visitas: Cloudflare Web Analytics (dash.cloudflare.com → Web Analytics → www.cognilab.com.ar).
// El token es público (va en el código del sitio); no es una clave secreta.
export const analytics = {
  cloudflareToken: '8d3aa454a2704441a113baca0cbbbecb'
};

// Portada: dos bloques en zigzag (texto/foto y foto/texto).
// Fuente: ../info_manual/Nuestro enfoque.docx. **texto** = negrita.
export const about = [
  {
    title: 'Conocé CogniLab',
    image: '/images/nuestro-enfoque.jpg',
    imageWidth: 889,
    imageHeight: 1333,
    alt: 'Escritorio de trabajo de CogniLab con materiales de evaluación, juegos didácticos y un cuaderno con el logo',
    paragraphs: [
      'En CogniLab trabajamos desde una **mirada integral e interdisciplinaria**, acompañando a **niños, adolescentes y sus familias** en desafíos vinculados al aprendizaje, el desarrollo y el bienestar emocional.',
      'También acompañamos a **adultos jóvenes** en los desafíos propios de la vida universitaria y la inserción en el mundo laboral, brindando herramientas que favorezcan la autonomía, la organización y el desarrollo de sus habilidades personales y académicas.'
    ]
  },
  {
    title: 'Nuestro enfoque',
    image: '/images/nuestro-enfoque-2.jpg',
    imageWidth: 1200,
    imageHeight: 800,
    alt: 'Manos jugando con un juego de encastre de aros de colores sobre una mesa',
    paragraphs: [
      'Entendemos que cada proceso es **único**, por eso diseñamos intervenciones **individualizadas, específicas y estratégicas, basadas en evidencia** y orientadas al logro de **objetivos concretos**. Trabajamos en articulación con las familias, las escuelas y otros profesionales, buscando generar avances significativos que se traduzcan en mejoras en la vida cotidiana y el bienestar de cada persona.',
      'Valoramos el **trabajo en equipo**, desde una **mirada cercana y comprometida**. Apostamos a la **formación continua y a la actualización permanente** de nuestros conocimientos y prácticas, manteniéndonos al día con las últimas investigaciones y enfoques de intervención, para ofrecer un acompañamiento de calidad, fundamentado y acorde a las necesidades de cada persona.'
    ]
  }
];

// Las dos descripciones tienen largo similar para ocupar los mismos renglones lado a lado.
// icon: silueta en public/images/iconos/ (se colorea desde CSS)
export const specialties = [
  {
    title: 'Psicología',
    description:
      'Se abordan aspectos emocionales, conductuales y sociales del desarrollo de niños, adolescentes y adultos jóvenes, promoviendo recursos que favorezcan su bienestar y desenvolvimiento en el día a día.',
    icon: 'psicologia-cerebro'
  },
  {
    title: 'Psicopedagogía',
    description:
      'Se abordan los procesos de aprendizaje de niños, adolescentes y adultos jóvenes, desarrollando habilidades cognitivas y académicas para su autonomía y trayectoria educativa, y articulando las adecuaciones necesarias.',
    icon: 'psicopedagogia-libro'
  }
];

// Abordaje común a las dos especialidades
export const specialtiesShared =
  'Trabajamos en conjunto con las familias y las escuelas, brindando orientaciones, herramientas y pautas para acompañar cada proceso y dar continuidad a lo trabajado en el consultorio en los distintos espacios de la vida cotidiana.';

// Contenido ampliado de un servicio (ventana "+ info" y página /servicios).
// Un texto suelto es un párrafo (admite **negritas**); { h } es un subtítulo;
// { list } son viñetas y { steps }, pasos numerados.
export type ServiceBlock = string | { h: string } | { list: string[] } | { steps: string[] };

export interface Service {
  slug: string;
  title: string;
  // Síntesis: se ve en la tarjeta y es la descripción para Google de su página
  description: string;
  // Título para Google de su página (/servicios/<slug>/); por defecto, "<title> en Belgrano, CABA"
  seoTitle?: string;
  body: ServiceBlock[];
  // Partes desplegables (empiezan cerradas). specific: se agrupan aparte, como evaluaciones que no siempre se hacen.
  parts?: { title: string; specific?: boolean; body: ServiceBlock[] }[];
}

export const services: Service[] = [
  {
    slug: 'evaluacion-neuropsicologica',
    title: 'Evaluación neuropsicológica',
    description: 'Realizamos evaluaciones neuropsicológicas para niños, adolescentes y adultos, con el objetivo de conocer su perfil de funcionamiento, identificar fortalezas y desafíos y comprender cómo se manifiestan en diferentes ámbitos de la vida.',
    body: [
      'Realizamos evaluaciones neuropsicológicas para niños, adolescentes y adultos, con el objetivo de conocer su perfil de funcionamiento, identificar fortalezas y desafíos y comprender cómo se manifiestan en diferentes ámbitos de la vida.',
      'A través de entrevistas, observaciones clínicas, pruebas estandarizadas y cuestionarios, integramos información para comprender las necesidades de cada persona y orientar posibles intervenciones.'
    ],
    parts: [
      {
        title: 'Evaluación de niños y adolescentes',
        body: [
          { h: '¿Cómo se realiza?' },
          {
            steps: [
              'Entrevista inicial con la familia: conocemos el motivo de consulta, los antecedentes y la historia del desarrollo.',
              'Encuentros individuales: se realizan aproximadamente 4 a 5 encuentros de 60 minutos con el niño o adolescente.',
              'Cuestionarios y escalas: se administran instrumentos a la familia y a la escuela para conocer su funcionamiento en distintos contextos.',
              'Análisis e integración: analizamos los resultados y la información obtenida durante el proceso.',
              'Entrevista de devolución: compartimos los resultados con la familia y entregamos el informe escrito con conclusiones y orientaciones.'
            ]
          }
        ]
      },
      {
        title: 'Evaluación de adultos',
        body: [
          'La evaluación neuropsicológica en adultos busca conocer el funcionamiento cognitivo actual, identificar fortalezas y posibles desafíos y comprender su impacto en la vida cotidiana, académica y laboral.',
          'La instancia de evaluación suele durar aproximadamente 2 horas e incluye una entrevista y la administración de diferentes técnicas de evaluación.',
          { h: '¿Cómo se realiza?' },
          {
            steps: [
              'Entrevista inicial breve: para conocer el motivo de consulta y los antecedentes relevantes.',
              'Administración de pruebas: se realizan diferentes tareas y técnicas para explorar el funcionamiento intelectual.',
              'Escalas y cuestionarios: permiten ampliar la información sobre el funcionamiento cotidiano y los aspectos relevantes para la consulta.',
              'Entrevista de devolución: posteriormente, se coordina un encuentro para conversar sobre los resultados y compartir orientaciones.'
            ]
          }
        ]
      },
      {
        title: 'ADOS-2 y ADI-R',
        specific: true,
        body: [
          'En CogniLab también realizamos evaluaciones específicas para explorar conductas del espectro autista mediante ADOS-2 y ADI-R.',
          {
            list: [
              'ADOS-2: instrumento de evaluación que, mediante actividades semiestructuradas, permite observar aspectos de la comunicación, la interacción social y determinados patrones de comportamiento.',
              'ADI-R: entrevista semiestructurada a adultos responsables que permite profundizar en la historia del desarrollo y explorar aspectos de la comunicación, la interacción social y los comportamientos e intereses.'
            ]
          },
          'Estas herramientas son complementarias y no forman parte de todas las evaluaciones neuropsicológicas. Su indicación se considera según cada caso y se coordinan por separado.'
        ]
      }
    ]
  },
  {
    slug: 'tratamiento-psicologico',
    title: 'Tratamiento psicológico',
    description: 'Espacio terapéutico individual para niños, adolescentes y adultos jóvenes. Acompañamos el desarrollo emocional y personal, trabajando sobre el reconocimiento y la regulación de las emociones, los vínculos y las conductas.',
    body: [
      'Ofrecemos un espacio terapéutico individual para niños, adolescentes y adultos jóvenes, orientado a acompañar su desarrollo emocional, personal y vincular.',
      'Trabajamos desde una **orientación cognitivo-conductual**, que considera la relación entre pensamientos, emociones y conductas. Buscamos comprender las necesidades de cada persona y desarrollar herramientas y estrategias que favorezcan su bienestar y desenvolvimiento en la vida cotidiana.',
      { h: '¿Cuándo puede ser útil consultar?' },
      'La consulta psicológica puede ser un espacio de acompañamiento cuando aparecen:',
      {
        list: [
          'Cambios en el estado de ánimo o en el comportamiento.',
          'Dificultades para reconocer y regular las emociones.',
          'Desafíos en los vínculos y las relaciones interpersonales.',
          'Ansiedad, preocupaciones frecuentes o dificultades para manejar el estrés.',
          'Dificultades relacionadas con la autoestima y la confianza en uno mismo.',
          'Situaciones personales, familiares, escolares o académicas que generan malestar.'
        ]
      },
      { h: '¿Cómo trabajamos?' },
      'El proceso comienza con entrevistas iniciales para conocer el motivo de consulta, los antecedentes y las necesidades de cada persona. A partir de esto, se establecen objetivos terapéuticos y se planifica un abordaje individualizado.',
      'En el caso de niños y adolescentes, la participación de las familias es una parte importante del proceso. Se alternan sesiones individuales con el niño o adolescente y espacios de orientación familiar, así como también la articulación con la escuela y otros profesionales intervinientes.',
      { h: '¿Cuánto dura un tratamiento?' },
      'La duración y frecuencia de los encuentros se definen de acuerdo con las necesidades y los objetivos de cada proceso. El abordaje se revisa a lo largo del tratamiento, considerando la evolución y los avances de cada persona.'
    ]
  },
  {
    slug: 'tratamiento-psicopedagogico',
    title: 'Tratamiento psicopedagógico',
    description: 'Espacio de intervención individual para niños, adolescentes y adultos jóvenes, orientado a estimular y fortalecer las funciones cognitivas implicadas en el aprendizaje, desarrollar habilidades académicas y promover estrategias que favorezcan una mayor autonomía.',
    body: [
      'El tratamiento psicopedagógico es un espacio de intervención individual orientado a acompañar y fortalecer los procesos de aprendizaje.',
      'A partir del perfil de fortalezas y desafíos identificado en la evaluación, se establecen objetivos de trabajo y se diseñan propuestas específicas para estimular las funciones cognitivas, fortalecer las habilidades académicas y desarrollar estrategias de aprendizaje acordes a las necesidades de cada persona.',
      { h: '¿Cuándo puede ser útil consultar?' },
      'La intervención psicopedagógica puede ser beneficiosa cuando se presentan:',
      {
        list: [
          'Dificultades persistentes en la adquisición o consolidación de aprendizajes escolares.',
          'Dificultades en lectura, escritura, comprensión o matemática.',
          'Dificultades para sostener la atención, organizarse o planificar las actividades académicas.',
          'Necesidad de fortalecer estrategias de estudio y autonomía en el aprendizaje.',
          'Un desempeño académico que no refleja los recursos, conocimientos o esfuerzos de la persona.',
          'Dificultades de aprendizaje asociadas a condiciones del neurodesarrollo.'
        ]
      },
      { h: '¿Cómo trabajamos?' },
      'El tratamiento parte de los resultados de la evaluación neuropsicológica y de los objetivos acordados para cada paciente. Las sesiones son individuales y se planifican en función de su perfil de aprendizaje, utilizando actividades, recursos y estrategias específicas.',
      'En el caso de niños y adolescentes, se incorporan espacios de orientación a las familias y articulación con la escuela y otros profesionales intervinientes.',
      { h: '¿Cuánto dura un tratamiento?' },
      'La frecuencia y duración del tratamiento se establecen de acuerdo con las necesidades de cada paciente y los objetivos propuestos. A lo largo del proceso se revisan los avances y se ajustan las intervenciones cuando resulta necesario.'
    ]
  },
  {
    slug: 'orientacion-padres',
    title: 'Orientación a padres',
    description: 'Espacio de asesoramiento y acompañamiento para familias, orientado a comprender las necesidades de sus hijos, abordar inquietudes vinculadas con su desarrollo y aprendizaje y construir estrategias para acompañarlos en la vida cotidiana.',
    body: [
      'Ofrecemos espacios de orientación y acompañamiento a familias que buscan comprender mejor las necesidades de sus hijos y encontrar herramientas para acompañar su desarrollo.',
      'A través del intercambio y la reflexión conjunta, trabajamos sobre situaciones concretas de la vida familiar, considerando las características de cada niño o adolescente y su contexto.',
      { h: '¿Cuándo puede ser útil consultar?' },
      'La orientación familiar puede ser un recurso valioso cuando surgen inquietudes relacionadas con:',
      {
        list: [
          '**Desarrollo y comportamiento:** comprender determinadas conductas y encontrar maneras de acompañarlas.',
          '**Regulación emocional:** acompañar a los hijos en el reconocimiento y manejo de sus emociones.',
          '**Límites y crianza:** construir acuerdos y estrategias para establecer límites de manera consistente.',
          '**Rutinas y autonomía:** favorecer la adquisición de hábitos, responsabilidades e independencia.',
          '**Aprendizaje y escolaridad:** comprender las dificultades de aprendizaje y acompañar las demandas escolares.',
          '**Vínculos y comunicación:** fortalecer la comunicación familiar y abordar situaciones de conflicto.'
        ]
      },
      { h: '¿Cómo trabajamos?' },
      'Los encuentros se realizan con los adultos responsables y parten de sus inquietudes y necesidades. A partir de cada situación, establecemos objetivos específicos, ofrecemos orientación, aportamos herramientas y construimos estrategias concretas que puedan implementarse en el entorno familiar.',
      'Cuando resulta necesario, también podemos articular con los profesionales que acompañan al niño o adolescente y con la institución educativa.'
    ]
  },
  {
    slug: 'tutorias-academicas',
    title: 'Tutorías académicas',
    description: 'Espacios individuales a cargo de psicopedagogas, orientados a desarrollar estrategias de estudio, planificación y organización. Buscamos que cada estudiante conozca su perfil de aprendizaje y adquiera herramientas para estudiar con mayor autonomía.',
    body: [
      'Las tutorías académicas son espacios individuales coordinados por psicopedagogas, orientados a enseñar y desarrollar estrategias para estudiar y aprender con mayor autonomía.',
      'No se trata solamente de reforzar contenidos escolares o resolver tareas, sino de acompañar a cada estudiante a conocer su propio perfil de aprendizaje, identificar qué estrategias le resultan útiles e incorporar herramientas que pueda utilizar progresivamente de manera independiente.',
      { h: '¿A quiénes están dirigidas?' },
      {
        list: [
          '**Últimos años de primaria:** para comenzar a desarrollar hábitos de estudio, organización y planificación, y adquirir herramientas que faciliten el pasaje a la escuela secundaria.',
          '**Estudiantes de secundaria:** para acompañar las demandas académicas, organizar materias y materiales, gestionar tiempos, planificar el estudio y preparar evaluaciones.',
          '**Estudiantes universitarios:** para desarrollar estrategias que permitan organizar el estudio, abordar textos y materiales complejos, planificar períodos de preparación y responder a las distintas exigencias académicas.'
        ]
      },
      { h: '¿Cómo trabajamos?' },
      'Partimos de conocer el perfil de aprendizaje de cada estudiante, sus necesidades y las demandas de su trayectoria académica. A partir de allí, enseñamos y ponemos en práctica estrategias concretas que se incorporan progresivamente.',
      'Trabajamos sobre:',
      {
        list: [
          '**Organización y planificación:** uso de agenda, registro de fechas y tareas, organización de carpetas y materiales, gestión del tiempo.',
          '**Comprensión y procesamiento de la información:** identificación de ideas principales, comprensión de textos, toma de apuntes y elaboración de resúmenes, esquemas y cuadros.',
          '**Estrategias de estudio:** selección de herramientas según los contenidos y el tipo de evaluación; preparación de exámenes orales, escritos y prácticos.',
          '**Monitoreo del aprendizaje:** reconocimiento de qué contenidos se comprenden, cuáles necesitan mayor trabajo y cómo evaluar los propios conocimientos.',
          '**Autonomía:** incorporación progresiva de estrategias para organizarse, estudiar y resolver las demandas académicas de manera cada vez más independiente.'
        ]
      },
      'También incorporamos herramientas y recursos digitales cuando resultan útiles para facilitar la comprensión, organizar la información y favorecer el aprendizaje.',
      'El objetivo es que cada estudiante no solo pueda responder a las demandas académicas actuales, sino que también construya recursos y estrategias que pueda generalizar a nuevos aprendizajes.'
    ]
  },
  {
    slug: 'capacitaciones',
    title: 'Capacitaciones a escuelas',
    seoTitle: 'Capacitaciones a escuelas sobre aprendizaje y neurodesarrollo',
    description: 'Propuestas de formación y asesoramiento para instituciones educativas, orientadas a profundizar conocimientos sobre aprendizaje y neurodesarrollo y brindar herramientas prácticas para el trabajo en el aula.',
    body: [
      'En CogniLab diseñamos propuestas de capacitación y asesoramiento para instituciones educativas, destinadas a docentes, equipos de orientación escolar y otros profesionales de la comunidad educativa.',
      'Nuestro objetivo es acercar conocimientos e información actualizada sobre temáticas relacionadas al aprendizaje, el neurodesarrollo y el funcionamiento cognitivo. Así como brindar herramientas y estrategias que puedan aplicarse en la práctica educativa cotidiana.',
      { h: '¿Qué propuestas ofrecemos?' },
      'Abordamos temáticas vinculadas con el desarrollo, el aprendizaje y las necesidades de los estudiantes, ofreciendo herramientas para comprender diferentes perfiles y pensar estrategias de acompañamiento en el ámbito escolar.',
      'Los contenidos se definen de acuerdo con las inquietudes, necesidades y objetivos de cada institución.',
      { h: '¿Cómo trabajamos?' },
      'Las propuestas pueden desarrollarse mediante encuentros de capacitación, talleres temáticos o espacios de intercambio y asesoramiento con los equipos educativos.',
      'Buscamos articular los fundamentos teóricos con situaciones concretas de la práctica escolar, ofreciendo recursos que puedan trasladarse al trabajo cotidiano en el aula.'
    ]
  }
];

// name: sin "Lic."; el título va aparte, en title, y se muestra debajo del nombre.
// role: define el área donde aparece (Psicopedagoga / Psicóloga); no se muestra.
// position (opcional): cargo en el centro; es el subtítulo de su propio grupo, arriba de las áreas (no se repite en la tarjeta).
// bio (opcional): formación y experiencia, un ítem por renglón, para la ventana "Conocé más".
//   Fuente: ../info_manual/TEXTOS PAGINA WEB- CVS.docx, 3.ª columna de la tabla (fuera del repo).
//   Al mostrarse, cada ítem termina en punto. Sin bio se muestra un aviso provisorio.
//   Ajuste pedido sobre el Word: Florencia "Universidad del Salvador (USAL)".
export const professionals = [
  {
    name: 'Rocío Do Pazo',
    role: 'Psicopedagoga',
    title: 'Lic. y Prof. en Psicopedagogía',
    position: 'Directora',
    image: '/images/equipo-rocio-do-pazo.jpg',
    bio: [
      'Lic. en Psicopedagogía – Universidad Católica Argentina (UCA)',
      'Maestría en Neuropsicología Aplicada – Universidad Hospital Italiano de Buenos Aires',
      'Posgrado en Neuropsicología del Aprendizaje Infanto-Juvenil – Universidad Favaloro',
      'Profesorado de Nivel Medio y Superior – UCA',
      'Experiencia clínica en evaluaciones neuropsicológicas, tratamiento psicopedagógico y tutorías académicas',
      'Experiencia en Equipos de Orientación Escolar de nivel inicial, primario y secundario',
      'Coordinación de proyectos de inclusión y acompañamiento escolar'
    ]
  },
  {
    name: 'Florencia Morales Ponce',
    role: 'Psicóloga',
    title: 'Lic. y Prof. en Psicología',
    image: '/images/equipo-florencia-morales-ponce.jpg',
    bio: [
      'Lic. en Psicología – Universidad del Salvador (USAL)',
      'Formación en Aplicación de Técnicas Cognitivas y Conductuales – CETECIC',
      'Formación anual en Terapia Dialéctico-Conductual (DBT) y Habilidades – Habilidades para el Cambio',
      'Tramo de Formación Pedagógica – Universidad FASTA',
      'Formación en Trastornos del Espectro Autista (TEA) – ETCI',
      'Formación en Abordaje Psicopedagógico de los Trastornos del Neurodesarrollo – FLENI',
      'Experiencia como psicóloga clínica con atención de niños, adolescentes y adultos y orientación a familias',
      'Experiencia en integración escolar acompañando a niños con discapacidad y coordinando talleres grupales de habilidades sociales',
      'Experiencia trabajando con jóvenes con discapacidad en el desarrollo de la autonomía, las habilidades sociales, las actividades de la vida diaria y la regulación conductual'
    ]
  },
  {
    name: 'Aldana Almirón',
    role: 'Psicopedagoga',
    title: 'Lic. en Psicopedagogía',
    image: '/images/equipo-aldana-almiron.jpg',
    bio: [
      'Lic. en Psicopedagogía – Universidad Católica Argentina (UCA)',
      'Especialización en Neurociencias Cognitivas, Neuropsicología y Rehabilitación Cognitiva',
      'Diplomatura en Comunicación y Lenguaje en Trastornos del Neurodesarrollo',
      'Integrante de la Unidad de Psicopedagogía del Hospital de Rehabilitación Manuel Rocca',
      'Miembro del Comité de Discapacidad Visual y Multideficiencias del Hospital Manuel Rocca',
      'Ex instructora de residentes del Hospital Manuel Rocca y ex residente de Psicopedagogía del Hospital Ramos Mejía',
      'Experiencia en evaluaciones neuropsicológicas, tratamiento psicopedagógico, evaluaciones del desarrollo y ADOS-2'
    ]
  },
  {
    name: 'Agustina Ceresetto',
    role: 'Psicopedagoga',
    title: 'Lic. y Prof. en Psicopedagogía',
    image: '/images/equipo-agustina-ceresetto.jpg',
    bio: [
      'Lic. en Psicopedagogía – Universidad Católica Argentina (UCA)',
      'Profesorado de Nivel Superior – UCA',
      'Curso de Neuroeducación y Educación Emocional – Asociación Psi',
      'Experiencia en atención clínica psicopedagógica y tutorías académicas',
      'Experiencia en procesos de inclusión, tutorías y acompañamiento escolar en instituciones educativas'
    ]
  },
  {
    name: 'María José Carnelli',
    role: 'Psicopedagoga',
    title: 'Lic. en Psicopedagogía',
    image: '/images/equipo-maria-jose-carnelli.jpg',
    bio: [
      'Lic. en Psicopedagogía – Universidad de Morón',
      'Maestría en Neuropsicología – Universidad Católica Argentina',
      'Diplomatura en Diagnóstico y Habilitación Neuropsicológica en las Dificultades de Aprendizaje – Fundación de Neuropsicología Clínica',
      'Diplomatura de Especialización en Terapia Cognitivo-Conductual, Nivel 1 – Fundación Garrahan / A.R.I.T.A.',
      'Experiencia clínica en evaluaciones neuropsicológicas, tratamiento psicopedagógico y tutorías académicas',
      'Miembro de Equipo de Orientación Escolar de nivel inicial y primario'
    ]
  },
  {
    name: 'Felisa Corbacho',
    role: 'Psicopedagoga',
    title: 'Lic. en Psicopedagogía',
    image: '/images/equipo-felisa-corbacho.jpg',
    bio: [
      'Lic. en Psicopedagogía – Universidad Católica Argentina (UCA)',
      'Maestría en Neuropsicología Aplicada – Hospital Italiano de Buenos Aires',
      'Experiencia en procesos de acompañamiento e inclusión escolar en distintas instituciones',
      'Experiencia como tutora de estudiantes con dificultades de aprendizaje',
      'Experiencia en atención clínica psicopedagógica',
      'Miembro de Equipo de Orientación Escolar de nivel primario en institución educativa'
    ]
  },
  {
    name: 'Adriana Acosta',
    role: 'Psicóloga',
    title: 'Lic. en Psicología',
    image: '/images/equipo-adriana-acosta.jpg',
    bio: [
      'Lic. en Psicología – Universidad de Buenos Aires (UBA)',
      'Especialización en Terapias Contextuales y de Tercera Generación – ETCI',
      'Especialización en Terapia de Aceptación y Compromiso (ACT) con niños, adolescentes y padres – ETCI',
      'Formación en DBT Escuelas – Fundación Foro',
      'Diplomatura para Educadores en Salud Mental – CISMA',
      'Formación en Neurociencias y Mindfulness – Antropotécnica',
      'Formación en Clínica Infantojuvenil: una perspectiva cognitivo-conductual – Hospital Infantojuvenil Dra. Carolina Tobar García',
      'Experiencia en psicología clínica, con atención de niños y adolescentes',
      'Experiencia en coordinación de Equipos de Orientación Escolar',
      'Experiencia en educación especial, docencia y acompañamiento escolar, con implementación de propuestas pedagógicas individualizadas, adaptaciones curriculares y estrategias de inclusión',
      'Experiencia en diseño y coordinación de talleres para familias y docentes, orientados al bienestar, la convivencia y el desarrollo de habilidades socioemocionales'
    ]
  },
  {
    name: 'Alma Brea Lucchelli',
    role: 'Psicóloga',
    title: 'Lic. y Prof. en Psicología',
    image: '/images/equipo-alma-brea-lucchelli.jpg',
    bio: [
      'Lic. y Prof. en Psicología – Universidad de Buenos Aires (UBA)',
      'Especialización en Terapia Cognitivo-Conductual (TCC) – Colegio de Psicólogos de la Provincia',
      'Experiencia como psicóloga en el Servicio de Salud Mental Pediátrica del Hospital Italiano de Buenos Aires',
      'Experiencia como psicóloga en escuela de educación especial, acompañando trayectorias escolares y trabajando colaborativamente con docentes y familias',
      'Experiencia en atención de niños y adolescentes en equipos interdisciplinarios y orientación a padres'
    ]
  }
];

// Cada foto tiene una versión de 1600px (src) y otra de 800px con sufijo -800
export const gallery = [
  // Mismo número y orden que en banco-imagenes. En la 7 se desenfocaron los nombres de los chicos
  {
    src: '/images/nuestro-espacio-1.jpg',
    alt: 'Consultorio luminoso con escritorio blanco, lápices de colores y alfombra con un arcoíris'
  },
  {
    src: '/images/nuestro-espacio-2.jpg',
    alt: 'Consultorio con escritorio, sillas y materiales de trabajo, visto desde la puerta azul'
  },
  {
    src: '/images/nuestro-espacio-3.jpg',
    alt: 'Sala de espera con dos sillones de madera y el logo de CogniLab en la pared'
  },
  {
    src: '/images/nuestro-espacio-4.jpg',
    alt: 'Consultorio con escritorio blanco y sillas, visto desde la puerta amarilla'
  },
  {
    src: '/images/nuestro-espacio-5.jpg',
    alt: 'Pasillo con puertas de colores, sillas de espera y el Rincón de Logros al fondo'
  },
  {
    src: '/images/nuestro-espacio-6.jpg',
    alt: 'Rincón de Logros: pared con letras de colores y dibujos colgados, entre una puerta azul y una amarilla'
  },
  {
    src: '/images/nuestro-espacio-7.jpg',
    alt: 'Notas y dibujos con logros colgados con broches de colores en el Rincón de Logros'
  },
  {
    src: '/images/nuestro-espacio-8.jpg',
    alt: 'Consultorio visto desde la puerta verde, con escritorio blanco y materiales didácticos'
  },
  {
    src: '/images/nuestro-espacio-9.jpg',
    alt: 'Mesa con tarjetas de números y recipientes con fichas de colores para actividades'
  },
  {
    src: '/images/nuestro-espacio-10.jpg',
    alt: 'Consultorio con mesa de trabajo, juegos didácticos y lapiceros de colores'
  },
  {
    src: '/images/nuestro-espacio-11.jpg',
    alt: 'Lapiceros con forma de lápiz llenos de lápices y marcadores de colores sobre un escritorio'
  },
  {
    src: '/images/nuestro-espacio-12.jpg',
    alt: 'Libros de trabajo y lapiceros con lápices de colores sobre un mueble blanco'
  },
  {
    src: '/images/nuestro-espacio-13.jpg',
    alt: 'Profesional leyendo un libro infantil ilustrado, junto a lapiceros con marcadores de colores'
  },
  {
    src: '/images/nuestro-espacio-14.jpg',
    alt: 'Mano armando un diseño con cubos rojos y blancos, frente a un cuaderno con el modelo a copiar'
  },
  {
    src: '/images/nuestro-espacio-15.jpg',
    alt: 'Logo de CogniLab en letras de colores sobre una pared blanca'
  }
];

export const faqs = [
  {
    question: '¿Cómo puedo solicitar una primera entrevista?',
    answer: 'Podés escribirnos por WhatsApp, Instagram o completar el formulario de contacto.'
  },
  {
    question: '¿Atienden de forma presencial o virtual?',
    answer: 'Podés aclarar acá las modalidades disponibles según cada profesional.'
  },
  {
    question: '¿Trabajan con obras sociales o reintegros?',
    answer: 'Indicá aquí cómo manejan cobertura, facturación o reintegros.'
  }
];

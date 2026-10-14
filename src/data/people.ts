import type { Person, MediaEntry } from '../types';

/**
 * Placeholder assets.
 * - Portraits / thumbnails: https://picsum.photos with fixed seeds for stable images.
 * - Videos: small public sample MP4s (replace with real footage later).
 *
 * To replace mock content with real assets, edit the `portrait`, `thumbnail`,
 * `fullImage`, `videoUrl`, and `poster` fields below.
 */
const SAMPLE_VIDEO =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const SAMPLE_VIDEO_2 =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

const photo = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;
const portrait = (seed: string) => `https://picsum.photos/seed/${seed}/800/1000`;
const cover = (seed: string) => `https://picsum.photos/seed/${seed}/1600/900`;

/**
 * Builds a mock video entry for a given person. Used to expand the demo
 * timeline of the first person to ~20 entries so the "load more" pattern
 * is visible. Replace with real media later.
 */
const mockVideo = (
  personId: string,
  index: number,
  date: string,
  title: string,
  context: string,
): MediaEntry => ({
  id: `${personId}-v${index}`,
  type: 'video',
  date,
  title,
  context,
  thumbnail: photo(`${personId}-v${index}`, 1200, 675),
  videoUrl: index % 2 === 0 ? SAMPLE_VIDEO : SAMPLE_VIDEO_2,
  poster: photo(`${personId}-v${index}`, 1200, 675),
});

const mockPhoto = (
  personId: string,
  index: number,
  date: string,
  title: string,
  context: string,
  caption?: string,
): MediaEntry => ({
  id: `${personId}-p${index}`,
  type: 'photo',
  date,
  title,
  context,
  thumbnail: photo(`${personId}-p${index}`, 1200, 800),
  fullImage: photo(`${personId}-p${index}`, 2000, 1333),
  caption,
});

export const people: Person[] = [
  {
    id: 'marta-lopez',
    name: 'Marta López',
    summary: 'Periodista investigadora, 1985. Defensora de la libertad de expresión.',
    portrait: portrait('marta'),
    cover: cover('marta-cover'),
    bio: 'Marta López es periodista especializada en investigación y derechos humanos. A lo largo de su carrera ha documentado casos de corrupción y abusos de poder, manteniendo un compromiso firme con la veracidad y la protección de las fuentes. Su trabajo ha sido reconocido por organizaciones de prensa independiente.',
    details: [
      { label: 'Nacimiento', value: '12 de marzo de 1985' },
      { label: 'Origen', value: 'Ciudad de México' },
      { label: 'Profesión', value: 'Periodista investigadora' },
      { label: 'Idiomas', value: 'Español, Inglés, Francés' },
    ],
    timeline: [
      mockVideo('marta', 1, '2024-09-03', 'Entrevista en el estudio', 'Declaraciones sobre la libertad de prensa en América Latina.'),
      mockPhoto('marta', 1, '2024-06-18', 'Premio de periodismo', 'Ceremonia de reconocimiento a la investigación independiente.'),
      mockPhoto('marta', 2, '2023-11-22', 'En la redacción', 'Trabajo de campo antes de la publicación de una investigación.'),
      mockVideo('marta', 2, '2023-08-14', 'Conferencia de prensa', 'Presentación de hallazgos sobre casos de corrupción.'),
      mockPhoto('marta', 3, '2023-05-30', 'Trabajo de campo', 'Entrevistas en la región sur del país.'),
      mockPhoto('marta', 4, '2023-03-12', 'Reunión con fuentes', 'Encuentro con testigos clave del caso.'),
      mockVideo('marta', 3, '2022-12-05', 'Testimonio grabado', 'Entrevista en profundidad con una persona afectada.'),
      mockPhoto('marta', 5, '2022-10-20', 'Documentación de archivos', 'Revisión de documentos oficiales.'),
      mockPhoto('marta', 6, '2022-07-08', 'Publicación del reportaje', 'Lanzamiento de la investigación multiparte.'),
      mockVideo('marta', 4, '2022-04-19', 'Declaración pública', 'Comunicado sobre protección de fuentes.'),
      mockPhoto('marta', 7, '2022-01-25', 'Premio nacional', 'Reconocimiento a la trayectoria.'),
      mockPhoto('marta', 8, '2021-11-11', 'Taller de investigación', 'Capacitación a periodistas jóvenes.'),
      mockVideo('marta', 5, '2021-09-03', 'Mesa de debate', 'Discusión sobre libertad de expresión.'),
      mockPhoto('marta', 9, '2021-06-17', 'Archivo de noticias', 'Recolección de material histórico.'),
      mockPhoto('marta', 10, '2021-03-22', 'Viaje de investigación', 'Recorrido por comunidades afectadas.'),
      mockVideo('marta', 6, '2020-12-15', 'Entrevista radial', 'Participación en programa de radio.'),
      mockPhoto('marta', 11, '2020-10-08', 'Publicación de informe', 'Presentación de un análisis documentado.'),
      mockPhoto('marta', 12, '2020-07-29', 'Reunión con colegas', 'Coordinación de cobertura.'),
      mockVideo('marta', 7, '2020-04-14', 'Charla universitaria', 'Conferencia en la universidad.'),
      mockPhoto('marta', 13, '2020-02-03', 'Inicio de la carrera', 'Primeros pasos en el periodismo investigativo.'),
    ],
  },
  {
    id: 'carlos-mendoza',
    name: 'Carlos Mendoza',
    summary: 'Ingeniero ambiental, 1979. Luchador por el acceso al agua.',
    portrait: portrait('carlos'),
    cover: cover('carlos-cover'),
    bio: 'Carlos Mendoza es ingeniero ambiental con más de dos décadas de experiencia en gestión de recursos hídricos. Su trabajo se centra en garantizar el acceso al agua potable en comunidades rurales y en la protección de cuencas hidrográficas frente a la explotación industrial.',
    details: [
      { label: 'Nacimiento', value: '4 de julio de 1979' },
      { label: 'Origen', value: 'Puebla, México' },
      { label: 'Profesión', value: 'Ingeniero ambiental' },
      { label: 'Especialidad', value: 'Gestión de recursos hídricos' },
    ],
    timeline: [
      {
        id: 'carlos-1',
        type: 'photo',
        date: '2024-08-10',
        title: 'Trabajo de campo en la cuenca',
        context: 'Monitoreo de calidad del agua en comunidades rurales.',
        thumbnail: photo('carlos-p1', 1200, 800),
        fullImage: photo('carlos-p1', 2000, 1333),
        caption: 'Durante las mediciones de agosto de 2024.',
      },
      {
        id: 'carlos-2',
        type: 'video',
        date: '2024-04-02',
        title: 'Conferencia sobre sostenibilidad',
        context: 'Presentación del informe anual sobre acceso al agua.',
        thumbnail: photo('carlos-v1', 1200, 675),
        videoUrl: SAMPLE_VIDEO_2,
        poster: photo('carlos-v1', 1200, 675),
      },
    ],
  },
  {
    id: 'sofia-ramirez',
    name: 'Sofía Ramírez',
    summary: 'Abogada de derechos humanos, 1988. Defensora de migrantes.',
    portrait: portrait('sofia'),
    cover: cover('sofia-cover'),
    bio: 'Sofía Ramírez es abogada dedicada a la defensa de los derechos de las personas migrantes y refugiadas. Ha litigado casos ante organismos internacionales y ha impulsado reformas legales para garantizar tratos dignos y acceso a la justicia en procesos migratorios.',
    details: [
      { label: 'Nacimiento', value: '28 de enero de 1988' },
      { label: 'Origen', value: 'Guadalajara, México' },
      { label: 'Profesión', value: 'Abogada de derechos humanos' },
      { label: 'Especialidad', value: 'Derecho migratorio' },
    ],
    timeline: [
      {
        id: 'sofia-1',
        type: 'photo',
        date: '2025-01-15',
        title: 'Audiencia pública',
        context: 'Presentación de argumentos ante la comisión de derechos humanos.',
        thumbnail: photo('sofia-p1', 1200, 800),
        fullImage: photo('sofia-p1', 2000, 1333),
      },
      {
        id: 'sofia-2',
        type: 'photo',
        date: '2024-12-05',
        title: 'Taller comunitario',
        context: 'Asesoría legal gratuita en la frontera norte.',
        thumbnail: photo('sofia-p2', 1200, 800),
        fullImage: photo('sofia-p2', 2000, 1333),
        caption: 'Sesión informativa sobre derechos de las personas migrantes.',
      },
      {
        id: 'sofia-3',
        type: 'video',
        date: '2024-10-20',
        title: 'Testimonio documentado',
        context: 'Entrevista sobre el sistema de justicia migratoria.',
        thumbnail: photo('sofia-v1', 1200, 675),
        videoUrl: SAMPLE_VIDEO,
        poster: photo('sofia-v1', 1200, 675),
      },
    ],
  },
  {
    id: 'julian-ortiz',
    name: 'Julián Ortiz',
    summary: 'Maestro rural, 1972. Promotor de la educación comunitaria.',
    portrait: portrait('julian'),
    cover: cover('julian-cover'),
    bio: 'Julián Ortiz es maestro de educación básica en comunidades indígenas desde hace más de treinta años. Su labor combina la enseñanza formal con la preservación de lenguas y tradiciones locales, siendo reconocido como referente de la educación comunitaria en la región.',
    details: [
      { label: 'Nacimiento', value: '9 de agosto de 1972' },
      { label: 'Origen', value: 'Oaxaca, México' },
      { label: 'Profesión', value: 'Maestro de educación básica' },
      { label: 'Especialidad', value: 'Educación intercultural bilingüe' },
    ],
    timeline: [
      {
        id: 'julian-1',
        type: 'photo',
        date: '2025-02-20',
        title: 'En el aula',
        context: 'Clase de lengua materna con alumnos de primaria.',
        thumbnail: photo('julian-p1', 1200, 800),
        fullImage: photo('julian-p1', 2000, 1333),
      },
      {
        id: 'julian-2',
        type: 'video',
        date: '2024-09-15',
        title: 'Ceremonia escolar',
        context: 'Evento conmemorativo en la escuela comunitaria.',
        thumbnail: photo('julian-v1', 1200, 675),
        videoUrl: SAMPLE_VIDEO_2,
        poster: photo('julian-v1', 1200, 675),
      },
    ],
  },
  {
    id: 'elena-vega',
    name: 'Elena Vega',
    summary: 'Médica cirujana, 1982. Voluntaria en zonas de conflicto.',
    portrait: portrait('elena'),
    cover: cover('elena-cover'),
    bio: 'Elena Vega es médica cirujana con experiencia en atención de emergencia en zonas de conflicto y desastres naturales. Ha participado en misiones humanitarias internacionales, enfocándose en la reducción de la mortalidad materna y neonatal en condiciones de escasez.',
    details: [
      { label: 'Nacimiento', value: '17 de mayo de 1982' },
      { label: 'Origen', value: 'Monterrey, México' },
      { label: 'Profesión', value: 'Médica cirujana' },
      { label: 'Especialidad', value: 'Medicina de emergencia y desastres' },
    ],
    timeline: [
      {
        id: 'elena-1',
        type: 'photo',
        date: '2025-03-01',
        title: 'Misión humanitaria',
        context: 'Atención médica en campamentos temporales.',
        thumbnail: photo('elena-p1', 1200, 800),
        fullImage: photo('elena-p1', 2000, 1333),
      },
      {
        id: 'elena-2',
        type: 'photo',
        date: '2024-11-30',
        title: 'Capacitación a personal local',
        context: 'Taller de primeros auxilios para brigadistas comunitarios.',
        thumbnail: photo('elena-p2', 1200, 800),
        fullImage: photo('elena-p2', 2000, 1333),
        caption: 'Sesión práctica con personal de salud comunitario.',
      },
      {
        id: 'elena-3',
        type: 'video',
        date: '2024-07-11',
        title: 'Informe desde el terreno',
        context: 'Actualización sobre las condiciones sanitarias en la región.',
        thumbnail: photo('elena-v1', 1200, 675),
        videoUrl: SAMPLE_VIDEO,
        poster: photo('elena-v1', 1200, 675),
      },
    ],
  },
  {
    id: 'andres-torres',
    name: 'Andrés Torres',
    summary: 'Arquitecto social, 1990. Constructor de viviendas dignas.',
    portrait: portrait('andres'),
    cover: cover('andres-cover'),
    bio: 'Andrés Torres es arquitecto dedicado al diseño y construcción de vivienda social. Su enfoque combina materiales locales, eficiencia energética y participación comunitaria para desarrollar asentamientos habitables en zonas de baja densidad y riesgo.',
    details: [
      { label: 'Nacimiento', value: '23 de noviembre de 1990' },
      { label: 'Origen', value: 'Puebla, México' },
      { label: 'Profesión', value: 'Arquitecto social' },
      { label: 'Especialidad', value: 'Vivienda asequible y sostenible' },
    ],
    timeline: [
      {
        id: 'andres-1',
        type: 'photo',
        date: '2025-04-08',
        title: 'Proyecto habitacional',
        context: 'Inauguración de un complejo de viviendas comunitarias.',
        thumbnail: photo('andres-p1', 1200, 800),
        fullImage: photo('andres-p1', 2000, 1333),
      },
      {
        id: 'andres-2',
        type: 'video',
        date: '2024-12-02',
        title: 'Entrevista sobre diseño social',
        context: 'Reflexiones sobre arquitectura y participación ciudadana.',
        thumbnail: photo('andres-v1', 1200, 675),
        videoUrl: SAMPLE_VIDEO_2,
        poster: photo('andres-v1', 1200, 675),
      },
    ],
  },
  {
    id: 'laura-hernandez',
    name: 'Laura Hernández',
    summary: 'Antropóloga cultural, 1986. Documentalista de memorias orales.',
    portrait: portrait('laura'),
    cover: cover('laura-cover'),
    bio: 'Laura Hernández es antropóloga cultural y documentalista. Su trabajo recopila memorias orales de comunidades vulnerables, preservando historias que de otro modo se perderían. Ha producido materiales audiovisuales reconocidos en festivales de cine documental.',
    details: [
      { label: 'Nacimiento', value: '6 de febrero de 1986' },
      { label: 'Origen', value: 'Veracruz, México' },
      { label: 'Profesión', value: 'Antropóloga cultural' },
      { label: 'Especialidad', value: 'Memoria oral y documental' },
    ],
    timeline: [
      {
        id: 'laura-1',
        type: 'video',
        date: '2025-02-28',
        title: 'Tramo del documental',
        context: 'Extracto del proyecto sobre memorias de comunidades costeras.',
        thumbnail: photo('laura-v1', 1200, 675),
        videoUrl: SAMPLE_VIDEO,
        poster: photo('laura-v1', 1200, 675),
        caption: 'Escena seleccionada del largometraje documental.',
      },
      {
        id: 'laura-2',
        type: 'photo',
        date: '2024-10-12',
        title: 'Trabajo de campo',
        context: 'Registro de entrevistas en comunidades de la costa.',
        thumbnail: photo('laura-p1', 1200, 800),
        fullImage: photo('laura-p1', 2000, 1333),
      },
      {
        id: 'laura-3',
        type: 'photo',
        date: '2024-08-30',
        title: 'Festival de cine',
        context: 'Presentación del documental en el festival regional.',
        thumbnail: photo('laura-p2', 1200, 800),
        fullImage: photo('laura-p2', 2000, 1333),
      },
    ],
  },
];

export const getPersonById = (id: string): Person | undefined =>
  people.find((p) => p.id === id);

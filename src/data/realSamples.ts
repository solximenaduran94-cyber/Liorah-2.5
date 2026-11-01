export interface RealSampleItem {
  id: string;
  title: string;
  celebrant: string;
  category: 'XV Años' | 'Bodas';
  liveUrl: string;
  image: string;
  paletteColors: string[];
  tagline: string;
  description: string;
  badge?: string;
  features: string[];
  sectionsTour: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const REAL_SAMPLES: RealSampleItem[] = [
  {
    id: 'sample-mia-xv',
    title: 'Mía · Mis XV Años',
    celebrant: 'Mía',
    category: 'XV Años',
    liveUrl: 'https://mia.liorah.site/',
    image: '/images/sample_mia_invitation_1793322422928.jpg',
    paletteColors: ['#E8B4B8', '#FAF6F0', '#C5A059', '#6B5E54'],
    badge: 'Sitio Activo Oficial',
    tagline: 'Flores en acuarela rosa blush, tipografía en oro cálido y ambientación romántica de ensueño.',
    description: 'Invitación web completa con portada personalizada, cuenta regresiva, confirmación RSVP por WhatsApp, ubicación y reproductor musical.',
    features: ['Confirmación RSVP por WhatsApp', 'Música de Vals de Entrada', 'Cuenta Regresiva en Vivo', 'Mapa GPS'],
    sectionsTour: [
      { title: 'Portada de Gala', description: 'Nombre Mía en caligrafía dorada con detalles florales en acuarela', icon: '✨' },
      { title: 'Cuenta Regresiva', description: 'Reloj en tiempo real que sincroniza con el día del evento', icon: '⏳' },
      { title: 'Ceremonia & Salón', description: 'Dirección con botón directo a Google Maps y Waze', icon: '📍' },
      { title: 'RSVP WhatsApp', description: 'Confirmación instantánea de asistencia para agilizar la lista de invitados', icon: '💌' },
    ],
  },
  {
    id: 'sample-celeste-xv',
    title: 'Celeste · Mis XV Años',
    celebrant: 'Celeste',
    category: 'XV Años',
    liveUrl: 'https://misxv.celeste.liorah.site/',
    image: '/images/sample_celeste_blue_quince_1793112043361.jpg',
    paletteColors: ['#63B3ED', '#BEE3F8', '#2B6CB0', '#E2E8F0'],
    badge: 'Sitio Activo Oficial',
    tagline: 'Celeste real con destellos de nieve y cristal, ambientación de cuento de hadas.',
    description: 'Para una noche mágica: tonalidades azul cielo, brillos plateados y tipografía de princesa moderna con reproductor musical.',
    features: ['Tonos Azul Celeste & Plata', 'Efecto Shimmer Cristal', 'Contador de Pases', 'Música de Entrada'],
    sectionsTour: [
      { title: 'Portada de Cuento', description: 'Fondo azul cielo con destellos de nieve y corona de cristal', icon: '👑' },
      { title: 'Cronograma', description: 'Horarios de recepción, vals, cena y fiesta con DJ', icon: '📅' },
      { title: 'Dress Code', description: 'Guía de vestimenta formal y paleta sugerida', icon: '👗' },
      { title: 'Mesa de Regalos', description: 'Datos bancarios y CBU con botón copiar en 1 clic', icon: '🎁' },
    ],
  },
  {
    id: 'sample-ariel-cecilia-boda',
    title: 'Casamiento Ariel & Cecilia',
    celebrant: 'Ariel & Cecilia',
    category: 'Bodas',
    liveUrl: 'https://arielycecilia.liorah.site/',
    image: '/images/sample_cecilia_ariel_wedding_1793112044080.jpg',
    paletteColors: ['#4A5568', '#D4AF37', '#E2E8F0', '#F7FAFC'],
    badge: 'Sitio Activo Oficial',
    tagline: 'Casamiento emotivo con follaje natural, tipografía romántica y confirmación personalizada.',
    description: 'Invitación completa para casamiento: detalles de ceremonia religiosa y fiesta, dress code formal y mesa de regalos.',
    features: ['Itinerario de Boda', 'Mesa de Regalos & Luna de Miel', 'Ubicación de Parroquia & Salón', 'RSVP por WhatsApp'],
    sectionsTour: [
      { title: 'Presentación Nupcial', description: 'Nombres entrelazados con tipografía clásica romana', icon: '💍' },
      { title: 'Ubicaciones', description: 'Parroquia para la ceremonia y estancia campestre para la fiesta', icon: '💒' },
      { title: 'Luna de Miel', description: 'Mesa de regalos con alias y cuenta para aportes', icon: '✈' },
      { title: 'Confirmar con los Novios', description: 'Recepción directa de confirmaciones por WhatsApp', icon: '🥂' },
    ],
  },
  {
    id: 'sample-xiomara-xv',
    title: 'Xiomara · Mis XV Años',
    celebrant: 'Xiomara',
    category: 'XV Años',
    liveUrl: 'https://xiomara.misxv.liorah.site/',
    image: '/images/sample_xiomara_emerald_quince_1793112043538.jpg',
    paletteColors: ['#1C4532', '#D4AF37', '#0F291E', '#F7FAFC'],
    badge: 'Sitio Activo Oficial',
    tagline: 'Esmeralda imperial con corona en relieve de oro, elegancia nocturna y glamour de gala.',
    description: 'Una de las opciones favoritas para recepciones de noche: fondo verde bosque, detalles de pedrería y mapa del salón.',
    features: ['Corona Imperial en Foil Oro', 'Estilo Noche de Gala', 'Ubicación GPS Waze & Maps', 'RSVP WhatsApp'],
    sectionsTour: [
      { title: 'Corona Imperial', description: 'Escudo dorado sobre fondo verde esmeralda profundo', icon: '👑' },
      { title: 'Noche de Fiesta', description: 'Cuenta regresiva sincronizada con la entrada triunfal', icon: '🎉' },
      { title: 'Cómo Llegar', description: 'Ubicación con botón interactivo de Waze y Maps', icon: '🗺️' },
      { title: 'RSVP Directo', description: 'Confirmación con elección de menú especial', icon: '🍽️' },
    ],
  },
  {
    id: 'sample-dariel',
    title: 'Dariel · Celebración de Gala',
    celebrant: 'Dariel',
    category: 'XV Años',
    liveUrl: 'https://dariel.liorah.site/',
    image: '/images/sample_darel_invitation_1793130335040.jpg',
    paletteColors: ['#0F172A', '#D4AF37', '#1E293B', '#F8FAFC'],
    badge: 'Sitio Activo Oficial',
    tagline: 'Diseño moderno en azul navy profundo con tipografía en oro líquido y detalles de gala.',
    description: 'Invitación web dinámica con reloj regresivo, confirmación por WhatsApp, mapa interactivo y música de fiesta.',
    features: ['Elegancia Navy & Oro Líquido', 'Cuenta Regresiva en Vivo', 'RSVP Instantáneo WhatsApp', 'Ubicación GPS Waze & Maps'],
    sectionsTour: [
      { title: 'Portada de Gala', description: 'Nombre Dariel con tipografía sobria y destellos dorados', icon: '✨' },
      { title: 'Cuenta Regresiva', description: 'Reloj regresivo en tiempo real para el gran día', icon: '⏳' },
      { title: 'Ubicación del Salón', description: 'Mapa con acceso directo a Google Maps y Waze', icon: '📍' },
      { title: 'Confirmación RSVP', description: 'Recepción directa de confirmaciones por WhatsApp', icon: '💌' },
    ],
  },
  {
    id: 'sample-olivia',
    title: 'Olivia · Noche Encantada',
    celebrant: 'Olivia',
    category: 'XV Años',
    liveUrl: 'https://olivia.liorah.site/',
    image: '/images/sample_olivia_invitation_1793130348223.jpg',
    paletteColors: ['#FCE7F3', '#EC4899', '#FAF5FF', '#C5A059'],
    badge: 'Sitio Activo Oficial',
    tagline: 'Acuarelas florales suaves, tonalidades rosa pastel y destellos de ensueño.',
    description: 'Invitación web delicada y femenina con reproductor de música, álbum de fotos, cuenta regresiva y confirmación de asistencia.',
    features: ['Acuarela Rosa Pastel & Flora', 'Itinerario de Fiesta & Vals', 'Música Romántica de Fondo', 'RSVP Digital WhatsApp'],
    sectionsTour: [
      { title: 'Portada Romántica', description: 'Diseño en tonos pastel con flores suaves y tipografía caligráfica', icon: '🌸' },
      { title: 'Itinerario Mágico', description: 'Recepción, vals, cena, brindis y fiesta con DJ', icon: '✨' },
      { title: 'Ubicación GPS', description: 'Dirección del salón con indicaciones para los invitados', icon: '📍' },
      { title: 'RSVP Digital', description: 'Confirmación de asistencia personalizada en 1 toque', icon: '💌' },
    ],
  },
  {
    id: 'sample-alma-xv',
    title: 'Alma · Mis XV Años',
    celebrant: 'Alma',
    category: 'XV Años',
    liveUrl: 'https://almaxv.liorah.site/',
    image: '/images/sample_alma_xv_invitation_1793130391587.jpg',
    paletteColors: ['#831843', '#E11D48', '#FFF1F2', '#D4AF37'],
    badge: 'Sitio Activo Oficial',
    tagline: 'Glamour en magenta vibrante y destellos de oro, estilo alta costura y juventud.',
    description: 'Invitación web para quinceañera con diseño audaz, código de vestimenta, cuenta regresiva y confirmación por WhatsApp.',
    features: ['Estilo Magenta & Oro', 'Dress Code Elegante', 'Pase de Invitados por Familia', 'Mapa Interactivo'],
    sectionsTour: [
      { title: 'Portada Glamour', description: 'Alma XV en tipografía de pasarela con brillo dorado', icon: '💖' },
      { title: 'Cuenta Regresiva', description: 'Reloj en vivo para la noche más esperada', icon: '⏳' },
      { title: 'Dress Code & Guía', description: 'Sugerencias de vestimenta y paleta de la fiesta', icon: '👗' },
      { title: 'RSVP por WhatsApp', description: 'Confirmación ágil y control de lista de invitados', icon: '📲' },
    ],
  },
];

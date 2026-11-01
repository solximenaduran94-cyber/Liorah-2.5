export interface InvitationDesign {
  id: string;
  title: string;
  category: 'Bodas' | 'XV Años' | 'Baby Shower' | 'Bautizo' | 'Cumpleaños' | 'Graduación';
  price: number;
  originalPrice: number;
  image: string;
  badge?: string;
  tagline: string;
  styleDescription: string;
  paletteColors: string[];
  features: string[];
  demoData: {
    eventTitle: string;
    hostsNames: string;
    subtitle: string;
    dateFormatted: string;
    countdownTarget: string; // ISO string
    ceremonyVenue: string;
    ceremonyAddress: string;
    ceremonyTime: string;
    receptionVenue: string;
    receptionAddress: string;
    receptionTime: string;
    dressCode: string;
    dressCodeDetails: string;
    itinerary: { time: string; activity: string; description: string }[];
    giftNote: string;
    clabeNumber: string;
    bankName: string;
    accountHolder: string;
    whatsappNumber: string;
    musicTitle: string;
  };
}

export interface DesignPreferences {
  designId: string;
  designTitle: string;
  eventType: string;
  hostsNames: string;
  eventDate: string;
  eventTime: string;
  ceremonyVenue: string;
  ceremonyAddress: string;
  receptionVenue: string;
  receptionAddress: string;
  mapsUrl: string;
  dressCode: string;
  colorScheme: string;
  typographyStyle: string;
  musicChoice: string;
  specialNotes: string; // Comentarios y especificaciones para la diseñadora
  enabledFeatures: {
    rsvpWhatsApp: boolean;
    googleMaps: boolean;
    countdown: boolean;
    backgroundMusic: boolean;
    giftRegistryClabe: boolean;
    photoGallery: boolean;
    itineraryTimeline: boolean;
    dressCodeGuide: boolean;
  };
  passMode: 'single_link' | 'personalized_names';
}

export interface Review {
  id: string;
  author: string;
  city?: string;
  rating: number;
  eventType: string;
  eventDate: string;
  comment: string;
  verified: boolean;
  createdAt: string;
}

export type LiorahPackageTier = 'express' | 'basic' | 'clasica' | 'interactive' | 'animated_video';

export interface LiorahPackageInfo {
  id: LiorahPackageTier;
  title: string;
  price: number;
  priceUSD: number;
  priceMXN: number;
  badge?: string;
  summary: string;
  deliverable: string;
  features: string[];
}

export function formatPriceEquivalents(arsAmount: number): {
  ars: string;
  usd: string;
  mxn: string;
  combined: string;
} {
  // Conversión aproximada oficial para LIORAH STUDIO:
  const usdAmount = Math.max(1, Math.round(arsAmount / 1200));
  const mxnAmount = Math.round(usdAmount * 19.8);

  return {
    ars: `$${arsAmount.toLocaleString('es-AR')} ARS`,
    usd: `$${usdAmount} USD`,
    mxn: `$${mxnAmount.toLocaleString('es-MX')} MXN`,
    combined: `≈ $${usdAmount} USD · $${mxnAmount.toLocaleString('es-MX')} MXN`,
  };
}

export const LIORAH_PACKAGES: Record<LiorahPackageTier, LiorahPackageInfo> = {
  express: {
    id: 'express',
    title: 'Invitación JPG Digital',
    price: 10000,
    priceUSD: 8,
    priceMXN: 165,
    summary: 'Tarjeta digital en formato JPG de alta resolución para enviar de forma inmediata por WhatsApp y redes.',
    deliverable: 'Archivo JPG HD en alta resolución para WhatsApp',
    features: [
      'Descarga directa en alta resolución JPG',
      'Diseño personalizado con datos de tu evento',
      'Listo para enviar en un clic por WhatsApp',
      'Entrega express en 24 a 48 hs',
    ],
  },
  basic: {
    id: 'basic',
    title: 'Invitación PDF Interactiva',
    price: 25000,
    priceUSD: 20,
    priceMXN: 410,
    summary: 'Documento digital PDF de diseño artesanal con botones clickeables a ubicación GPS y confirmación.',
    deliverable: 'Archivo PDF interactivo con botones de enlace directo',
    features: [
      'Diseño artesanal exclusivo en formato PDF',
      'Botones clickeables (Ubicación GPS y WhatsApp)',
      'Apto para descargar, reenviar o imprimir',
      'Correcciones y ajustes personalizados incluidos',
    ],
  },
  clasica: {
    id: 'clasica',
    title: 'Invitación Web Clásica',
    price: 50000,
    priceUSD: 42,
    priceMXN: 830,
    summary: 'Invitación web esencial y elegante con música, GPS en Google Maps, confirmación RSVP a WhatsApp, cuenta regresiva y mesa de regalos.',
    deliverable: 'Página web móvil propia con funciones esenciales',
    features: [
      'Invitación Web propia adaptada a smartphones',
      'Ubicación GPS directa en Google Maps y Waze',
      'Confirmación de asistencia RSVP por WhatsApp',
      'Música de fondo y cuenta regresiva en vivo',
      'Mesa de regalos con CBU / Alias copiable',
      'Dress Code sugerido y acompañamiento',
    ],
  },
  interactive: {
    id: 'interactive',
    title: 'Invitación Web Premium',
    price: 70000,
    priceUSD: 58,
    priceMXN: 1150,
    badge: 'MÁS ELEGIDA · $70.000 ARS',
    summary: 'Nuestra invitación digital web más elegida y completa: 100% personalizada con todas las funciones interactivas, galería de fotos, itinerario y pases VIP.',
    deliverable: 'Página web móvil interactiva premium con todas las funciones',
    features: [
      'Video de portada para ingresar a la web (Intro animada)',
      'Todas las funciones esenciales incluidas',
      'Galería de fotos de alta resolución',
      'Cronograma e itinerario paso a paso',
      'Álbum de fotos compartido en Google Fotos',
      'Alojamiento y hoteles recomendados',
      '3 rondas de cambios y soporte dedicado',
    ],
  },
  animated_video: {
    id: 'animated_video',
    title: 'Invitación Video Animado',
    price: 34000,
    priceUSD: 28,
    priceMXN: 560,
    badge: 'VIDEO FULL HD',
    summary: 'Video animado MP4 vertical con música, transiciones suaves y tipografías en movimiento para estados e historias.',
    deliverable: 'Video MP4 vertical Full HD con música y efectos',
    features: [
      'Animación cinematográfica delicada',
      'Banda sonora y efectos de brillo suaves',
      'Formato vertical ideal para WhatsApp y Reels',
      'Ajustes de música y textos incluidos',
    ],
  },
};

export interface OrderItem {
  design: InvitationDesign;
  preferences: DesignPreferences;
  packageTier: LiorahPackageTier;
  addons: {
    rushDelivery24h: boolean;
    individualPasses: boolean;
  };
  totalAmount: number;
}

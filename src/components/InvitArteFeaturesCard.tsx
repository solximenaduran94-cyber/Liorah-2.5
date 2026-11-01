import React from 'react';
import {
  Music,
  MapPin,
  Clock,
  Gift,
  CheckCircle,
  Camera,
  Image,
  Calendar,
  Home,
  Mail,
  Moon,
  Sparkles,
} from 'lucide-react';

export const InvitArteFeaturesCard: React.FC = () => {
  const featuresList = [
    {
      title: 'Música\nde fondo',
      icon: (
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        </svg>
      ),
    },
    {
      title: 'Ubicación con\nGoogle Maps',
      icon: (
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <path d="M12 21s-7-4.5-7-11a7 7 0 1 1 14 0c0 6.5-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
    },
    {
      title: 'Dress Code',
      icon: (
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <path d="M12 4a2 2 0 0 0-2 2c0 1 1 2 2 2s2-1 2-2a2 2 0 0 0-2-2zM4 17l8-9 8 9H4z" />
          <path d="M12 8v3M4 17l2 4h12l2-4" />
        </svg>
      ),
    },
    {
      title: 'Cuenta\nregresiva',
      icon: (
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      title: 'Sección\nde regalos',
      icon: (
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <path d="M20 12v9H4v-9M2 7h20v5H2zM12 7v14" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zm0 0h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      ),
    },
    {
      title: 'Confirmación\nde asistencia',
      icon: (
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Álbum en\nGoogle Fotos',
      icon: (
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
    },
    {
      title: 'Galería de fotos\nde los agasajados',
      icon: (
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      ),
    },
    {
      title: 'Itinerario',
      icon: (
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      ),
    },
    {
      title: 'Alojamiento',
      icon: (
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
      ),
    },
    {
      title: 'Valor de la\ntarjeta',
      icon: (
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      ),
    },
    {
      title: 'Evento\nsin niños',
      icon: (
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M4.93 4.93l14.14 14.14" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section id="que-podes-sumar" className="py-16 md:py-24 bg-[#FFFDF9]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Ivory Card with double subtle border (InvitArte Page 2 style) */}
        <div className="bg-[#FAF6F0] rounded-3xl p-8 sm:p-12 border border-[#E5D7C5] shadow-xs relative">
          {/* Inner perimeter line */}
          <div className="absolute inset-2 sm:inset-3 border border-[#E5D7C5]/60 rounded-[20px] pointer-events-none" />

          {/* Section Heading */}
          <div className="text-center mb-8 relative z-10">
            <h2 className="font-prestige text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] tracking-wider uppercase leading-tight">
              ¿QUÉ PODÉS SUMAR
            </h2>
            <p className="font-romantic italic text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] -mt-1 font-normal">
              A TU INVITACIÓN?
            </p>
          </div>

          {/* Video de Portada Highlight Badge for Premium */}
          <div className="mb-8 relative z-10 max-w-lg mx-auto bg-[#FFFDF9] rounded-2xl p-3.5 border border-[#C5A059] shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-xs">
              <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                <polygon points="23 7 16 12 23 17 23 7" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </div>
            <div className="text-left font-ui">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block">
                ★ Exclusivo Invitaciones Premium
              </span>
              <p className="text-xs text-[#1A1A1A] font-semibold leading-tight mt-0.5">
                Video de portada animado para ingresar a la web
              </p>
              <p className="text-[11px] text-[#6B5E54] mt-0.5">
                Tus invitados disfrutan de una bienvenida cinematográfica y tocan "DALE PLAY" para abrir la web.
              </p>
            </div>
          </div>

          {/* 2-Column Grid matching Page 2 */}
          <div className="grid grid-cols-2 gap-y-7 gap-x-6 sm:gap-x-10 relative z-10 max-w-lg mx-auto">
            {featuresList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5">
                {/* Circular Line Icon */}
                <div className="w-11 h-11 rounded-full border border-[#C5A059] bg-[#FFFDF9] flex items-center justify-center text-[#1A1A1A] shrink-0 shadow-xs">
                  {item.icon}
                </div>
                {/* Feature Label */}
                <span className="font-ui text-xs sm:text-sm text-[#1A1A1A] leading-snug whitespace-pre-line font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Divider Note (InvitArte exact line) */}
          <div className="mt-12 pt-4 text-center relative z-10">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 sm:w-16 bg-[#C5A059]" />
              <p className="font-ui text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#6B5E54] font-medium">
                Y PODÉS SUMAR MÁS SECCIONES QUE SEAN NECESARIAS
              </p>
              <span className="h-[1px] w-8 sm:w-16 bg-[#C5A059]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

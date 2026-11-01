import React from 'react';
import { Heart } from 'lucide-react';

export const HowItWorksThreeSteps: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-[#FFFDF9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-prestige text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] tracking-wider uppercase font-medium">
            ¿CÓMO FUNCIONA?
          </h2>
          <div className="gold-divider my-2">
            <span className="text-xs text-[#C5A059]">♥</span>
          </div>
          <p className="font-ui text-xs sm:text-sm text-[#6B5E54]">
            Así de simple: en 3 pasos tenés tu invitación lista para compartir.
          </p>
        </div>

        {/* 3 Circular Steps Grid (InvitArte exact layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Step 01 */}
          <div className="flex flex-col items-center text-center group">
            {/* Circle with number 01 badge & line art */}
            <div className="relative mb-5">
              <div className="w-24 h-24 rounded-full bg-[#FAF6F0] border border-[#E5D7C5] flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-105 shadow-xs">
                {/* Hand pointing to invitation card icon */}
                <svg
                  className="w-12 h-12 text-[#1A1A1A] stroke-current"
                  viewBox="0 0 48 48"
                  fill="none"
                  strokeWidth="1.25"
                >
                  <rect x="8" y="10" width="26" height="30" rx="3" />
                  <path d="M14 18h14M14 24h10" strokeLinecap="round" />
                  {/* Pointing finger hand */}
                  <path d="M26 30l6-6a2 2 0 0 1 3 3l-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="36" cy="20" r="1.5" fill="currentColor" />
                </svg>
              </div>

              {/* Number Badge */}
              <span className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-[#8A9A86] text-white font-ui text-xs font-bold flex items-center justify-center shadow-xs">
                01
              </span>
            </div>

            <h3 className="font-ui text-xs font-bold uppercase tracking-[0.16em] text-[#1A1A1A] mb-1">
              ELEGÍS TU MODELO FAVORITO
            </h3>
            <div className="w-4 h-[1px] bg-[#C5A059] mb-2" />
            <p className="font-ui text-xs text-[#6B5E54] max-w-[220px] leading-relaxed">
              Explorá nuestro catálogo y seleccioná el diseño que más te guste.
            </p>
          </div>

          {/* Step 02 */}
          <div className="flex flex-col items-center text-center group">
            {/* Circle with number 02 badge & line art */}
            <div className="relative mb-5">
              <div className="w-24 h-24 rounded-full bg-[#FAF6F0] border border-[#E5D7C5] flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-105 shadow-xs">
                {/* Form / Notepad checklist icon */}
                <svg
                  className="w-12 h-12 text-[#1A1A1A] stroke-current"
                  viewBox="0 0 48 48"
                  fill="none"
                  strokeWidth="1.25"
                >
                  <rect x="12" y="8" width="24" height="32" rx="3" />
                  <path d="M18 6v4M30 6v4" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="1.5" />
                  <path d="M23 18h9" strokeLinecap="round" />
                  <circle cx="18" cy="24" r="1.5" />
                  <path d="M23 24h9" strokeLinecap="round" />
                  <circle cx="18" cy="30" r="1.5" />
                  <path d="M23 30h9" strokeLinecap="round" />
                </svg>
              </div>

              {/* Number Badge */}
              <span className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-[#8A9A86] text-white font-ui text-xs font-bold flex items-center justify-center shadow-xs">
                02
              </span>
            </div>

            <h3 className="font-ui text-xs font-bold uppercase tracking-[0.16em] text-[#1A1A1A] mb-1">
              COMPLETÁS CON TUS DATOS
            </h3>
            <div className="w-4 h-[1px] bg-[#C5A059] mb-2" />
            <p className="font-ui text-xs text-[#6B5E54] max-w-[220px] leading-relaxed">
              Completás un formulario con la info de tu evento, colores y detalles que quieras incluir.
            </p>
          </div>

          {/* Step 03 */}
          <div className="flex flex-col items-center text-center group">
            {/* Circle with number 03 badge & line art */}
            <div className="relative mb-5">
              <div className="w-24 h-24 rounded-full bg-[#FAF6F0] border border-[#E5D7C5] flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-105 shadow-xs">
                {/* Pen and sparkles creative design icon */}
                <svg
                  className="w-12 h-12 text-[#1A1A1A] stroke-current"
                  viewBox="0 0 48 48"
                  fill="none"
                  strokeWidth="1.25"
                >
                  <circle cx="24" cy="24" r="12" strokeDasharray="3 3" />
                  <path d="M16 32l14-14 4 4-14 14-6 2 2-6z" strokeLinejoin="round" />
                  <path d="M26 14l4 4" strokeLinecap="round" />
                  <circle cx="14" cy="16" r="1" fill="currentColor" />
                  <circle cx="34" cy="32" r="1" fill="currentColor" />
                </svg>
              </div>

              {/* Number Badge */}
              <span className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-[#8A9A86] text-white font-ui text-xs font-bold flex items-center justify-center shadow-xs">
                03
              </span>
            </div>

            <h3 className="font-ui text-xs font-bold uppercase tracking-[0.16em] text-[#1A1A1A] mb-1">
              NOS ENCARGAMOS DEL RESTO
            </h3>
            <div className="w-4 h-[1px] bg-[#C5A059] mb-2" />
            <p className="font-ui text-xs text-[#6B5E54] max-w-[220px] leading-relaxed">
              Nos ocupamos de todo, ajustamos cada detalle y en 24 a 48 hs la recibís lista para compartir.
            </p>
          </div>
        </div>

        {/* Reassurance Banner at bottom matching Page 3 */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF6F0] px-6 py-2.5 border border-[#E5D7C5] text-xs font-ui text-[#1A1A1A] shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
            <span className="font-medium">
              Rápido, fácil y 100% personalizado para que tu evento sea único.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

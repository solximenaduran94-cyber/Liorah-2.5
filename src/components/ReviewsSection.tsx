import React from 'react';
import { Heart, Instagram } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        '“Quedó hermosa, tal cual la imaginábamos. Todos nos dijeron lo linda y práctica que estaba. ¡Gracias por tanta onda y dedicación!”',
      names: 'JULIETA Y MARIANO',
      event: 'Nuestra Boda',
    },
    {
      quote:
        '“Gracias por la paciencia, el amor en cada detalle y la velocidad. La invitación quedó 100% soñada, a la altura de una noche única.”',
      names: 'ROCÍO & SEBASTIÁN',
      event: 'Casamiento',
    },
    {
      quote:
        '“Los invitados quedaron fascinados con el mapa interactivo y la música de fondo al abrirla. Una genialidad total, gracias Jimena!”',
      names: 'FAMILIA MARTÍNEZ',
      event: 'Mis XV Años · Valentina',
    },
  ];

  return (
    <section id="clientes-felices" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#E5D7C5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title matching Page 6 */}
        <div className="text-center mb-14">
          <h2 className="font-romantic text-3xl sm:text-4xl text-[#1A1A1A] font-normal tracking-wide">
            Clientes Felices
          </h2>
          <div className="w-10 h-[1px] bg-[#C5A059] mx-auto mt-2.5" />
        </div>

        {/* Testimonials in delicate warm editorial typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between text-center bg-[#FAF6F0] p-6 sm:p-8 rounded-3xl border border-[#E5D7C5]/70 shadow-xs"
            >
              <p className="font-romantic italic text-base sm:text-lg text-[#1A1A1A] leading-relaxed mb-6">
                {item.quote}
              </p>

              <div>
                <div className="w-6 h-[1px] bg-[#C5A059] mx-auto mb-2" />
                <h4 className="font-prestige text-xs uppercase tracking-widest font-bold text-[#1A1A1A]">
                  {item.names}
                </h4>
                <p className="font-ui text-[10px] uppercase tracking-wider text-[#A39589] mt-0.5">
                  {item.event}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Channels Strip */}
        <div className="mt-14 pt-8 border-t border-[#E5D7C5]/60 text-center">
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-[#A39589] font-semibold mb-4">
            Encontranos en redes y mirá nuestros reels en acción
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 font-ui text-xs">
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@liorah.ok"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF6F0] hover:bg-[#F5EFE6] border border-[#E5D7C5] text-[#1A1A1A] font-medium transition-all hover:border-[#C5A059] shadow-xs"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.76a8.28 8.28 0 0 0 4.77 1.48v-3.5a4.85 4.85 0 0 1-1-.05z"/>
              </svg>
              <span>TikTok: <strong>@liorah.ok</strong></span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/liorah.ok"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF6F0] hover:bg-[#F5EFE6] border border-[#E5D7C5] text-[#1A1A1A] font-medium transition-all hover:border-[#C5A059] shadow-xs"
            >
              <Instagram className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Instagram: <strong>@liorah.ok</strong></span>
            </a>

            {/* Instagram Anterior */}
            <a
              href="https://www.instagram.com/liorah.ok2"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFFDF9] hover:bg-[#FAF6F0] border border-[#E5D7C5] text-[#6B5E54] font-medium transition-all hover:border-[#C5A059] text-[11px]"
            >
              <Instagram className="w-3.5 h-3.5 text-[#A39589] shrink-0" />
              <span>Instagram anterior: <strong>@liorah.ok2</strong></span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1D4RH2VURD/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF6F0] hover:bg-[#F5EFE6] border border-[#E5D7C5] text-[#1A1A1A] font-medium transition-all hover:border-[#C5A059] shadow-xs"
            >
              <svg className="w-4 h-4 fill-current text-blue-600 shrink-0" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5491178974625?text=Hola%20LIORAH%20STUDIO!%20Quisiera%20consultar%20por%20una%20invitación%20personalizada"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 font-semibold transition-all shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>WhatsApp: <strong>+54 9 11 7897-4625</strong></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

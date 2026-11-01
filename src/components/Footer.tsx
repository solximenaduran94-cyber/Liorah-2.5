import React from 'react';
import { Instagram, MessageCircle, ChevronDown } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFDF9] text-[#1A1A1A] pt-12 pb-16 border-t border-[#E5D7C5] font-ui">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pb-12 border-b border-[#E5D7C5]">
          {/* Column 1: Categorías & Navegación */}
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E5D7C5]/60 sm:border-none sm:pb-0">
              <h3 className="font-prestige text-xs uppercase tracking-[0.2em] font-bold text-[#1A1A1A]">
                CATEGORÍAS
              </h3>
              <ChevronDown className="w-4 h-4 text-[#A39589] sm:hidden" />
            </div>

            <ul className="space-y-2 text-xs text-[#6B5E54]">
              <li>
                <a href="/" className="hover:text-[#C5A059] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#mas-elegidos" className="hover:text-[#C5A059] transition-colors">
                  Productos & Invitaciones Web
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#C5A059] transition-colors">
                  Cómo trabajamos
                </a>
              </li>
              <li>
                <a href="#tabla-comparativa" className="hover:text-[#C5A059] transition-colors">
                  Propuestas & Precios
                </a>
              </li>
              <li>
                <a href="#clientes-felices" className="hover:text-[#C5A059] transition-colors">
                  Opiniones de clientes
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-[#C5A059] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Redes Sociales */}
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E5D7C5]/60 sm:border-none sm:pb-0">
              <h3 className="font-prestige text-xs uppercase tracking-[0.2em] font-bold text-[#1A1A1A]">
                REDES SOCIALES
              </h3>
              <ChevronDown className="w-4 h-4 text-[#A39589] sm:hidden" />
            </div>

            <ul className="space-y-2.5 text-xs text-[#6B5E54]">
              <li>
                <a
                  href="https://www.tiktok.com/@liorah.ok"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  {/* TikTok Icon */}
                  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.76a8.28 8.28 0 0 0 4.77 1.48v-3.5a4.85 4.85 0 0 1-1-.05z"/>
                  </svg>
                  <span>TikTok: <strong>@liorah.ok</strong></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/liorah.ok"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Instagram: <strong>@liorah.ok</strong></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/liorah.ok2"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#A39589] shrink-0" />
                  <span>Instagram anterior: <strong>@liorah.ok2</strong></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1D4RH2VURD/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  {/* Facebook Icon */}
                  <svg className="w-3.5 h-3.5 fill-current text-blue-600 shrink-0" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook Oficial</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacto Directo */}
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E5D7C5]/60 sm:border-none sm:pb-0">
              <h3 className="font-prestige text-xs uppercase tracking-[0.2em] font-bold text-[#1A1A1A]">
                CONTACTO DIRECTO
              </h3>
              <ChevronDown className="w-4 h-4 text-[#A39589] sm:hidden" />
            </div>

            <ul className="space-y-2 text-xs text-[#6B5E54]">
              <li>
                <a
                  href="https://wa.me/5491178974625?text=Hola%20LIORAH%20STUDIO!%20Quisiera%20consultar%20por%20una%20invitación%20personalizada"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 font-medium text-[#1A1A1A]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>+54 9 11 7897-4625</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@liorah.site"
                  className="hover:text-[#C5A059] transition-colors block"
                >
                  contacto@liorah.site
                </a>
              </li>
              <li>
                <a
                  href="mailto:jimenagloop.ad@gmail.com"
                  className="hover:text-[#C5A059] transition-colors block text-[11px]"
                >
                  jimenagloop.ad@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <span className="text-[11px] text-[#A39589] block">
                  Atención personalizada de lunes a sábados
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Consumer Rights matching Page 6 */}
        <div className="pt-8 text-center text-[11px] text-[#A39589] space-y-2">
          <p>
            Copyright Liorah Studio - 27317569543 - 2026. Todos los derechos reservados.
          </p>
          <p>
            Defensa de las y los consumidores.{' '}
            <a
              href="https://autogestion.produccion.gob.ar/consumidores"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#1A1A1A]"
            >
              Para reclamos ingresá acá.
            </a>
          </p>
          <p>
            <button
              type="button"
              onClick={() => alert('Para ejercer tu derecho de arrepentimiento, escribinos por WhatsApp o a contacto@liorah.site con tu número de pedido.')}
              className="underline text-[#6B5E54] hover:text-[#1A1A1A] cursor-pointer"
            >
              Botón de arrepentimiento
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

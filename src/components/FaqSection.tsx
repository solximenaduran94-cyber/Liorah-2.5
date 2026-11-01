import React, { useState } from 'react';
import { ChevronDown, Heart } from 'lucide-react';

const FAQS = [
  {
    q: '¿Cuáles son los precios de los diferentes formatos (JPG, PDF, Video y Web)?',
    a: 'En LIORAH STUDIO contamos con modalidades transparentes y accesibles: \n• Formato JPG Digital: $10.000 ARS (≈ $8 USD · $165 MXN) — imagen HD lista para compartir en WhatsApp.\n• Formato PDF Interactivo: $25.000 ARS (≈ $20 USD · $410 MXN) — documento digital artesanal con botones clickeables a ubicación y confirmación.\n• Video Animado MP4: $34.000 ARS (≈ $28 USD · $560 MXN) — video vertical Full HD con música de fondo y efectos animados para historias y WhatsApp.\n• Invitación Web Clásica: $50.000 ARS (≈ $42 USD · $830 MXN) — página web móvil con música, mapa GPS, confirmación RSVP y cuenta regresiva.\n• Invitación Web Premium: $70.000 ARS (≈ $58 USD · $1.150 MXN) — experiencia interactiva completa con galería de fotos, itinerario y pases VIP.',
  },
  {
    q: '¿Qué diferencia hay entre la Invitación Web Clásica ($50.000) y Premium ($70.000)?',
    a: 'La propuesta Clásica ($50.000 ARS) incluye lo esencial para tu evento: música de fondo, GPS con Google Maps/Waze, confirmación RSVP por WhatsApp, cuenta regresiva, dress code y mesa de regalos con CBU copiable. La propuesta Premium ($70.000 ARS, nuestra opción más elegida) suma galería de fotos de alta resolución, cronograma e itinerario paso a paso, álbum en Google Fotos, hospedajes recomendados, sugerencias de canciones y pases VIP personalizados.',
  },
  {
    q: '¿Los invitados necesitan instalar alguna aplicación para ver la invitación interactiva?',
    a: 'En absoluto. Tu invitación se abre inmediatamente en cualquier smartphone (iPhone o Android) al pulsar el enlace que les compartas por WhatsApp, sin descargar ninguna app ni registrarse.',
  },
  {
    q: '¿Cómo funciona la confirmación de asistencia (RSVP) por WhatsApp?',
    a: 'Tu invitado toca el botón "Confirmar Asistencia", indica su nombre y cuántos pases utilizará. Al enviar, se abre automáticamente WhatsApp con un mensaje pre-redactado directo a tu número para que lleves el control de tu lista con total comodidad.',
  },
  {
    q: '¿Puedo pedir ajustes si deseo cambiar algún horario o detalle?',
    a: '¡Por supuesto! En LIORAH STUDIO cuidamos cada detalle con amor. Todas nuestras propuestas personalizadas incluyen rondas de ajustes en textos, fotos, horarios y canciones para que quedes 100% satisfecha.',
  },
  {
    q: '¿Cuánto tiempo tarda la entrega?',
    a: 'El tiempo promedio es de 24 a 48 horas. Si tenés una urgencia especial, podés solicitar entrega prioritaria express para recibir tu borrador en menos de 24 horas.',
  },
  {
    q: '¿Qué medios de pago aceptan para Argentina, México y el exterior?',
    a: 'Para Argentina aceptamos transferencias bancarias por Alias (liorah.ok) o CBU a Mercado Pago. Para Estados Unidos contamos con cuenta bancaria directa en SSB Bank (ACH/Wire/SWIFT), para Europa transferencia SEPA en AS LHV Pank (IBAN) y para Reino Unido cuenta bancaria en LHV Bank Limited (GBP). Para México (MXN), Chile (CLP) y clientes internacionales con tarjetas, los pagos se procesan de forma inmediata y 100% segura mediante nuestra pasarela oficial de AstroPay OneTouch.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="preguntas" className="py-20 md:py-28 bg-[#FAF6F0]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="gold-divider mb-3">
            <span className="text-xs text-[#C5A059]">♥</span>
          </div>
          <p className="font-ui text-xs uppercase tracking-[0.2em] font-medium text-[#C5A059] mb-2">
            Preguntas Frecuentes
          </p>
          <h2 className="font-prestige text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-wide">
            Dudas & Consultas
          </h2>
          <p className="font-romantic italic text-base sm:text-lg text-[#6B5E54] mt-2">
            Todo lo que necesitás saber para celebrar tu momento único
          </p>
        </div>

        <div className="space-y-3.5 font-ui">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#FFFDF9] border border-[#E5D7C5] overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left text-sm font-semibold text-[#1A1A1A] hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  <span className="pr-4 font-prestige">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#C5A059] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#6B5E54] leading-relaxed border-t border-[#E5D7C5]/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

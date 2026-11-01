import React from 'react';
import { Check, Sparkles, Plus, ArrowRight, Globe } from 'lucide-react';
import { LiorahPackageTier } from '../types';
import { SupportedCurrency, CURRENCIES, formatPrice } from '../utils/currency';

interface ComparisonPricingTableProps {
  onSelectTier: (tier: LiorahPackageTier) => void;
  currency?: SupportedCurrency;
  onOpenCurrencyModal?: () => void;
}

export const ComparisonPricingTable: React.FC<ComparisonPricingTableProps> = ({
  onSelectTier,
  currency = 'ARS',
  onOpenCurrencyModal,
}) => {
  const currencyInfo = CURRENCIES[currency] || CURRENCIES.ARS;
  const comparisonRows = [
    { feature: 'Video de portada para ingresar a la web (Intro animada)', clasica: false, premium: true },
    { feature: 'Música de fondo', clasica: true, premium: true },
    { feature: 'Ubicación con Google Maps', clasica: true, premium: true },
    { feature: 'Dress Code', clasica: true, premium: true },
    { feature: 'Sección de regalos (CBU / Alias)', clasica: true, premium: true },
    { feature: 'Confirmación de asistencia (WhatsApp o Form)', clasica: true, premium: true },
    { feature: 'Cuenta regresiva en vivo', clasica: true, premium: true },
    { feature: 'Galería de fotos del evento', clasica: false, premium: true },
    { feature: 'Álbum en Google Fotos', clasica: false, premium: true },
    { feature: 'Cronograma del evento', clasica: false, premium: true },
    { feature: 'Itinerario paso a paso', clasica: false, premium: true },
    { feature: 'Alojamiento & hoteles recomendados', clasica: false, premium: true },
    { feature: 'Valor de la tarjeta', clasica: false, premium: true },
    { feature: 'Evento sin niños (indicación delicada)', clasica: false, premium: true },
    { feature: 'Sugerencias de canciones por invitados', clasica: false, premium: true },
    { feature: 'Acompañamiento personalizado', clasica: true, premium: true },
    { feature: '3 rondas de cambios sin costo', clasica: true, premium: true },
  ];

  return (
    <section id="tabla-comparativa" className="py-16 md:py-24 bg-[#FAF6F0] border-t border-b border-[#E5D7C5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-romantic text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] font-normal leading-snug">
            Elegí la opción que más se adapta a tu evento
          </h2>
          <p className="font-ui text-xs sm:text-sm text-[#6B5E54] mt-2">
            Dos propuestas para que tengas una invitación única, con todo lo que necesitas.
          </p>
        </div>

        {/* Pricing Comparison Table Card (InvitArte Page 3 layout) */}
        <div className="bg-[#FFFDF9] rounded-3xl border border-[#E5D7C5] p-5 sm:p-8 shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-12 pb-4 border-b border-[#E5D7C5] items-end text-center sm:text-left">
            <div className="col-span-6 sm:col-span-6">
              <span className="font-prestige text-xs uppercase tracking-widest text-[#A39589] font-bold">
                Funcionalidad
              </span>
            </div>

            {/* Clásica Column */}
            <div className="col-span-3 sm:col-span-3 text-center">
              <h3 className="font-romantic text-lg sm:text-xl text-[#1A1A1A] font-medium">
                Clásica
              </h3>
              <p className="font-ui text-[9px] uppercase tracking-wider text-[#A39589] font-semibold mt-0.5">
                ESENCIAL Y ELEGANTE
              </p>
            </div>

            {/* Premium Column (Highlighted) */}
            <div className="col-span-3 sm:col-span-3 text-center relative">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                <span className="inline-block bg-[#1A1A1A] text-[#D4AF37] text-[8px] sm:text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40 shadow-xs whitespace-nowrap">
                  MÁS ELEGIDA
                </span>
              </div>
              <h3 className="font-romantic text-lg sm:text-xl text-[#1A1A1A] font-bold">
                Premium
              </h3>
              <p className="font-ui text-[9px] uppercase tracking-wider text-[#C5A059] font-bold mt-0.5">
                TODOS LOS DETALLES
              </p>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#E5D7C5]/50 font-ui text-xs text-[#1A1A1A]">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 py-3 items-center hover:bg-[#FAF6F0]/60 transition-colors px-1 rounded-lg"
              >
                <div className="col-span-6 sm:col-span-6 flex items-center gap-2 pr-2">
                  <span className="font-medium text-[11px] sm:text-xs text-[#1A1A1A]">
                    {row.feature}
                  </span>
                </div>

                {/* Clásica Check / Dash */}
                <div className="col-span-3 sm:col-span-3 flex justify-center">
                  {row.clasica ? (
                    <div className="w-5 h-5 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  ) : (
                    <span className="text-[#A39589] font-bold text-base">—</span>
                  )}
                </div>

                {/* Premium Check / Dash */}
                <div className="col-span-3 sm:col-span-3 flex justify-center bg-[#FAF6F0]/40 py-1 rounded-md">
                  {row.premium ? (
                    <div className="w-5 h-5 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#D4AF37]">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  ) : (
                    <span className="text-[#A39589] font-bold text-base">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Prices */}
          {/* Table Footer Prices */}
          <div className="grid grid-cols-12 pt-6 pb-2 border-t border-[#E5D7C5] items-center text-center">
            <div className="col-span-6 sm:col-span-6 text-left">
              <span className="font-prestige text-xs uppercase tracking-widest text-[#1A1A1A] font-bold block">
                Valor del Servicio
              </span>
              <span className="font-ui text-[11px] text-[#6B5E54]">
                Tarifa única para invitados ilimitados ({currencyInfo.code})
              </span>
              {onOpenCurrencyModal && (
                <button
                  type="button"
                  onClick={onOpenCurrencyModal}
                  className="mt-1 text-[10px] text-[#C5A059] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>{currencyInfo.flag} Moneda: {currency}</span>
                  <span className="text-[9px]">· Cambiar</span>
                </button>
              )}
            </div>

            {/* Clásica Price & Button */}
            <div className="col-span-3 sm:col-span-3 text-center px-1">
              <p className="font-prestige text-base sm:text-xl font-bold text-[#1A1A1A]">
                {formatPrice(50000, currency)}
              </p>
              <button
                type="button"
                onClick={() => onSelectTier('clasica')}
                className="mt-2 w-full py-2 px-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] border border-[#1A1A1A] rounded-xl hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer"
              >
                Elegir Clásica
              </button>
            </div>

            {/* Premium Price & Button */}
            <div className="col-span-3 sm:col-span-3 text-center px-1">
              <p className="font-prestige text-base sm:text-xl font-bold text-[#1A1A1A]">
                {formatPrice(70000, currency)}
              </p>
              <button
                type="button"
                onClick={() => onSelectTier('interactive')}
                className="mt-2 w-full py-2 px-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#FAF6F0] bg-[#1A1A1A] rounded-xl hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-colors cursor-pointer shadow-xs"
              >
                Elegir Premium
              </button>
            </div>
          </div>

          {/* Plus banner from InvitArte */}
          <div className="mt-6 pt-4 text-center border-t border-[#E5D7C5]/60">
            <div className="inline-flex items-center gap-2 bg-[#FAF6F0] px-4 py-2 rounded-full border border-[#E5D7C5] text-xs font-ui text-[#1A1A1A]">
              <span className="w-4 h-4 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-[10px] font-bold">
                +
              </span>
              <span className="uppercase tracking-wider font-semibold text-[10px] sm:text-xs">
                Y PODÉS SUMAR MÁS SECCIONES QUE SEAN NECESARIAS
              </span>
            </div>
          </div>
        </div>

        {/* Format Selector Note with dynamic currency */}
        <div className="mt-6 p-4 rounded-2xl bg-[#FFFDF9] border border-[#E5D7C5] flex flex-wrap items-center justify-between gap-3 font-ui text-xs">
          <div>
            <span className="font-semibold text-[#1A1A1A] block">
              ¿Buscás otros formatos para tu evento?
            </span>
            <p className="text-[11px] text-[#6B5E54]">
              También diseñamos tarjetas digitales y videos cinematográficos personalizados:
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <button
              type="button"
              onClick={() => onSelectTier('express')}
              className="px-2.5 py-1 rounded-lg bg-[#FAF6F0] border border-[#E5D7C5] hover:border-[#C5A059] font-medium text-[#1A1A1A] cursor-pointer"
            >
              JPG: <strong>{formatPrice(10000, currency)}</strong>
            </button>
            <button
              type="button"
              onClick={() => onSelectTier('basic')}
              className="px-2.5 py-1 rounded-lg bg-[#FAF6F0] border border-[#E5D7C5] hover:border-[#C5A059] font-medium text-[#1A1A1A] cursor-pointer"
            >
              PDF: <strong>{formatPrice(25000, currency)}</strong>
            </button>
            <button
              type="button"
              onClick={() => onSelectTier('animated_video')}
              className="px-2.5 py-1 rounded-lg bg-[#FAF6F0] border border-[#E5D7C5] hover:border-[#C5A059] font-medium text-[#1A1A1A] cursor-pointer"
            >
              Video: <strong>{formatPrice(34000, currency)}</strong>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

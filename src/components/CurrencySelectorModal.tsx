import React from 'react';
import { X, Check, Globe, CreditCard, ShieldCheck } from 'lucide-react';
import { SupportedCurrency, CURRENCIES, formatPrice } from '../utils/currency';

interface CurrencySelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: SupportedCurrency;
  onSelectCurrency: (currency: SupportedCurrency) => void;
}

export const CurrencySelectorModal: React.FC<CurrencySelectorModalProps> = ({
  isOpen,
  onClose,
  currentCurrency,
  onSelectCurrency,
}) => {
  if (!isOpen) return null;

  const currencyList = Object.values(CURRENCIES);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-ui">
      <div className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl border border-[#E5D7C5] shadow-2xl p-6 sm:p-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6B5E54] hover:text-[#1A1A1A] rounded-full hover:bg-stone-100 cursor-pointer transition-colors"
          aria-label="Cerrar selector de moneda"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#E5D7C5] mx-auto flex items-center justify-center text-[#C5A059] mb-3 shadow-xs">
            <Globe className="w-6 h-6 stroke-[1.5]" />
          </div>
          <span className="font-prestige text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-1">
            Moneda & Métodos de Pago
          </span>
          <h3 className="font-romantic text-2xl sm:text-3xl text-[#1A1A1A] font-normal">
            Elegí tu Moneda de Cobro
          </h3>
          <p className="font-romantic italic text-xs sm:text-sm text-[#6B5E54] mt-1">
            Los precios y pasarelas de pago se adaptarán automáticamente a tu país
          </p>
        </div>

        {/* Currency Options List */}
        <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
          {currencyList.map((curr) => {
            const isSelected = curr.code === currentCurrency;
            const samplePremiumPrice = formatPrice(70000, curr.code);
            const sampleClasicaPrice = formatPrice(50000, curr.code);

            return (
              <button
                key={curr.code}
                type="button"
                onClick={() => {
                  onSelectCurrency(curr.code);
                  onClose();
                }}
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-[#FAF6F0] border-[#C5A059] shadow-xs ring-1 ring-[#C5A059]'
                    : 'bg-[#FFFDF9] border-[#E5D7C5]/80 hover:border-[#C5A059] hover:bg-[#FAF6F0]/60'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="text-2xl sm:text-3xl select-none shrink-0" role="img" aria-label={curr.country}>
                    {curr.flag}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-prestige text-sm font-bold text-[#1A1A1A]">
                        {curr.code}
                      </span>
                      <span className="text-xs text-[#A39589] font-medium truncate">
                        · {curr.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6B5E54] mt-0.5 truncate">
                      {curr.paymentDetails.method}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0 flex items-center gap-3">
                  <div>
                    <span className="font-prestige text-sm font-bold text-[#1A1A1A] block">
                      {samplePremiumPrice}
                    </span>
                    <span className="text-[10px] text-[#A39589] block">
                      Clásica: {sampleClasicaPrice}
                    </span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    isSelected ? 'bg-[#C5A059] border-[#C5A059] text-white' : 'border-[#CBD5E1]'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer Guarantee & AstroPay note */}
        <div className="mt-5 pt-3.5 border-t border-[#E5D7C5] space-y-2 text-center text-[11px] text-[#6B5E54]">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Cobros 100% seguros con comprobante directo y confirmación en tiempo real.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF6F0] border border-[#E5D7C5] flex flex-col sm:flex-row items-center justify-between gap-2 text-left">
            <div>
              <span className="font-semibold text-[#1A1A1A] block text-[11px]">¿Tu banco no figura aquí?</span>
              <span className="text-[10px] text-[#6B5E54]">Aceptamos transferencias y tarjetas de todo el mundo vía AstroPay.</span>
            </div>
            <a
              href="https://onetouch.astropay.com/payment?external_reference_id=vzAiAKLGHKHPj1bgRAXJEWIERL6oiUDN"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1A1A1A] text-[#FAF6F0] text-[10px] font-semibold hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-colors shrink-0"
            >
              <span>Pagar con AstroPay ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

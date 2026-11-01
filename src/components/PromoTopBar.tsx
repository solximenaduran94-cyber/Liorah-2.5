import React from 'react';
import { Sparkles, Globe } from 'lucide-react';
import { SupportedCurrency, CURRENCIES } from '../utils/currency';

interface PromoTopBarProps {
  onOpenPromoInfo: () => void;
  currentCurrency?: SupportedCurrency;
  onOpenCurrencyModal?: () => void;
}

export const PromoTopBar: React.FC<PromoTopBarProps> = ({
  onOpenPromoInfo,
  currentCurrency = 'ARS',
  onOpenCurrencyModal,
}) => {
  const currencyInfo = CURRENCIES[currentCurrency] || CURRENCIES.ARS;

  return (
    <div className="bg-[#FFFDF9] border-b border-[#E5D7C5] text-[#1A1A1A] py-1.5 sm:py-2 px-3 text-center text-[11px] sm:text-xs font-ui tracking-wide shadow-xs relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 flex-wrap justify-center flex-1">
          <span className="text-amber-500">✨</span>
          <span className="font-semibold tracking-wider uppercase text-[10px] sm:text-[11px] bg-[#FAF6F0] px-2 py-0.5 rounded-full border border-[#E5D7C5]">
            CYBER PROMO
          </span>
          <span className="text-[#6B5E54] hidden sm:inline">|</span>
          <span className="font-medium text-[#1A1A1A]">
            <strong>10% OFF</strong> con transferencia + cartel de bienvenida digital de regalo | Del 2 al 4/11.
          </span>
          <button
            type="button"
            onClick={onOpenPromoInfo}
            className="font-bold underline text-[#C5A059] hover:text-[#1A1A1A] transition-colors cursor-pointer inline-flex items-center gap-1 ml-1"
          >
            <span>¡Hacé click ACÁ para más info!</span>
            <span>💌</span>
          </button>
        </div>

        {/* Currency Quick Switcher Button */}
        {onOpenCurrencyModal && (
          <button
            type="button"
            onClick={onOpenCurrencyModal}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF6F0] border border-[#E5D7C5] hover:border-[#C5A059] text-[11px] font-semibold text-[#1A1A1A] transition-colors cursor-pointer shrink-0"
            title="Cambiar moneda de cobro"
            aria-label={`Moneda actual: ${currencyInfo.name}. Hacé clic para cambiar`}
          >
            <span className="text-xs select-none">{currencyInfo.flag}</span>
            <span className="font-prestige font-bold text-[10px] sm:text-[11px] text-[#1A1A1A]">{currentCurrency}</span>
            <span className="text-[10px] text-[#A39589]">▾</span>
          </button>
        )}
      </div>
    </div>
  );
};


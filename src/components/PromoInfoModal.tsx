import React from 'react';
import { X, Sparkles, Gift, Check, ArrowRight } from 'lucide-react';

interface PromoInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplore: () => void;
}

export const PromoInfoModal: React.FC<PromoInfoModalProps> = ({
  isOpen,
  onClose,
  onExplore,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-ui">
      <div className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl border border-[#E5D7C5] shadow-2xl p-6 sm:p-8 overflow-hidden text-center">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6B5E54] hover:text-[#1A1A1A] rounded-full hover:bg-stone-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header icon */}
        <div className="w-16 h-16 rounded-full bg-[#FAF6F0] border-2 border-[#C5A059] mx-auto flex items-center justify-center text-[#C5A059] mb-4 shadow-sm">
          <Gift className="w-8 h-8" />
        </div>

        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A059] block mb-1">
          Promoción Especial Exclusiva
        </span>
        <h3 className="font-romantic text-2xl sm:text-3xl text-[#1A1A1A] font-medium">
          Semana Cyber Promo 💌
        </h3>
        <p className="font-romantic italic text-sm text-[#6B5E54] mt-1">
          "Diseños 100% personalizados • Rápido y con amor"
        </p>

        {/* Benefits Box */}
        <div className="mt-6 bg-[#FAF6F0] p-5 rounded-2xl border border-[#E5D7C5] text-left space-y-3 text-xs text-[#1A1A1A]">
          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#1A1A1A] text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <div>
              <strong className="block font-semibold">10% OFF en tu Invitación Web</strong>
              <p className="text-[11px] text-[#6B5E54]">
                Abonando por transferencia bancaria directa o alias. Usá el cupón <strong>LIORAH10</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#1A1A1A] text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <div>
              <strong className="block font-semibold">Cartel de Bienvenida Digital de Regalo</strong>
              <p className="text-[11px] text-[#6B5E54]">
                Te regalamos el cartel en alta resolución para imprimir en la entrada del salón, combinando a la perfección con tu invitación.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#1A1A1A] text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <div>
              <strong className="block font-semibold">Entrega Express sin costo adicional</strong>
              <p className="text-[11px] text-[#6B5E54]">
                Primer borrador en 24 a 48 hs para que tus invitados reciban la noticia sin demoras.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={() => {
              onClose();
              onExplore();
            }}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#1A1A1A] text-white hover:bg-[#C5A059] hover:text-[#1A1A1A] font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Ver Diseños & Aprovechar Promo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

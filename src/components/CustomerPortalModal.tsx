import React, { useState } from 'react';
import { X, User, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';

interface CustomerPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomerPortalModal: React.FC<CustomerPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [orderQuery, setOrderQuery] = useState('');
  const [queryResult, setQueryResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSearchOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;
    setQueryResult(
      `Tu pedido #${orderQuery.trim().toUpperCase()} está siendo diseñado con amor por Jimena. Te estaremos enviando el borrador directo a tu WhatsApp dentro de las próximas horas.`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-ui">
      <div className="relative w-full max-w-md bg-[#FFFDF9] rounded-3xl border border-[#E5D7C5] shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6B5E54] hover:text-[#1A1A1A] rounded-full hover:bg-stone-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[#FAF6F0] border border-[#E5D7C5] mx-auto flex items-center justify-center text-[#C5A059] mb-3">
            <User className="w-7 h-7" />
          </div>
          <span className="font-prestige text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-1">
            Atención al Cliente
          </span>
          <h3 className="font-romantic text-2xl text-[#1A1A1A]">
            Estado de tu Pedido
          </h3>
          <p className="font-romantic italic text-xs text-[#6B5E54] mt-1">
            "Cuidamos cada detalle de tu historia con amor"
          </p>
        </div>

        {/* Search Order Form */}
        <form onSubmit={handleSearchOrder} className="space-y-3 mb-6">
          <div>
            <label className="text-[11px] font-semibold text-[#6B5E54] block mb-1">
              Ingresá tu número de orden (ej. LIO-48291)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                placeholder="LIO-..."
                className="w-full bg-[#FAF6F0] border border-[#E5D7C5] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] uppercase focus:border-[#C5A059] focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#1A1A1A] text-white rounded-xl text-xs font-semibold hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-colors cursor-pointer shrink-0"
              >
                Consultar
              </button>
            </div>
          </div>

          {queryResult && (
            <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#C5A059] text-xs text-[#1A1A1A] leading-relaxed">
              <div className="flex items-center gap-1.5 text-[#C5A059] font-bold mb-1">
                <Clock className="w-4 h-4" />
                <span>Estado: En Proceso Creativo</span>
              </div>
              <p>{queryResult}</p>
            </div>
          )}
        </form>

        {/* WhatsApp Direct Help */}
        <div className="border-t border-[#E5D7C5] pt-5 space-y-3">
          <p className="text-xs text-[#6B5E54] text-center">
            ¿Tenés alguna consulta o cambio en tus textos?
          </p>
          <a
            href="https://wa.me/5491178974625?text=Hola%20LIORAH%20STUDIO!%20Quiero%20consultar%20sobre%20mi%20pedido"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hablar con Jimena por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

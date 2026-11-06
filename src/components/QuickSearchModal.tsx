import React, { useState } from 'react';
import { Search, X, ArrowRight, ExternalLink } from 'lucide-react';
import { STORE_PRODUCTS } from './StoreCatalogSection';
import { StoreProductItem } from './StoreProductCard';

interface QuickSearchModalProps {
  onClose: () => void;
  onSelectProduct: (product: StoreProductItem) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const filtered = STORE_PRODUCTS.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.celebrant.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.styleTag.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-[#FFFDF9] rounded-3xl border border-[#E5D7C5] shadow-2xl overflow-hidden font-ui">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E5D7C5] flex items-center gap-3 bg-[#FAF6F0]">
          <Search className="w-5 h-5 text-[#C5A059]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por celebrante o evento (ej. Zoe, Celeste, Ariel & Cecilia, 15 Años)..."
            className="w-full bg-transparent text-sm sm:text-base text-[#1A1A1A] placeholder-[#A39589] focus:outline-hidden"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#6B5E54] hover:text-[#1A1A1A] rounded-full hover:bg-stone-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {filtered.length === 0 ? (
            <p className="text-center text-xs text-[#6B5E54] py-8">
              No encontramos invitaciones para "{query}". Probá con "Boda", "15 años" o "Celeste".
            </p>
          ) : (
            filtered.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  onSelectProduct(prod);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#FAF6F0] cursor-pointer transition-colors border border-transparent hover:border-[#E5D7C5]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-14 rounded-xl bg-stone-100 overflow-hidden border border-[#E5D7C5]">
                    <img
                      src={prod.phoneImage || prod.coverImage}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-romantic text-sm font-semibold text-[#1A1A1A]">
                      Invitación Página Web | {prod.name}
                    </h4>
                    <p className="text-[11px] text-[#6B5E54]">{prod.celebrant} · {prod.category}</p>
                    <span className="text-[11px] font-bold text-[#1A1A1A]">
                      ${prod.price.toLocaleString('es-AR')},00
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {prod.liveUrl && (
                    <span className="text-[9px] bg-[#1A1A1A] text-[#D4AF37] px-2 py-0.5 rounded-full font-bold">
                      Sitio Activo
                    </span>
                  )}
                  <ArrowRight className="w-4 h-4 text-[#A39589]" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

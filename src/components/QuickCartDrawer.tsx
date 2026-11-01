import React, { useState } from 'react';
import { X, Trash2, ArrowRight, MessageCircle, Sparkles, Check, Heart, ShieldCheck, Globe } from 'lucide-react';
import { StoreProductItem } from './StoreProductCard';
import { LiorahPackageTier, LIORAH_PACKAGES } from '../types';
import { SupportedCurrency, CURRENCIES, formatPrice } from '../utils/currency';

export interface CartItem {
  product: StoreProductItem;
  tier: LiorahPackageTier;
  quantity: number;
}

interface QuickCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateTier: (productId: string, tier: LiorahPackageTier) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
  currency?: SupportedCurrency;
  onOpenCurrencyModal?: () => void;
}

export const QuickCartDrawer: React.FC<QuickCartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateTier,
  onRemoveItem,
  onCheckout,
  currency = 'ARS',
  onOpenCurrencyModal,
}) => {
  const [coupon, setCoupon] = useState('LIORAH10');
  const [discountApplied, setDiscountApplied] = useState(true);

  if (!isOpen) return null;

  const currencyInfo = CURRENCIES[currency] || CURRENCIES.ARS;

  const subtotalArs = cartItems.reduce((acc, item) => {
    const tierPrice = LIORAH_PACKAGES[item.tier]?.price || item.product.price;
    return acc + tierPrice * item.quantity;
  }, 0);

  const discountArs = discountApplied && subtotalArs > 0 ? Math.round(subtotalArs * 0.1) : 0;
  const totalArs = Math.max(0, subtotalArs - discountArs);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'LIORAH10') {
      setDiscountApplied(true);
    }
  };

  const whatsappOrderMessage = encodeURIComponent(
    `¡Hola LIORAH STUDIO! ♥ Quiero encargar mi pedido de la tienda:\n` +
      cartItems
        .map(
          (i) =>
            `• ${i.product.name} (${LIORAH_PACKAGES[i.tier].title}) - ${formatPrice(
              LIORAH_PACKAGES[i.tier].price,
              currency
            )}`
        )
        .join('\n') +
      `\nTotal: ${formatPrice(totalArs, currency)} (con cupón 10% OFF aplicado). ¡Les paso los datos del evento!`
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end font-ui">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FFFDF9] h-full shadow-2xl flex flex-col z-10 border-l border-[#E5D7C5]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E5D7C5] bg-[#FAF6F0]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-prestige text-xs uppercase tracking-[0.2em] font-bold text-[#1A1A1A]">
                Tu Bolsa de Compras
              </span>
              {onOpenCurrencyModal && (
                <button
                  type="button"
                  onClick={onOpenCurrencyModal}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFFDF9] border border-[#E5D7C5] hover:border-[#C5A059] text-[10px] font-semibold text-[#1A1A1A] cursor-pointer"
                  title="Cambiar moneda"
                >
                  <span>{currencyInfo.flag}</span>
                  <span>{currency}</span>
                  <span className="text-[#A39589]">▾</span>
                </button>
              )}
            </div>
            <p className="text-[11px] text-[#6B5E54]">
              {cartItems.length} {cartItems.length === 1 ? 'diseño seleccionado' : 'diseños seleccionados'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#6B5E54] hover:text-[#1A1A1A] rounded-full hover:bg-stone-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#FAF6F0] border border-[#E5D7C5] mx-auto flex items-center justify-center text-[#C5A059]">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-romantic text-lg text-[#1A1A1A]">Tu bolsa está vacía</h3>
              <p className="text-xs text-[#6B5E54] max-w-xs mx-auto">
                Explorá "Los más elegidos" y hacé clic en COMPRAR en el modelo que más te guste.
              </p>
            </div>
          ) : (
            cartItems.map((item) => {
              const currentTierPrice = LIORAH_PACKAGES[item.tier]?.price || item.product.price;

              return (
                <div
                  key={item.product.id}
                  className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#E5D7C5] space-y-3"
                >
                  <div className="flex gap-3 items-start">
                    <div className="w-16 h-20 rounded-xl bg-stone-100 overflow-hidden border border-[#E5D7C5] shrink-0">
                      <img
                        src={item.product.phoneImage || item.product.coverImage}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-romantic text-base font-bold text-[#1A1A1A] truncate">
                          Invitación Página Web | {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#A39589] hover:text-red-500 p-1 cursor-pointer"
                          title="Quitar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#6B5E54]">
                        Festejado: {item.product.celebrant}
                      </p>
                      <span className="font-bold text-sm text-[#1A1A1A] block mt-1">
                        {formatPrice(currentTierPrice, currency)}
                      </span>
                    </div>
                  </div>

                  {/* Format Selector Pills in Active Currency */}
                  <div className="border-t border-[#E5D7C5]/60 pt-2.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6B5E54] block mb-1.5">
                      Elegir Formato de Entrega:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                      <button
                        type="button"
                        onClick={() => onUpdateTier(item.product.id, 'express')}
                        className={`p-2 rounded-xl border text-left cursor-pointer transition-all ${
                          item.tier === 'express'
                            ? 'border-[#1A1A1A] bg-[#FFFDF9] font-bold text-[#1A1A1A] ring-1 ring-[#1A1A1A]'
                            : 'border-[#E5D7C5] bg-[#FFFDF9]/60 hover:bg-[#FFFDF9]'
                        }`}
                      >
                        <span className="block font-semibold">JPG Digital</span>
                        <span className="text-[10px] text-[#C5A059]">{formatPrice(10000, currency)}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onUpdateTier(item.product.id, 'basic')}
                        className={`p-2 rounded-xl border text-left cursor-pointer transition-all ${
                          item.tier === 'basic'
                            ? 'border-[#1A1A1A] bg-[#FFFDF9] font-bold text-[#1A1A1A] ring-1 ring-[#1A1A1A]'
                            : 'border-[#E5D7C5] bg-[#FFFDF9]/60 hover:bg-[#FFFDF9]'
                        }`}
                      >
                        <span className="block font-semibold">PDF Interactivo</span>
                        <span className="text-[10px] text-[#C5A059]">{formatPrice(25000, currency)}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onUpdateTier(item.product.id, 'animated_video')}
                        className={`p-2 rounded-xl border text-left cursor-pointer transition-all ${
                          item.tier === 'animated_video'
                            ? 'border-[#1A1A1A] bg-[#FFFDF9] font-bold text-[#1A1A1A] ring-1 ring-[#1A1A1A]'
                            : 'border-[#E5D7C5] bg-[#FFFDF9]/60 hover:bg-[#FFFDF9]'
                        }`}
                      >
                        <span className="block font-semibold">Video Animado</span>
                        <span className="text-[10px] text-[#C5A059]">{formatPrice(34000, currency)}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onUpdateTier(item.product.id, 'clasica')}
                        className={`p-2 rounded-xl border text-left cursor-pointer transition-all ${
                          item.tier === 'clasica'
                            ? 'border-[#1A1A1A] bg-[#FFFDF9] font-bold text-[#1A1A1A] ring-1 ring-[#1A1A1A]'
                            : 'border-[#E5D7C5] bg-[#FFFDF9]/60 hover:bg-[#FFFDF9]'
                        }`}
                      >
                        <span className="block font-semibold">Web Clásica</span>
                        <span className="text-[10px] text-[#C5A059]">{formatPrice(50000, currency)}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onUpdateTier(item.product.id, 'interactive')}
                        className={`p-2 rounded-xl border text-left cursor-pointer transition-all col-span-2 ${
                          item.tier === 'interactive'
                            ? 'border-[#1A1A1A] bg-[#FFFDF9] font-bold text-[#1A1A1A] ring-1 ring-[#1A1A1A]'
                            : 'border-[#E5D7C5] bg-[#FFFDF9]/60 hover:bg-[#FFFDF9]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-semibold block">Web Premium ★ (Más Elegida)</span>
                            <span className="text-[10px] text-[#6B5E54]">Todas las 16 funciones interactivas</span>
                          </div>
                          <span className="text-xs font-bold text-[#C5A059]">{formatPrice(70000, currency)}</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer with Subtotal & Actions */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#E5D7C5] bg-[#FAF6F0] space-y-4">
            {/* Promo Coupon */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Cupón de descuento"
                className="w-full bg-[#FFFDF9] border border-[#E5D7C5] rounded-xl px-3 py-1.5 text-xs text-[#1A1A1A] uppercase font-bold focus:border-[#C5A059] focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-[#1A1A1A] text-white rounded-xl text-xs font-semibold hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-colors cursor-pointer shrink-0"
              >
                Aplicar
              </button>
            </form>

            {discountApplied && (
              <p className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>10% OFF aplicado con cupón LIORAH10</span>
              </p>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-[#6B5E54] border-t border-[#E5D7C5]/50 pt-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold text-[#1A1A1A]">{formatPrice(subtotalArs, currency)}</span>
              </div>
              {discountArs > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Descuento Especial (10%):</span>
                  <span>-{formatPrice(discountArs, currency)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-[#1A1A1A] pt-1">
                <span>Total a Pagar:</span>
                <span className="font-prestige text-base text-[#1A1A1A]">
                  {formatPrice(totalArs, currency)}
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={onCheckout}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#1A1A1A] text-white hover:bg-[#C5A059] hover:text-[#1A1A1A] font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Completar Pedido & Personalizar</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/5491178974625?text=${whatsappOrderMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Pedido directo a WhatsApp</span>
              </a>

              <div className="pt-0.5 text-center">
                <a
                  href="https://onetouch.astropay.com/payment?external_reference_id=vzAiAKLGHKHPj1bgRAXJEWIERL6oiUDN"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-[#6B5E54] hover:text-[#1A1A1A] underline decoration-[#C5A059] inline-flex items-center gap-1"
                >
                  <span>¿Pagás desde el exterior o con otros bancos? AstroPay OneTouch ↗</span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#A39589]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Garantía de satisfacción · Ajustes y soporte incluidos</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

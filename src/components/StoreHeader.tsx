import React, { useState } from 'react';
import { Menu, Search, User, ShoppingBag, X, Heart, MessageCircle, ChevronDown, Globe } from 'lucide-react';
import { SupportedCurrency, CURRENCIES } from '../utils/currency';

interface StoreHeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenCustomerPortal: () => void;
  currentCurrency?: SupportedCurrency;
  onOpenCurrencyModal?: () => void;
}

export const StoreHeader: React.FC<StoreHeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenCustomerPortal,
  currentCurrency = 'ARS',
  onOpenCurrencyModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currencyInfo = CURRENCIES[currentCurrency] || CURRENCIES.ARS;

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#E5D7C5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Left: Menu & Search */}
            <div className="flex items-center gap-3 sm:gap-4 w-1/3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#1A1A1A] hover:text-[#C5A059] transition-colors cursor-pointer"
                aria-label="Abrir menú"
              >
                <Menu className="h-6 w-6 stroke-[1.5]" />
              </button>
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 text-[#1A1A1A] hover:text-[#C5A059] transition-colors cursor-pointer flex items-center gap-1.5"
                aria-label="Buscar invitaciones"
              >
                <Search className="h-5 w-5 stroke-[1.75]" />
                <span className="hidden md:inline font-ui text-xs text-[#6B5E54]">Buscar...</span>
              </button>
            </div>

            {/* Center: Script Logo Wordmark (InvitArte style) */}
            <div className="flex items-center justify-center w-1/3 text-center">
              <a href="/" className="inline-block group py-1">
                <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-normal leading-none select-none block transition-transform group-hover:scale-[1.02]">
                  Liorah Studio
                </span>
                <span className="font-prestige text-[9px] uppercase tracking-[0.25em] text-[#C5A059] block -mt-1 font-semibold">
                  Invitaciones Digitales
                </span>
              </a>
            </div>

            {/* Right: Currency Toggle, Account & Cart Bag */}
            <div className="flex items-center justify-end gap-2.5 sm:gap-4 w-1/3">
              {/* Currency Selector Pill */}
              {onOpenCurrencyModal && (
                <button
                  type="button"
                  onClick={onOpenCurrencyModal}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E5D7C5] hover:border-[#C5A059] text-xs font-semibold text-[#1A1A1A] transition-all cursor-pointer shadow-2xs group"
                  title="Cambiar moneda de cobro"
                  aria-label={`Moneda actual: ${currencyInfo.name}. Hacé clic para cambiar`}
                >
                  <span className="text-sm select-none">{currencyInfo.flag}</span>
                  <span className="font-prestige text-[11px] font-bold tracking-wider">{currentCurrency}</span>
                  <ChevronDown className="w-3 h-3 text-[#A39589] transition-transform group-hover:translate-y-0.5" />
                </button>
              )}

              <button
                type="button"
                onClick={onOpenCustomerPortal}
                className="p-2 text-[#1A1A1A] hover:text-[#C5A059] transition-colors cursor-pointer"
                aria-label="Mi Cuenta o Contacto"
                title="Atención personalizada y pedidos"
              >
                <User className="h-5 w-5 stroke-[1.75]" />
              </button>

              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-2 text-[#1A1A1A] hover:text-[#C5A059] transition-colors cursor-pointer flex items-center"
                aria-label="Bolsa de compras"
              >
                <ShoppingBag className="h-5 w-5 stroke-[1.75]" />
                {cartCount > 0 ? (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#1A1A1A] text-[10px] font-bold text-[#FFFDF9]">
                    {cartCount}
                  </span>
                ) : (
                  <span className="text-[11px] font-ui font-medium text-[#6B5E54] ml-1 hidden sm:inline">
                    0
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-[#FFFDF9] py-6 px-6 shadow-2xl border-r border-[#E5D7C5] z-10">
            <div className="flex items-center justify-between border-b border-[#E5D7C5] pb-4">
              <div>
                <span className="font-script text-2xl text-[#1A1A1A]">Liorah Studio</span>
                <p className="font-ui text-[10px] uppercase tracking-wider text-[#C5A059]">
                  Menú Principal
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#6B5E54] hover:text-[#1A1A1A] cursor-pointer rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-3 font-ui text-xs font-medium uppercase tracking-[0.14em] text-[#1A1A1A]">
              <a
                href="#mas-elegidos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-[#FAF6F0] flex items-center justify-between transition-colors"
              >
                <span>Los más elegidos</span>
                <span className="text-[#C5A059]">♥</span>
              </a>
              <a
                href="#que-podes-sumar"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-[#FAF6F0] flex items-center justify-between transition-colors"
              >
                <span>¿Qué podés sumar?</span>
                <span className="text-xs text-stone-400">12 funciones</span>
              </a>
              <a
                href="#tabla-comparativa"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-[#FAF6F0] flex items-center justify-between transition-colors"
              >
                <span>Propuestas & Precios</span>
                <span className="text-xs text-[#C5A059] font-bold">$50k / $70k</span>
              </a>
              <a
                href="#como-funciona"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-[#FAF6F0] flex items-center justify-between transition-colors"
              >
                <span>¿Cómo funciona?</span>
                <span className="text-xs text-stone-400">3 pasos</span>
              </a>
              <a
                href="#novedades"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-[#FAF6F0] flex items-center justify-between transition-colors"
              >
                <span>Novedades & Muestras en Vivo</span>
                <span className="text-[10px] bg-[#FAF6F0] text-[#C5A059] px-2 py-0.5 rounded-full border border-[#E5D7C5]">
                  8 Activos
                </span>
              </a>
              <a
                href="#clientes-felices"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-[#FAF6F0] flex items-center justify-between transition-colors"
              >
                <span>Clientes Felices</span>
                <span className="text-xs text-[#C5A059]">★★★★★</span>
              </a>

              {onOpenCurrencyModal && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCurrencyModal();
                  }}
                  className="py-2.5 px-3 rounded-xl bg-[#FAF6F0] border border-[#E5D7C5] hover:border-[#C5A059] flex items-center justify-between transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{currencyInfo.flag}</span>
                    <span className="text-xs font-semibold text-[#1A1A1A]">Moneda: {currentCurrency} ({currencyInfo.symbol})</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#C5A059] tracking-wider">Cambiar</span>
                </button>
              )}
            </nav>

            <div className="mt-auto border-t border-[#E5D7C5] pt-6 space-y-3 font-ui text-xs">
              <a
                href="https://wa.me/5491178974625?text=Hola%20LIORAH%20STUDIO!%20Deseo%20consultar%20por%20una%20invitación%20personalizada"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#1A1A1A] text-white flex items-center justify-center gap-2 font-semibold hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#D4AF37]" />
                <span>WhatsApp: +54 9 11 7897-4625</span>
              </a>

              {/* Quick Social Links */}
              <div className="flex items-center justify-center gap-3 pt-2 text-[#6B5E54]">
                <a
                  href="https://www.tiktok.com/@liorah.ok"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-[#FAF6F0] hover:text-[#1A1A1A] transition-colors"
                  aria-label="TikTok @liorah.ok"
                  title="TikTok @liorah.ok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.76a8.28 8.28 0 0 0 4.77 1.48v-3.5a4.85 4.85 0 0 1-1-.05z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/liorah.ok"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-[#FAF6F0] hover:text-[#1A1A1A] transition-colors"
                  aria-label="Instagram @liorah.ok"
                  title="Instagram @liorah.ok"
                >
                  <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1D4RH2VURD/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-[#FAF6F0] hover:text-[#1A1A1A] transition-colors"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>

              <p className="text-center text-[10px] text-[#6B5E54]">
                Atención directa con Jimena y equipo de diseño
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

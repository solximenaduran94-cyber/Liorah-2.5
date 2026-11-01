import React, { useState } from 'react';
import { PromoTopBar } from './components/PromoTopBar';
import { StoreHeader } from './components/StoreHeader';
import { StoreCategoriesNav, StoreCategory } from './components/StoreCategoriesNav';
import { StoreCatalogSection, STORE_PRODUCTS } from './components/StoreCatalogSection';
import { StoreProductItem } from './components/StoreProductCard';
import { InvitArteFeaturesCard } from './components/InvitArteFeaturesCard';
import { ComparisonPricingTable } from './components/ComparisonPricingTable';
import { HowItWorksThreeSteps } from './components/HowItWorksThreeSteps';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuickCartDrawer, CartItem } from './components/QuickCartDrawer';
import { QuickSearchModal } from './components/QuickSearchModal';
import { PromoInfoModal } from './components/PromoInfoModal';
import { CustomerPortalModal } from './components/CustomerPortalModal';
import { RealSampleViewerModal } from './components/RealSampleViewerModal';
import { CheckoutModal } from './components/CheckoutModal';
import { CurrencySelectorModal } from './components/CurrencySelectorModal';
import { REAL_SAMPLES, RealSampleItem } from './data/realSamples';
import { INVITATION_CATALOG } from './data/invitations';
import { InvitationDesign, DesignPreferences, LiorahPackageTier, LIORAH_PACKAGES } from './types';
import { SupportedCurrency, getSavedCurrency, saveSelectedCurrency } from './utils/currency';
import { MessageCircle, X } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<StoreCategory>('todos');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [promoModalOpen, setPromoModalOpen] = useState(false);
  const [customerPortalOpen, setCustomerPortalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [currencyModalOpen, setCurrencyModalOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState<SupportedCurrency>(() => getSavedCurrency());

  // Cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: STORE_PRODUCTS[0], // Greenery default
      tier: 'interactive',
      quantity: 1,
    },
  ]);

  // Modals for live demo & checkout
  const [activeRealSample, setActiveRealSample] = useState<RealSampleItem | null>(null);
  const [checkoutModalData, setCheckoutModalData] = useState<{
    design: InvitationDesign;
    preferences: DesignPreferences;
    tier: LiorahPackageTier;
  } | null>(null);

  // Helper to map a store product into InvitationDesign structure for checkout
  const mapProductToDesign = (product: StoreProductItem): { design: InvitationDesign; prefs: DesignPreferences } => {
    const baseCatalog = INVITATION_CATALOG[0];
    const design: InvitationDesign = {
      ...baseCatalog,
      id: product.id,
      title: `Invitación Página Web | ${product.name}`,
      category: product.category === 'Boda' ? 'Bodas' : 'XV Años',
      price: product.price,
      image: product.phoneImage || product.coverImage || baseCatalog.image,
      tagline: product.styleTag,
      demoData: {
        ...baseCatalog.demoData,
        hostsNames: product.celebrant,
        dateFormatted: product.date,
      },
    };

    const prefs: DesignPreferences = {
      designId: product.id,
      designTitle: product.name,
      eventType: product.category,
      hostsNames: product.celebrant,
      eventDate: product.date,
      eventTime: '18:00 HRS',
      ceremonyVenue: 'Parroquia / Jardín Principal',
      ceremonyAddress: 'Buenos Aires, Argentina',
      receptionVenue: 'Salón de Eventos & Estancia',
      receptionAddress: 'Ruta 8 Km 54.5',
      mapsUrl: 'https://maps.google.com',
      dressCode: 'Elegante',
      colorScheme: 'Verde Eucalipto & Oro',
      typographyStyle: 'Caligrafía Clásica & Romana',
      musicChoice: 'Vals de Ensueño / Balada Acústica',
      specialNotes: '',
      enabledFeatures: {
        rsvpWhatsApp: true,
        googleMaps: true,
        countdown: true,
        backgroundMusic: true,
        giftRegistryClabe: true,
        photoGallery: true,
        itineraryTimeline: true,
        dressCodeGuide: true,
      },
      passMode: 'single_link',
    };

    return { design, prefs };
  };

  const handleBuyProduct = (product: StoreProductItem, tier: LiorahPackageTier = 'interactive') => {
    // Add or update cart item
    setCartItems((prev) => {
      const exists = prev.find((i) => i.product.id === product.id);
      if (exists) {
        return prev.map((i) => (i.product.id === product.id ? { ...i, tier } : i));
      }
      return [...prev, { product, tier, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleOpenLiveDemo = (product: StoreProductItem) => {
    if (product.liveUrl) {
      // Find matching real sample item or open sample viewer
      const found = REAL_SAMPLES.find((s) => s.liveUrl === product.liveUrl);
      if (found) {
        setActiveRealSample(found);
        return;
      }
      window.open(product.liveUrl, '_blank');
      return;
    }

    // If it's a catalog design without a live domain, map to an existing sample or open viewer
    const sample = REAL_SAMPLES[0];
    setActiveRealSample({
      ...sample,
      title: product.name,
      celebrant: product.celebrant,
      tagline: product.styleTag,
      image: product.phoneImage || product.coverImage || sample.image,
    });
  };

  const handleOpenCheckoutFromCart = () => {
    if (cartItems.length === 0) return;
    const first = cartItems[0];
    const { design, prefs } = mapProductToDesign(first.product);
    setCartOpen(false);
    setCheckoutModalData({
      design,
      preferences: prefs,
      tier: first.tier,
    });
  };

  const handleSelectTierFromTable = (tier: LiorahPackageTier) => {
    const defaultProduct = STORE_PRODUCTS[0];
    handleBuyProduct(defaultProduct, tier);
  };

  const handleCustomizeFromSample = (sample: RealSampleItem) => {
    setActiveRealSample(null);
    const matchingProduct = STORE_PRODUCTS.find((p) => p.liveUrl === sample.liveUrl) || STORE_PRODUCTS[0];
    handleBuyProduct(matchingProduct, 'interactive');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#1A1A1A] antialiased">
      {/* 1. TOP PROMOTIONAL RIBBON (Matching Page 1 of InvitArte PDF) */}
      <PromoTopBar
        onOpenPromoInfo={() => setPromoModalOpen(true)}
        currentCurrency={currentCurrency}
        onOpenCurrencyModal={() => setCurrencyModalOpen(true)}
      />

      {/* 2. STORE HEADER with Menu, Search, Cursive Logo, Account, Currency & Cart (Page 1) */}
      <StoreHeader
        cartCount={cartItems.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenCustomerPortal={() => setCustomerPortalOpen(true)}
        currentCurrency={currentCurrency}
        onOpenCurrencyModal={() => setCurrencyModalOpen(true)}
      />

      {/* 3. CATEGORY ICONS BAR (Boda, 15 años, Cumpleaños, Todas) (Page 1) */}
      <StoreCategoriesNav
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* MAIN STORE BODY */}
      <main className="flex-1">
        {/* 4. "LOS MÁS ELEGIDOS" Product Grid with Dual-Phone Mockups (Page 1 & 2) */}
        <StoreCatalogSection
          selectedCategory={selectedCategory}
          currency={currentCurrency}
          onBuyProduct={handleBuyProduct}
          onOpenLiveDemo={handleOpenLiveDemo}
        />

        {/* 5. "¿QUÉ PODÉS SUMAR A TU INVITACIÓN?" (Page 2) */}
        <InvitArteFeaturesCard />

        {/* 6. "Elegí la opción que más se adapta a tu evento" COMPARISON TABLE (Page 3) */}
        <ComparisonPricingTable
          onSelectTier={handleSelectTierFromTable}
          currency={currentCurrency}
          onOpenCurrencyModal={() => setCurrencyModalOpen(true)}
        />

        {/* 7. "¿CÓMO FUNCIONA?" 3 Circular Steps (Page 3) */}
        <HowItWorksThreeSteps />

        {/* 8. "CLIENTES FELICES" Quotes & Testimonials (Page 6) */}
        <ReviewsSection />

        {/* 9. FAQ Section */}
        <FaqSection />
      </main>

      {/* 10. STORE FOOTER with Categorías, Contacto, Legal & Botón de arrepentimiento (Page 6) */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/5491178974625?text=Hola%20LIORAH%20STUDIO!%20Quisiera%20consultar%20por%20una%20invitación%20personalizada"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-xl hover:bg-emerald-700 transition-all hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">¿Dudas? Escribinos por WhatsApp</span>
        </a>
      </aside>

      {/* QUICK CART DRAWER */}
      <QuickCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        currency={currentCurrency}
        onOpenCurrencyModal={() => setCurrencyModalOpen(true)}
        onUpdateTier={(productId, tier) => {
          setCartItems((prev) =>
            prev.map((i) => (i.product.id === productId ? { ...i, tier } : i))
          );
        }}
        onRemoveItem={(productId) => {
          setCartItems((prev) => prev.filter((i) => i.product.id !== productId));
        }}
        onCheckout={handleOpenCheckoutFromCart}
      />

      {/* QUICK SEARCH MODAL */}
      {searchModalOpen && (
        <QuickSearchModal
          onClose={() => setSearchModalOpen(false)}
          onSelectProduct={(prod) => handleBuyProduct(prod)}
        />
      )}

      {/* PROMO INFO MODAL */}
      <PromoInfoModal
        isOpen={promoModalOpen}
        onClose={() => setPromoModalOpen(false)}
        onExplore={() => {
          const el = document.getElementById('mas-elegidos');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* CUSTOMER PORTAL / ORDER TRACKER MODAL */}
      <CustomerPortalModal
        isOpen={customerPortalOpen}
        onClose={() => setCustomerPortalOpen(false)}
      />

      {/* REAL SAMPLE LIVE VIEWER MODAL */}
      {activeRealSample && (
        <RealSampleViewerModal
          sample={activeRealSample}
          onClose={() => setActiveRealSample(null)}
          onSelectToCustomize={handleCustomizeFromSample}
        />
      )}

      {/* FINAL CHECKOUT & PAYMENT MODAL */}
      {checkoutModalData && (
        <CheckoutModal
          design={checkoutModalData.design}
          preferences={checkoutModalData.preferences}
          initialTier={checkoutModalData.tier}
          currency={currentCurrency}
          onOpenCurrencyModal={() => setCurrencyModalOpen(true)}
          onClose={() => setCheckoutModalData(null)}
        />
      )}

      {/* CURRENCY SELECTOR MODAL */}
      <CurrencySelectorModal
        isOpen={currencyModalOpen}
        onClose={() => setCurrencyModalOpen(false)}
        currentCurrency={currentCurrency}
        onSelectCurrency={(curr) => {
          setCurrentCurrency(curr);
          saveSelectedCurrency(curr);
        }}
      />
    </div>
  );
}

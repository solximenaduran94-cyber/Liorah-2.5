import React, { useState } from 'react';
import { StoreProductCard, StoreProductItem } from './StoreProductCard';
import { StoreCategory } from './StoreCategoriesNav';
import { LiorahPackageTier } from '../types';
import { SupportedCurrency } from '../utils/currency';

interface StoreCatalogSectionProps {
  selectedCategory: StoreCategory;
  currency?: SupportedCurrency;
  onBuyProduct: (product: StoreProductItem, tier: LiorahPackageTier) => void;
  onOpenLiveDemo: (product: StoreProductItem) => void;
}

export const STORE_PRODUCTS: StoreProductItem[] = [
  // 1. Official Live Site: Celeste XV (misxv.celeste.liorah.site)
  {
    id: 'prod-celeste-xv',
    name: 'Celeste XV (Cele)',
    category: '15 años',
    price: 70000,
    celebrant: 'Cele',
    date: '27.11.2026',
    coverImage: '/images/sample_celeste_blue_quince_1793112043361.jpg',
    phoneImage: '/images/sample_celeste_blue_quince_1793112043361.jpg',
    liveUrl: 'https://misxv.celeste.liorah.site/',
    styleTag: 'Azul celeste con mariposas, brillos plateados y música de entrada.',
    isBestseller: true,
  },

  // 2. Official Live Site: Zoe XV (misxv.zoe.liorah.site)
  {
    id: 'prod-zoe-xv',
    name: 'Zoe XV (Mis 15 Años 💙)',
    category: '15 años',
    price: 70000,
    celebrant: 'Zoe',
    date: '14.11.2026',
    coverImage: '/images/real_sites/zoe_hero.jpg',
    phoneImage: '/images/real_sites/zoe_hero.jpg',
    liveUrl: 'https://misxv.zoe.liorah.site/',
    styleTag: 'Azul noche cósmico con mariposa azul, estrellas titilantes y música de entrada.',
    isBestseller: true,
  },

  // 3. Official Live Site: Ariel & Cecilia (arielycecilia.liorah.site)
  {
    id: 'prod-ariel-cecilia',
    name: 'Cecilia & Ariel (Nuestra Boda)',
    category: 'Boda',
    price: 70000,
    celebrant: 'Cecilia & Ariel',
    date: '20.11.2026',
    coverImage: '/images/sample_cecilia_ariel_wedding_1793112044080.jpg',
    phoneImage: '/images/sample_cecilia_ariel_wedding_1793112044080.jpg',
    liveUrl: 'https://arielycecilia.liorah.site/',
    styleTag: 'Follaje botánico en verde bosque oscuro y tipografía clásica en oro.',
    isBestseller: true,
  },

  // 4. Official Live Site: Xiomara XV (xiomara.misxv.liorah.site)
  {
    id: 'prod-xiomara-xv',
    name: 'Xiomara XV',
    category: '15 años',
    price: 70000,
    celebrant: 'Xiomara',
    date: '21.11.2026',
    coverImage: '/images/sample_xiomara_emerald_quince_1793112043538.jpg',
    phoneImage: '/images/sample_xiomara_emerald_quince_1793112043538.jpg',
    liveUrl: 'https://xiomara.misxv.liorah.site/',
    styleTag: 'Gala nocturna en violeta imperial con flores, mariposas y corona dorada.',
  },

  // 5. Official Live Site: Dariel (dariel.liorah.site)
  {
    id: 'prod-dariel',
    name: 'Dariel (1er Añito)',
    category: 'Cumpleaños / Bautismo',
    price: 70000,
    celebrant: 'Dariel Pohl',
    date: '08.08.2026',
    coverImage: '/images/sample_darel_invitation_1793130335040.jpg',
    phoneImage: '/images/sample_darel_invitation_1793130335040.jpg',
    liveUrl: 'https://dariel.liorah.site/',
    styleTag: 'Azul navy y oro líquido para festejo de primer añito en familia.',
  },

  // 6. Official Live Site: Mía Aneley (mia.liorah.site)
  {
    id: 'prod-mia',
    name: 'Mía Aneley (1er Añito)',
    category: 'Cumpleaños / Bautismo',
    price: 70000,
    celebrant: 'Mía Aneley',
    date: '25.10.2026',
    coverImage: '/images/sample_mia_invitation_1793322422928.jpg',
    phoneImage: '/images/sample_mia_invitation_1793322422928.jpg',
    liveUrl: 'https://mia.liorah.site/',
    styleTag: 'Temática princesa en rosa blush con corona dorada y música de fondo.',
  },

  // 7. Official Live Site: Olivia (olivia.liorah.site)
  {
    id: 'prod-olivia',
    name: 'Olivia (Primer Añito)',
    category: 'Cumpleaños / Bautismo',
    price: 70000,
    celebrant: 'Olivia',
    date: '12.09.2026',
    coverImage: '/images/sample_olivia_invitation_1793130348223.jpg',
    phoneImage: '/images/sample_olivia_invitation_1793130348223.jpg',
    liveUrl: 'https://olivia.liorah.site/',
    styleTag: 'Acuarelas florales suaves en rosa pastel con safari dulce, reproductor y álbum.',
  },

  // 8. Official Live Site: Alma XV (almaxv.liorah.site)
  {
    id: 'prod-alma-xv',
    name: 'Alma XV',
    category: '15 años',
    price: 70000,
    celebrant: 'Alma',
    date: '08.11.2026',
    coverImage: '/images/sample_alma_xv_invitation_1793130391587.jpg',
    phoneImage: '/images/sample_alma_xv_invitation_1793130391587.jpg',
    liveUrl: 'https://almaxv.liorah.site/',
    styleTag: 'Glamour en magenta vibrante y destellos de oro, estilo alta costura.',
  },

  // 9. Official Live Site: Xiomara XV - Dulce Tropical (xio.xv.liorah.site)
  {
    id: 'prod-xio-tropical',
    name: 'Xiomara XV (Dulce Tropical)',
    category: '15 años',
    price: 70000,
    celebrant: 'Xiomara',
    date: '05.12.2026',
    coverImage: '/images/real_sites/xio_tropical.jpg',
    phoneImage: '/images/real_sites/xio_tropical.jpg',
    liveUrl: 'https://xio.xv.liorah.site/',
    styleTag: 'Salón Dulce Tropical, álbum de infancia, tonos cálidos y fiesta inolvidable.',
    isBestseller: true,
  },

  // 10. Official Live Site: Mi Primer Añito - Osito Pastel (mi-primer-a-ito-oso.liorahonline.workers.dev)
  {
    id: 'prod-primer-anito-oso',
    name: 'Mi Primer Añito (Osito Pastel 🧸)',
    category: 'Cumpleaños / Bautismo',
    price: 70000,
    celebrant: 'Mi Primer Añito',
    date: '20.06.2026',
    coverImage: '/images/real_sites/teddy_bear.png',
    phoneImage: '/images/real_sites/teddy_bear.png',
    liveUrl: 'https://mi-primer-a-ito-oso.liorahonline.workers.dev/',
    styleTag: 'Cajita de música mágica, osito tierno pastel, tonos arena y cofre de bendiciones.',
  },

  // 11. Official Live Site: Princesa y el Sapo - Sofía XV (invitacion-princesa-y-el-sapo.liorahonline.workers.dev)
  {
    id: 'prod-princesa-sapo',
    name: 'Sofía XV (Princesa y el Sapo 🐸)',
    category: '15 años',
    price: 70000,
    celebrant: 'Sofía',
    date: '04.10.2026',
    coverImage: '/images/sample_xiomara_emerald_quince_1793112043538.jpg',
    phoneImage: '/images/sample_xiomara_emerald_quince_1793112043538.jpg',
    liveUrl: 'https://invitacion-princesa-y-el-sapo.liorahonline.workers.dev/',
    styleTag: 'Inspiración Tiana en verde esmeralda profundo, flor de loto, destellos de oro y pantano mágico.',
  },

  // 12. Official Live Site: Maia XV - Mulán Imperial (mulan.liorah.site)
  {
    id: 'prod-mulan-xv',
    name: 'Maia XV (Estilo Mulán Imperial 🌸)',
    category: '15 años',
    price: 70000,
    celebrant: 'Maia Rodríguez',
    date: '26.06.2026',
    coverImage: '/images/real_sites/maia_estas_si.jpg',
    phoneImage: '/images/real_sites/maia_estas_si.jpg',
    liveUrl: 'https://mulan.liorah.site/',
    styleTag: 'Alvear Palace Hotel (Salón Versailles), temática imperial Mulán con pétalos de cerezo y gala.',
    isBestseller: true,
  },
];

export const StoreCatalogSection: React.FC<StoreCatalogSectionProps> = ({
  selectedCategory,
  currency = 'ARS',
  onBuyProduct,
  onOpenLiveDemo,
}) => {
  // Read previously uploaded custom thumbnails from localStorage
  const [customThumbnails] = useState<Record<string, string>>(() => {
    try {
      const saved =
        localStorage.getItem('liorah_custom_thumbnails') ||
        localStorage.getItem('custom_thumbnails') ||
        localStorage.getItem('aura_custom_thumbnails');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Error reading saved custom thumbnails from localStorage', e);
      return {};
    }
  });

  // Filter products by selected category
  const filteredProducts = STORE_PRODUCTS.filter((p) => {
    if (selectedCategory === 'todos') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="mas-elegidos" className="py-14 sm:py-20 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title matching Page 1 */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-romantic text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal tracking-wide">
            Los más elegidos
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-3" />
        </div>

        {/* 2 or 3-Column Product Grid matching Page 1 & 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {filteredProducts.map((prod) => (
            <StoreProductCard
              key={prod.id}
              product={prod}
              currency={currency}
              customImage={customThumbnails[prod.id]}
              onBuy={onBuyProduct}
              onOpenDemo={onOpenLiveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

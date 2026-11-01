import React from 'react';

export type StoreCategory = 'todos' | 'Boda' | '15 años' | 'Cumpleaños / Bautismo';

interface StoreCategoriesNavProps {
  selectedCategory: StoreCategory;
  onSelectCategory: (cat: StoreCategory) => void;
}

export const StoreCategoriesNav: React.FC<StoreCategoriesNavProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <nav aria-label="Categorías de invitaciones" className="py-6 border-b border-[#E5D7C5] bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-8 sm:gap-14 flex-wrap">
        {/* Boda */}
        <button
          type="button"
          onClick={() => onSelectCategory('Boda')}
          className={`flex flex-col items-center gap-2 group cursor-pointer transition-all ${
            selectedCategory === 'Boda' ? 'scale-105' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all ${
              selectedCategory === 'Boda'
                ? 'border-[#1A1A1A] bg-[#FAF6F0] shadow-sm ring-2 ring-[#C5A059]'
                : 'border-[#E5D7C5] bg-[#FFFDF9] group-hover:border-[#C5A059]'
            }`}
          >
            {/* Two interlocking wedding rings line icon */}
            <svg
              className="w-7 h-7 text-[#1A1A1A] stroke-current"
              viewBox="0 0 40 40"
              fill="none"
              strokeWidth="1.5"
            >
              <circle cx="16" cy="20" r="9" />
              <circle cx="24" cy="20" r="9" />
              <path d="M12 14l2-2M26 14l2-2" strokeLinecap="round" />
            </svg>
          </div>
          <span
            className={`font-prestige text-xs tracking-wider transition-colors ${
              selectedCategory === 'Boda' ? 'font-bold text-[#1A1A1A]' : 'text-[#6B5E54]'
            }`}
          >
            Boda
          </span>
        </button>

        {/* 15 años */}
        <button
          type="button"
          onClick={() => onSelectCategory('15 años')}
          className={`flex flex-col items-center gap-2 group cursor-pointer transition-all ${
            selectedCategory === '15 años' ? 'scale-105' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all ${
              selectedCategory === '15 años'
                ? 'border-[#1A1A1A] bg-[#FAF6F0] shadow-sm ring-2 ring-[#C5A059]'
                : 'border-[#E5D7C5] bg-[#FFFDF9] group-hover:border-[#C5A059]'
            }`}
          >
            {/* Delicate tiara / sparkler sprig icon */}
            <svg
              className="w-7 h-7 text-[#1A1A1A] stroke-current"
              viewBox="0 0 40 40"
              fill="none"
              strokeWidth="1.5"
            >
              <path d="M10 26h20M12 26l3-10 5 6 5-6 3 10" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="15" cy="15" r="1.5" fill="currentColor" />
              <circle cx="20" cy="21" r="1.5" fill="currentColor" />
              <circle cx="25" cy="15" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <span
            className={`font-prestige text-xs tracking-wider transition-colors ${
              selectedCategory === '15 años' ? 'font-bold text-[#1A1A1A]' : 'text-[#6B5E54]'
            }`}
          >
            15 años
          </span>
        </button>

        {/* Cumpleaños / Bautismo */}
        <button
          type="button"
          onClick={() => onSelectCategory('Cumpleaños / Bautismo')}
          className={`flex flex-col items-center gap-2 group cursor-pointer transition-all ${
            selectedCategory === 'Cumpleaños / Bautismo' ? 'scale-105' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all ${
              selectedCategory === 'Cumpleaños / Bautismo'
                ? 'border-[#1A1A1A] bg-[#FAF6F0] shadow-sm ring-2 ring-[#C5A059]'
                : 'border-[#E5D7C5] bg-[#FFFDF9] group-hover:border-[#C5A059]'
            }`}
          >
            {/* Bow / Cake candle icon */}
            <svg
              className="w-7 h-7 text-[#1A1A1A] stroke-current"
              viewBox="0 0 40 40"
              fill="none"
              strokeWidth="1.5"
            >
              <path d="M13 22h14v8H13zM15 17h10v5H15z" strokeLinejoin="round" />
              <path d="M20 13v4M20 11a1 1 0 0 1 0 0" strokeLinecap="round" />
              <path d="M10 30h20" strokeLinecap="round" />
            </svg>
          </div>
          <span
            className={`font-prestige text-xs tracking-wider transition-colors ${
              selectedCategory === 'Cumpleaños / Bautismo' ? 'font-bold text-[#1A1A1A]' : 'text-[#6B5E54]'
            }`}
          >
            Cumpleaños & Bautismo
          </span>
        </button>

        {/* Ver Todos */}
        <button
          type="button"
          onClick={() => onSelectCategory('todos')}
          className={`flex flex-col items-center gap-2 group cursor-pointer transition-all ${
            selectedCategory === 'todos' ? 'scale-105' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all ${
              selectedCategory === 'todos'
                ? 'border-[#1A1A1A] bg-[#FAF6F0] shadow-sm ring-2 ring-[#C5A059]'
                : 'border-[#E5D7C5] bg-[#FFFDF9] group-hover:border-[#C5A059]'
            }`}
          >
            {/* Sparkles icon */}
            <svg
              className="w-7 h-7 text-[#1A1A1A] stroke-current"
              viewBox="0 0 40 40"
              fill="none"
              strokeWidth="1.5"
            >
              <path d="M20 10v20M10 20h20M13 13l14 14M27 13L13 27" strokeLinecap="round" />
            </svg>
          </div>
          <span
            className={`font-prestige text-xs tracking-wider transition-colors ${
              selectedCategory === 'todos' ? 'font-bold text-[#1A1A1A]' : 'text-[#6B5E54]'
            }`}
          >
            Ver Todos
          </span>
        </button>
      </div>
    </nav>
  );
};

import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  onSelect: (category: string | null) => void;
  activeCategory: string | null;
}

const categories = [
  { key: null, label_tr: 'Tümü', label_en: 'All' },
  { key: 'MALE', label_tr: 'Erkek', label_en: 'MALE' },
  { key: 'FEMALE', label_tr: 'Kadın', label_en: 'FEMALE' },
  { key: 'UNISEX', label_tr: 'Unisex', label_en: 'UNISEX' },
  { key: 'COSMETICS', label_tr: 'Güzellik', label_en: 'COSMETICS' },
];
export const Categories: React.FC<Props> = ({ activeCategory, onSelect, className }) => {
  const { locale } = useLanguage();

  return (
    <div className={cn('flex gap-4 justify-center sm:flex-nowrap flex-wrap', className)}>
      {categories.map((category) => (
        <div
          onClick={() => onSelect(category.key)}
          key={category.key}
          className={
            activeCategory === category.key
              ? 'text-white flex items-center justify-center cursor-pointer transition duration-500 sm:w-[143px] w-[105px] sm:h-[38px] h-[28px] bg-primary border-primary border-2 sm:text-sm text-[12px] '
              : 'flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition duration-500 sm:w-[143px] w-[105px] sm:h-[38px] h-[28px] border-primary border-2 text-primary text-sm'
          }>
          {locale === 'en' ? category.label_en : category.label_tr}
        </div>
      ))}
    </div>
  );
};

'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RichText } from './rich-text';
import { Product } from '@prisma/client';
import { useLanguage } from '@/context/LanguageContext';
interface Props {
  className?: string;
  id?: number;
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { locale } = useLanguage();
  return (
    <div className={cn('sm:w-[280px] w-[180px] flex flex-col justify-between bg-white p-3 ')}>
      <Image
        width={280}
        height={330}
        src={product.imageUrl}
        alt={locale === 'en' ? product.name_en : product.name_tr}
      />
      <h2 className="sm:text-[20px] text-[14px] leading-[18px] text-black font-semibold mb-2">
        {locale === 'en' ? product.name_en : product.name_tr}
      </h2>
      <RichText
        html={locale === 'en' ? product.description_en : product.description_tr}
        className="sm:text-sm text-[12px] text-[#9A9A9A] mb-2"
      />
      <Link
        className="w-full sm:h-[44px] h-[35px] sm:text-[16px] text-[12px] border-2 border-primary hover:bg-transparent transition hover:text-primary bg-primary text-white flex justify-center items-center"
        href={`/product/${product.id}`}>
        {locale === 'en' ? 'View' : 'Ürüne bak'}
      </Link>
    </div>
  );
};

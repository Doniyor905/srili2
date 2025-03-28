'use client'; // ✅ Это клиентский компонент

import { Container } from '@/components/shared/container';
import { Footer } from '@/components/shared/footer';
import { RichText } from '@/components/shared/rich-text';
import { TableProduct } from '@/components/shared/table-product';
import { Button } from '@/components/ui/button';
import { categoryLabels } from '@/constants/categories';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name_tr: string;
  name_en: string;
  description_tr: string;
  description_en: string;
  size: string | null; // ✅ Разрешаем null
  smellProduct_tr: string | null;
  smellProduct_en: string | null;
  imageUrl: string;
  category: string;
  createAt: Date;
  updateaT: Date;
}

export default function ProductClient({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const name = locale === 'en' ? product.name_en : product.name_tr;
  const description = locale === 'en' ? product.description_en : product.description_tr;
  const smellProduct = locale === 'en' ? product.smellProduct_en : product.smellProduct_tr;
  const categoryLabel =
    locale === 'en'
      ? categoryLabels[product.category]?.en || product.category
      : categoryLabels[product.category]?.tr || product.category;
  return (
    <>
      <Container className="mt-[50px] mb-[100px]">
        <div className="flex md:flex-row flex-col justify-around gap-3">
          <div className="max-w-[500px] md:mr-auto mx-auto">
            <Image
              width={420}
              height={500}
              src={product.imageUrl || '/assets/default.jpg'}
              alt={name || 'Product'}
            />
          </div>

          <div>
            <h2 className="sm:text-[26px] font-bold mb-2 text-[20px]">{name}</h2>
            <RichText
              html={description}
              className="lg:w-[500px] w-full sm:text-base text-[14px] mb-3"
            />
            <Link href="https://wa.me/+905308999912">
              <Button className="sm:w-[200px] w-[180px] sm:h-[50px] h-[40px] cursor-pointer">
                {locale === 'en' ? 'Contact us' : 'İletişime geç'}
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <TableProduct category={categoryLabel} size={product.size} koku={smellProduct} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

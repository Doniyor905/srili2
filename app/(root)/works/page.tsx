'use client';
import { Container } from '@/components/shared/container';
import { Footer } from '@/components/shared/footer';
import { Title } from '@/components/shared/title';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function WorkPage() {
  const { locale } = useLanguage();
  return (
    <>
      <Container>
        <Title
          text={locale === 'en' ? 'Our activities' : 'Bizim faaliyetlerimiz'}
          className="mt-[50px] mb-[40px]"
        />

        <p className="text-[18px] text-center text-[#7D7D7D]">
          {locale === 'en'
            ? 'Discover the care and passion behind beauty and elegance! We work with our reliable business partners, prioritizing quality in the world of cosmetics and perfumes. Each of our products comes to life with carefully selected ingredients and the work of our expert teams. Below you can find photos of our valuable partners and production processes. Starting from the purest ingredients, observe step by step how our perfumes and cosmetics products are meticulously prepared.'
            : 'Güzelliğin ve zarafetin arkasındaki özeni ve tutkuyu keşfedin! Biz, kozmetik ve parfüm dünyasında kaliteyi ön planda tutarak, güvenilir iş ortaklarımızla birlikte çalışıyoruz. Her ürünümüz, titizlikle seçilmiş içerikler ve uzman ekiplerimizin emeğiyle hayat buluyor. Aşağıda, iş birliği yaptığımız değerli partnerlerimizi ve üretim süreçlerimizi gösteren kareleri bulabilirsiniz. En saf içeriklerden başlayarak, parfüm ve kozmetik ürünlerimizin özenle nasıl hazırlandığını adım adım gözlemleyin.'}
        </p>
        <div className="flex justify-center flex-wrap gap-5 mt-[50px] mb-[150px]">
          <Image width={280} height={280} src="/assets/images/work/1.jpg" alt="" />
          <Image width={280} height={280} src="/assets/images/work/2.jpg" alt="" />
          <Image width={280} height={280} src="/assets/images/work/3.png" alt="" />
          <Image width={280} height={280} src="/assets/images/work/4.png" alt="" />
          <Image width={280} height={280} src="/assets/images/work/5.png" alt="" />
          <Image width={280} height={280} src="/assets/images/work/6.png" alt="" />
          <Image width={280} height={280} src="/assets/images/work/7.jpg" alt="" />
          <Image width={280} height={280} src="/assets/images/work/8.jpg" alt="" />
        </div>
      </Container>

      <Footer />
    </>
  );
}

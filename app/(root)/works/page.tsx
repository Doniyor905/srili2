'use client';
import { Container } from '@/components/shared/container';
import { Footer } from '@/components/shared/footer';
import { Title } from '@/components/shared/title';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { works } from '../../../constants/works';
export default function WorkPage() {
  const { locale } = useLanguage();
  return (
    <>
      <Container>
        <Title
          text={locale === 'en' ? 'Our activities' : 'Bizim faaliyetlerimiz'}
          className="mt-[50px] mb-[40px]  text-[20px] "
        />

        <p className="text-[18px] text-center text-[#7D7D7D]">
          {locale === 'en'
            ? 'Discover the care and passion behind beauty and elegance! We work with our reliable business partners, prioritizing quality in the world of cosmetics and perfumes. Each of our products comes to life with carefully selected ingredients and the work of our expert teams. Below you can find photos of our valuable partners and production processes. Starting from the purest ingredients, observe step by step how our perfumes and cosmetics products are meticulously prepared.'
            : 'Güzelliğin ve zarafetin arkasındaki özeni ve tutkuyu keşfedin! Biz, kozmetik ve parfüm dünyasında kaliteyi ön planda tutarak, güvenilir iş ortaklarımızla birlikte çalışıyoruz. Her ürünümüz, titizlikle seçilmiş içerikler ve uzman ekiplerimizin emeğiyle hayat buluyor. Aşağıda, iş birliği yaptığımız değerli partnerlerimizi ve üretim süreçlerimizi gösteren kareleri bulabilirsiniz. En saf içeriklerden başlayarak, parfüm ve kozmetik ürünlerimizin özenle nasıl hazırlandığını adım adım gözlemleyin.'}
        </p>
        <div>
          {works.map((item, index) => (
            <div className="mb-[50px]" key={index}>
              <h2 className="text-[30px] mt-[30px] mb-[10px] font-bold">{item.title}</h2>
              <div className="flex flex-wrap gap-4">
                {item.images.map((images, imgIndex) => (
                  <div key={imgIndex}>
                    <Image width={280} height={280} src={images} alt="" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
}

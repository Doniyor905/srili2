'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from './container';
import { Instagram, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  const { locale } = useLanguage();

  return (
    <div className="bg-secondary pt-7 pb-7">
      <Container>
        <div
          className={cn(
            'flex md:justify-around md:items-center justify-between md:flex-row flex-col md:gap-0 gap-5',
            className,
          )}>
          <div className="w-[280px]">
            <Image
              className="md:w-[200px] w-[120px]"
              src="/assets/images/footer-logo.png"
              alt="Logo"
              width={200}
              height={130}
            />
            <p className="mt-2 sm:text-[14px] text-[12px] text-[#9A9A9A]">
              {locale === 'en'
                ? 'Srılı is a premium perfume manufacturer that combines art, quality, and innovation. Over the years, we have created unique fragrances inspired by nature, culture, and modern trends.'
                : 'Srılı — sanat, kalite ve yeniliği bir araya getiren premium bir parfüm üreticisidir. Yıllar içinde doğadan, kültürden ve modern trendlerden ilham alan benzersiz kokular yarattık.'}
            </p>
          </div>
          <div className="flex w-[50%] gap-7 sm:flex-row   flex-col">
            <div>
              <h3 className="lg:text-2xl text-[18px] font-bold">
                {locale === 'en' ? 'Srılı Parfum' : 'Srılı Parfüm'}
              </h3>
              <ul className="mt-2">
                <li className="text-[#9A9A9A]">
                  <Link className="lg:text-base text-[14px]" href="/works">
                    {locale === 'en' ? 'Our activities' : 'Faaliyetlerimiz'}
                  </Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link className="lg:text-base text-[14px]" href="/contact">
                    {locale === 'en' ? 'Contact' : 'İletişim'}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="lg:text-2xl text-[18px] font-bold">
                {locale === 'en' ? 'Cateogories' : 'Kategoriler'}
              </h3>
              <ul className="mt-2">
                <li className="text-[#9A9A9A]">
                  <Link className="lg:text-base text-[14px]" href="/category/male">
                    {locale === 'en' ? 'Male parfums' : 'Erkek parfümler'}
                  </Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link className="lg:text-base text-[14px]" href="/category/female">
                    {locale === 'en' ? 'Famale parfums' : 'Kadın parfümle'}
                  </Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link className="lg:text-base text-[14px]" href="/category/unisex">
                    {locale === 'en' ? 'Unisex parfums' : 'Unisex parfümle'}
                  </Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link className="lg:text-base text-[14px]" href="/category/cosmetics">
                    Güzellik ve Bakım
                    {locale === 'en' ? 'Cosmetics' : 'Güzellik ve Bakım'}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="lg:text-2xl text-[18px] font-bold">
                {locale === 'en' ? 'Contact' : 'İletişim'}
              </h3>
              <ul className="mt-2">
                <li className="text-[#9A9A9A]">
                  <Link
                    className="lg:text-base text-[14px] flex items-center gap-2"
                    href="https://www.instagram.com/srilicosmetic/">
                    <Instagram size={16} />
                    @srilicosmetic
                  </Link>
                </li>
                <li className="lg:text-base text-[14px] text-[#9A9A9A] flex flex-col gap-2">
                  <Link className="flex items-center gap-2" href="https://wa.me/+905308999912">
                    <Image width={16} height={16} src="/assets/whatsapp-icon.svg" alt="Whatsapp" />0
                    <p>530 899 99 12</p>
                  </Link>
                  <Link className="flex items-center gap-2" href="https://wa.me/+905456814006">
                    <Image width={16} height={16} src="/assets/whatsapp-icon.svg" alt="Whatsapp" />
                    <p>0 545 681 40 06</p>
                  </Link>
                  <Link className="flex items-center gap-2" href="https://wa.me/+4474414477026">
                    <Phone size={16} />
                    <p>+44 7441 4477026</p>
                  </Link>
                </li>
                <li className="text-[#9A9A9A] lg:text-base text-[14px]">
                  <Link className="flex items-center gap-2" href="mailto:srilicosmetic@gmail.com">
                    <Mail size={16} />
                    srilicosmetic@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

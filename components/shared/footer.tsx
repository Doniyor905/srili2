import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from './container';
import { Instagram, Mail } from 'lucide-react';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="flex w-[50%] gap-7 sm:flex-row   flex-col">
            <div>
              <h3 className="lg:text-2xl text-[18px] font-bold">Srılı Parfüm</h3>
              <ul className="mt-2">
                <li className="text-[#9A9A9A]">
                  <Link className="lg:text-base text-[14px]" href="/works">
                    Faliyetimiz
                  </Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link className="lg:text-base text-[14px]" href="/contact">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="lg:text-2xl text-[18px] font-bold">Kategoriler</h3>
              <ul className="mt-2">
                <li className="text-[#9A9A9A]">
                  <Link className="lg:text-base text-[14px]" href="/category/male">
                    Erkek parfümler
                  </Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link className="lg:text-base text-[14px]" href="/category/female">
                    Kadın parfümler
                  </Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link className="lg:text-base text-[14px]" href="/category/unisex">
                    Unisex
                  </Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link className="lg:text-base text-[14px]" href="/category/cosmetics">
                    Güzellik ve Bakım
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="lg:text-2xl text-[18px] font-bold">İletişim</h3>
              <ul className="mt-2">
                <li className="text-[#9A9A9A]">
                  <Link
                    className="lg:text-base text-[14px] flex items-center gap-2"
                    href="https://www.instagram.com/srilicosmetic/">
                    <Instagram size={16} />
                    @srilicosmetic
                  </Link>
                </li>
                <li className="lg:text-base text-[14px] text-[#9A9A9A]">
                  <Link className="flex items-center gap-2" href="https://wa.me/+905308999912">
                    <Image width={16} height={16} src="/assets/whatsapp-icon.svg" alt="Whatsapp" />0
                    <p>530 899 99 12</p>
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

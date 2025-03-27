import Image from 'next/image';
import React from 'react';
import { Container } from './container';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const ProductBanners: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn('mt-[50px] mb-[50px]', className)}>
      <div className="flex justify-center items-center flex-col sm:flex-row gap-4">
        <div>
          <Link href="/product/58">
            <Image
              className="w-[370px] sm:w-[464px]"
              width={464}
              height={341}
              src="/assets/images/img.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link href="/product/1">
            <Image
              className="w-[370px] sm:w-[464px]"
              width={464}
              height={341}
              src="/assets/images/img2.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

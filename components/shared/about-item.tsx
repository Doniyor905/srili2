'use client';
import React from 'react';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { About } from '@prisma/client';
import { useLanguage } from '@/context/LanguageContext';
interface Props {
  className?: string;
  person: About;
}

export const AboutItem: React.FC<Props> = ({ person, className }) => {
  const { locale } = useLanguage();
  return (
    <div className={className}>
      <h2 className="lg:w-[500px] w-full font-bold mx-auto leading-9 lg:text-[35px] text-[28px] text-black text-center">
        {locale === 'en' ? person?.title_en : person?.title_tr}
      </h2>
      <div className="mt-10 flex justify-around  lg:flex-row flex-col">
        <div className="lg:w-[406px] w-full lg:mr-auto mx-auto ">
          <Image width={406} height={403} src={person?.imageUrl} alt="" />
          <div className="flex gap-4 items-center mt-4">
            {person?.imageUrlsBottom?.map((image) => (
              <Image
                className="lg:w-[406px] w-[200px] "
                key={image}
                width={406}
                height={403}
                src={image}
                alt="images Person"
              />
            ))}
          </div>
        </div>
        <div className="lg:w-[50%] w-full lg:mr-auto mx-auto lg:mt-0 mt-5">
          <h2 className="text-[25px] font-bold leading-8 ">
            {locale === 'en' ? person?.title_en : person?.title_tr}
          </h2>
          <h3 className="text-[#898989] font-bold mb-4 text-[25px] ">
            {locale === 'en' ? person?.name_en : person?.name_tr}
          </h3>
          <p>{locale === 'en' ? person.text_en : person.text_tr}</p>
          <div>
            {person.personId === 'eyup-demirbilek' ? (
              <Link className="flex gap-2 items-center mt-3.5" href="https://wa.me/+905456814006">
                <Phone /> +90 545 681 40 06
              </Link>
            ) : (
              <Link className="flex gap-2 items-center mt-3.5" href="https://wa.me/+905304120858">
                <Phone /> +90 530 412 08 58
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

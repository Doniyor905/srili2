'use client';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useClickAway } from 'react-use';
import { useLanguage } from '../../context/LanguageContext';
interface Props {
  className?: string;
}

export const Language: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const { locale, changeLanguage } = useLanguage();
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setOpen(false);
  });

  return (
    <div
      ref={ref}
      onClick={() => setOpen(!open)}
      className={cn('flex items-center justify-between gap-1 relative w-[100px]', className)}>
      {locale === 'en' ? (
        <Image src="/assets/images/en.png" alt="Tr" width={17} height={17} />
      ) : (
        <Image src="/assets/images/tr.png" alt="Tr" width={17} height={17} />
      )}
      <div className="flex items-center gap-1 cursor-pointer">
        <p className="font-semibold">{locale === 'en' ? 'English' : 'Türkçe'}</p>
        <ChevronDown size={16} />
      </div>
      <div
        className={cn(
          'top-7 p-3 -left-3 absolute w-[110px] bg-[#fcfcfc] shadow-2xl rounded-sm border border-[#eee] transition',
          open ? 'opacity-100 z-[99]' : 'opacity-0',
        )}>
        <div
          onClick={() => changeLanguage('en')}
          className="flex items-center justify-between cursor-pointer">
          <Image src="/assets/images/en.png" alt="Tr" width={17} height={17} />
          <p className="font-semibold">English</p>
        </div>

        <div
          onClick={() => changeLanguage('ru')}
          className="flex items-center justify-between cursor-pointer">
          <Image src="/assets/images/tr.png" alt="Tr" width={17} height={17} />
          <p className="font-semibold">Turkçe</p>
        </div>
      </div>
    </div>
  );
};

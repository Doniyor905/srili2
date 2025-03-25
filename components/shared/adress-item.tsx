import { cn } from '@/lib/utils';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
  title: string;
  address: string;
  phone: string;
}

export const AdressItem: React.FC<Props> = ({ title, address, phone, className }) => {
  return (
    <div
      className={cn(
        className,
        'sm:w-[280px] w-full sm:h-[172px] h-[200px]   border-3 border-[#bcbcbc] relative mt-[30px] p-[20px]',
      )}>
      <p className="absolute -top-[12px] left-[20px] bg-[#fafafa] pl-4 pr-4 text-[#bcbcbc]">
        {title}
      </p>
      <div className="flex flex-col justify-center h-full">
        <p className="text-[#878787] mb-3">{address}</p>
        <Link className="flex gap-2 items-center text-[#878787]" href="#!">
          <Phone size={16} />
          <p className="font-semibold">{phone}</p>
        </Link>
      </div>
    </div>
  );
};

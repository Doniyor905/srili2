import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
}

export const Language: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center gap-1 cursor-pointer', className)}>
      <Image src="/assets/images/tr.png" alt="Tr" width={17} height={17} />
      <p className="font-semibold">Türkçe</p>
      <ChevronDown size={16} />
    </div>
  );
};

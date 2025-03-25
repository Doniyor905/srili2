import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  text?: string;
}

export const Title: React.FC<Props> = ({ text, className }) => {
  return (
    <div
      className={cn(
        'text-primary sm:text-[35px] text-[25px] text-center tracking-[10px] font-semibold after:block after:w-[80px] after:m-auto after:h-[3px] after:bg-black',
        className,
      )}>
      {text}
    </div>
  );
};

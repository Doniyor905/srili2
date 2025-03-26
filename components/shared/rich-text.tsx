'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const RichText = ({ html, className }: { html: string; className: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn('prose max-w-none', className)} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

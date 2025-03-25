'use client';
import { useDebounce } from 'react-use';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import Link from 'next/link';
interface Props {
  className?: string;
}

export const InputSearch: React.FC<Props> = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = React.useState<Product[]>([]);
  const [open, setOpen] = React.useState(false);
  useDebounce(
    async () => {
      try {
        const response = await Api.searchProduct.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    },
    250,
    [searchQuery],
  );

  const clickProduct = () => {
    setOpen(false);
    setSearchQuery('');
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Search size={20} className="cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="text-center">Ürünü ara</DialogTitle>
          </DialogHeader>
          <input
            className="bg-[#f6f6f6] border border-[#a7a7a7] flex z-30 relative mx-auto w-full h-10 outline-0 pl-4 rounded-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Ara..."
          />
          <h3 className="text-center">
            {products.length == 0 ? 'Ürün bulunmadi' : 'Bulunan ürünler'}
          </h3>

          {products.map((product) => (
            <Link
              onClick={clickProduct}
              key={product.id}
              href={`/product/${product.id}`}
              className="flex gap-3 items-center w-full bg-[#e7e7e7] p-2 rounded-sm hover:bg-[#d2d2d2]">
              <Image
                className="rounded-full"
                width={40}
                height={40}
                src={product.imageUrl}
                alt=""
              />
              <h3>{product.name_tr}</h3>
            </Link>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

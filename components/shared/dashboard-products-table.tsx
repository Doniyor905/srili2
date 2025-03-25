'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react';

export function DashboardProductTable() {
  const [products, setProducts] = React.useState<Product[]>([]);
  React.useEffect(() => {
    async function fetchProduct() {
      const product = await Api.products.getAll();
      setProducts(product);
    }
    fetchProduct();
  }, []);
  const trunicateText = (str: string) => {
    if (str.length >= 10) {
      return str.substring(0, 35) + '...';
    }
  };
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[30px]">ID</TableHead>
          <TableHead className="w-[100px]">Ürün adı</TableHead>
          <TableHead>Ürün Tanımı</TableHead>
          <TableHead>Ürün Resimi</TableHead>
          <TableHead className="text-right">Ürün ayarları</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow className="h-[60px]" key={product.id}>
            <TableCell className="font-medium w">{product.id}</TableCell>
            <TableCell className="font-medium">{trunicateText(product.name_tr)}</TableCell>
            <TableCell>{trunicateText(product.description_tr)}</TableCell>
            <TableCell>{trunicateText(product.imageUrl)}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-3">
                <div className="cursor-pointer flex items-center justify-center w-[25px] h-[25px] rounded-[5px] bg-[#0051ff]">
                  <Eye className="text-white" size={14} />
                </div>
                <div className="cursor-pointer flex items-center justify-center w-[25px] h-[25px] rounded-[5px] bg-[#fff126]">
                  <Pencil className="text-black" size={14} />
                </div>
                <div className="cursor-pointer flex items-center justify-center w-[25px] h-[25px] rounded-[5px] bg-[red]">
                  <Trash2 className="text-white" size={14} />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

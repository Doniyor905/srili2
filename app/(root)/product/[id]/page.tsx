import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import ProductClient from './product-client';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });

  if (!product) {
    return notFound();
  }

  return <ProductClient product={product} />;
}

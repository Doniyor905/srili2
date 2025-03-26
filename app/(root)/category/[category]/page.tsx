import { Container } from '@/components/shared/container';
import { ProductCard } from '@/components/shared/product-card';
import { prisma } from '@/prisma/prisma-client';
import { Category } from '@prisma/client';
import { notFound } from 'next/navigation';
import { categoryLabels, validCategories } from '@/constants/categories';
import { JSX } from 'react';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<JSX.Element> {
  const { category } = await params;
  const categorySlug = category.toUpperCase();

  if (!validCategories.includes(categorySlug)) {
    return notFound();
  }
  const products = await prisma.product.findMany({
    where: { category: categorySlug as Category },
  });

  return (
    <Container>
      <h2 className="text-center mt-10 text-3xl font-bold text-primary">
        {categoryLabels[categorySlug]}
      </h2>
      <div className="mt-10 flex sm:justify-center justify-between gap-4 flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.name_tr}
            text={product.description_tr}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </Container>
  );
}

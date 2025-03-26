'use client';
import React from 'react';
import { Categories } from './categories';
import { Title } from './title';
import { Container } from './container';
import { ProductCard } from './product-card';
import { Product } from '@prisma/client';
import { Api } from '@/services/api-client';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

export const ProductGroupList: React.FC = () => {
  const [product, setProduct] = React.useState<Product[]>([]);
  const [activeCategory, serActiveCategory] = React.useState<string | null>(null);
  const [visibleCount, setVisibleCount] = React.useState(8);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const product = await Api.products.getAll();
        setProduct(product);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);

  const handeleCategorySelect = async (category: string | null): Promise<void> => {
    serActiveCategory(category);

    if (category) {
      const filtered = await Api.categoryProduct.getByCategory(category);
      setProduct(filtered);
    } else {
      const allProducts = await Api.products.getAll();
      setProduct(allProducts);
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const visibleProduct = product.slice(0, visibleCount);
  return (
    <div className="mt-10">
      <Container>
        <Title text="Ürünlerimiz" />
        <Categories
          onSelect={handeleCategorySelect}
          activeCategory={activeCategory}
          className="mt-10"
        />
        <div className="flex flex-wrap sm:gap-[20px] gap-[10px] mt-7 sm:justify-center justify-between">
          {isLoading
            ? Array(8)
                .fill(0)
                .map((_, index) => (
                  <div key={index}>
                    <Skeleton className="bg-[#eeeeee] w-[280px] h-[250px]" />
                    <Skeleton className="bg-[#eeeeee] w-[280px] h-[50px] mt-3" />
                  </div>
                ))
            : visibleProduct.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  title={item.name_tr}
                  text={item.description_tr}
                  imageUrl={item.imageUrl}
                />
              ))}
        </div>

        {visibleCount < product.length && (
          <div className="flex justify-center mt-5">
            <Button
              onClick={handleShowMore}
              variant="outline"
              className="cursor-pointer w-[180px] h-[40px]">
              Daha Fazla
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

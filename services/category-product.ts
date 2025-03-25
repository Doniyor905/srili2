import { Product } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const getByCategory = async (category: string): Promise<Product[]> => {
  return (await axiosInstance.get<Product[]>(`${ApiRoutes.PRODUCTS_CATEGORY}?category=${category}`))
    .data;
};

import { Product } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const getAll = async (): Promise<Product[]> => {
  return (await axiosInstance.get<Product[]>(ApiRoutes.PRODUCTS)).data;
};

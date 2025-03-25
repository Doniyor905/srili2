import { About } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const getAll = async (): Promise<About[]> => {
  return (await axiosInstance.get<About[]>(ApiRoutes.ABOUT)).data;
};

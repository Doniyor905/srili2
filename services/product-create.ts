import { axiosInstance } from './instance';

export const ProductCreate = {
  create: async (data: any) => {
    return axiosInstance.post('/admin/products', data);
  },
};

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ✅ Функция для получения данных о `About` на основе выбранного языка
export const getAboutData = async (locale: 'en' | 'tr') => {
  const abouts = await prisma.about.findMany();

  return abouts.map((item) => ({
    personId: item.personId,
    title: locale === 'en' ? item.title_en : item.title_tr,
    name: locale === 'en' ? item.name_en : item.name_tr,
    text: locale === 'en' ? item.text_en : item.text_tr,
    imageUrl: item.imageUrl,
    imageUrlsBottom: item.imageUrlsBottom,
  }));
};

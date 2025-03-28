export const categoryLabels: Record<string, { en: string; tr: string }> = {
  MALE: {
    en: 'Men Perfumes',
    tr: 'Erkek Parfümler',
  },
  FEMALE: {
    en: 'Women Perfumes',
    tr: 'Kadın Parfümler',
  },
  UNISEX: {
    en: 'Unisex Perfumes',
    tr: 'Unisex Parfümler',
  },
  COSMETICS: {
    en: 'Beauty & Care',
    tr: 'Güzellik & Bakım',
  },
};

export const validCategories = Object.keys(categoryLabels);

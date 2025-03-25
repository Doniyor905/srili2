import { Category } from '@prisma/client';

export const product = [
  {
    name_tr: 'Srılı parfüme Moon Light',
    name_en: 'Srılı parfüme Moon Light',
    description_tr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description_en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    category: Category.MALE,
    imageUrl: '/assets/images/product.jpg',
  },
  {
    name_tr: 'Srılı parfüme Magic',
    name_en: 'Srılı parfüme Magic',
    description_tr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description_en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    category: Category.MALE,
    imageUrl: '/assets/images/products/1.jpg',
  },
  {
    name_tr: 'Srılı parfüme Tears of Gold',
    name_en: 'Srılı parfüme Tears of Gold',
    description_tr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description_en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    category: Category.FEMALE,
    imageUrl: '/assets/images/products/2.jpg',
  },
  {
    name_tr: 'Srılı parfüme Asalah',
    name_en: 'Srılı parfüme Asalah',
    description_tr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description_en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    category: Category.FEMALE,
    imageUrl: '/assets/images/products/3.jpg',
  },
  {
    name_tr: 'Facial Aha + Bha Peeling serum',
    name_en: 'Facial Aha + Bha Peeling serum',
    description_tr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description_en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    category: Category.UNISEX,
    imageUrl: '/assets/images/products/4.jpg',
  },
  {
    name_tr: 'Facial moisturizing serum',
    name_en: 'Face Micellar Water Advanced Facial Repair',
    description_tr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description_en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    category: Category.UNISEX,
    imageUrl: '/assets/images/products/5.jpg',
  },
  {
    name_tr: 'Face Micellar Water Advanced Facial Repair',
    name_en: 'Face Micellar Water Advanced Facial Repair',
    description_tr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description_en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    category: Category.COSMETICS,
    imageUrl: '/assets/images/products/6.jpg',
  },
  {
    name_tr: 'Whitening body cream',
    name_en: 'Whitening body cream',
    description_tr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description_en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    category: Category.COSMETICS,
    imageUrl: '/assets/images/products/7.jpg',
  },
];

export const AboutGallery = [
  {
    imageUrl: '/assets/images/AboutGallery/1.jpg',
  },
  {
    imageUrl: '/assets/images/AboutGallery/2.jpg',
  },
  {
    imageUrl: '/assets/images/AboutGallery/3.jpg',
  },
  {
    imageUrl: '/assets/images/AboutGallery/4.jpg',
  },
];

export const personal = [
  {
    personId: 'eyup-demirbilek',
    title: 'Sırılı Parfüm Yönetim Kurulu Başkanı',
    name: 'Eyüp Demirbilek',
    imageUrl: '/assets/images/eyup.jpg',
    imageUrlsBottom: ['/assets/images/about/eyup-1.jpg', '/assets/images/about/eyup-2.jpg'],
    text: '1992 yılında Muş, Merkez’de dünyaya gelen Eyüp Demirbilek, girişimcilik yolculuğuna genç yaşlarda atıldı. Çalışma hayatına inşaat sektöründe başlayan Eyüp Bey, Ankara ve İstanbul’da birçok projeye imza attı. 15 yılı aşkın süredir İstanbul’da yaşayan ve iş dünyasında geniş bir yelpazede faaliyet gösteren Eyüp Demirbilek, sadece inşaat sektöründe değil, mobilya üretimi ve kozmetik sanayisinde de güçlü bir varlık göstermektedir. \n İstanbul, Esenyurt’ta bulunan fabrikasında, kendi markası olan sırılı Parfüm adı altında 200’ü aşkın ürünle kozmetik sektörüne yeni bir soluk getirmektedir. Parfümler, cilt serumları, vücut losyonları ve özel bakım ürünleriyle sektörde fark yaratmayı hedefleyen Eyüp Demirbilek, kalite ve inovasyonu ön planda tutmaktadır. \n Bununla birlikte Çerkezköy’de faaliyet gösteren bidon üretim tesisinde de endüstriyel üretime katkı sağlamaktadır. Üretimden yönetime kadar birçok alanda aktif rol alan Eyüp Demirbilek, iş hayatındaki kararlılığı ve vizyonuyla markalarını büyütmeye devam etmektedir. \n Üç çocuk babası olan Eyüp Bey, ailesine ve işine duyduğu bağlılıkla başarı yolculuğunu sürdürmektedir. \n Teşekkür ederim.',
  },

  {
    personId: 'aykut-aksu',
    title: 'Sırılı Parfüm Yönetim Kurulu Üyesi',
    name: 'Aykut Aksu',
    imageUrl: '/assets/images/aykut.jpg',
    imageUrlsBottom: ['/assets/images/about/eyup-1.jpg', '/assets/images/about/aykut-1.jpg'],
    text: '23 Nisan 1989’da Sivas, Aksu Köyü’nde dünyaya gelen Aykut Aksu, yaklaşık 20 yıldır İstanbul’da ikamet etmektedir. Girişimcilik yolculuğunda farklı sektörlerde önemli adımlar atmış, iş dünyasında güçlü bir varlık göstermiştir \n Şu anda Eyüp Demirbilek ile birlikte Esenyurt’ta bulunan fabrikada ortak olarak çalışmakta ve kozmetik sektörüne yön veren önemli projelere imza atmaktadır. Sırılı Parfüm markası altında 200’ü aşkın kozmetik ürün ile sektöre yenilikçi bir bakış açısı kazandırmakta, parfüm, cilt serumları, vücut losyonları ve kişisel bakım ürünleriyle kaliteyi ön planda tutmaktadır. \n Aile hayatına büyük değer veren Aykut Aksu, bir kız ve iki oğul babasıdır. İş hayatındaki kararlılığı ve vizyonuyla sektörde büyümeye devam etmektedir. \n Teşekkür ederim.',
  },
];

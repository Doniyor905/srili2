import { AboutBlog } from '@/components/shared/about-blog';
import { Footer } from '@/components/shared/footer';
import { HeaderSlider } from '@/components/shared/header-slider';
import { ProductBanners } from '@/components/shared/product-banners';
import { ProductGroupList } from '@/components/shared/product-group-list';

export default function Home() {
  return (
    <>
      <HeaderSlider />
      <AboutBlog />
      <ProductGroupList />
      <ProductBanners />
      <Footer />
    </>
  );
}

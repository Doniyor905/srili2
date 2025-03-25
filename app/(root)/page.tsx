import { AboutBlog } from '@/components/shared/about-blog';
import { Footer } from '@/components/shared/footer';
import { HeaderSlider } from '@/components/shared/header-slider';
import { ProductGroupList } from '@/components/shared/product-group-list';

export default function Home() {
  return (
    <>
      <HeaderSlider />
      <ProductGroupList />
      <AboutBlog />
      <Footer />
    </>
  );
}

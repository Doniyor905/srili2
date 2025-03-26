import { Container } from '@/components/shared/container';
import { Footer } from '@/components/shared/footer';
import { RichText } from '@/components/shared/rich-text';
import { TableProduct } from '@/components/shared/table-product';
import { Button } from '@/components/ui/button';
import { categoryLabels } from '@/constants/categories';
import { prisma } from '@/prisma/prisma-client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });

  if (!product) {
    return notFound();
  }
  return (
    <>
      <Container className="mt-[50px] mb-[100px]">
        <div className="flex md:flex-row flex-col justify-around  gap-3">
          <div className="max-w-[500px] md:mr-auto mx-auto ">
            <Image width={420} height={500} src={product.imageUrl} alt={product.name_tr} />
          </div>
          <div>
            <h2 className="sm:text-[26px] font-bold mb-2  text-[20px]">{product.name_tr}</h2>
            <RichText
              html={product.description_tr}
              className="lg:w-[500px] w-full sm:text-base text-[14px] mb-3"
            />
            <Link href="#!">
              <Button className="sm:w-[200px] w-[180px] sm:h-[50px] h-[40px] cursor-pointer">
                İletişime geç
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <TableProduct
            category={categoryLabels[product.category]}
            size={product.size}
            koku={product.smellProduct_tr}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
}

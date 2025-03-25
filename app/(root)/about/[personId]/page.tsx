import { Container } from '@/components/shared/container';
import { Footer } from '@/components/shared/footer';
import { prisma } from '@/prisma/prisma-client';
import Image from 'next/image';
import React, { JSX } from 'react';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ personId: string }>;
}): Promise<JSX.Element> {
  try {
    const { personId } = await params;

    const person = await prisma.about.findFirst({
      where: { personId: personId },
    });

    if (!person) {
      return <p>Bulunmadi</p>;
    }
    return (
      <>
        <Container className="mt-[100px] mb-[100px]">
          <h2 className="lg:w-[500px] w-full font-bold mx-auto leading-9 lg:text-[35px] text-[28px] text-black text-center">
            {person?.title}
          </h2>
          <div className="mt-10 flex justify-around  lg:flex-row flex-col">
            <div className="lg:w-[406px] w-full lg:mr-auto mx-auto ">
              <Image width={406} height={403} src={person?.imageUrl} alt="" />
              <div className="flex gap-4 mt-4">
                {person?.imageUrlsBottom?.map((image) => (
                  <Image
                    className="lg:w-[406px] w-[200px]"
                    key={image}
                    width={406}
                    height={403}
                    src={image}
                    alt="images Person"
                  />
                ))}
              </div>
            </div>
            <div className="lg:w-[50%] w-full lg:mr-auto mx-auto lg:mt-0 mt-5">
              <h2 className="text-[25px] font-bold leading-8 ">{person?.title}</h2>
              <h3 className="text-[#898989] font-bold mb-4 text-[25px] ">{person?.name}</h3>
              <p>{person?.text}</p>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
  } catch (error) {
    console.log(error);
    return <p>Sunucu hatası oluştu</p>;
  }
}

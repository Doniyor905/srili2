import { AdressItem } from '@/components/shared/adress-item';
import { Container } from '@/components/shared/container';
import { Footer } from '@/components/shared/footer';
import { ContactForm } from '@/components/shared/form-contact';
import { Title } from '@/components/shared/title';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <Container>
        <Title text="İletişim bilgilerimiz" className="mt-[50px]" />
        <div className="flex lg:justify-between justify-center lg:flex-row flex-col mt-[50px] mb-[100px] gap-[20px]">
          <div className="sm:w-[600px] w-full mx-auto">
            <ContactForm />
            <div className="flex sm:flex-row flex-col justify-between gap-[10px]">
              <AdressItem
                title="İstanbul"
                address="Sırılı Parfüm ve kozmetik SAN. TIC. LTD.
                      STi Orhan Gazi Mah. 1714. Sk. 
                      No: 21 Esenyurt/İstanbul Esenyurt "
                phone="0 (500) 555 55 55 "
              />

              <AdressItem
                title="Tekirdağ"
                address="Veliköy Mah. Sanayi Bulvan No: 74
              İç Kapı No: Z01 Çerezköy / Tekirdağ"
                phone="0 (500) 555 55 55 "
              />
            </div>
          </div>
          <div className="sm:w-[600px] w-full mx-auto">
            <div className="flex lg:flex-col felx-row gap-5 items-end">
              <div className="">
                <h2 className="text-[20px] font-bold mb-4">İstanbul</h2>
                <Image width={300} height={300} src="/assets/placheholder.jpg" alt="" />
              </div>

              <div>
                <h2 className="text-[20px] font-bold mb-4">İstanbul</h2>
                <Image width={300} height={300} src="/assets/placheholder.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

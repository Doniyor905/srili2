import type { Metadata } from 'next';
import { Nav } from '@/components/shared/nav';
export const metadata: Metadata = {
  title: 'Srili Parfüm',
  description: 'Srılı Parfümes — her notasında stil ve zarafet taşıyan özgün kokular.',
  keywords: [
    'parfümler',
    'kadın parfümleri',
    'erkek parfümleri',
    'unisex parfümler',
    'kozmetik',
    'güzellik',
    'Srılı Parfümes',
    'kokular',
    'parfümeri',
    'kişisel bakım',
  ],
  openGraph: {
    title: 'Srılı Parfümes',
    description: 'Srılı Parfümes — her notasında stil ve zarafet taşıyan özgün kokular.',
    url: 'https://www.sriliparfume.com.tr/',
    siteName: 'Srılı Parfümes',
    images: [
      {
        url: '/assets/images/favicon.png', // Замени на ссылку к изображению
        width: 110,
        height: 110,
        alt: 'Srılı Parfümes',
      },
    ],
    type: 'website',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/assets/images/favicon.png',
  },
  other: {
    'google-site-verification': 'LJMEj3ctEjjavVf2uf96bWS7ijXqXru77yT4VkXv7Nc',
  },
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
}

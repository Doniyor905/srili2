import type { Metadata } from 'next';
import { Nav } from '@/components/shared/nav';
export const metadata: Metadata = {
  title: 'Srili Parfüm',
  description: 'Güzelliğin ve zarafetin arkasındaki özeni ve tutkuyu keşfedin!',
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

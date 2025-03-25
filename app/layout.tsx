import { Poppins } from 'next/font/google';
import './globals.css';

const poppinsSans = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link data-rh="true" rel="icon" href="/assets/images/favicon.png" />
      </head>
      <body className={`${poppinsSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

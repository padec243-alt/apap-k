import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Montserrat, Roboto } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Preloader } from '@/components/common/preloader';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-headline',
});
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'APAP-K',
  description: "Association pour la promotion et l'autopromotion des populations du Kasaï.",
  icons: {
    icon: 'https://res.cloudinary.com/dy73hzkpm/image/upload/v1763455448/favicon_tu665g.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn(roboto.variable, montserrat.variable)}>
      <body className="font-sans antialiased">
        <Preloader />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

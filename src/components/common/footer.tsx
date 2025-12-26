import { Twitter, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'Qui sommes-nous ?' },
  { href: '/projets', label: 'Nos Projets' },
  { href: '/partenaires', label: 'Partenaires' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:gap-2">
             <Link href="/" className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-md">
                <Image
                    src="https://res.cloudinary.com/dy73hzkpm/image/upload/v1763389734/logo_apap-k_tkx1cb.png"
                    alt="APAP-K Logo"
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                />
                </div>
                <span className="font-headline text-xl font-bold text-primary">APAP-K</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              Solidarité et promotion culturelle entre Lyon et le Kasaï.
            </p>
          </div>
          
          <div className='text-center md:text-left'>
            <h3 className="font-headline font-semibold text-primary">Plan du site</h3>
            <ul className="mt-2 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col items-center text-center md:items-end">
            <h3 className="font-headline font-semibold text-primary">Suivez-nous</h3>
            <div className="flex items-center space-x-4 mt-2">
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Twitter />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center">
           <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} APAP-K. Tous droits réservés.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Powered by : <span className="font-semibold">MboMa & Co.</span>
            </p>
        </div>
      </div>
    </footer>
  );
}

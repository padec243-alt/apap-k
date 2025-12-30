'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Briefcase,
  Globe,
  Heart,
  Home,
  Info,
  Menu,
  Mail,
  Newspaper,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Accueil', icon: <Home /> },
  { href: '/about', label: 'Qui sommes-nous ?', icon: <Info /> },
  { href: '/projets', label: 'Nos Projets', icon: <Briefcase /> },
  { href: '/actualites', label: 'Actualités', icon: <Newspaper /> },
  { href: '/partenaires', label: 'Partenaires', icon: <Users /> },
  { href: '/contact', label: 'Contact', icon: <Mail /> },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-24 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center">
          <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-background shadow-xl border-3 border-primary/30">
            <Image
              src="https://res.cloudinary.com/dy73hzkpm/image/upload/v1763389734/logo_apap-k_tkx1cb.png"
              alt="APAP-K Logo"
              width={96}
              height={96}
              className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover"
            />
          </div>
          <span className="ml-4 font-headline text-3xl sm:text-4xl font-extrabold text-primary drop-shadow-md">APAP-K</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe />
                <span className="sr-only">Changer de langue</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Français</DropdownMenuItem>
              <DropdownMenuItem disabled>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild className="hidden sm:flex bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#">
              <Heart className="mr-2" />
              Faire un don
            </Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
                <SheetDescription className="sr-only">Navigation principale du site APAP-K</SheetDescription>
                <div className="flex h-full flex-col">
                  <div className="border-b p-4">
                    <Link href="/" onClick={() => setSheetOpen(false)} className="flex items-center">
                       <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-md">
                        <Image
                          src="https://res.cloudinary.com/dy73hzkpm/image/upload/v1763389734/logo_apap-k_tkx1cb.png"
                          alt="APAP-K Logo"
                          width={56}
                          height={56}
                          className="h-14 w-14 rounded-full object-cover"
                        />
                      </div>
                      <span className="ml-3 font-headline text-xl font-bold text-primary">APAP-K</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-4 p-4">
                    {navLinks.map(({ href, label, icon }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={() => setSheetOpen(false)}
                        className={cn(
                          'flex items-center gap-3 rounded-md p-2 text-base font-medium transition-colors hover:bg-muted',
                          pathname === href ? 'bg-muted text-primary' : 'text-muted-foreground'
                        )}
                      >
                        {icon}
                        {label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-4 border-t">
                     <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href="#">
                        <Heart className="mr-2" />
                        Faire un don
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

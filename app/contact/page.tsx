import { ContactForm } from "./_components/contact-form";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Contactez-nous
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Une question, une proposition de partenariat ou simplement envie de nous dire bonjour ? Remplissez le formulaire ci-dessous.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Adresses à gauche */}
        <div className="w-full space-y-6">
          {/* France */}
          <div className="bg-primary/5 rounded-xl p-5">
            <h2 className="font-headline text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              France - Siège
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  APAP-K<br />
                  Fontaines-sur-Saône<br />
                  69270, France
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">+33 (0)4 XX XX XX XX</p>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">contact@apap-k.org</p>
              </div>
            </div>
          </div>

          {/* Mbuji-Mayi */}
          <div className="bg-accent/10 rounded-xl p-5">
            <h2 className="font-headline text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              RDC - Mbuji-Mayi
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  APAP-K Kasaï<br />
                  Mbuji-Mayi<br />
                  Kasaï-Oriental, RDC
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">+243 XX XXX XXXX</p>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">mbujimayi@apap-k.org</p>
              </div>
            </div>
          </div>

          {/* Kinshasa */}
          <div className="bg-primary/5 rounded-xl p-5">
            <h2 className="font-headline text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              RDC - Kinshasa
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  APAP-K Kinshasa<br />
                  Kinshasa<br />
                  RDC
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">+243 XX XXX XXXX</p>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">kinshasa@apap-k.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire au milieu - agrandi */}
        <div className="bg-card rounded-xl border shadow-lg p-6 lg:p-8 lg:col-span-1">
          <h2 className="font-headline text-2xl font-bold text-primary mb-6">
            Envoyez-nous un message
          </h2>
          <ContactForm />
        </div>

        {/* Logo à droite - très grand avec cercle */}
        <div className="flex justify-center items-center h-full">
          <div className="flex h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 items-center justify-center rounded-full bg-background shadow-2xl border-4 border-primary/30">
            <Image
              src="https://res.cloudinary.com/dy73hzkpm/image/upload/v1763389734/logo_apap-k_tkx1cb.png"
              alt="APAP-K Logo"
              width={384}
              height={384}
              className="h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

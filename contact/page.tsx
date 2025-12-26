import { ContactForm } from "./_components/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Contactez-nous
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Une question, une proposition de partenariat ou simplement envie de nous dire bonjour ? Remplissez le formulaire ci-dessous.
        </p>
      </div>

      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}

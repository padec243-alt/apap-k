// On génère dynamiquement la liste des 30 logos (en commençant par logo2 car logo1 est une capture d'écran)
const partners = Array.from({ length: 29 }, (_, i) => `/partenaires/logo${i + 2}.png`);

export default function PartnersPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Nos Partenaires
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Découvrez les organisations qui nous soutiennent et partagent nos valeurs.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
        {partners.map((logo, idx) => (
          <div key={logo} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img
              src={logo}
              alt={`Logo partenaire ${idx + 1}`}
              className="h-20 w-auto object-contain transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

import { EnhanceForm } from './_components/enhance-form';

export default function EnhancePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Amélioration de Contenu IA
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Utilisez notre outil d'intelligence artificielle pour obtenir des suggestions
          et améliorer la clarté et l'impact de vos textes.
        </p>
      </div>
      <div className="mt-12">
        <EnhanceForm />
      </div>
    </div>
  );
}

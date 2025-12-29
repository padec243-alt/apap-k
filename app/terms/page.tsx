'use client';

import { motion } from 'framer-motion';
import { FileText, Mail, MapPin, Phone } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-4">
              <FileText className="h-12 w-12 sm:h-16 sm:w-16" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Conditions d'Utilisation
            </h1>
            <p className="text-base sm:text-lg text-green-100 max-w-2xl mx-auto">
              Veuillez lire attentivement ces conditions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose dark:prose-invert max-w-none"
          >
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                1. Acceptation des Conditions
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                En accédant et en utilisant ce Site, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                2. Utilisation Licite
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Vous acceptez d'utiliser ce Site uniquement à des fins légales et de manière à ne pas violer les droits d'autrui ou à restreindre leur utilisation et leur jouissance du Site. Le comportement prohibé comprend :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Harceler ou causer de la détresse ou de l'inconfort</li>
                <li>Offenser la décence</li>
                <li>Perturber le flux normal de la conversation au sein de notre Site</li>
                <li>Violer les droits d'auteur ou d'autres droits de propriété intellectuelle</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                3. Contenu Utilisateur
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Si vous soumettez, publiez ou affichez du contenu sur notre Site, vous accordez à APAP-K une licence mondiale, non exclusive, libre de droits pour utiliser, reproduire, adapter, publier et distribuer ce contenu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                4. Limitation de Responsabilité
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Le Site est fourni "tel quel" sans garantie d'aucune sorte. APAP-K ne sera pas responsable des dommages directs, indirects, accidentels, spéciaux ou consécutifs résultant de votre utilisation ou de votre incapacité à utiliser le Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                5. Propriété Intellectuelle
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Tout le contenu du Site, y compris les textes, graphiques, logos, images et logiciels, est la propriété de APAP-K ou de ses fournisseurs de contenu et est protégé par les lois internationales sur les droits d'auteur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                6. Liens Externes
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Notre Site peut contenir des liens vers des sites externes. APAP-K n'est pas responsable du contenu, de la précision ou des pratiques de ces sites externes. L'inclusion d'un lien n'implique pas l'approbation du site lié.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                7. Modification des Conditions
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                APAP-K se réserve le droit de modifier ces conditions à tout moment. Les modifications seront effectives dès leur publication sur le Site. Votre utilisation continue du Site après la publication des modifications constitue votre acceptation des conditions modifiées.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                8. Résiliation
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                APAP-K peut résilier ou suspendre votre accès au Site à tout moment, sans préavis, pour violation de ces conditions ou pour toute autre raison.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                9. Droit Applicable
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Ces conditions sont régies par et construites conformément aux lois de la France, et vous acceptez irrévocablement la juridiction exclusive des tribunaux situés en France.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                10. Contact
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter :
              </p>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span>contact@apap-k.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span>Fontaines-sur-Saône, France</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>+33 (0)4 XX XX XX XX</span>
                </div>
              </div>
            </section>

            <section className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-900/30">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

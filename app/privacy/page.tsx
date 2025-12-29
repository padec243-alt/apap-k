'use client';

import { motion } from 'framer-motion';
import { Shield, Mail, MapPin, Phone } from 'lucide-react';

export default function PrivacyPage() {
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
              <Shield className="h-12 w-12 sm:h-16 sm:w-16" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-base sm:text-lg text-green-100 max-w-2xl mx-auto">
              Votre vie privée est importante pour nous
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
                1. Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                APAP-K ("nous", "notre" ou "nos") exploite le site web apap-k.org (le "Site"). Cette page vous informe de nos politiques concernant la collecte, l'utilisation et la divulgation de données personnelles lorsque vous utilisez notre Site et les choix que vous avez associés à ces données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                2. Collecte et Utilisation des Données
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Nous collectons plusieurs types de données à différentes fins pour vous fournir et améliorer notre Service :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Données de contact (nom, email, téléphone)</li>
                <li>Données de navigation (pages visitées, durée de visite)</li>
                <li>Données techniques (adresse IP, type de navigateur)</li>
                <li>Données de préférences (langue, thème)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                3. Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Nous utilisons des cookies pour améliorer votre expérience sur notre Site. Les cookies sont de petits fichiers de données stockés sur votre appareil. Vous pouvez contrôler l'utilisation des cookies via les paramètres de votre navigateur.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Types de cookies utilisés :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mt-2">
                <li><strong>Essentiels :</strong> Nécessaires au fonctionnement du Site</li>
                <li><strong>Analyse :</strong> Nous aident à comprendre comment vous utilisez le Site</li>
                <li><strong>Marketing :</strong> Utilisés pour vous proposer du contenu personnalisé</li>
                <li><strong>Préférences :</strong> Mémorisent vos choix</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                4. Sécurité des Données
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                La sécurité de vos données est importante pour nous, mais rappelez-vous qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est 100% sécurisée. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos données personnelles, nous ne pouvons pas garantir sa sécurité absolue.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                5. Vos Droits
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Vous avez le droit de :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Accéder à vos données personnelles</li>
                <li>Corriger vos données inexactes</li>
                <li>Demander la suppression de vos données</li>
                <li>Vous opposer au traitement de vos données</li>
                <li>Demander la portabilité de vos données</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                6. Contact
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter :
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

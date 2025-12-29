'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const checkCookieConsent = () => {
      const lastConsent = localStorage.getItem('cookieConsentTime');
      const consentGiven = localStorage.getItem('cookieConsent');

      if (!lastConsent || !consentGiven) {
        setIsVisible(true);
        return;
      }

      const lastConsentTime = parseInt(lastConsent, 10);
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000;

      if (now - lastConsentTime > twentyFourHours) {
        setIsVisible(true);
      }
    };

    checkCookieConsent();
  }, []);

  const handleAcceptAll = () => {
    const allPreferences: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveCookieConsent(allPreferences);
  };

  const handleRejectAll = () => {
    const minimalPreferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    saveCookieConsent(minimalPreferences);
  };

  const handleAcceptPartial = () => {
    saveCookieConsent(preferences);
  };

  const saveCookieConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentTime', Date.now().toString());
    setIsVisible(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto">
            {!showSettings ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl border border-green-200 dark:border-green-900/30 overflow-hidden"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                          Respect de votre vie privée
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          Nous utilisons des cookies pour améliorer votre expérience
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRejectAll()}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Nous utilisons des cookies essentiels pour le fonctionnement du site, ainsi que des cookies d'analyse et de marketing pour améliorer votre expérience. Vous pouvez personnaliser vos préférences ou consulter notre{' '}
                    <Link
                      href="/privacy"
                      className="text-green-600 dark:text-green-400 hover:underline font-semibold"
                    >
                      politique de confidentialité
                    </Link>
                    .
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      onClick={handleRejectAll}
                      variant="outline"
                      size="sm"
                      className="text-xs sm:text-sm"
                    >
                      Rejeter tout
                    </Button>
                    <Button
                      onClick={() => setShowSettings(true)}
                      variant="outline"
                      size="sm"
                      className="text-xs sm:text-sm"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Personnaliser
                    </Button>
                    <Button
                      onClick={handleAcceptAll}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm"
                    >
                      <Check className="mr-2 h-4 w-4" />
                      Accepter tout
                    </Button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl border border-green-200 dark:border-green-900/30 overflow-hidden"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      Paramètres des cookies
                    </h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Cookie Options */}
                  <div className="space-y-4 mb-6">
                    {/* Necessary */}
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            Cookies essentiels
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Nécessaires au fonctionnement du site. Toujours activés.
                          </p>
                        </div>
                        <div className="ml-4 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                          <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                            Activé
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Analytics */}
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            Cookies d'analyse
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Nous aident à comprendre comment vous utilisez le site pour l'améliorer.
                          </p>
                        </div>
                        <label className="ml-4 flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={() => togglePreference('analytics')}
                            className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          />
                        </label>
                      </div>
                    </div>

                    {/* Marketing */}
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            Cookies marketing
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Utilisés pour vous proposer du contenu personnalisé et des publicités pertinentes.
                          </p>
                        </div>
                        <label className="ml-4 flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={() => togglePreference('marketing')}
                            className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          />
                        </label>
                      </div>
                    </div>

                    {/* Preferences */}
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            Cookies de préférences
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Mémorisent vos choix pour personnaliser votre expérience.
                          </p>
                        </div>
                        <label className="ml-4 flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.preferences}
                            onChange={() => togglePreference('preferences')}
                            className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 mb-6 text-xs sm:text-sm">
                    <Link
                      href="/privacy"
                      className="text-green-600 dark:text-green-400 hover:underline font-semibold"
                    >
                      Politique de confidentialité
                    </Link>
                    <Link
                      href="/terms"
                      className="text-green-600 dark:text-green-400 hover:underline font-semibold"
                    >
                      Conditions d'utilisation
                    </Link>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      onClick={handleRejectAll}
                      variant="outline"
                      size="sm"
                      className="text-xs sm:text-sm"
                    >
                      Rejeter tout
                    </Button>
                    <Button
                      onClick={handleAcceptPartial}
                      variant="outline"
                      size="sm"
                      className="text-xs sm:text-sm"
                    >
                      Approuver la sélection
                    </Button>
                    <Button
                      onClick={handleAcceptAll}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm"
                    >
                      <Check className="mr-2 h-4 w-4" />
                      Accepter tout
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

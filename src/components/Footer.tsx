import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-white mb-4">
              BGM <span className="text-yellow-500">Débarras</span> Nettoyage
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Spécialiste du débarras et du nettoyage en Île-de-France depuis plus de 10 ans. 
              Intervention rapide, service professionnel et tarifs transparents pour tous vos 
              besoins de débarras résidentiel et professionnel.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>contact@bgm-debarras.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>Paris et Île-de-France</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>7j/7 - 24h/24 (urgences)</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-300">4.9/5 - 500+ avis clients</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nos Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Débarras de maison</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Débarras d'appartement</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Débarras de cave</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Débarras de jardin</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Débarras post-travaux</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Débarras professionnel</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Liens Utiles</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#accueil" className="hover:text-orange-500 transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#zones" className="hover:text-orange-500 transition-colors">Zones d'intervention</a></li>
              <li><a href="#avant-apres" className="hover:text-orange-500 transition-colors">Réalisations</a></li>
              <li><a href="#devis" className="hover:text-orange-500 transition-colors">Devis gratuit</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Mentions légales</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 BGM Débarras. Tous droits réservés. | SIRET: 123 456 789 00012 | Assurance RC Pro
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
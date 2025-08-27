import React from 'react';
import { Phone, CheckCircle, Clock, Shield, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative bg-gradient-to-br from-white-900 via-white-800 to-white-900 text-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⭐ Service de débarras professionnel
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Débarras et Nettoyage Professionnel
            </h3>

            <p className="text-lg sm:text-xl text-black-100 leading-relaxed font-semibold mb-8">
              Spécialiste du débarras en Île-de-France. Intervention rapide, 
              devis gratuit et service professionnel pour tous vos besoins de débarras.
            </p>
            <p className="text-lg sm:text-xl text-black-100 leading-relaxed font-bold mb-8">
              ⭐⭐⭐⭐⭐ 4.9/5 sur 89 avis Google
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-7 h-7 text-green-400" />
                <h1 className="text-lg sm:text-xl lg:text-2xl text-black-100 font-semibold">Devis gratuit et sans engagement</h1>
              </div>

              
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-7 h-7 text-green-400" />
                <h1 className="text-lg sm:text-xl lg:text-2xl text-black-100 font-semibold">Intervention 7j/7 et 24h/24</h1>
              </div>
              
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-7 h-7 text-green-400" />
                <h1 className="text-lg sm:text-xl lg:text-2xl text-black-100 font-semibold">Déplacement gratuit en Île-de-France</h1>
              </div>
              
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-7 h-7 text-green-400" />
                <h1 className="text-lg sm:text-xl lg:text-2xl text-black-100 font-semibold">Équipe professionnelle et assurée</h1>
              </div>
              
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:+330695613876"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>06 95 61 38 76</span>
              </a>
              <a
                href="#devis"
                className="bg-blue-500 border-2 border-yellow text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black-900 transition-colors flex items-center justify-center"
              >
                Demander un Devis
              </a>
            </div>

            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              <div className="text-center">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold text-yellow text-sm">Intervention Rapide</h3>
                <p className="text-xs text-black-200">Sous 24h</p>
              </div>
              
              <div className="text-center">
                <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold text-yellow text-sm">Assuré</h3>
                <p className="text-xs text-black-200">100% protégé</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold text-yellow text-sm">Qualité</h3>
                <p className="text-xs text-black-200">Garantie</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://i.postimg.cc/Yq3QZwNG/BGM-Affiche.jpg"
                alt="Service de débarras professionnel"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-yellow-500">500+</div>
                  <div>
                    <div className="font-semibold">Clients Satisfaits</div>
                    <div className="text-sm text-gray-600">En Île-de-France</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-4 right-4 w-72 h-72 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
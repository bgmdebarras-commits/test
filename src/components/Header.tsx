import React, { useState } from 'react';
import { Menu,FileText,Clock, X, Phone, Mail, MapPin } from 'lucide-react';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
     {/* Top Bar */}
<div className="bg-blue-900 text-white py-2">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-3 divide-x divide-white text-sm text-center">
      
      {/* Column 1 */}
      <div className="flex items-center justify-start sm:justify-center space-x-0 sm:space-x-2">
        <FileText size={14} className="text-yellow-400" />
         <a
                href="#devis"
                className="hover:text-orange-500"
              >
                <span className="font-semibold text-white text-xs sm:text-sm lg:text-base">Devis gratuit - demande d’intervention</span>
              </a>

      
      </div>

      {/* Column 2 */}
      <div className="flex items-center justify-center space-x-2">
        <Clock size={14} className="text-yellow-400" />
        <span className="font-semibold text-white text-xs sm:text-sm lg:text-base">7J/7 et 24h/24 </span>
      </div>

      {/* Column 3 */}
      <div className="flex items-center justify-end sm:justify-center space-x-0 sm:space-x-2">
        <Phone size={14} className="text-yellow-400" />
        <a href="tel:+330695613876" className="hover:text-orange-500">
          <span  className="font-semibold text-white text-xs sm:text-sm lg:text-base">06 95 61 38 76 (Appel direct)</span>
        </a>
        
      </div>
    </div>
  </div>
</div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center lg:justify-between items-center h-20 lg:h-24">
      <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto">
        <img
          src="https://i.postimg.cc/yY3RNHBb/BGM-logo.png"
          alt="BGM Débarras Logo"
          className="h-12 sm:h-14 lg:h-20 w-auto"
        />
      </div>


      {/* CTA Button - Hidden on mobile */}
      <div className="hidden lg:flex items-center space-x-4">
        <a
          href="#devis"
          className="bg-yellow-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
        >
          Devis Gratuit
        </a>
      </div>
    </div>

    
    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="lg:hidden py-4 border-t">
        <nav className="flex flex-col space-y-4">
          <a href="#accueil" className="text-gray-700 hover:text-blue-900 transition-colors">
            Accueil
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors">
            Services
          </a>
          <a href="#zones" className="text-gray-700 hover:text-blue-900 transition-colors">
            Zones d'intervention
          </a>
          <a href="#avant-apres" className="text-gray-700 hover:text-blue-900 transition-colors">
            Réalisations
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">
            Contact
          </a>
          <a
            href="#devis"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
          >
            Devis Gratuit
          </a>
        </nav>
      </div>
    )}
  </div>
      </header>
    </>
  );
};

export default Header;
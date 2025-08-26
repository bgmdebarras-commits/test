import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      title: "Débarras maison",
      description: "Désencombrez votre maison des vieux mobiliers, objets inutiles et équipements ménagers. Avec nous, vous profitez d'un espace de vie propre et décontracté.",
      image: "https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      buttonText: "Demander un devis"
    },
    {
      title: "Débarras appartement",
      description: "Votre logement est d'un espace limité et vous voulez vous débarrasser de tout objet encombrant ? Nos professionnels s'engagent à tout vider rapidement.",
      image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      buttonText: "Demander un devis"
    },
    {
      title: "Débarras Chantier",
      description: "Nos spécialistes désencombrent et nettoient votre chantier. Ils enlèvent les gravats, restes de matériaux et autres déchets pour retrouver un espace propre et sécurisé.",
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      buttonText: "Demander un devis"
    },
    {
      title: "Débarras de cave",
      description: "Débarras complet de votre cave avec évacuation de tous les objets encombrants. Service professionnel adapté aux espaces humides et difficiles d'accès.",
      image: "https://images.pexels.com/photos/4246266/pexels-photo-4246266.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      buttonText: "Demander un devis"
    },
    {
      title: "Débarras de grenier",
      description: "Nettoyage et débarras de grenier avec évacuation complète. Nos équipes interviennent même dans les espaces les plus difficiles d'accès.",
      image: "https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      buttonText: "Demander un devis"
    },
    {
      title: "Débarras professionnel",
      description: "Services de débarras pour bureaux, commerces et locaux professionnels. Intervention rapide et discrète pour vos espaces de travail.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      buttonText: "Demander un devis"
    }
  ];

  // Group services in sets of 3 for desktop view
  const serviceGroups = [];
  for (let i = 0; i < services.length; i += 3) {
    serviceGroups.push(services.slice(i, i + 3));
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === serviceGroups.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, serviceGroups.length]);

  const handleManualNavigation = (newIndex: number) => {
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === serviceGroups.length - 1 ? 0 : currentIndex + 1;
    handleManualNavigation(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? serviceGroups.length - 1 : currentIndex - 1;
    handleManualNavigation(newIndex);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section id="services" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nos Top Prestations
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Nos experts vous accompagnent au quotidien
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div 
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {serviceGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
                    {group.map((service, index) => (
                      <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                            {service.title}
                          </h3>
                          
                          <p className="text-black mb-6 leading-relaxed text-sm lg:text-base">
                            {service.description}
                          </p>
                          
                          <a
                            href="#devis"
                            className="inline-block w-full bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-center"
                          >
                            {service.buttonText}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {serviceGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
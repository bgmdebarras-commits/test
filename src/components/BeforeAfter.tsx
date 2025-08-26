import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const beforeAfterImages = [
    {
      before: "https://i.ibb.co/bMwRK6xC/003.png",
      after: "https://i.ibb.co/Q798Q22R/001.png",
      title: "Nettoyage de Salon",
      description: "Transformation complète d'un salon encombré en espace de vie agréable"
    },
    {
      before: "https://paris-debarras.com/wp-content/uploads/2020/04/De%CC%81barras-de-cuisine.jpg",
      after: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      title: "Cuisine Professionnelle",
      description: "Remise à neuf d'une cuisine avec dégraissage complet"
    },
    {
      before: "https://demolition-debarras.com/wp-content/uploads/2016/01/IMG_0771.jpg",
      after: "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg",
      title: "Salle de Bain",
      description: "Détartrage et désinfection complète d'une salle de bain"
    },
    {
      before: "https://gilbert.paris/wp-content/uploads/2021/06/shelf-3190116_1920.jpg.webp",
      after: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
      title: "Débarras de Cave",
      description: "Débarras complet et nettoyage d'une cave encombrée"
    }
  ];

  // Group images in pairs for large screens
  const imagePairs = [];
  for (let i = 0; i < beforeAfterImages.length; i += 2) {
    imagePairs.push(beforeAfterImages.slice(i, i + 2));
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === imagePairs.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, imagePairs.length]);

  // Pause auto-play when user interacts
  const handleManualNavigation = (newIndex: number) => {
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === imagePairs.length - 1 ? 0 : currentIndex + 1;
    handleManualNavigation(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? imagePairs.length - 1 : currentIndex - 1;
    handleManualNavigation(newIndex);
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section id="avant-apres" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Avant / Après
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez la transformation spectaculaire de nos interventions. 
            Nos résultats parlent d'eux-mêmes !
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div 
            className="overflow-hidden rounded-2xl shadow-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative overflow-hidden">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    <span className="text-xs font-medium text-gray-700">
                      {isAutoPlaying ? 'Auto' : 'Manuel'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {imagePairs.map((pair, pairIndex) => (
                  <div key={pairIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 p-4 lg:p-6">
                      {pair.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                          {/* Before/After Images */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                            {/* Before */}
                            <div className="relative">
                              <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                                AVANT
                              </div>
                              <img
                                src={item.before}
                                alt="Avant nettoyage"
                                className="w-full h-48 sm:h-64 lg:h-96 object-cover" 
                              />
                            </div>

                            {/* After */}
                            <div className="relative">
                              <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                                APRÈS
                              </div>
                              <img
                                src={item.after}
                                alt="Après nettoyage"
                                className="w-full h-48 sm:h-64 lg:h-96 object-cover"
                              />
                            </div>
                          </div>

                          {/* Description */}
                          <div className="p-4 text-center">
                            <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-xs lg:text-sm text-gray-600">
                              {item.description}
                            </p>
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {imagePairs.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">Projets Réalisés</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-gray-600">Clients Satisfaits</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">24h</div>
            <div className="text-gray-600">Délai d'Intervention</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">5★</div>
            <div className="text-gray-600">Note Moyenne</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
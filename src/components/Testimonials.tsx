import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Marie Dubois",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      location: "Paris 15ème",
      rating: 5,
      text: "Service exceptionnel ! L'équipe de DGM Débarras a transformé ma maison en quelques heures. Très professionnels et prix raisonnable.",
      service: "Nettoyage de maison"
    },
    {
      name: "Jean-Pierre Martin",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      location: "Boulogne-Billancourt",
      rating: 5,
      text: "Intervention rapide pour le débarras de ma cave. Travail impeccable, je recommande vivement leurs services.",
      service: "Débarras de cave"
    },
    {
      name: "Sophie Leroy",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      location: "Neuilly-sur-Seine",
      rating: 5,
      text: "Équipe très sympathique et efficace. Mon appartement n'avait jamais été aussi propre. Merci beaucoup !",
      service: "Nettoyage d'appartement"
    },
    {
      name: "Michel Rousseau",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      location: "Vincennes",
      rating: 5,
      text: "Service après travaux parfait. Ils ont éliminé toute la poussière et les résidus. Résultat impeccable.",
      service: "Nettoyage post-travaux"
    },
    {
      name: "Catherine Moreau",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      location: "Saint-Germain-en-Laye",
      rating: 5,
      text: "Très satisfaite du nettoyage de mon jardin. L'équipe est ponctuelle et le travail est de qualité.",
      service: "Entretien de jardin"
    },
    {
      name: "Pierre Durand",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      location: "Créteil",
      rating: 5,
      text: "Excellent service pour nos bureaux. Nettoyage régulier et personnel très professionnel.",
      service: "Nettoyage d'entreprise"
    },
    {
      name: "Isabelle Bernard",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      location: "Versailles",
      rating: 5,
      text: "Devis gratuit et transparent. Intervention rapide et résultat au-delà de mes attentes. Je recommande !",
      service: "Nettoyage de maison"
    },
    {
      name: "François Petit",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      location: "Montreuil",
      rating: 5,
      text: "Service 7j/7 très appréciable. Ils sont venus un dimanche pour une urgence. Très réactifs !",
      service: "Débarras d'urgence"
    },
    {
      name: "Nathalie Roux",
      image: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      location: "Courbevoie",
      rating: 5,
      text: "Équipe très professionnelle pour le nettoyage de ma cuisine. Dégraissage parfait, je suis ravie.",
      service: "Nettoyage spécialisé"
    },
    {
      name: "Alain Garnier",
      image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      location: "Rueil-Malmaison",
      rating: 5,
      text: "Prix très compétitif et qualité au rendez-vous. DGM Débarras est devenu mon prestataire de confiance.",
      service: "Nettoyage régulier"
    },
    {
      name: "Sylvie Moreau",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      location: "Levallois-Perret",
      rating: 5,
      text: "Service impeccable pour le débarras de mon grenier. Équipe très respectueuse et efficace.",
      service: "Débarras de grenier"
    },
    {
      name: "Thierry Blanc",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      location: "Antony",
      rating: 5,
      text: "Intervention d'urgence un week-end, très réactifs et professionnels. Je recommande sans hésiter !",
      service: "Intervention d'urgence"
    }
  ];

  // Group testimonials in sets of 4
  const testimonialGroups = [];
  for (let i = 0; i < testimonials.length; i += 4) {
    testimonialGroups.push(testimonials.slice(i, i + 4));
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialGroups.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialGroups.length]);

  // Manual navigation
  const handleManualNavigation = (newIndex: number) => {
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === testimonialGroups.length - 1 ? 0 : currentIndex + 1;
    handleManualNavigation(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? testimonialGroups.length - 1 : currentIndex - 1;
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
    <section className="py-20 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Avis vérifiés de nos clients
          </h2>
          <p className="text-2xl text-white max-w-3xl mx-auto">
            Votre satisfaction, la plus belle de nos récompenses.
          </p>
        </div>

        
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="overflow-hidden rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
              
            </div>

            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0 p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {group.map((testimonial, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-lg p-4 lg:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 min-h-[280px] lg:min-h-[320px]">
                        <div className="flex items-center mb-4 space-x-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                          />
                          <Quote className="w-6 h-6 text-blue-600 opacity-20" />
                        </div>
                        
                        <div className="flex items-center mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
                          "{testimonial.text}"
                        </p>

                        <div className="border-t border-gray-100 pt-4">
                          <div className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-500 mb-2">
                            {testimonial.location}
                          </div>
                          <div className="text-xs text-blue-600 font-medium">
                            {testimonial.service}
                          </div>
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>


          {/*

             
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
            
          */}
          
        </div>

        {/* Stats */}
        {/*
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-white">Clients Satisfaits</div>
          </div>
          
          <div>
            <div className="text-3xl font-bold text-white">4.9/5</div>
            <div className="text-white">Note Moyenne</div>
          </div>
          
          <div>
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-white">Recommandations</div>
          </div>
          
          <div>
            <div className="text-3xl font-bold text-white">10+</div>
            <div className="text-white">Années d'Expérience</div>
          </div>
          
        </div>
          
        */}
       
      </div>
    </section>
  );
};

export default Testimonials;
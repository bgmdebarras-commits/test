import React from 'react';
import { MapPin, Clock, Car } from 'lucide-react';

const ZonesIntervention = () => {
  const zones = [
    {
      department: "Paris (75)",
      cities: ["Paris 1er", "Paris 2ème", "Paris 3ème", "Paris 4ème", "Paris 5ème", "Paris 6ème", "Paris 7ème", "Paris 8ème", "Paris 9ème", "Paris 10ème", "Paris 11ème", "Paris 12ème", "Paris 13ème", "Paris 14ème", "Paris 15ème", "Paris 16ème", "Paris 17ème", "Paris 18ème", "Paris 19ème", "Paris 20ème"],
      color: "bg-blue-500"
    },
    {
      department: "Hauts-de-Seine (92)",
      cities: ["Boulogne-Billancourt", "Neuilly-sur-Seine", "Levallois-Perret", "Courbevoie", "Puteaux", "Rueil-Malmaison", "Issy-les-Moulineaux", "Antony", "Clamart", "Suresnes"],
      color: "bg-orange-500"
    },
    {
      department: "Seine-Saint-Denis (93)",
      cities: ["Saint-Denis", "Montreuil", "Aubervilliers", "Aulnay-sous-Bois", "Drancy", "Noisy-le-Grand", "Pantin", "Bondy", "Épinay-sur-Seine", "Rosny-sous-Bois"],
      color: "bg-green-500"
    },
    {
      department: "Val-de-Marne (94)",
      cities: ["Créteil", "Vitry-sur-Seine", "Saint-Maur-des-Fossés", "Champigny-sur-Marne", "Vincennes", "Maisons-Alfort", "Fontenay-sous-Bois", "Alfortville", "Ivry-sur-Seine", "Villejuif"],
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="zones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Zones d'Intervention
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nous Intervenons dans Toute l'Île-de-France
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DGM Débarras intervient rapidement dans tous les départements franciliens. 
            Déplacement gratuit pour tous nos services de débarras.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <div className="text-center p-6 bg-blue-50 rounded-2xl">
            <Car className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Déplacement Gratuit</h3>
            <p className="text-gray-600">Aucun frais de déplacement dans toute l'Île-de-France</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-2xl">
            <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Intervention Rapide</h3>
            <p className="text-gray-600">Disponible 7j/7 et 24h/24 pour les urgences</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-2xl">
            <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Couverture Complète</h3>
            <p className="text-gray-600">Tous les départements d'Île-de-France couverts</p>
          </div>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {zones.map((zone, index) => (
            <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 ${zone.color} rounded-full mr-3`}></div>
                <h3 className="text-lg font-bold text-gray-900">{zone.department}</h3>
              </div>
              
              <div className="space-y-2">
                {zone.cities.slice(0, 8).map((city, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <MapPin size={12} className="mr-2 text-gray-400" />
                    {city}
                  </div>
                ))}
                {zone.cities.length > 8 && (
                  <div className="text-sm text-blue-600 font-medium mt-2">
                    + {zone.cities.length - 8} autres communes
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Votre commune n'est pas listée ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Nous intervenons également dans les communes limitrophes. 
              Contactez-nous pour vérifier notre disponibilité dans votre secteur.
            </p>
            <a
              href="tel:+33123456789"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center space-x-2"
            >
              <span>Vérifier ma zone</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZonesIntervention;
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Truck } from 'lucide-react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Que faire des objets et meubles vidés ?",
      answer: "Après le débarras total, nous offrons 20 % des objets récupérés aux associations caritatives. Ensuite, nous nous engageons à donner une seconde vie à 30 % des meubles, vêtements et appareils électroménagers. Puis, nous les proposons à la vente. Pour les 50 % restants, nous adoptons une démarche écologique en déposant les encombrants au recyclage à la déchetterie."
    },
    {
      question: "Combien coûtent les services de débarras à Paris ou IDF ?",
      answer: "Le coût de nos services de débarras varie selon plusieurs facteurs : la surface à débarrasser, le volume d'objets, la difficulté d'accès et le type d'intervention. Nous proposons un devis gratuit et personnalisé après évaluation sur place. Nos tarifs sont transparents et sans surprise, avec un déplacement gratuit en Île-de-France."
    },
    {
      question: "Quelle est la durée nécessaire pour vider une maison ?",
      answer: "La durée d'intervention dépend de la taille du logement et du volume à évacuer. Pour un appartement standard, comptez entre 2 à 4 heures. Pour une maison complète, l'intervention peut prendre une journée entière. Nos équipes travaillent efficacement pour minimiser les désagréments tout en garantissant un travail soigné."
    },
    {
      question: "Comment se déroule le débarras ?",
      answer: "Notre intervention suit un processus structuré : d'abord, nous effectuons un état des lieux et protégeons les surfaces. Ensuite, nous trions les objets selon leur destination (don, vente, recyclage). Puis nous procédons à l'évacuation méthodique. Enfin, nous effectuons un nettoyage de base et restituons les lieux propres."
    },
    {
      question: "Proposez-vous un devis avant le débarras ?",
      answer: "Oui, nous proposons systématiquement un devis gratuit et détaillé avant toute intervention. Notre expert se déplace gratuitement en Île-de-France pour évaluer le volume de travail et vous proposer un tarif transparent. Le devis est sans engagement et valable 30 jours."
    },
    {
      question: "Intervenez-vous en urgence ?",
      answer: "Oui, nous proposons un service d'urgence 7j/7 et 24h/24 pour les situations exceptionnelles (succession, déménagement urgent, sinistre). Notre équipe peut intervenir dans les plus brefs délais, souvent le jour même selon la disponibilité."
    },
    {
      question: "Êtes-vous assurés pour les interventions ?",
      answer: "Absolument, BGM Débarras dispose d'une assurance responsabilité civile professionnelle qui couvre tous nos interventions. Nous sommes également assurés pour les dommages qui pourraient survenir pendant le transport et la manutention de vos biens."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-yellow-400 relative overflow-hidden">
      {/* Background Truck Icons */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Truck size={60} className="text-white" />
        </div>
        <div className="absolute top-32 right-20">
          <Truck size={40} className="text-white" />
        </div>
        <div className="absolute bottom-32 left-32">
          <Truck size={50} className="text-white" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Truck size={70} className="text-white" />
        </div>
        <div className="absolute top-1/2 left-20">
          <Truck size={45} className="text-white" />
        </div>
        <div className="absolute top-1/4 right-32">
          <Truck size={55} className="text-white" />
        </div>
        <div className="absolute bottom-1/4 right-40">
          <Truck size={35} className="text-white" />
        </div>
        <div className="absolute top-3/4 left-40">
          <Truck size={65} className="text-white" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            FAQ : Nos réponses et conseils à vos questions
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="transition-all duration-200">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-8 py-6 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openQuestion === index ? (
                        <ChevronUp className="w-6 h-6 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Des questions ?
          </h3>
          <p className="text-blue-800 mb-6">
            Contactez-nous maintenant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+330695613876"
              className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors shadow-lg"
            >
              📞 06 95 61 38 76
            </a>
            <a
              href="#devis"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg"
            >
              📋 Devis Gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
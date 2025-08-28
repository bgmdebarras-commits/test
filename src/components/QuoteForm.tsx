import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Calendar, CheckCircle } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    typeService: '',
    surface: '',
    datePreferee: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ✅ prevents redirect
  
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = new URLSearchParams();
  
    formData.forEach((value, key) => {
      data.append(key, value.toString());
    });
  
    try {
      await fetch("/", {
        method: "POST",
        body: data.toString(),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
  
      setIsSubmitted(true); // ✅ show your custom success screen only
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };
  

  if (isSubmitted) {
    return (
      <section
        id="devis"
        className="py-20 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Demande Envoyée avec Succès !
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Merci pour votre demande de devis. Notre équipe vous recontactera
              dans les plus brefs délais pour planifier votre intervention.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Faire une nouvelle demande
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="devis"
      className="py-20 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Devis Gratuit
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Obtenez Votre Devis Gratuit en 24h
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Remplissez notre formulaire détaillé pour recevoir un devis
            personnalisé. Notre équipe vous recontactera rapidement pour
            planifier votre intervention.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-blue-900 rounded-3xl p-8 text-white h-fit">
              <h3 className="text-2xl font-bold mb-6">
                Contactez-nous Directement
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Téléphone</h4>
                    <p className="text-blue-100">06 95 61 38 76</p>
                    <p className="text-sm text-blue-200">7j/7 - 24h/24</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-blue-100">debarras.bgm@gmail.com</p>
                    <p className="text-sm text-blue-200">Réponse sous 2h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Zone d'intervention
                    </h4>
                    <p className="text-blue-100">Paris et Île-de-France</p>
                    <p className="text-sm text-blue-200">Déplacement gratuit</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Disponibilité
                    </h4>
                    <p className="text-blue-100">Intervention rapide</p>
                    <p className="text-sm text-blue-200">Urgences acceptées</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-800 rounded-2xl">
                <h4 className="font-bold text-white mb-2">✅ Garanties</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• Devis 100% gratuit</li>
                  <li>• Aucun engagement</li>
                  <li>• Tarifs transparents</li>
                  <li>• Service assuré</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
            <form
  name="request-service"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
  noValidate
  className="space-y-6"
>
  <input type="hidden" name="form-name" value="request-service" />
  <input type="hidden" name="bot-field" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label
        htmlFor="nom"
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        Nom complet *
      </label>
      <input
        type="text"
        id="nom"
        name="nom"
        required
        value={formData.nom}
        onChange={handleChange}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        placeholder="Votre nom et prénom"
      />
    </div>

    <div>
      <label
        htmlFor="email"
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        Email *
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        placeholder="votre@email.com"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label
        htmlFor="telephone"
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        Téléphone *
      </label>
      <input
        type="tel"
        id="telephone"
        name="telephone"
        required
        value={formData.telephone}
        onChange={handleChange}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        placeholder="06 12 34 56 78"
      />
    </div>

    <div>
      <label
        htmlFor="typeService"
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        Type de service *
      </label>
      <select
        id="typeService"
        name="typeService"
        required
        value={formData.typeService}
        onChange={handleChange}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
      >
        <option value="">Sélectionnez un service</option>
        <option value="maison">Débarras de maison</option>
        <option value="appartement">Débarras d'appartement</option>
        <option value="cave">Débarras de cave/grenier</option>
        <option value="jardin">Débarras de jardin</option>
        <option value="post-travaux">Débarras post-travaux</option>
        <option value="entreprise">Débarras professionnel</option>
        <option value="autre">Autre</option>
      </select>
    </div>
  </div>

  <div>
    <label
      htmlFor="adresse"
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      Adresse d'intervention *
    </label>
    <input
      type="text"
      id="adresse"
      name="adresse"
      required
      value={formData.adresse}
      onChange={handleChange}
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
      placeholder="Adresse complète avec code postal"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label
        htmlFor="surface"
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        Surface / Volume
      </label>
      <input
        type="text"
        id="surface"
        name="surface"
        value={formData.surface}
        onChange={handleChange}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        placeholder="ex: 100m², 3 pièces, cave 20m²..."
      />
    </div>

    <div>
      <label
        htmlFor="datePreferee"
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        Date souhaitée
      </label>
      <input
        type="date"
        id="datePreferee"
        name="datePreferee"
        value={formData.datePreferee}
        onChange={handleChange}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
      />
    </div>
  </div>

  <div>
    <label
      htmlFor="description"
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      Description détaillée *
    </label>
    <textarea
      id="description"
      name="description"
      required
      rows={6}
      value={formData.description}
      onChange={handleChange}
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
      placeholder="Décrivez précisément : type de débarras, état des lieux, objets encombrants, difficultés d'accès, étage, ascenseur, etc."
    />
  </div>

  <div className="bg-blue-50 p-6 rounded-2xl">
    <p className="text-sm text-blue-800">
      <strong>Confidentialité :</strong> Vos données sont traitées
      en toute sécurité et ne seront utilisées que pour établir
      votre devis personnalisé.
    </p>
  </div>

  <button
    type="submit"
    className="w-full bg-yellow-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 flex items-center justify-center space-x-3"
  >
    <Send size={20} />
    <span>Envoyer ma demande de devis gratuit</span>
  </button>
</form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;

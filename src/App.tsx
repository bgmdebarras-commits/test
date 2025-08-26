import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import ZonesIntervention from './components/ZonesIntervention';
import BeforeAfter from './components/BeforeAfter';
import FAQ from './components/FAQ';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Testimonials />
      <BeforeAfter />
      <Services />
      {/*<ZonesIntervention />*/}
      <FAQ />
      <QuoteForm />
      <Footer />
    </div>
  );
}

export default App;
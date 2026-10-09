import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesGrid } from './components/ServicesGrid';
import { Calculator } from './components/Calculator';
import { Gallery } from './components/Gallery';
import { ProcessSteps } from './components/ProcessSteps';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GithubPagesExportModal } from './components/GithubPagesExportModal';

export default function App() {
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [calculatorNote, setCalculatorNote] = useState('');

  const handleApplyCalculationToForm = (summary: string) => {
    setCalculatorNote(`Пресметка од калкулатор: ${summary}`);
  };

  return (
    <div className="min-h-screen bg-[#111215] text-slate-100 flex flex-col font-sans">
      {/* Semantic Header */}
      <Header onOpenExportModal={() => setExportModalOpen(true)} />

      {/* Main Semantic Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Trust Indicators Strip */}
        <TrustBar />

        {/* Core & Specific Services Grid based on the Acrylic Board photo */}
        <ServicesGrid />

        {/* Interactive Renovation Estimator / Calculator */}
        <Calculator onApplyToForm={handleApplyCalculationToForm} />

        {/* Realized Projects / Portfolio Gallery */}
        <Gallery />

        {/* The 4-Step "Од рушење до готов простор" Journey */}
        <ProcessSteps />

        {/* Contact & Free On-Site Quote Booking */}
        <ContactSection initialNote={calculatorNote} />
      </main>

      {/* Semantic Footer */}
      <Footer onOpenExportModal={() => setExportModalOpen(true)} />

      {/* GitHub Pages Standalone Clean HTML5 / CSS Grid Export Modal */}
      <GithubPagesExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
      />
    </div>
  );
}

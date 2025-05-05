import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RewardsSection from './components/RewardsSection';
import StakingSection from './components/StakingSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <RewardsSection />
          <StakingSection />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
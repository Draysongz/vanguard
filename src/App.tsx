import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Collections from "./components/Collections";
import Timeline from "./components/Timeline";
import Comparison from "./components/Comparison";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import MintModal from "./components/MintModal";
import "./App.css";

function App(): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero onOpenModal={openModal} />

      {/* About Section */}
      <About />

      {/* Stats Section */}
      <Stats />

      {/* Collections Section */}
      <Collections onOpenModal={openModal} />

      {/* Timeline Section */}
      <Timeline />

      {/* Comparison Section */}
      <Comparison />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Mint Modal */}
      <MintModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;

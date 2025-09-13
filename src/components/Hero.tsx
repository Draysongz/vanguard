import React from "react";
import "./Hero.css";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Main Title */}
        <div className="hero-title">
          <h1 className="title-vanguard">VANGUARD</h1>
          <h1 className="title-genesis">GENESIS NFT</h1>
        </div>

        {/* Description */}
        <div className="hero-description">
          <p>
            The ultimate community NFT — combining mining, governance, and
            sustainable rewards right from day one. Backed by limitless utility
            and built to deliver long-term value
          </p>
        </div>

        {/* Mint Button */}
        <div className="hero-button">
          <button className="mint-now-btn" onClick={onOpenModal}>
            Mint Now
          </button>
        </div>

        {/* Characters Image */}
        <div className="hero-characters">
          <img
            src="/team.svg"
            alt="Vanguard Genesis Characters"
            className="characters-img"
          />
        </div>

        {/* Statistics Footer */}
        <div className="hero-stats">
          <div className="stats-left">
            <div className="stat-number">2</div>
            <div className="stat-label">Total Vanguard NFT own</div>
          </div>
          <div className="stats-right">
            <div className="stat-number">4,190/10,000</div>
            <div className="stat-label">Total Genesis NFT Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

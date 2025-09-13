import React from "react";
import "./Collections.css";

interface CollectionsProps {
  onOpenModal: () => void;
}

const Collections: React.FC<CollectionsProps> = ({ onOpenModal }) => {
  return (
    <section className="collections">
      <div className="collections-container">
        {/* Collections Title */}
        <div className="collections-title">
          <h2>Collections</h2>
        </div>

        {/* Shield Icons */}
        <div className="shields-container">
          <div className={`shield`}>
            <img
              src="/shields.svg"
              alt="Shield 3"
              className="shield-img desktop-shield"
            />
            <img
              src="/shields2.svg"
              alt="Shield 3"
              className="shield-img mobile-shield"
            />
          </div>
        </div>

        {/* Mint Now Button */}
        <div className="mint-button-container">
          <button className="mint-now-btn" onClick={onOpenModal}>
            Mint Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;

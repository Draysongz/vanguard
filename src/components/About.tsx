import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Main Heading */}
        <div className="about-heading">
          <h2>About Us</h2>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <div className="text-block">
            <p>
              Vanguard Genesis is the first step into the OrevaApp ecosystem and
              the last community NFT of its kind. With only 10,000 NFTs ever
              (9,500 Common & 500 Uncommon), holders gain 1 year of daily OREVA
              mining, guaranteed ZIPP rewards during the 49-day mainnet
              campaign, and OREVA rewards at TGE. Each Genesis also provides
              voting power and P2P trading rights once ZIPP sales conclude.
            </p>
            <p className="mobile-hidden">
              Alongside Vanguard Legacy, Genesis is one of only two unique
              Vanguard collections that will ever exist on OrevaApp, giving
              early supporters a permanent place in the project's foundation.
              Beyond mining, Genesis also grants access to OrevaPup free mints,
              token airdrops, and upcoming OrevaApp games, where holders can
              earn exclusive tokens and NFTs as rewards.
            </p>
          </div>

          {/* Right Side - Character Image */}
          <div className="about-character">
            <img
              src="/miner1.svg"
              alt="Vanguard Character"
              className="character-img"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="about-bottom">
          <div className="bottom-content">
            <div className="nft-image">
              <img
                src="/orc.svg"
                alt="Vanguard Legacy NFT"
                className="nft-img"
              />
            </div>
            <div className="bottom-text">
              <p>
                While the vanguard genesis is an entry level NFT with crafted
                mints, we also have the Exclusive 100 legendary Vanguard legacy
                NFT live on getgems
              </p>
              <button className="get-lucky-btn">Get Lucky</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./Comparison.css";

const Comparison: React.FC = () => {
  return (
    <section className="comparison">
      <div className="comparison-container">
        {/* Comparison Title */}
        <div className="comparison-title">
          <h2>Vanguard NFT Comparison – Genesis vs Legacy</h2>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="table-header">Attribute</th>
                <th className="table-header">
                  Genesis NFT (Common & Uncommon)
                </th>
                <th className="table-header">
                  Legacy NFT (Shield -Orb -Relic)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-label">Price</td>
                <td className="table-data">1 TON</td>
                <td className="table-data">18 TON – 55 TON – 320 TON</td>
              </tr>
              <tr>
                <td className="table-label">Total Supply</td>
                <td className="table-data">
                  10,000 (9,500 Common - 500 Uncommon)
                </td>
                <td className="table-data">
                  Just 100 (60 Shield - 30 Orb - 10 Relic)
                </td>
              </tr>
              <tr>
                <td className="table-label">Mining Speed</td>
                <td className="table-data">0.003–0.006 OREVA/hr (1 year)</td>
                <td className="table-data">0.0101–0.0757 OREVA/hr (1 year)</td>
              </tr>
              <tr>
                <td className="table-label">TGE Rewards</td>
                <td className="table-data">10–20 OREVA + 1,000–1,500 ZIPP</td>
                <td className="table-data">
                  100–1,400 OREVA + 10,000–200,000 ZIPP
                </td>
              </tr>
              <tr>
                <td className="table-label">Voting Power</td>
                <td className="table-data">5–10 Votes</td>
                <td className="table-data">30–500 Votes</td>
              </tr>
              <tr>
                <td className="table-label">Staking Bonus</td>
                <td className="table-data">1%–1.2% APY</td>
                <td className="table-data">5%–20% APY</td>
              </tr>
              <tr>
                <td className="table-label">Utilities</td>
                <td className="table-data">
                  P2P Badge • Community Access • Future Airdrops • OrevaPup Free
                  Minting & Token Airdrops
                </td>
                <td className="table-data">
                  P2P Badge • Early Access • Governance • Event Access •
                  Community • Future Airdrops
                </td>
              </tr>
              <tr>
                <td className="table-label">Status</td>
                <td className="table-data">Entry-Level Vanguard</td>
                <td className="table-data">OreVanguard OG. Ultra Rare</td>
              </tr>
              <tr className="last-tr">
                <td className="table-label">Marketplace</td>
                <td className="table-data">
                  <a href="#" className="marketplace-link">
                    Mint on Genesis Page
                  </a>
                </td>
                <td className="table-data">
                  <a href="#" className="marketplace-link">
                    Click to Buy the rare Legacy on Getgems
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* NFT Icons */}
        <div className="nft-icons-container">
          <div className="nft-icon">
            <img
              src="/orc1.svg"
              alt="Purple Staff NFT"
              className="nft-icon-img"
            />
          </div>
          <div className="nft-icon">
            <img
              src="/pink.svg"
              alt="Pink Shield NFT"
              className="nft-icon-img"
            />
          </div>
          <div className="nft-icon">
            <img
              src="/grey.svg"
              alt="Grey Shield NFT"
              className="nft-icon-img"
            />
          </div>
          <div className="nft-icon">
            <img
              src="/gold.svg"
              alt="Gold Shield NFT"
              className="nft-icon-img"
            />
          </div>
          <div className="nft-icon">
            <img
              src="/blue.svg"
              alt="Blue Shield NFT"
              className="nft-icon-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

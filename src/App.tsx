import React, { useState } from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import { useRoyal } from "./hooks/useNFT";
import "./App.css";

type TabType = "mining" | "mint" | "about";



function App(): React.JSX.Element {
  const { connected } = useTonConnect();
  const { mintNFT, mintedNFTs } = useRoyal();
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [mintStatus, setMintStatus] = useState<string>("");
  const [isConfirming, setIsConfirming] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabType>("mint");



  const handleMint = async (): Promise<void> => {
    if (!connected) {
      setMintStatus("Please connect your wallet first");
      return;
    }

    setIsMinting(true);
    setMintStatus("Minting NFT...");

    try {
      setIsMinting(false);
      setIsConfirming(true);
      setMintStatus("Transaction sent! Confirming on blockchain...");

      const result = await mintNFT();

      setIsConfirming(false);
      if (result.includes("successful")) {
        setMintStatus("NFT minted successfully! 🎉");
      } else {
        setMintStatus("Transaction sent! Check blockchain for confirmation.");
      }
    } catch (error) {
      setMintStatus("Minting failed. Please try again.");
      console.error("Mint error:", error);
      setIsMinting(false);
      setIsConfirming(false);
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="brand">
            <img
              src="https://peach-ready-eel-101.mypinata.cloud/ipfs/bafybeidr7fk6ilt7utl4qv5olt3iomu4kwm27j3eotdzhjpt3svckrx7ce/Oreva.png"
              alt="Vanguard Logo"
              width={70}
            />
            <span className="brand-text"> Oreva App</span>
          </div>
          <div className="nav-actions">
            <TonConnectButton />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Banner */}
        <section className="hero-banner">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Vanguard NFT Collection</h1>
              <p>Exclusive 10,000 NFT collection on TON blockchain</p>
              <div className="hero-badges">
                <span className="badge">10,000 NFTs</span>
                <span className="badge">0.2 TON</span>
                <span className="badge">TON Network</span>
              </div>
              <div className="collection-progress">
                <div className="progress-info">
                  <span className="progress-text">Collection Progress</span>
                  <span className="progress-numbers">
                    {mintedNFTs} / 10,000
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(mintedNFTs / 10000) * 100}%` }}
                  ></div>
                </div>
                <div className="progress-percentage">
                  {(mintedNFTs / 10000) * 100}%
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="/image.jpeg" alt="Vanguard Hero" />
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="tab-section">
          <div className="tab-nav">
            <button
              className={`tab-btn ${activeTab === "mint" ? "active" : ""}`}
              onClick={() => setActiveTab("mint")}
            >
              Mint
            </button>
            <button
              className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
          </div>
        </section>

        {/* Mint Tab */}
        {activeTab === "mint" && (
          <section className="mint-tab">
            <div className="mint-container">
              <div className="mint-preview">
                <img src="/cover.jpeg" alt="Mint Preview" />
                <div className="preview-overlay">
                  <span className="preview-text">Your NFT</span>
                </div>
              </div>

              <div className="mint-details">
                <h2>Mint Your Vanguard NFT</h2>
                <div className="collection-stats">
                  <div className="stat-item">
                    <span className="stat-label">Total Supply</span>
                    <span className="stat-value">10,000</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Minted</span>
                    <span className="stat-value">{mintedNFTs}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Available</span>
                    <span className="stat-value">{10000 - mintedNFTs}</span>
                  </div>
                </div>
                <div className="price-section">
                  <div className="price-main">
                    <span className="price">0.2</span>
                    <span className="currency">TON</span>
                  </div>
                  <div className="price-breakdown">
                    <div className="price-item">
                      <span>NFT Price</span>
                      <span>0.2 TON</span>
                    </div>
                    <div className="price-item">
                      <span>Gas Fee</span>
                      <span>0.1 TON</span>
                    </div>
                    <div className="price-total">
                      <span>Total</span>
                      <span>0.3 TON</span>
                    </div>
                  </div>
                </div>

                <button
                  className={`mint-btn ${!connected ? "disabled" : ""}`}
                  onClick={handleMint}
                  disabled={!connected || isMinting || isConfirming}
                >
                  {isMinting ? (
                    <>
                      <div className="btn-spinner"></div>
                      Minting...
                    </>
                  ) : isConfirming ? (
                    <>
                      <div className="btn-spinner"></div>
                      Confirming...
                    </>
                  ) : (
                    "Mint NFT"
                  )}
                </button>

                {mintStatus && (
                  <div
                    className={`mint-status ${
                      mintStatus.includes("success") ? "success" : "error"
                    }`}
                  >
                    {mintStatus}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* About Tab */}
        {activeTab === "about" && (
          <section className="about-tab">
            <div className="about-content">
              <div className="about-text">
                <h2>About Vanguard</h2>
                <p>
                  ⚡ Genesis Miner is your key to daily OREVA mining, governance
                  power, and verified P2P trading on OrevaApp. Built on TON
                  Blockchain, it’s a gateway to Web3 rewards and influence.🔹
                  Own. Earn. Empower.
                </p>
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-icon">⚡</div>
                    <div className="feature-content">
                      <h4>Fast Transactions</h4>
                      <p>Lightning-fast minting and transfers on TON</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🔒</div>
                    <div className="feature-content">
                      <h4>Secure Network</h4>
                      <p>Built on TON's secure and reliable infrastructure</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">💰</div>
                    <div className="feature-content">
                      <h4>Low Fees</h4>
                      <p>Minimal gas costs compared to other networks</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-number">10,000</div>
                  <div className="stat-label">Total Supply</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">0.2</div>
                  <div className="stat-label">TON Price</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">TON</div>
                  <div className="stat-label">Blockchain</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">0</div>
                  <div className="stat-label">Minted</div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; Oreva App</p>
          <p>Powered by TON Blockchain</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

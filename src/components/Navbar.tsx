import React, { useState } from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "../hooks/useTonConnect";
import { useTonConnectUI } from "@tonconnect/ui-react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { connected, userAddress } = useTonConnect();
  const [tonConnectUI] = useTonConnectUI();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleWalletConnect = async () => {
    try {
      await tonConnectUI.openModal();
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await tonConnectUI.disconnect();
      closeMenu();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand Section */}
        <div className="brand">
          <img src="/logo.svg" alt="OrevaApp Logo" className="logo" />
        </div>

        {/* Mobile Actions Container */}
        <div className="mobile-actions">
          <button
            className="custom-wallet-button"
            onClick={handleWalletConnect}
          >
            {connected ? (
              <span className="wallet-address">
                {userAddress
                  ? `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`
                  : "Connected"}
              </span>
            ) : (
              "Connect Wallet"
            )}
          </button>
          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-actions desktop-only">
          <div className="nav-links">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#collections" className="nav-link">
              Collections
            </a>
            <a href="#litepaper" className="nav-link">
              Litepaper
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
          </div>
          <TonConnectButton />
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-nav-links">
            <a href="#about" className="nav-link" onClick={closeMenu}>
              About
            </a>
            <a href="#collections" className="nav-link" onClick={closeMenu}>
              Collections
            </a>
            <a href="#litepaper" className="nav-link" onClick={closeMenu}>
              Litepaper
            </a>
            <a href="#faq" className="nav-link" onClick={closeMenu}>
              FAQ
            </a>

            {/* Wallet Section */}
            {connected && (
              <div className="mobile-wallet-section">
                <div className="wallet-info">
                  <span className="wallet-label">Wallet Address:</span>
                  <span className="wallet-address-mobile">
                    {userAddress
                      ? `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`
                      : "Connected"}
                  </span>
                </div>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

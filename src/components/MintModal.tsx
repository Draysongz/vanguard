import React, { useState, useEffect } from "react";
import "./MintModal.css";
import { useRoyal } from "../hooks/useNFT";
import { useTonConnect } from "../hooks/useTonConnect";
import { useTonConnectUI } from "@tonconnect/ui-react";

interface MintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MintModal: React.FC<MintModalProps> = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const [mintStatus, setMintStatus] = useState<string>("");
  const { mintNFT, mintedNFTs, refreshStats } = useRoyal();
  const { connected, userAddress } = useTonConnect();
  const [tonConnectUI] = useTonConnectUI();

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleMint = async () => {
    if (isMinting) return;

    // Check if wallet is connected
    if (!connected) {
      try {
        setMintStatus("Opening wallet connection...");
        await tonConnectUI.openModal();
        setMintStatus("Please connect your wallet to continue");
        return;
      } catch (error) {
        console.error("Connection error:", error);
        setMintStatus("Failed to open wallet connection. Please try again.");
        return;
      }
    }

    setIsMinting(true);
    setMintStatus("Minting...");

    try {
      const result = await mintNFT();
      setMintStatus(result);
      await refreshStats(); // Refresh stats after minting
    } catch (error) {
      console.error("Mint error:", error);
      setMintStatus("Mint failed. Please try again.");
    } finally {
      setIsMinting(false);
    }
  };

  // Refresh stats when modal opens
  useEffect(() => {
    if (isOpen) {
      refreshStats();
      setMintStatus(""); // Clear any previous status messages
    }
  }, [isOpen, refreshStats]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        {/* Shield Graphic */}
        <div className="shield-container">
          <img
            src="/mintShield.svg"
            alt="Genesis Shield"
            className="shield-image"
          />
          <div className="genesis-text-overlay">
            <img
              src="/mintHeader.svg"
              alt="Genesis NFT"
              className="genesis-text"
            />
          </div>
        </div>

        {/* Minting Information */}
        <div className="mint-info">
          <div className="supply">{mintedNFTs} / 10000</div>
          <div className="mint-price">Mint Price : 0.2 TON</div>
          <div className="rem-supply">
            Remaining Supply : {10000 - mintedNFTs}
          </div>
          {connected && (
            <div className="addy">
              Address : {userAddress
                ? userAddress.slice(0, 7) + "..." + userAddress.slice(-4)
                : ""}
            </div>
          )}
        </div>

        {/* Quantity Selector */}
        <div className="quantity-selector">
          <button
            className="quantity-btn minus"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 0}
          >
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button
            className="quantity-btn plus"
            onClick={() => handleQuantityChange(1)}
            disabled={quantity >= 10}
          >
            +
          </button>
        </div>

        {/* Mint Button */}
        <button
          className={`mint-button ${
            !connected && !isMinting ? "connect-wallet" : ""
          }`}
          onClick={handleMint}
          disabled={isMinting || 10000 - mintedNFTs <= 0}
        >
          {isMinting
            ? "Minting..."
            : !connected
            ? "Connect Wallet"
            : "Mint Now"}
        </button>

        {/* Mint Status */}
        {mintStatus && (
          <div
            className={`mint-status ${
              mintStatus.includes("connect") || mintStatus.includes("wallet")
                ? "wallet-prompt"
                : mintStatus.includes("failed") || mintStatus.includes("error")
                ? "error"
                : ""
            }`}
          >
            {mintStatus}
          </div>
        )}
      </div>
    </div>
  );
};

export default MintModal;

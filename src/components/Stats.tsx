import React from "react";
import "./Stats.css";

const Stats: React.FC = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-card">
          {/* Left Section - Project Title/Logo */}
          <div className="stats-branding">
            <img src="/logo2.svg" alt="Project Logo" className="project-logo" />
          </div>

          {/* Right Section - Metrics */}
          <div className="stats-metrics">
            <div className="metric">
              <div className="metric-number">4,220</div>
              <div className="metric-label">Remaining Mintable Supply</div>
            </div>
            <div className="metric">
              <div className="metric-number">5,780</div>
              <div className="metric-label">Remaining Total Supply</div>
            </div>
            <div className="metric">
              <div className="metric-number">1,900</div>
              <div className="metric-label">Holders Number</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

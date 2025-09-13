import React from "react";
import "./Timeline.css";

const Timeline: React.FC = () => {
  return (
    <section className="timeline">
      <div className="timeline-container">
        {/* Timeline Title */}
        <div className="timeline-title">
          <h2>
            <span className="title-gradient-1">Vanguard NFT</span>
            <span className="title-gradient-2">Benefits Timeline</span>
          </h2>
        </div>

        {/* Timeline Content */}
        <div className="timeline-content">
          <img
            src="/timeline.svg"
            alt="Vanguard NFT Benefits Timeline"
            className="timeline-svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;

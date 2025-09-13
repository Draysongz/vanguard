import React from "react";
import "./FAQ.css";

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "What is a Vanguard Genesis NFT?",
      answer:
        "Vanguard Genesis NFTs are OrevaApp's entry point, offering mining, governance, rewards, trading rights, and community access.",
    },
    {
      question: "How long does the mining NFT last?",
      answer:
        "Each Vanguard NFT includes a mining NFT active for 365 days, producing OREVA at 0.003 OREVA/hr for Common, 0.006 OREVA/hr for Uncommon, and higher for Legacy.",
    },
    {
      question: "How does Genesis mining work?",
      answer:
        "Each Genesis NFT mines OREVA automatically for 365 days, at a fixed rate depending on rarity (Common = 0.003/hr, Uncommon = 0.006/hr). This mining starts 2 weeks after TGE.",
    },
    {
      question: "What rewards do Genesis NFT holders receive?",
      answer:
        "Vanguard Genesis holders earn 20-40 OREVA, 1,000-2,000 ZIPP, one year of mining, 5-10 votes, P2P trading rights, and future airdrops like OrevaPup rewards.",
    },
    {
      question: "Who controls the reward price?",
      answer:
        "Smart contracts ensures that no one can have access or exploit the rewards and blockchain makes all transactions transparent. See docs.",
    },
    {
      question: "Why is the P2P badge important?",
      answer:
        "After the official ZIPP sale, all ZIPP trading will move to P2P only. Genesis NFT holders automatically get P2P badges, giving them exclusive trading rights and early liquidity.",
    },
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        {/* FAQ Title */}
        <div className="faq-title">
          <h2>FAQ</h2>
        </div>

        {/* FAQ Grid */}
        <div className="faq-grid">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-card">
              <div className="faq-card-bg">
                <img
                  src="/orevabg.svg"
                  alt="Background"
                  className="faq-bg-img"
                />
              </div>
              <div className="faq-content">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

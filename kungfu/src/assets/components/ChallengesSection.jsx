import React from 'react';
import './ChallengesSection.scss';
import challenges from "../images/challenges.png"

const ChallengesSection = () => {
  return (
    <section className="challenges-section">
      <div className="content">
        <h2>"Are These Challenges Holding Back Your Brand's Growth?"</h2>
        <ul className="challenges-list">
          <li>Inconsistent Posting: Struggling to keep up with regular, engaging posts?</li>
          <li>Low Engagement: Not seeing the likes, comments, and shares you deserve?</li>
          <li>Time-Consuming: Social media taking up too much of your time?</li>
          <li>Lack of Strategy: Unsure of what to post and when?</li>
          <li>No Measurable Results: Not seeing a clear ROI from your efforts?</li>
        </ul>
      </div>
      <div className="image-section">
        <div className="image-wrapper">
          <img src={challenges} alt="Frustrated person at a laptop" />
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;

export default function PortfolioAndProjects() {
  // Removed unused projectId from useParams

  return (
<div className="row">
  <div className="column portfolio-content">
    <div className="portfolio-card portfolio-card-blue-light">
    <div className="block-head">Technical Writing</div>
      <h3>Movie App API</h3>
      <p>This API lets users access information about different B-movies, such as directors, actors, genre, and year of release.</p>
      <div className="portfolio-pad-top"><a href="/api" className="portfolio-button"><span className="button-white-text">Learn More</span></a></div>
    </div>
  </div>
  <div className="column portfolio-content">
    <div className="portfolio-card portfolio-card-blue-light">
    <div className="block-head">Technical Writing</div>
      <h3>Contributor's Guide</h3>
      <p>A Contributor's Guide for a Developer Doc Site is a roadmap for those interested in contributing to a project's documentation.</p>
      <div className="portfolio-pad-top"><a href="/contributor-guide" className="portfolio-button"><span className="button-white-text">Learn More</span></a></div>
    </div>
  </div>
  <div className="column portfolio-content">
    <div className="portfolio-card portfolio-card-yellow">
    <div className="block-head">Content Strategy</div>
      <h3>Developer Doc Site Redesign</h3>
      <p>In today's digital age, content is king. Quality content is crucial for establishing a brand's authority and for remaining competitive.</p>
      <div className="portfolio-pad-top"><a href="/content-strategy-dev-doc-redesign" className="portfolio-button"><span className="button-white-text">Learn More</span></a></div>
    </div>
  </div>
  <div className="column portfolio-content">
    <div className="portfolio-card portfolio-card-blue-dark">
    <div className="block-head">Conversation Design</div>
    <h3>Personalized Workout (Chatbot)</h3>
      <p>Sarah wants to make lifestyle changes in retirement. She considers incorporating tailored exercises into her daily routine.</p>
      <div className="portfolio-pad-top"><a href="/fitfuel-personalized-workout-plan" className="portfolio-button"><span className="button-white-text">Learn More</span></a></div>
    </div>
  </div>

  <div className="column portfolio-content">
    <div className="portfolio-card portfolio-card-red">
    <div className="block-head">UX Writing</div>
      <h3>Error Messages</h3>
      <p>Effective error message UX design explains why it occurred and then provides the next steps for users to fix the problem.</p>
      <div className="portfolio-pad-top"><a href="/ux-writing/errors-warnings-confirmations" className="portfolio-button"><span className="button-white-text">Learn More</span></a></div>
    </div>
  </div>
  <div className="column portfolio-content">
      <div className="portfolio-card portfolio-card-purple">
    <div className="block-head">Copywriting</div>
      <h3>Video How-to Script</h3>
      <p>Voiceover scripts are as important as the video because audiences hear the words rather than read them.</p>
      <div className="portfolio-pad-top"><a href="/voiceover-scripts/tech-software-training" className="portfolio-button"><span className="button-white-text">Learn More</span></a></div>
    </div>
  </div>
</div>

  );
}

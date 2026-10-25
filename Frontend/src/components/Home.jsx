import { useState } from 'react';

const stats = [
  { value: '25k+', label: 'happy couples' },
  { value: '4.9/5', label: 'member rating' },
  { value: '98%', label: 'profile verified' },
];

const features = [
  {
    title: 'Smart matchmaking',
    text: 'AI-assisted matches based on values, lifestyle, and long-term compatibility.',
  },
  {
    title: 'Verified profiles',
    text: 'Every profile goes through a trusted verification process for safer connections.',
  },
  {
    title: 'Private & secure',
    text: 'Your conversations and personal details are protected with modern privacy tools.',
  },
];

const steps = [
  'Create your profile',
  'Connect with compatible people',
  'Meet with confidence',
];

const Home = ({ onPayment }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="matrimony-page">
      <header className="topbar">
        <div className="brand">Acasha Matrimony</div>

        <nav className={`nav-links${menuOpen ? ' is-open' : ''}`} id="main-navigation" aria-label="Main navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a>
          <a href="#matches" onClick={() => setMenuOpen(false)}>Matches</a>
        </nav>

        <div className="topbar-actions">
          
          <button className="primary-btn" type="button" onClick={onPayment}>Pay Now</button>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main className="hero" id="home">
        <section className="hero-copy">
          <span className="badge">Trusted by modern families</span>
          <h1>Find your forever story with love that feels right.</h1>
          <p>
            Discover meaningful relationships built on trust, respect, and shared dreams.
            Join a warm community that helps families connect for life.
          </p>

          <div className="cta-row">
            <button className="primary-btn" type="button">Create free profile</button>
            <button className="secondary-btn" type="button" onClick={onPayment}>View payment page</button>
          </div>

          <div className="hero-metrics" aria-label="Site statistics">
            {stats.map((stat) => (
              <div key={stat.label} className="metric-item">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="hero-visual" aria-label="Featured couples">
          <div className="visual-card profile-card main-profile">
            <div className="avatar avatar-one" />
            <div className="profile-content">
              <h3>Riya & Arjun</h3>
              <p>“We found each other through shared values and laughter.”</p>
            </div>
          </div>

          <div className="visual-card floating-card rating-card">
            <span className="label">Match score</span>
            <strong>96%</strong>
            <small>compatible in lifestyle & family values</small>
          </div>

          <div className="visual-card floating-card mini-card">
            <span className="label">New matches</span>
            <div className="mini-avatars">
              <span className="tiny-avatar one" />
              <span className="tiny-avatar two" />
              <span className="tiny-avatar three" />
            </div>
          </div>
        </section>
      </main>

      <section className="feature-section" id="about">
        <div className="section-heading">
          <span className="eyebrow">Why choose us</span>
          <h2>Designed for serious relationships and lifelong happiness.</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="icon-wrap">♥</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="stories">
        <div className="section-heading left-aligned">
          <span className="eyebrow">How it works</span>
          <h2>Your journey to love starts in three simple steps.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={step} className="process-card">
              <span className="step-number">0{index + 1}</span>
              <h3>{step}</h3>
              <p>
                Build a genuine profile, meet people who match your values, and take the next
                step toward a meaningful future together.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
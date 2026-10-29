import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './About.css';

const values = [
  {
    icon: 'lightbulb',
    title: 'Data-Driven Decisions',
    description: 'Every strategy we build is backed by rigorous analysis, not guesswork. We let the numbers guide our creative direction.',
  },
  {
    icon: 'target',
    title: 'Results Obsessed',
    description: 'We measure success by your revenue growth, not vanity metrics. If it doesn\'t move the needle, we don\'t do it.',
  },
  {
    icon: 'heart',
    title: 'Client Partnership',
    description: 'We\'re not just an agency — we\'re an extension of your team. Transparent communication and shared accountability.',
  },
  {
    icon: 'zap',
    title: 'Continuous Innovation',
    description: 'The digital landscape evolves fast. We stay ahead through constant testing, learning, and adapting our approaches.',
  },
];

const team = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    bio: '15+ years leading digital strategy for Fortune 500 companies. Former VP of Marketing at TechCorp.',
    image: 'SC',
    color: 'linear-gradient(135deg, #667eea, #764ba2)',
  },
  {
    name: 'Marcus Johnson',
    role: 'Chief Strategy Officer',
    bio: 'Ex-Google Ads product lead. Pioneered automated bidding strategies used by millions of advertisers.',
    image: 'MJ',
    color: 'linear-gradient(135deg, #f093fb, #667eea)',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    bio: 'Award-winning designer with campaigns featured in Cannes Lions. Expert in brand storytelling.',
    image: 'ER',
    color: 'linear-gradient(135deg, #34C759, #30D158)',
  },
  {
    name: 'David Park',
    role: 'Head of SEO',
    bio: 'Built organic programs generating $100M+ in revenue. Speaker at MozCon, SMX, and BrightonSEO.',
    image: 'DP',
    color: 'linear-gradient(135deg, #FF9F0A, #FFCC00)',
  },
  {
    name: 'Lisa Thompson',
    role: 'Director of Paid Media',
    bio: 'Managed $50M+ annual ad spend across B2B and B2C. Certified across all major ad platforms.',
    image: 'LT',
    color: 'linear-gradient(135deg, #FF2D92, #AF52DE)',
  },
  {
    name: 'James Wilson',
    role: 'VP of Client Success',
    bio: 'Scaled agency accounts from $10K to $2M+ ARR. Champion of client-centric delivery models.',
    image: 'JW',
    color: 'linear-gradient(135deg, #5856D6, #007AFF)',
  },
];

const stats = [
  { value: '12', label: 'Years in Business', suffix: '+' },
  { value: '500', label: 'Clients Served', suffix: '+' },
  { value: '50', label: 'Team Members', suffix: '' },
  { value: '47', label: 'Countries Reached', suffix: '' },
  { value: '98', label: 'Client Retention', suffix: '%' },
  { value: '200', label: 'Awards Won', suffix: '+' },
];

const valueIcons = {
  lightbulb: <path d="M18 11c0-4.51-4.03-8.17-9-8.94v3.7c3.48.36 6.52 3.12 6.52 6.24 0 3.5-3.05 6.35-6.52 6.73v3.71c4.97-.77 9-4.43 9-8.94z" />,
  target: (
    <g>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </g>
  ),
  heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
  zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
};

export default function About({ variant = 'default' }) {
  const [activeTab, setActiveTab] = useState('story');
  const tabs = ['story', 'values', 'team'];

  if (variant === 'detailed') {
    return (
      <section className="about-detailed" aria-labelledby="about-title">
        <div className="container">
          <header className="section-header">
            <span className="label">About PixelPulse</span>
            <h2 id="about-title">Building Brands That Last</h2>
            <p>We\'re a team of strategists, creatives, and analysts united by one mission: delivering marketing that actually works.</p>
          </header>

          {/* Story Section */}
          <div className="about-section reveal animate-fade-in-up">
            <div className="about-tabs" role="tablist" aria-label="About sections">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  aria-controls={`${tab}-panel`}
                  id={`${tab}-tab`}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
              <div className="tab-indicator" style={{
                transform: `translateX(${tabs.indexOf(activeTab) * 100}%)`
              }} />
            </div>

            <div className="tab-panels">
              {/* Story Panel */}
              <div
                role="tabpanel"
                id="story-panel"
                aria-labelledby="story-tab"
                className={`tab-panel ${activeTab === 'story' ? 'active' : ''}`}
              >
                <div className="about-story">
                  <div className="about-story-content">
                    <h3>Our Origin Story</h3>
                    <p>Founded in 2013 by Sarah Chen after a decade leading digital transformation at enterprise companies, PixelPulse was built on a simple belief: marketing agencies had lost their way. Too many focused on vanity metrics, flashy presentations, and long-term contracts that locked clients in rather than delivering results.</p>
                    <p>Sarah envisioned a different model — one where agencies were measured by the same metrics as their clients: revenue, profit, and growth. No retainers without ROI. No reports without insights. No strategy without execution.</p>
                    <p>Today, that philosophy has helped 500+ brands across 47 countries achieve measurable growth. But we\'re just getting started.</p>
                  </div>
                  <div className="about-story-visual">
                    <div className="story-image">
                      <div className="image-placeholder" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Values Panel */}
              <div
                role="tabpanel"
                id="values-panel"
                aria-labelledby="values-tab"
                className={`tab-panel ${activeTab === 'values' ? 'active' : ''}`}
              >
                <div className="about-values">
                  <h3>Our Core Values</h3>
                  <div className="values-grid">
                    {values.map((value, index) => (
                      <article
                        key={value.title}
                        className="value-card reveal animate-fade-in-up"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="value-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            {valueIcons[value.icon]}
                          </svg>
                        </div>
                        <h4>{value.title}</h4>
                        <p>{value.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              {/* Team Panel */}
              <div
                role="tabpanel"
                id="team-panel"
                aria-labelledby="team-tab"
                className={`tab-panel ${activeTab === 'team' ? 'active' : ''}`}
              >
                <div className="about-team">
                  <h3>Meet Our Leadership</h3>
                  <div className="team-grid">
                    {team.map((member, index) => (
                      <article
                        key={member.name}
                        className="team-card reveal animate-fade-in-up"
                        style={{ transitionDelay: `${index * 80}ms` }}
                      >
                        <div className="team-avatar" style={{ background: member.color }}>
                          {member.image}
                        </div>
                        <div className="team-info">
                          <h4>{member.name}</h4>
                          <span className="team-role">{member.role}</span>
                          <p className="team-bio">{member.bio}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="about-stats-section reveal animate-fade-in-up">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={stat.label} className="stat-card" style={{ transitionDelay: `${index * 80}ms` }}>
                  <div className="stat-value">
                    <span className="counter" data-target={parseInt(stat.value)}>0</span>
                    <span className="stat-suffix">{stat.suffix}</span>
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal animate-fade-in-up">
            <header className="section-header">
              <span className="label">About Us</span>
              <h2 id="about-title">Building Brands That Last</h2>
              <p>We\'re a team of strategists, creatives, and analysts united by one mission: delivering marketing that actually works.</p>
            </header>

            <div className="about-text">
              <p>Founded in 2013, PixelPulse has grown from a two-person consultancy to a 50+ person agency serving clients across 47 countries. But our mission hasn\'t changed: help great companies grow through marketing that\'s measurable, scalable, and sustainable.</p>
              <p>We don\'t believe in one-size-fits-all packages or vanity metrics. Every strategy is custom-built for your business goals, backed by data, and executed by specialists who live and breathe their craft.</p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-value">12+</div>
                <div className="highlight-label">Years Experience</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-value">500+</div>
                <div className="highlight-label">Projects Delivered</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-value">98%</div>
                <div className="highlight-label">Client Retention</div>
              </div>
            </div>

            <Link to="/about" className="btn btn-primary about-cta">
              Learn More About Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="about-visual reveal animate-slide-in-right">
            <div className="visual-card glass-card">
              <div className="visual-stats">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="visual-stat">
                    <span className="visual-stat-value">
                      <span className="counter" data-target={parseInt(stat.value)}>0</span>
                      <span className="stat-suffix">{stat.suffix}</span>
                    </span>
                    <span className="visual-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="visual-chart" aria-hidden="true">
                <svg viewBox="0 0 300 200" className="growth-chart">
                  <defs>
                    <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#667eea" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="growthLineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#667eea" />
                      <stop offset="100%" stopColor="#f093fb" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20,160 C60,140 100,100 140,110 C180,120 220,70 260,80 C280,85 290,60 295,55"
                    fill="none"
                    stroke="url(#growthLineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                    className="chart-line"
                  />
                  <path
                    d="M20,160 C60,140 100,100 140,110 C180,120 220,70 260,80 C280,85 290,60 295,55 L295,180 L20,180 Z"
                    fill="url(#growthGradient)"
                  />
                </svg>
              </div>
              <div className="visual-caption">
                <span className="caption-label">Client Revenue Growth</span>
                <span className="caption-value">+234% Avg.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
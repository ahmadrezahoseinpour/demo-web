import { Link } from 'react-router-dom';
import './Portfolio.css';

const caseStudies = [
  {
    id: 1,
    category: 'SaaS',
    title: 'TechFlow Solutions',
    description: 'Enterprise SaaS platform scaled from $2M to $18M ARR in 18 months through integrated SEO, PPC, and content strategy.',
    results: [
      { metric: '+156%', label: 'Organic Traffic' },
      { metric: '+89%', label: 'Demo Requests' },
      { metric: '-42%', label: 'CAC' },
    ],
    services: ['SEO', 'PPC', 'Content'],
    image: 'TF',
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
  },
  {
    id: 2,
    category: 'E-commerce',
    title: 'ShopSmart',
    description: 'DTC fashion brand achieved 6.8x ROAS and 34% LTV increase through paid social, email automation, and CRO.',
    results: [
      { metric: '6.8x', label: 'ROAS' },
      { metric: '+34%', label: 'LTV' },
      { metric: '+210%', label: 'Revenue' },
    ],
    services: ['Paid Social', 'Email', 'CRO'],
    image: 'SS',
    gradient: 'linear-gradient(135deg, #0f3460, #1a1a2e)',
  },
  {
    id: 3,
    category: 'FinTech',
    title: 'DataCorp Analytics',
    description: 'B2B FinTech reduced CAC by 42% while 3x\'ing ad spend through advanced attribution modeling and landing page optimization.',
    results: [
      { metric: '-42%', label: 'CAC' },
      { metric: '3x', label: 'Ad Spend' },
      { metric: '+67%', label: 'SQLs' },
    ],
    services: ['PPC', 'CRO', 'Analytics'],
    image: 'DC',
    gradient: 'linear-gradient(135deg, #e94560, #1a1a2e)',
  },
  {
    id: 4,
    category: 'Healthcare',
    title: 'MediConnect',
    description: 'Telehealth platform grew from 0 to 500K users in 12 months via local SEO, content marketing, and strategic partnerships.',
    results: [
      { metric: '500K', label: 'Users' },
      { metric: '+340%', label: 'Organic Leads' },
      { metric: '#1', label: 'Market Position' },
    ],
    services: ['Local SEO', 'Content', 'PR'],
    image: 'MC',
    gradient: 'linear-gradient(135deg, #00d4aa, #0f3460)',
  },
  {
    id: 5,
    category: 'EdTech',
    title: 'LearnFast',
    description: 'Online education platform increased course enrollments 300% through funnel optimization, retargeting, and email nurture sequences.',
    results: [
      { metric: '+300%', label: 'Enrollments' },
      { metric: '+180%', label: 'Email Revenue' },
      { metric: '-55%', label: 'CPL' },
    ],
    services: ['CRO', 'Paid Social', 'Email'],
    image: 'LF',
    gradient: 'linear-gradient(135deg, #6366f1, #1a1a2e)',
  },
  {
    id: 6,
    category: 'B2B Services',
    title: 'DevTools Inc',
    description: 'Developer tools startup closed Series A after PixelPulse built complete GTM strategy: positioning, content, paid, and analytics.',
    results: [
      { metric: '$12M', label: 'Series A' },
      { metric: '+450%', label: 'Signups' },
      { metric: '92%', label: 'Trial-to-Paid' },
    ],
    services: ['Strategy', 'Content', 'Paid', 'Analytics'],
    image: 'DT',
    gradient: 'linear-gradient(135deg, #ffb800, #e94560)',
  },
];

const categories = ['All', 'SaaS', 'E-commerce', 'FinTech', 'Healthcare', 'EdTech', 'B2B Services'];

export default function Portfolio({ variant = 'default', limit }) {
  const displayStudies = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className={`portfolio portfolio--${variant}`} aria-labelledby="portfolio-title">
      <div className="container">
        <header className="section-header">
          <span className="label">Our Work</span>
          <h2 id="portfolio-title">Case Studies & Success Stories</h2>
          <p>Real results for real businesses. Explore how we\'ve helped companies across industries achieve measurable growth.</p>
        </header>

        {variant !== 'simple' && (
          <div className="portfolio-filters" role="group" aria-label="Filter case studies by category">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${category === 'All' ? 'active' : ''}`}
                aria-pressed={category === 'All'}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="portfolio-grid">
          {displayStudies.map((study, index) => (
            <article
              key={study.id}
              className="portfolio-card reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
              data-category={study.category}
            >
              <div className="portfolio-image" style={{ background: study.gradient }}>
                <span className="image-placeholder">{study.image}</span>
                <div className="portfolio-overlay">
                  <Link to={`/portfolio/${study.id}`} className="btn btn-primary">
                    View Case Study
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-meta">
                  <span className="portfolio-category">{study.category}</span>
                </div>
                <h3 className="portfolio-title">{study.title}</h3>
                <p className="portfolio-description">{study.description}</p>
                <div className="portfolio-results">
                  {study.results.map((result, i) => (
                    <div key={i} className="result-item">
                      <span className="result-metric">{result.metric}</span>
                      <span className="result-label">{result.label}</span>
                    </div>
                  ))}
                </div>
                <div className="portfolio-services">
                  {study.services.map((service) => (
                    <span key={service} className="service-tag">{service}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {variant === 'simple' && (
          <div className="portfolio-cta">
            <Link to="/portfolio" className="btn btn-secondary">
              View All Case Studies
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
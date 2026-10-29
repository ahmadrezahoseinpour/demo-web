import { Link, useState } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    id: 'seo',
    icon: 'search',
    title: 'Search Engine Optimization',
    shortDesc: 'Dominate search rankings with technical SEO, content strategy, and authoritative link building.',
    fullDesc: 'Our SEO programs are built on three pillars: technical excellence, content authority, and trust signals. We start with a comprehensive audit covering Core Web Vitals, crawl budget optimization, and indexation strategy. Then we build topical authority through strategic content clusters, earning high-quality backlinks through digital PR and resource creation.',
    features: [
      { title: 'Technical SEO Audits', desc: 'Core Web Vitals, crawl optimization, indexation' },
      { title: 'Keyword Research & Strategy', desc: 'Intent-based clusters with search volume analysis' },
      { title: 'Content Optimization', desc: 'On-page SEO, schema markup, content refreshes' },
      { title: 'Authority Link Building', desc: 'Digital PR, resource links, partnership outreach' },
      { title: 'Local & International SEO', desc: 'GBP optimization, hreflang, multi-region strategy' },
      { title: 'E-commerce SEO', desc: 'Product schema, faceted nav, category optimization' },
    ],
    results: '+156% organic traffic avg.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#667eea',
  },
  {
    id: 'ppc',
    icon: 'target',
    title: 'Pay-Per-Click Advertising',
    shortDesc: 'Maximize ROI with data-driven PPC campaigns across Google Ads, Microsoft Ads, and social platforms.',
    fullDesc: 'We manage $10M+ in annual ad spend using a rigorous test-learn-scale methodology. Our approach combines automated bidding strategies with manual oversight, creative testing frameworks, and advanced audience segmentation. We build custom attribution models to understand true incremental ROAS.',
    features: [
      { title: 'Google & Microsoft Ads', desc: 'Search, Shopping, Performance Max, Demand Gen' },
      { title: 'Creative Testing Framework', desc: 'Systematic ad variation testing at scale' },
      { title: 'Audience & Geo Segmentation', desc: 'Custom intent, in-market, customer match' },
      { title: 'Landing Page Optimization', desc: 'CRO-focused LP builds with heatmap analysis' },
      { title: 'Conversion Tracking & Attribution', desc: 'GA4, offline imports, data-driven attribution' },
      { title: 'Competitive Intelligence', desc: 'Auction insights, share of voice monitoring' },
    ],
    results: '-42% cost per acquisition avg.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #667eea 100%)',
    color: '#f093fb',
  },
  {
    id: 'social',
    icon: 'users',
    title: 'Social Media Marketing',
    shortDesc: 'Build engaged communities and drive conversions through strategic social media management.',
    fullDesc: 'We transform social from a cost center to a revenue channel. Our strategy spans organic community building, paid social amplification, and creator partnerships. We produce platform-native content at scale using our in-house creative team, then amplify winning content through paid distribution.',
    features: [
      { title: 'Strategy & Content Calendar', desc: 'Quarterly themes, pillar content, trend jacking' },
      { title: 'Organic Content Production', desc: 'Reels, TikToks, carousels, thought leadership' },
      { title: 'Community Management', desc: '24/7 monitoring, crisis protocols, UGC programs' },
      { title: 'Paid Social Advertising', desc: 'Meta, LinkedIn, TikTok, YouTube, X Ads' },
      { title: 'Creator & Influencer Partnerships', desc: 'Micro to macro, affiliate, whitelisting' },
      { title: 'Social Analytics & Reporting', desc: 'Custom dashboards, competitor benchmarking' },
    ],
    results: '+89% engagement rate avg.',
    gradient: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
    color: '#34C759',
  },
  {
    id: 'content',
    icon: 'file-text',
    title: 'Content Marketing',
    shortDesc: 'Create compelling content that attracts, engages, and converts your ideal customers.',
    fullDesc: 'Our content engine produces 20+ high-quality pieces monthly per client. We use a topic cluster model built around your commercial keywords, with pillar pages targeting high-volume terms and cluster content capturing long-tail intent. Every piece is optimized for SEO, conversion, and social distribution.',
    features: [
      { title: 'Content Strategy & Clusters', desc: 'Pillar-cluster model with keyword mapping' },
      { title: 'Long-form Blog & Articles', desc: '2,500+ word guides, comparisons, tutorials' },
      { title: 'Video Production', desc: 'Explainer, testimonial, tutorial, short-form' },
      { title: 'Interactive Tools & Calculators', desc: 'ROI calculators, assessment quizzes, templates' },
      { title: 'Case Studies & Whitepapers', desc: 'Customer stories, industry reports, gated assets' },
      { title: 'Content Distribution & SEO', desc: 'Syndication, newsletter, social, link building' },
    ],
    results: '3x lead generation avg.',
    gradient: 'linear-gradient(135deg, #FF9F0A 0%, #FFCC00 100%)',
    color: '#FF9F0A',
  },
  {
    id: 'email',
    icon: 'mail',
    title: 'Email Marketing & Automation',
    shortDesc: 'Nurture leads and retain customers with personalized email automation and lifecycle campaigns.',
    fullDesc: 'Email drives 20-30% of revenue for our clients. We build sophisticated automation flows: welcome series, abandoned cart, browse abandonment, post-purchase, win-back, and loyalty programs. Advanced segmentation using RFM modeling, predictive analytics, and behavioral triggers ensures every send is relevant.',
    features: [
      { title: 'Lifecycle Automation Flows', desc: 'Welcome, cart, browse, post-purchase, win-back' },
      { title: 'Advanced Segmentation', desc: 'RFM, predictive LTV, engagement scoring' },
      { title: 'Newsletter Design & Production', desc: 'Weekly digests, product updates, curation' },
      { title: 'A/B Testing & Optimization', desc: 'Subject lines, send times, content, CTAs' },
      { title: 'Deliverability Management', desc: 'IP warming, authentication, reputation monitoring' },
      { title: 'Revenue Attribution', desc: 'Last-click, multi-touch, incrementality testing' },
    ],
    results: '+34% revenue from email avg.',
    gradient: 'linear-gradient(135deg, #FF2D92 0%, #AF52DE 100%)',
    color: '#FF2D92',
  },
  {
    id: 'web',
    icon: 'monitor',
    title: 'Web Design & Development',
    shortDesc: 'Build high-converting websites and landing pages optimized for speed, SEO, and UX.',
    fullDesc: 'We build on modern stacks (Next.js, Webflow, Shopify) with performance budgets under 200ms TTFB. Every project includes: custom design system, accessibility compliance (WCAG 2.1 AA), Core Web Vitals optimization, technical SEO foundation, and analytics implementation. We own the code and provide ongoing maintenance.',
    features: [
      { title: 'Custom Design Systems', desc: 'Tokens, components, motion, documentation' },
      { title: 'Landing Page Programs', desc: 'Campaign-aligned, A/B testable, fast' },
      { title: 'E-commerce Development', desc: 'Shopify Plus, headless, subscriptions, B2B' },
      { title: 'CMS Implementation', desc: 'Webflow, Contentful, Sanity, WordPress' },
      { title: 'Performance Optimization', desc: 'Core Web Vitals, edge caching, image optimization' },
      { title: 'Ongoing Maintenance & Support', desc: 'Security updates, content edits, monitoring' },
    ],
    results: '+67% conversion rate avg.',
    gradient: 'linear-gradient(135deg, #5856D6 0%, #007AFF 100%)',
    color: '#5856D6',
  },
];

const serviceIcons = {
  search: (
    <g>
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),
  target: (
    <g>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </g>
  ),
  users: (
    <g>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </g>
  ),
  'file-text': (
    <g>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="10 9 9 9 8 9" stroke="currentColor" strokeWidth="1.5" />
    </g>
  ),
  mail: (
    <g>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </g>
  ),
  monitor: (
    <g>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" />
    </g>
  ),
};

export default function Services({ variant = 'default', limit }) {
  const [activeService, setActiveService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className={`services services--${variant}`} aria-labelledby="services-title">
      <div className="container">
        <header className="section-header">
          <span className="label">Our Services</span>
          <h2 id="services-title">Digital Marketing Services That Deliver</h2>
          <p>End-to-end solutions tailored to your business goals. Each service is backed by data, strategy, and creative execution.</p>
          {variant === 'default' && (
            <Link to="/services" className="btn btn-outlined section-cta">
              View All Services
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </header>

        <div className="services-grid" role="list">
          {displayServices.map((service, index) => (
            <article
              key={service.id}
              className={`service-card reveal ${hoveredService === service.id ? 'hovered' : ''} ${activeService === service.id ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
              role="listitem"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="service-card-inner">
                {/* Icon */}
                <div className="service-icon" style={{ background: service.gradient }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
                    {serviceIcons[service.icon]}
                  </svg>
                </div>

                {/* Content */}
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.shortDesc}</p>

                  {/* Features Preview */}
                  <ul className="service-features">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={feature.title} style={{ transitionDelay: `${i * 50}ms` }}>
                        <span className="feature-dot" style={{ background: service.gradient }} />
                        <div className="feature-text">
                          <span className="feature-title">{feature.title}</span>
                          <span className="feature-desc">{feature.desc}</span>
                        </div>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="feature-more">
                        <span>+{service.features.length - 3} more</span>
                      </li>
                    )}
                  </ul>

                  {/* Result */}
                  <div className="service-result">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                    <span>{service.results}</span>
                  </div>

                  {/* CTA */}
                  {variant === 'detailed' && (
                    <Link
                      to={`/services#${service.id}`}
                      className="service-link"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveService(activeService === service.id ? null : service.id);
                      }}
                    >
                      {activeService === service.id ? 'Show Less' : 'Learn More'}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>

                {/* Hover Glow */}
                <div className="service-glow" style={{ background: service.gradient }} aria-hidden="true" />
              </div>

              {/* Expanded Detail */}
              {variant === 'detailed' && activeService === service.id && (
                <div className="service-detail reveal animate-scale-in">
                  <div className="detail-header">
                    <div className="detail-icon" style={{ background: service.gradient }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        {serviceIcons[service.icon]}
                      </svg>
                    </div>
                    <div>
                      <h4>{service.title}</h4>
                      <p>{service.fullDesc}</p>
                    </div>
                  </div>
                  <ul className="detail-features">
                    {service.features.map((feature) => (
                      <li key={feature.title}>
                        <div className="feature-bullet" style={{ background: service.gradient }} />
                        <div>
                          <strong>{feature.title}</strong>
                          <span>{feature.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
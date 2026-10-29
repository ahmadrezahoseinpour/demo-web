import { Link } from 'react-router-dom';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "PixelPulse transformed our digital presence. In 6 months, organic traffic increased 156% and qualified leads doubled. Their strategic approach and transparent reporting set them apart.",
    author: 'Jennifer Martinez',
    role: 'CMO, TechFlow Solutions',
    company: 'TechFlow',
    avatar: 'JM',
    results: '+156% Organic Traffic',
  },
  {
    id: 2,
    quote: "The best agency partnership I've experienced in 15 years. They don't just execute — they think strategically about our business. Our CAC dropped 42% while scaling spend 3x.",
    author: 'Robert Kim',
    role: 'VP Growth, DataCorp',
    company: 'DataCorp',
    avatar: 'RK',
    results: '-42% CAC',
  },
  {
    id: 3,
    quote: "Their content strategy positioned us as industry thought leaders. We've secured 50+ high-authority backlinks and our blog now drives 30% of all demo requests. Incredible ROI.",
    author: 'Amanda Foster',
    role: 'Marketing Director, CloudScale',
    company: 'CloudScale',
    avatar: 'AF',
    results: '30% Demos from Blog',
  },
  {
    id: 4,
    quote: "PixelPulse rebuilt our paid media from the ground up. ROAS improved from 2.1x to 6.8x in 90 days. Their creative testing framework is world-class.",
    author: 'Michael Chen',
    role: 'Founder, FitLife App',
    company: 'FitLife',
    avatar: 'MC',
    results: '6.8x ROAS',
  },
  {
    id: 5,
    quote: "As a startup, we needed an agency that could move fast and scale with us. PixelPulse delivered a complete go-to-market strategy and execution that helped us close our Series A.",
    author: 'Sarah Williams',
    role: 'CEO, DevTools Inc',
    company: 'DevTools',
    avatar: 'SW',
    results: 'Series A Closed',
  },
  {
    id: 6,
    quote: "Their email marketing automation increased our LTV by 34%. The segmentation strategy alone was worth the engagement. They truly understand retention marketing.",
    author: 'David Park',
    role: 'Head of Growth, ShopSmart',
    company: 'ShopSmart',
    avatar: 'DP',
    results: '+34% LTV',
  },
];

export default function Testimonials({ variant = 'default' }) {
  const displayTestimonials = variant === 'simple' ? testimonials.slice(0, 3) : testimonials;

  return (
    <section className={`testimonials testimonials--${variant}`} aria-labelledby="testimonials-title">
      <div className="container">
        <header className="section-header">
          <span className="label">Client Success</span>
          <h2 id="testimonials-title">Results That Speak for Themselves</h2>
          <p>Don't just take our word for it. Hear from the brands we've helped grow.</p>
        </header>

        <div className="testimonials-grid">
          {displayTestimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="testimonial-card reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="testimonial-rating" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="testimonial-quote">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <cite className="author-name">{testimonial.author}</cite>
                  <span className="author-role">{testimonial.role}, {testimonial.company}</span>
                </div>
              </div>
              <div className="testimonial-result">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                <span>{testimonial.results}</span>
              </div>
            </article>
          ))}
        </div>

        {variant === 'simple' && (
          <div className="testimonials-cta">
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
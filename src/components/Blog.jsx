import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    category: 'SEO',
    title: 'The Complete Guide to Technical SEO in 2025',
    excerpt: 'From Core Web Vitals to crawl budget optimization — everything you need to know to dominate search rankings this year.',
    author: 'David Park',
    date: '2025-01-15',
    readTime: '12 min read',
    image: 'SEO',
    gradient: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
  },
  {
    id: 2,
    category: 'PPC',
    title: 'Google Ads Automation: What Actually Works in 2025',
    excerpt: 'We tested 50+ automated strategies across $10M in ad spend. Here are the 5 that consistently outperform manual management.',
    author: 'Marcus Johnson',
    date: '2025-01-10',
    readTime: '8 min read',
    image: 'PPC',
    gradient: 'linear-gradient(135deg, #e94560, #1a1a2e)',
  },
  {
    id: 3,
    category: 'Content',
    title: 'Building a Content Engine That Converts: A Framework',
    excerpt: 'How we help clients publish 20+ high-quality pieces per month without sacrificing depth or SEO performance.',
    author: 'Emily Rodriguez',
    date: '2025-01-05',
    readTime: '10 min read',
    image: 'CON',
    gradient: 'linear-gradient(135deg, #00d4aa, #0f3460)',
  },
  {
    id: 4,
    category: 'Strategy',
    title: 'Marketing Attribution in a Privacy-First World',
    excerpt: 'With third-party cookies dying and iOS changes, here\'s how to build an attribution model that actually works.',
    author: 'Sarah Chen',
    date: '2024-12-28',
    readTime: '15 min read',
    image: 'STR',
    gradient: 'linear-gradient(135deg, #6366f1, #1a1a2e)',
  },
  {
    id: 5,
    category: 'Social',
    title: 'B2B LinkedIn Strategy: From 0 to 100K Followers',
    excerpt: 'The exact playbook we used to grow a SaaS company\'s LinkedIn presence from scratch to industry authority in 18 months.',
    author: 'Lisa Thompson',
    date: '2024-12-20',
    readTime: '11 min read',
    image: 'SOC',
    gradient: 'linear-gradient(135deg, #ffb800, #e94560)',
  },
  {
    id: 6,
    category: 'Email',
    title: 'Email Automation Flows That Generate Revenue on Autopilot',
    excerpt: '7 battle-tested email sequences that consistently drive 20-30% of total revenue for our e-commerce and SaaS clients.',
    author: 'James Wilson',
    date: '2024-12-15',
    readTime: '9 min read',
    image: 'EML',
    gradient: 'linear-gradient(135deg, #ec4899, #1a1a2e)',
  },
];

const categories = ['All', 'SEO', 'PPC', 'Content', 'Strategy', 'Social', 'Email'];

export default function Blog({ variant = 'default', limit }) {
  const displayPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section className={`blog blog--${variant}`} aria-labelledby="blog-title">
      <div className="container">
        <header className="section-header">
          <span className="label">Insights</span>
          <h2 id="blog-title">Latest Thinking & Strategies</h2>
          <p>Deep dives, frameworks, and real-world insights from our team of marketing experts.</p>
        </header>

        {variant !== 'simple' && (
          <div className="blog-filters" role="group" aria-label="Filter articles by category">
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

        <div className="blog-grid">
          {displayPosts.map((post, index) => (
            <article
              key={post.id}
              className="blog-card reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
              data-category={post.category}
            >
              <div className="blog-image" style={{ background: post.gradient }}>
                <span className="image-placeholder">{post.image}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <div className="blog-author">
                    <div className="author-avatar">{post.author.split(' ').map(n => n[0]).join('')}</div>
                    <span className="author-name">{post.author}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="blog-read-more">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {variant === 'simple' && (
          <div className="blog-cta">
            <Link to="/blog" className="btn btn-secondary">
              View All Articles
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
import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/about#team' },
    { label: 'Careers', path: '/careers' },
    { label: 'Press', path: '/press' },
    { label: 'Blog', path: '/blog' },
  ],
  services: [
    { label: 'SEO', path: '/services#seo' },
    { label: 'PPC Advertising', path: '/services#ppc' },
    { label: 'Social Media', path: '/services#social' },
    { label: 'Content Marketing', path: '/services#content' },
    { label: 'Email Marketing', path: '/services#email' },
    { label: 'Web Design', path: '/services#web' },
  ],
  resources: [
    { label: 'Case Studies', path: '/portfolio' },
    { label: 'Free Tools', path: '/tools' },
    { label: 'Templates', path: '/templates' },
    { label: 'Guides', path: '/guides' },
    { label: 'Webinars', path: '/webinars' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Cookie Policy', path: '/cookies' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
];

const socialIcons = {
  twitter: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />,
  linkedin: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />,
  instagram: (
    <g>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <circle cx="17.5" cy="6.5" r="1" />
    </g>
  ),
  youtube: (
    <g>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </g>
  ),
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="PixelPulse Home">
              <svg className="logo-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <rect width="40" height="40" rx="8" fill="currentColor"/>
                <path d="M12 20L18 26L28 14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="logo-text">PixelPulse</span>
            </Link>
            <p className="footer-tagline">Digital marketing agency delivering measurable results through data-driven strategies and creative excellence.</p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {socialIcons[social.icon]}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-nav" aria-label="Company links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-nav" aria-label="Services links">
            <h4 className="footer-heading">Services</h4>
            <ul>
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-nav" aria-label="Resources links">
            <h4 className="footer-heading">Resources</h4>
            <ul>
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-newsletter">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-newsletter-text">Get the latest digital marketing insights delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label htmlFor="email" className="visually-hidden">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-primary newsletter-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            {footerLinks.legal.map((link) => (
              <Link key={link.path} to={link.path}>{link.label}</Link>
            ))}
          </div>
          <p className="copyright">&copy; 2025 PixelPulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
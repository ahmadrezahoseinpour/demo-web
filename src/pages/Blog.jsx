import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function BlogPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="page-hero-background" aria-hidden="true">
          <div className="hero-shape shape-1" />
          <div className="hero-shape shape-2" />
        </div>
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="badge badge-primary">Insights</span>
            <h1 id="page-title">Latest Thinking & Strategies</h1>
            <p>Deep dives, frameworks, and real-world insights from our team of marketing experts.</p>
          </div>
        </div>
      </section>

      <Blog variant="default" />
      <Contact />
    </>
  );
}
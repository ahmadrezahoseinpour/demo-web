import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="page-hero-background" aria-hidden="true">
          <div className="hero-shape shape-1" />
          <div className="hero-shape shape-2" />
        </div>
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="badge badge-primary">Our Work</span>
            <h1 id="page-title">Case Studies & Success Stories</h1>
            <p>Real results for real businesses. Explore how we've helped companies across industries achieve measurable growth.</p>
          </div>
        </div>
      </section>

      <Portfolio variant="default" />
      <Testimonials variant="simple" limit={3} />
      <Contact />
    </>
  );
}
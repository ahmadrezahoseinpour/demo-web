import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="page-hero-background" aria-hidden="true">
          <div className="hero-shape shape-1" />
          <div className="hero-shape shape-2" />
        </div>
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="badge badge-primary">Our Services</span>
            <h1 id="page-title">Digital Marketing Services That Deliver</h1>
            <p>End-to-end solutions tailored to your business goals. Each service is backed by data, strategy, and creative execution.</p>
          </div>
        </div>
      </section>

      <Services variant="detailed" />
      <Testimonials variant="simple" limit={3} />
      <Contact />
    </>
  );
}
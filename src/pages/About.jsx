import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="page-hero-background" aria-hidden="true">
          <div className="hero-shape shape-1" />
          <div className="hero-shape shape-2" />
        </div>
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="badge badge-primary">About PixelPulse</span>
            <h1 id="page-title">Building Brands That Last Since 2013</h1>
            <p>We're a team of strategists, creatives, and analysts united by one mission: delivering marketing that actually works.</p>
          </div>
        </div>
      </section>

      <About variant="detailed" />
      <Testimonials variant="detailed" />
      <Contact />
    </>
  );
}
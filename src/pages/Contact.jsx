import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="page-hero-background" aria-hidden="true">
          <div className="hero-shape shape-1" />
          <div className="hero-shape shape-2" />
        </div>
        <div className="container">
          <div className="page-hero-content reveal">
            <span className="badge badge-primary">Get in Touch</span>
            <h1 id="page-title">Let's Build Something Great Together</h1>
            <p>Ready to grow? Tell us about your project and we'll get back to you within 24 hours with initial thoughts.</p>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services variant="default" limit={6} />
      <About variant="default" />
      <Testimonials variant="simple" />
      <Portfolio variant="simple" limit={3} />
      <Blog variant="simple" limit={3} />
      <Contact />
    </>
  );
}
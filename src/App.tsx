import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { Capabilities } from '@/components/Capabilities';
import { Industries } from '@/components/Industries';
import { Process } from '@/components/Process';
import { Quality } from '@/components/Quality';
import { Projects } from '@/components/Projects';
import { Facility } from '@/components/Facility';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { CTA } from '@/components/CTA';
import { QuoteForm } from '@/components/QuoteForm';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { Loader } from '@/components/Loader';

function App() {
  useScrollReveal();

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Capabilities />
        <Industries />
        <Process />
        <Quality />
        <Projects />
        <Facility />
        <WhyChooseUs />
        <CTA />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;

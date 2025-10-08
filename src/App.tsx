import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import EventInfo from './components/EventInfo';
import Vision from './components/Vision';
import Registration from './components/Registration';
import Media from './components/Media';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Hero />
        <About />
        <EventInfo />
        <Vision />
        <Registration />
        <Media />
        <FAQ />
        <Partners />
        <Footer />
      </div>
    </div>
  );
}

export default App;

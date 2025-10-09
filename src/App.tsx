import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import EventInfo from './components/EventInfo';
import Vision from './components/Vision';
import ChiefGuests from './components/ChiefGuests';
import Registration from './components/Registration';
// import Media from './components/Media';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  // 👇 Replace this with your actual WhatsApp number & message
  const whatsappLink =
    'https://wa.me/911234567890?text=Hi!%20I%20want%20to%20know%20more%20about%20Samvidhan%20Shakti%20Run.';

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <div className="pt-20">
        <Hero />
        <About />
        <EventInfo />
        <Vision />
        <ChiefGuests />
        <Registration />
        {/* <Media /> */}
        <FAQ />
        <Partners />
        <Footer />
      </div>

      {/* 👇 Floating WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all flex items-center justify-center z-50"
        title="Chat with us on WhatsApp"
      >
        {/* ✅ Official WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.08 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.518-5.286c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.877 9.884M20.52 3.449A11.815 11.815 0 0 0 11.982 0C5.364 0 .093 5.27.09 11.884c0 2.096.547 4.142 1.588 5.945L0 24l6.333-1.659a11.88 11.88 0 0 0 5.63 1.432h.005c6.617 0 11.89-5.27 11.893-11.884a11.82 11.82 0 0 0-3.341-8.44z" />
        </svg>
      </a>
    </div>
  );
}

export default App;

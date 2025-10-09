import { useState, useEffect } from 'react';

const Hero = () => {
  const targetDate = new Date('2025-11-30T05:30:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[91vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('images/running-image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF7F32]/50 via-[#002868]/60 to-[#008751]/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 leading-tight">
            <span className="text-white">Samvidhan Shakti</span> Run
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#FFD700] mb-8 font-bold">
            Run Together, Uphold Justice
          </p>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-8 mb-8 shadow-xl max-w-3xl mx-auto">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#002868]">30th November 2025</h3>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="rounded-xl p-2 sm:p-4 mb-1 transform hover:scale-105 transition-transform">
                    <span className="text-2xl sm:text-4xl font-black text-[#FF7F32]">
                      {value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#002868] uppercase tracking-wide">
                    {unit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
            <button
              onClick={scrollToRegistration}
              className="w-full sm:w-auto bg-[#002868] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-bold hover:bg-[#002868] hover:text-white transition-all transform hover:scale-105 shadow-lg"
            >
              Register for 3k
            </button>
            <button
              onClick={scrollToRegistration}
              className="w-full sm:w-auto bg-[#FF7F32] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-bold hover:bg-[#FF7F32] hover:text-white transition-all transform hover:scale-105 shadow-lg"
            >
              Register for 5k
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

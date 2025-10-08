import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'event-info', label: 'Event Info' },
    { id: 'registration', label: 'Registration' },
    { id: 'media', label: 'Media' },
    { id: 'faq', label: "FAQ's" },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#F6B72F] rounded-full flex items-center justify-center text-[#002868] font-extrabold text-xl">
                S
              </div>
              <span className="text-[#F6B72F] font-bold text-xl hidden sm:block">
                Samvidhan Shakti Run
              </span>
              <span className="text-[#F6B72F] font-bold text-lg sm:hidden">
                SSR
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-extrabold transition-colors ${
                    activeSection === item.id
                      ? 'text-[#FF7F32]'
                      : 'text-[#002868] hover:text-[#FF7F32]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('registration')}
                className="bg-[#F6B72F] text-[#002868] px-6 py-2 rounded-full font-bold hover:bg-[#FF7F32] hover:text-white transition-all transform hover:scale-105"
              >
                Register
              </button>
            </div>

            <button
              className="lg:hidden text-[#F6B72F]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#002868] border-t border-[#F6B72F]">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 rounded transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#FF7F32] text-white'
                      : 'text-white hover:bg-[#FF7F32] hover:text-[#002868]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('registration')}
                className="w-full bg-[#F6B72F] text-[#002868] px-6 py-3 rounded-full font-bold hover:bg-[#FF7F32] hover:text-white transition-all mt-2"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;

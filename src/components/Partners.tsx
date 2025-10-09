import { Handshake } from 'lucide-react';

const Partners = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2F6F] mb-6">Our Partners</h2>
          <div className="w-24 h-1 bg-[#FF7F32] mx-auto mb-8"></div>
        </div>

        <div className="bg-gradient-to-br from-[#0A2F6F] to-[#0A2F6F]/90 rounded-3xl p-12 sm:p-16 shadow-2xl">
          <Handshake className="w-20 h-20 text-[#FF7F32] mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-6">Join Us as a Partner</h3>
          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            We're always looking for passionate organizations and individuals who share our vision of
            promoting constitutional values and civic awareness. Partner with us to make a lasting impact
            on our community and support this meaningful cause.
          </p>
          <div className="space-y-4 mb-10 max-w-2xl mx-auto text-white/90 text-left">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#FF7F32] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Brand visibility across all event marketing materials and media coverage</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#FF7F32] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Opportunity to engage with 1500+ participants and their families</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#FF7F32] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Association with a cause that strengthens democratic values</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#FF7F32] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>Customized partnership packages to suit your organization's goals</p>
            </div>
          </div>
          <button
            onClick={scrollToContact}
            className="bg-[#FF7F32] text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-[#FF7F32] hover:text-white transition-all transform hover:scale-105 shadow-xl"
          >
            Become a Partner
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="bg-[#F4F4F4] rounded-2xl p-6 flex items-center justify-center h-24 hover:shadow-lg transition-shadow"
            >
              { <span className="text-[#0A2F6F] font-bold text-lg">Partner Logo {num}</span> }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

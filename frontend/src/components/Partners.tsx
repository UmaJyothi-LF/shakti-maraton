import { Handshake } from 'lucide-react';

const Partners = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Partner logos
  const partnerLogos = [
    { id: 2, image: "images/partner-logo2.jpg", alt: "Partner 2" },
    { id: 3, image: "images/partner-logo3.jpg", alt: "Partner 3" },
    { id: 4, image: "images/partner-logo4.jpg", alt: "Partner 4" },
    { id: 5, image: "images/partner-logo5.jpg", alt: "Partner 5" },
    { id: 6, image: "images/partner-logo6.jpg", alt: "Partner 6" },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2F6F] mb-6">
            Our Partners
          </h2>
          <div className="w-24 h-1 bg-[#FF7F32] mx-auto mb-8"></div>
        </div>

        {/* Join Us as Partner Card */}
        <div className="bg-gradient-to-br from-[#0A2F6F] to-[#0A2F6F]/90 rounded-3xl p-12 sm:p-16 shadow-2xl mb-16">
          <Handshake className="w-20 h-20 text-[#FF7F32] mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-6">Join Us as a Partner</h3>
          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            We're always looking for passionate organizations and individuals who share our vision of
            promoting constitutional values and civic awareness. Partner with us to make a lasting impact
            on our community and support this meaningful cause.
          </p>

          <div className="space-y-4 mb-10 max-w-2xl mx-auto text-white/90 text-left">
            {[
              "Brand visibility across all event marketing materials and media coverage",
              "Opportunity to engage with 1500+ participants and their families",
              "Association with a cause that strengthens democratic values",
              "Customized partnership packages to suit your organization's goals",
            ].map((benefit, i) => (
              <div key={i} className="flex items-start">
                <div className="w-2 h-2 bg-[#FF7F32] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToContact}
            className="bg-[#FF7F32] text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-[#FF9B4A] hover:text-white transition-all transform hover:scale-105 shadow-xl"
          >
            Become a Partner
          </button>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {partnerLogos.map((partner) => (
            <div
              key={partner.id}
              // Note: Since the text is removed, we can reduce the card height slightly or keep it tall for extra whitespace
              // Let's reduce it from h-72 to h-64 and the image container to h-full to center the logo nicely.
              className="group bg-[#F9F9F9] rounded-2xl p-4 sm:p-12 flex flex-col items-center justify-center h-64 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div 
                // Setting h-full so the logo container takes up all available vertical space in the card
                className="w-full h-full flex items-center justify-center overflow-hidden rounded-lg"
              >
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {/* REMOVED: 
              <h3 className="text-[#0A2F6F] text-lg font-semibold group-hover:text-[#FF7F32] transition-colors duration-300">
                {partner.alt}
              </h3>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

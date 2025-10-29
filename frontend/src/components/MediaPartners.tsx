const MediaPartners = () => {
  // Media partner logos
  const mediaPartnerLogos = [
    { id: 1, image: "images/media-partner1.jpg", alt: "Media Partner 1" },
    { id: 2, image: "images/media-partner2.jpg", alt: "Media Partner 2" },
    { id: 3, image: "images/media-partner3.jpg", alt: "Media Partner 3" },
    { id: 4, image: "images/media-partner4.jpg", alt: "Media Partner 4" },
    { id: 5, image: "images/media-partner5.jpg", alt: "Media Partner 5" },
  ];

  return (
    <section id="media-partners" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2F6F] mb-6">
            Media Partners
          </h2>
          <div className="w-24 h-1 bg-[#FF7F32] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We’re proud to collaborate with leading media organizations that help amplify our mission and events.
          </p>
        </div>

        {/* Media Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {mediaPartnerLogos.map((partner) => (
            <div
              key={partner.id}
              className="group bg-[#F9F9F9] rounded-2xl p-4 sm:p-12 flex flex-col items-center justify-center h-64 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPartners;

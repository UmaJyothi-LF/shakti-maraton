import { Linkedin, Twitter, Instagram } from 'lucide-react';

const ChiefGuests = () => {
  const guests = [
    {
      name: 'Name',
      designation: 'Designation',
      image: 'images/defalut-profile.jpg',
      socials: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'Name',
      designation: 'Designation',
      image: 'images/defalut-profile.jpg',
      socials: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'Name',
      designation: 'Designation',
      image: 'images/defalut-profile.jpg',
      socials: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
      },
    },
  ];

  return (
    <section id="chief-guests" className="py-20 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#002868] mb-6">
            Chief Guests
          </h2>
          <div className="w-24 h-1 bg-[#FF7F32] mx-auto mb-8"></div>
          <p className="text-lg text-[#000000] max-w-3xl mx-auto leading-relaxed">
            We are honored to welcome our distinguished chief guests who inspire and lead with excellence and integrity.
          </p>
        </div>

        {/* Guest Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {guests.map((guest, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden group"
            >
              <img
                src={guest.image}
                alt={guest.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#002868] mb-2">
                  {guest.name}
                </h3>
                <p className="text-[#000000]/70 mb-6">{guest.designation}</p>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6">
                  <a
                    href={guest.socials.linkedin}
                    title={`LinkedIn — ${guest.name}`}
                    aria-label={`LinkedIn — ${guest.name}`}
                    className="text-[#008751] hover:text-[#FF7F32] transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={guest.socials.twitter}
                    title={`Twitter — ${guest.name}`}
                    aria-label={`Twitter — ${guest.name}`}
                    className="text-[#008751] hover:text-[#FF7F32] transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href={guest.socials.instagram}
                    title={`Instagram — ${guest.name}`}
                    aria-label={`Instagram — ${guest.name}`}
                    className="text-[#008751] hover:text-[#FF7F32] transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChiefGuests;

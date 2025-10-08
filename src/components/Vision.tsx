import { Scale, BookOpen, Lightbulb, Shield } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      icon: <Scale className="w-10 h-10" />,
      title: 'Justice for All',
      description: 'Promoting equality and justice through community engagement',
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: 'Constitutional Awareness',
      description: 'Educating citizens about their rights and responsibilities',
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'Civic Engagement',
      description: 'Inspiring active participation in democratic processes',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Upholding Values',
      description: 'Strengthening the pillars of democracy through action',
    },
  ];

  const mottoImages = [
    "images/start-banner.jpg",
    "images/running2-image.jpg",
    "images/volunteers.jpg",
    "images/finish-line.jpg",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#002868] to-[#002868]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motto Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Motto</h2>
            <div className="w-24 h-1 bg-[#ff7f32] mb-8"></div>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              The Samvidhan Shakti Run is more than a 3km run – it is a collective stride towards spreading awareness of the Indian Constitution, the foundation of our democracy. By running together, we celebrate the spirit of equality, liberty, justice, and fraternity enshrined in our Constitution.
            </p>
          </div>

          {/* Motto Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            {mottoImages.map((src, index) => (
              <div
                key={index}
                className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Motto ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div id="vision" className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Vision</h2>
          <div className="w-24 h-1 bg-[#ff7f32] mx-auto mb-8"></div>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            To inspire citizens, especially the younger generation, to not only know their rights and duties but also to live by them in everyday life. Through this run, we aim to build a stronger sense of constitutional values, unity, and responsibility – reminding ourselves that every step taken in solidarity strengthens the pillars of justice and democracy.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2"
            >
              <div className="text-[#ff7f32] mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-white/80">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;

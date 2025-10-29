import { useState, useCallback } from 'react';
import { Award, Heart, Users, Target } from 'lucide-react';

const About = () => {
  // State to track if the video has been played or if the iframe has been rendered
  // We'll use a slightly different approach for the iframe

  const features = [
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Celebrating Democracy',
      description:
        'Honor the principles enshrined in our Constitution through community participation and awareness.',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Community Spirit',
      description:
        'Bringing together people from all walks of life to celebrate unity, equality, liberty, justice, and fraternity.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Inclusive Event',
      description:
        'Open to all ages and fitness levels. Whether you run, jog, or walk, everyone strengthens democracy with every step.',
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Making Impact',
      description:
        'Proceeds support constitutional literacy programs and civic education initiatives, inspiring citizens to uphold constitutional values.',
    },
  ];

  // The CORRECT way to embed a YouTube video is using the 'embed' URL.
  // Original URL: https://youtu.be/iIWx-iA8QUU?si=CO_ygdTK7ZiU0Fcc
  // Embed URL: https://www.youtube.com/embed/iIWx-iA8QUU
  const videoEmbedSrc = 'https://www.youtube.com/embed/iIWx-iA8QUU';
  
  // You no longer need videoPoster or the isVideoPlayed state for the width
  // Instead, let's keep the width logic based on a simple boolean for a cool effect.
  const [isLarge, setIsLarge] = useState(false);
  const containerWidthClass = isLarge ? 'max-w-6xl' : 'max-w-4xl';
  
  // Simple handler to trigger the expansion effect on click/render
  const handleContainerClick = useCallback(() => {
    setIsLarge(true);
  }, []);

  return (
    <section id="about" className="py-20 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#002868] mb-6">
            About The Run 🏃
          </h2>
          <div className="w-24 h-1 bg-[#FF7F32] mx-auto mb-8"></div>
          <p className="text-lg text-[#000000] max-w-3xl mx-auto leading-relaxed mb-6">
            **Samvidhan Shakti Run** is a stride towards unity, justice, and awareness of our Constitution. Every step we take together strengthens democracy.
          </p>
          <p className="text-lg text-[#000000] max-w-3xl mx-auto leading-relaxed">
            This event celebrates the spirit of equality, liberty, justice, and fraternity enshrined in our Constitution. By running together, participants not only promote civic awareness but also reaffirm their commitment to upholding democratic values.
          </p>
        </div>

        ---
        
        {/* 🎥 YouTube Video Section - NOW USING IFRAME */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#002868] text-center mb-8">
            Relive the Energy!
          </h3>

          <div
            className={`
              ${containerWidthClass}
              mx-auto bg-black rounded-xl shadow-2xl overflow-hidden cursor-pointer
              transition-all duration-500 ease-in-out transform
            `}
            // Trigger the size change on click of the container
            onClick={handleContainerClick} 
          >
            {/* The standard responsive iframe container for YouTube */}
            <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <iframe
                src={videoEmbedSrc}
                title="YouTube video player - Samvidhan Shakti Run"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              ></iframe>
            </div>
          </div>
          
          <p className="text-center text-sm text-[#000000]/60 mt-4">
             Click the container to expand the view!
          </p>
        </div>

        ---

        {/* 🌟 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="text-[#008751] mb-6 group-hover:text-[#FF7F32] transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#002868] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#000000]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
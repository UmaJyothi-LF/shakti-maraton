import React, { useState } from 'react';
import { Award, Heart, Users, Target } from 'lucide-react';

const About = () => {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

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

  const videoSrc = '/images/video.mp4';
  const videoPoster = '/images/video-thumbnail.jpg';
  const containerWidthClass = isVideoPlayed ? 'max-w-6xl' : 'max-w-4xl';

  return (
    <section id="about" className="py-20 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#002868] mb-6">
            About The Run
          </h2>
          <div className="w-24 h-1 bg-[#FF7F32] mx-auto mb-8"></div>
          <p className="text-lg text-[#000000] max-w-3xl mx-auto leading-relaxed mb-6">
            <strong>Samvidhan Shakti Run</strong> is a stride towards unity, justice, and awareness of our Constitution. Every step we take together strengthens democracy.
          </p>
          <p className="text-lg text-[#000000] max-w-3xl mx-auto leading-relaxed">
            This event celebrates the spirit of equality, liberty, justice, and fraternity enshrined in our Constitution. By running together, participants not only promote civic awareness but also reaffirm their commitment to upholding democratic values.
          </p>
        </div>

        {/* 🎥 Video Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#002868] text-center mb-8">
            Relive the Energy!
          </h3>

          <div
            className={`
              ${containerWidthClass}
              mx-auto bg-black rounded-xl shadow-2xl overflow-hidden
              transition-all duration-500 ease-in-out transform
            `}
          >
            {/* ✅ Increased height of video container */}
            <div className="relative w-full h-[28rem] sm:h-[32rem] lg:h-[36rem]">
              <video
                controls
                className="absolute top-0 left-0 w-full h-full object-cover"
                onPlay={() => setIsVideoPlayed(true)}
                poster={videoPoster}
              >
                <source src={videoSrc} type="video/mp4" />
                {/* Fallback if browser doesn’t support video */}
                <div className="bg-gray-800 flex items-center justify-center text-white text-lg p-20">
                  🎬 Video preview not available — please check your browser support.
                </div>
              </video>
            </div>
          </div>

          {/* <p className="text-center text-sm text-[#000000]/60 mt-4">
            The video scales up once you hit the play button!
          </p> */}
        </div>

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

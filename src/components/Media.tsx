import { Play } from 'lucide-react';

const Media = () => {
  const images = [
    'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1405824/pexels-photo-1405824.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <section id="media" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2F6F] mb-6">Media Gallery</h2>
          <div className="w-24 h-1 bg-[#F6B72F] mx-auto mb-8"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#0A2F6F] mb-8">Photo Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#0A2F6F] mb-8">Video Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((num) => (
              <div
                key={num}
                className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={`https://images.pexels.com/photos/${num === 1 ? '2402777' : '936094'}/pexels-photo-${num === 1 ? '2402777' : '936094'}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                  alt={`Video ${num}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#F6B72F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-[#0A2F6F] ml-1" size={32} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#0A2F6F] mb-8">Social Media Buzz</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { platform: 'Twitter', handle: '@SamvidhanRun', text: 'Amazing experience! Can\'t wait for next year! 🏃‍♂️ #SamvidhanShaktiRun' },
              { platform: 'Instagram', handle: '@samvidhan_run', text: 'The energy was incredible! Proud to be part of this movement 💪 #ConstitutionDay' },
              { platform: 'Facebook', handle: 'Samvidhan Shakti Run', text: 'Thank you to all 5000+ participants who made this event a grand success! 🎉' },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-[#F4F4F4] rounded-2xl p-6 hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#0A2F6F] rounded-full flex items-center justify-center text-white font-bold">
                    {post.platform[0]}
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-[#0A2F6F]">{post.platform}</p>
                    <p className="text-sm text-gray-600">{post.handle}</p>
                  </div>
                </div>
                <p className="text-gray-700">{post.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;

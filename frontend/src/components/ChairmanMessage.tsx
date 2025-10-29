const ChairmansMessage = () => {
  return (
    <section id="chairman-message" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#002868] mb-6">
            Chairman’s Message
          </h2>
          <div className="w-24 h-1 bg-[#FF7F32] mx-auto mb-8"></div>
          <p className="text-lg text-[#000000] max-w-3xl mx-auto leading-relaxed">
            A word of inspiration and encouragement from our Chairman to all the runners.
          </p>
        </div>

        {/* Message Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* Left: Chairman Image */}
          <div className="flex justify-center">
            <img
              src="images/moksha-profile-image.jpg"
              alt="Chairman"
              className="w-[24rem] h-[24rem] sm:w-[26rem] sm:h-[26rem] object-cover rounded-3xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            />
          </div>

          {/* Right: Message Text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#FF7F32] mb-4">
              A Message to All Runners
            </h3>
            <p className="text-lg text-[#000000]/80 leading-relaxed mb-6">
              Every step you take in this run is a tribute to the strength of our Constitution
              and the unity of our nation. Remember, this event is not just about crossing the
              finish line, but about celebrating the spirit of togetherness, justice, and
              determination. Run with pride, run with purpose, and inspire others along the way.
            </p>
            <p className="font-bold text-[#002868] text-lg">
              — Dr Moksha Kalyanram Abhiramula, Chairman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmansMessage;

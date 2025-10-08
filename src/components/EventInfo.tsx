import { Clock, MapPin, Calendar, Flag } from 'lucide-react';

const EventInfo = () => {
  const itinerary = [
    {
      time: '5:30 AM – 5:50 AM',
      events: [
        'Reporting at Registration Desk Open',
        'Warm-up Zone Open (stretching, light aerobics led by instructor)',
        'Baggage Counter & Water Points Open',
      ],
    },
    {
      time: '5:50 AM',
      events: [
        'Flag-off of 5K Run',
        'Runners assemble at the start line',
        'Briefing by Race Marshall & Safety Instructions',
        'Flag-off with countdown',
        'The Run starts at 6:00 AM',
      ],
    },
    {
      time: '6:30 AM onwards',
      events: [
        'Runners Return to Finish Line',
        'Cool-down stretches with volunteers/instructors',
        'Live music / motivational emcee engagement',
        'Photo booth open',
      ],
    },
    {
      time: '7:00 AM',
      events: ['Refreshments and Photo session'],
    },
    {
      time: '7:30 AM',
      events: ['Judges/Chief Guest Speeches'],
    },
    {
      time: '8:00 AM',
      events: [
        'Closing Ceremony',
        'Group photo of participants & volunteers',
        'Vote of Thanks',
      ],
    },
  ];

  const participants = [
    'Event T-shirt',
    'Bib number & T-shirt (a day prior)',
    'Participation Medal & Certificate on completion (Digital)',
    'Refreshments',
  ];

  const supportFacilities = [
    'Baggage counter',
    'First Aid & Ambulance on standby',
    'Volunteers & hydration points on route',
    'Emcee & DJ for energy/Zumba and media coverage',
  ];

  return (
    <section id="event-info" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#002868] mb-6">
           Event Info
          </h2>
          <div className="w-24 h-1 bg-[#ff7f32] mx-auto mb-8"></div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-[#002868] to-[#002868]/90 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 flex items-center">
              <Calendar className="mr-3 text-[#ff7f32]" size={32} />
              Event Details
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 text-[#ff7f32] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-lg mb-1">Venue</p>
                  <p className="text-white/90">Necklace Road, Hyderabad</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="mr-4 text-[#ff7f32] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-lg mb-1">Date</p>
                  <p className="text-white/90">30.11.2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="mr-4 text-[#ff7f32] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-lg mb-1">Time</p>
                  <p className="text-white/90">5:30 AM – 8:00 AM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Flag className="mr-4 text-[#ff7f32] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-lg mb-1">Categories</p>
                  <p className="text-white/90">3K Run • 5K Run</p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Itinerary */}
          <div>
            <h3 className="text-3xl font-bold text-[#002868] mb-8">Event Itinerary</h3>
            <div className="space-y-4">
              {itinerary.map((item, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-[#ff7f32] last:pb-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#ff7f32] rounded-full"></div>
                  <div className="bg-[#f8f9fa] rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <p className="text-[#ff7f32] font-bold text-sm mb-2">{item.time}</p>
                    {item.events.map((event, i) => (
                      <p key={i} className="text-[#002868] mb-1">
                        • {event}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Participants & Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f8f9fa] rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#002868] mb-6">What Participants Receive</h3>
            <div className="space-y-4">
              {participants.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-[#008751] rounded-full mr-4"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f8f9fa] rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#002868] mb-6">Support Facilities</h3>
            <div className="space-y-4">
              {supportFacilities.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-[#ff7f32] rounded-full mr-4"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;

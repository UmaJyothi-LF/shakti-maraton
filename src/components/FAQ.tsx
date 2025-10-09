import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who are the organizers of SAMVIDHAN SHAKTI 5K & 3K RUN?',
      answer: 'Ek Nayee Disha Foundation',
    },
    {
      question: 'What are the registration fees I have to pay?',
      answer: `5K Run - ₹799 Early Bird Fee and ₹599 Regular Fee\n3K Run - ₹399 Early Bird Fee and ₹499 Regular Fee`,
    },
    {
      question: 'What does the registration fee cover?',
      answer: `• Official Race T-shirt\n• Finisher’s Medal\n• Water and refreshments along the course\n• Post-race refreshments\n• Medical Support`,
    },
    {
      question: 'When and where can I collect my BIB?',
      answer: `BIB can be collected from 27.11.2025 to 29.11.2025, 11 AM to 6 PM at:\n4th Floor, Lumbini Arcade, opp Metro pillar C-1362,\nChikoti Gardens, Hyderabad-500016`,
    },
    {
      question: 'Can we collect the BIB on race day?',
      answer: 'No, BIB & Race T-Shirt must be collected on 29.11.2025. For more details visit our website.',
    },
    {
      question: 'Once registered, can I cancel my registration? Will there be any refund?',
      answer: 'Once your registration is successful, cancellations or refunds will NOT be entertained under any circumstances.',
    },
    {
      question: 'What is the last date of registration?',
      answer: '29-11-2025',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F4F4F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2F6F] mb-6">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-[#FF7F32] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">Got questions? We've got answers!</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-[#0A2F6F] pr-4">{faq.question}</span>
                <ChevronDown
                  className={`text-[#F18F2D] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

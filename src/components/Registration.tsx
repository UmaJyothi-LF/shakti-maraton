import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    gender: '',
    raceCategory: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setStep(1);
      setFormData({
        fullName: '',
        email: '',
        age: '',
        gender: '',
        raceCategory: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  // SUCCESS SCREEN
  if (submitted) {
    return (
      <section id="registration" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 text-center shadow-2xl">
            <CheckCircle className="w-20 h-20 text-[#008751] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#002868] mb-4">Registration Successful!</h2>
            <p className="text-xl text-gray-600">
              Thank you for registering. Check your email for confirmation details.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // MAIN FORM
  return (
    <section id="registration" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#002868] mb-6">Event Registration</h2>
          <div className="w-24 h-1 bg-[#FF7F32] mx-auto mb-8"></div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
          {/* Step Indicators */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    step >= num
                      ? 'bg-[#002868] text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-12 sm:w-24 h-1 mx-2 transition-all ${
                      step > num ? 'bg-[#FF7F32]' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#002868] mb-6">Personal Information</h3>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#FF7F32] focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#FF7F32] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#FF7F32] focus:outline-none transition-colors"
                    placeholder="Your age"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#FF7F32] focus:outline-none transition-colors"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <button
                onClick={handleNext}
                className="w-full bg-[#FF7F32] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#002868] transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Continue
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          )}

          {/* Step 2: Race Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#002868] mb-6">Select Race Category</h3>
              <div className="space-y-4">
                {[
                  { label: '3K Run', value: '3k', desc: 'Perfect for beginners and families', price: '₹500' },
                  { label: '5K Run', value: '5k', desc: 'Challenge yourself on the scenic route', price: '₹750' },
                ].map((race) => (
                  <label key={race.value} className="block">
                    <input
                      type="radio"
                      name="raceCategory"
                      value={race.value}
                      checked={formData.raceCategory === race.value}
                      onChange={handleInputChange}
                      className="hidden"
                    />
                    <div
                      className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                        formData.raceCategory === race.value
                          ? 'border-[#FF7F32] bg-[#FF7F32]/10'
                          : 'border-gray-300 hover:border-[#002868]'
                      }`}
                    >
                      <h4 className="text-xl font-bold text-[#002868] mb-2">{race.label}</h4>
                      <p className="text-gray-600 mb-2">{race.desc}</p>
                      <p className="text-2xl font-bold text-[#FF7F32]">{race.price}</p>
                    </div>
                  </label>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="w-1/2 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition-all flex items-center justify-center"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="w-1/2 bg-[#FF7F32] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#002868] transition-all flex items-center justify-center"
                >
                  Continue
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#002868] mb-6">Payment Information</h3>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-[#002868] mb-2">Registration Summary</h4>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">Name:</span> {formData.fullName}</p>
                  <p><span className="font-semibold">Email:</span> {formData.email}</p>
                  <p><span className="font-semibold">Category:</span> {formData.raceCategory === '3k' ? '3K Run - ₹500' : '5K Run - ₹750'}</p>
                </div>
              </div>
              <div className="border-2 border-gray-300 rounded-xl p-6 text-center">
                <p className="text-gray-600 mb-4">Payment gateway integration would appear here</p>
                <div className="text-sm text-gray-500">Secure payment powered by trusted providers</div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="w-1/2 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition-all flex items-center justify-center"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="w-1/2 bg-[#008751] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#006B44] transition-all flex items-center justify-center"
                >
                  Complete Registration
                  <CheckCircle className="ml-2" size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Registration;

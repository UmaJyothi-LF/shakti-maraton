import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#002868] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Top Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#F6B72F]">Samvidhan Shakti Run</h3>
            <p className="text-white/90 leading-relaxed">
              Running together to celebrate and uphold the constitutional values that strengthen our democracy.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#F6B72F]">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-3 flex-shrink-0 text-[#FF7F32]" size={20} />
                <a
                  href="mailto:info@samvidhanshaktirun.org"
                  className="hover:text-[#FF7F32] transition-colors"
                >
                  info@samvidhanshaktirun.org
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="mr-3 flex-shrink-0 text-[#FF7F32]" size={20} />
                <a href="tel:+911234567890" className="hover:text-[#FF7F32] transition-colors">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 flex-shrink-0 text-[#FF7F32]" size={20} />
                <span>
Sanjeevaiah Park, Necklace Road, Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#F6B72F]">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF7F32] hover:text-[#002868] transition-all"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF7F32] hover:text-[#002868] transition-all"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF7F32] hover:text-[#002868] transition-all"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            © 2025 Samvidhan Shakti Run. All rights reserved. | Built with pride for democracy.
          </p>
          <p className="text-sm text-[#F6B72F] mt-2">
            #Unity • #Justice • #Equality • #Liberty
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

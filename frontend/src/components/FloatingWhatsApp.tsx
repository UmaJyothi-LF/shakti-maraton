import { MessageCircle } from "lucide-react";

const FloatingWhatsApp: React.FC = () => {
  
  const whatsappLink =
    "#";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all z-50"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsApp;

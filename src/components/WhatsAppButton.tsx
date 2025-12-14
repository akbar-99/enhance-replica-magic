import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '971567215617';
const WHATSAPP_MESSAGE = 'Hello! I would like to know more about your IT services.';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="font-semibold hidden sm:inline">Chat with us</span>
    </a>
  );
}

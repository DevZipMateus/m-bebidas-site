import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5521971442727"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 sm:p-4 shadow-lg transition-colors duration-300"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle size={24} className="sm:w-7 sm:h-7" />
    </a>
  );
};

export default WhatsAppButton;

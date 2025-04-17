import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappChatButton() {
  return (
    <a
      href="https://wa.me/628123456789"
      target="_blank"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}

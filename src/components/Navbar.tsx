
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-7 w-7 text-whatsapp-light" />
          <span className="font-bold text-xl text-secondary">
            WhatsApp<span className="text-whatsapp-light">CRM</span>
          </span>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#recursos" className="text-gray-600 hover:text-gray-900">Recursos</a>
          <a href="#como-funciona" className="text-gray-600 hover:text-gray-900">Como Funciona</a>
          <a href="#depoimentos" className="text-gray-600 hover:text-gray-900">Depoimentos</a>
          <a href="#precos" className="text-gray-600 hover:text-gray-900">Preços</a>
          <Button>Comece Agora</Button>
        </div>
        
        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden container py-4">
          <div className="flex flex-col gap-4">
            <a 
              href="#recursos" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              Recursos
            </a>
            <a 
              href="#como-funciona" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              Como Funciona
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              Depoimentos
            </a>
            <a 
              href="#precos" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              Preços
            </a>
            <Button className="w-full">Comece Agora</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

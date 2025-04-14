
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-600">
              Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site. 
              Ao continuar navegando, você concorda com o uso de cookies conforme nossa{" "}
              <a 
                href="https://www.safecompliance.com.br/pol%C3%ADtica-de-privacidade" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-whatsapp-light hover:underline"
              >
                Política de Privacidade
              </a>.
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={acceptCookies}
              className="bg-whatsapp-light hover:bg-green-600 text-white"
            >
              Aceitar
            </Button>
            <button 
              onClick={() => setShowConsent(false)} 
              className="text-gray-500 hover:text-gray-700"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

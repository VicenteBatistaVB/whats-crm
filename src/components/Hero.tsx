
import { Button } from "@/components/ui/button";
import { PhoneCall, Users, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 hero-gradient">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-block bg-white shadow-md rounded-full px-4 py-2 text-sm font-medium text-whatsapp-dark">
              <span>Novo</span>
              <span className="mx-2">•</span>
              <span className="text-whatsapp-light">CRM Integrado com WhatsApp</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Whatsapp com CRM para atendimento.
            </h1>
            
            <p className="text-lg text-gray-600 md:pr-12">
              Transforme conversas em vendas com nossa plataforma de CRM integrada com WhatsApp, converta leads em clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                size="lg" 
                className="text-base"
                onClick={() => window.open('https://wa.me/558001119150', '_blank')}
              >
                Agendar Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div>
                <div className="flex justify-center">
                  <PhoneCall className="h-6 w-6 text-whatsapp-light" />
                </div>
                <p className="text-sm mt-2">Atendimento simplificado</p>
              </div>
              <div>
                <div className="flex justify-center">
                  <Users className="h-6 w-6 text-whatsapp-light" />
                </div>
                <p className="text-sm mt-2">Acompanhamento de clientes</p>
              </div>
              <div>
                <div className="flex justify-center">
                  <BarChart3 className="h-6 w-6 text-whatsapp-light" />
                </div>
                <p className="text-sm mt-2">Análise de desempenho</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/412ca65e-24d0-4049-8ebf-2d94a431cba4.png" 
              alt="Interface CRM WhatsApp" 
              className="w-full h-auto max-w-[500px] mx-auto object-contain z-10 relative animate-float"
            />
            <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-whatsapp-light/10 rounded-full -z-10"></div>
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-whatsapp-dark/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HowItWorks = () => {
  const isMobile = useIsMobile();
  
  const steps = [
    {
      number: "01",
      title: "Conecte sua conta do WhatsApp Business",
      description: "Integração rápida e segura com sua conta do WhatsApp Business API ou WhatsApp Business.",
      image: "/lovable-uploads/b6f02a7a-41e2-4962-b0c1-4dd7d70a121d.png"
    },
    {
      number: "02",
      title: "Configure seu fluxo de atendimento",
      description: "Personalize mensagens automáticas, chatbots e fluxos de trabalho conforme a necessidade do seu negócio.",
      image: "/lovable-uploads/c9c54e6b-df7b-4f8a-8ea6-ec5010c0ce98.png"
    },
    {
      number: "03",
      title: "Comece a gerenciar seus contatos",
      description: "Organize clientes, registre interações e acompanhe todo o histórico de comunicação em um só lugar.",
      image: "/lovable-uploads/10f426d9-171b-44ed-871d-64b202e33a6a.png"
    },
    {
      number: "04",
      title: "Agenda de compromissos integrada aos funis",
      description: "Gerencie sua agenda, organize compromissos e sincronize automaticamente com os funis de vendas e atendimento.",
      image: "/lovable-uploads/ef409984-95f8-4a38-9740-7175e928f446.png"
    }
  ];

  return (
    <section className="py-16 md:py-24" id="como-funciona">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona nossa solução
          </h2>
          <p className="text-gray-600 text-lg">
            Implementação simples e rápida. Em poucos passos, seu negócio estará pronto para atender com mais eficiência.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-auto object-contain rounded-xl shadow-lg"
                      style={{ maxHeight: isMobile ? "300px" : "400px" }}
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-whatsapp-light text-white text-4xl font-bold w-20 h-20 flex items-center justify-center rounded-2xl shadow-lg">
                    {step.number}
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1 mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-gray-700">
                        {index === 0 && item === 1 && "Segurança garantida nos dados"}
                        {index === 0 && item === 2 && "Conexão estável e confiável"}
                        {index === 0 && item === 3 && "Suporte técnico durante integração"}
                        
                        {index === 1 && item === 1 && "Mensagens de boas-vindas personalizadas"}
                        {index === 1 && item === 2 && "Respostas automáticas para FAQ"}
                        {index === 1 && item === 3 && "Modelos de mensagens prontos para usar"}
                        
                        {index === 2 && item === 1 && "Etiquetas para organizar contatos"}
                        {index === 2 && item === 2 && "Notas e lembretes por cliente"}
                        {index === 2 && item === 3 && "Histórico completo de interações"}
                        
                        {index === 3 && item === 1 && "Sincronização automática com funis"}
                        {index === 3 && item === 2 && "Lembretes de compromissos"}
                        {index === 3 && item === 3 && "Visualização compartilhada da agenda"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

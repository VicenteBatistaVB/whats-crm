
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type PlanProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
};

const PlanCard = ({ name, price, description, features, isPopular }: PlanProps) => {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-md border ${
      isPopular ? "border-primary" : "border-gray-100"
    }`}>
      {isPopular && (
        <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Mais Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">R${price}</span>
        <span className="text-gray-500">/mês</span>
      </div>
      
      <Button 
        className={`w-full mb-8 ${!isPopular ? "bg-secondary hover:bg-secondary/90" : ""}`}
        variant={isPopular ? "default" : "outline"}
      >
        Começar Agora
      </Button>
      
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="bg-green-100 rounded-full p-1 mt-1">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Iniciante",
      price: "197",
      description: "Ideal para pequenos negócios começando com WhatsApp.",
      features: [
        "1 número de WhatsApp",
        "Até 3 atendentes", 
        "500 contatos",
        "Menu inicial",
        "Relatórios",
        "Suporte por WhatsApp"
      ]
    },
    {
      name: "Profissional",
      price: "397",
      description: "Perfeito para empresas em crescimento que precisam de mais recursos.",
      features: [
        "3 números de WhatsApp",
        "Até 10 atendentes",
        "2000 contatos",
        "Chatbot avançado",
        "Automações de marketing",
        "Integrações com CRMs populares",
        "Relatórios avançados",
        "Suporte prioritário"
      ],
      isPopular: true
    },
    {
      name: "Empresarial",
      price: "797",
      description: "Solução completa para grandes operações de atendimento.",
      features: [
        "10 números de WhatsApp",
        "Atendentes ilimitados",
        "Contatos ilimitados",
        "Chatbot com IA",
        "Automações personalizadas",
        "API completa",
        "Integrações avançadas",
        "Relatórios personalizados",
        "Suporte VIP 24/7",
        "Implementação assistida"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24" id="precos">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preços transparentes para todos os tamanhos de negócio
          </h2>
          <p className="text-gray-600 text-lg">
            Escolha o plano ideal para o seu negócio e comece a transformar seu atendimento hoje mesmo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard 
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center bg-gray-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Precisa de um plano personalizado?</h3>
          <p className="text-gray-600 mb-4">
            Empresas com necessidades específicas podem entrar em contato para um plano sob medida.
          </p>
          <Button variant="outline">Fale com um Consultor</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;


import { MessageCircle, Users, Calendar, Clock, ChartBar, Bot, Send, ShieldCheck } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 feature-card border border-gray-100">
      <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "Chat Unificado",
      description: "Centralize todas as conversas de WhatsApp em uma única interface intuitiva."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Gerenciamento de Clientes",
      description: "Mantenha histórico completo e dados organizados de todos os seus contatos."
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Agendamentos",
      description: "Sistema integrado para marcação de compromissos e lembretes automáticos."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Automação de Atendimento",
      description: "Respostas automáticas e fluxos de conversação para otimizar seu tempo."
    },
    {
      icon: <ChartBar className="h-6 w-6 text-primary" />,
      title: "Análise de Desempenho",
      description: "Relatórios detalhados de conversas, conversões e satisfação dos clientes."
    },
    {
      icon: <Bot className="h-6 w-6 text-primary" />,
      title: "Chatbot Personalizado",
      description: "Configure bots inteligentes para atendimento inicial e qualificação de leads."
    },
    {
      icon: <Send className="h-6 w-6 text-primary" />,
      title: "Campanhas e Broadcast",
      description: "Envie mensagens em massa para grupos segmentados de clientes."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Segurança Garantida",
      description: "Proteção de dados e conformidade com LGPD e políticas do WhatsApp."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="recursos">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos completos para seu negócio crescer
          </h2>
          <p className="text-gray-600 text-lg">
            Nossa plataforma oferece tudo que você precisa para transformar o WhatsApp em sua mais poderosa ferramenta de vendas e atendimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

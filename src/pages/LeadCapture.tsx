import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, MessageCircle, Users, BarChartBig, HeartHandshake, Star, CircleDollarSign, ArrowRight } from "lucide-react";

const LeadCapture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="container max-w-3xl mx-auto py-12 md:py-24">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
            Transforme seu Atendimento no WhatsApp
          </h1>
          <p className="text-lg mb-8 text-muted-foreground">
            Descubra como nosso CRM especializado para WhatsApp Business pode 
            revolucionar seu relacionamento com clientes e impulsionar suas vendas.
          </p>

          <Card className="border-primary/20 bg-white/50 backdrop-blur-sm mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-primary fill-primary" />
                <h3 className="font-semibold text-lg">Destaque Especial: Plano Iniciante</h3>
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <CircleDollarSign className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">R$197/mês</span>
                </div>
                <p className="text-muted-foreground ml-7">Perfeito para começar sua jornada</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Implantação Grátis
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Consultoria Grátis
                  </Badge>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Até 4 atendentes inclusos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>500 contatos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Sistema completo de CRM</span>
                  </li>
                </ul>
                <Button 
                  variant="default" 
                  className="w-full mt-4 bg-green-500 text-white hover:bg-green-600"
                  asChild
                >
                  <Link to="/">
                    Saiba mais <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 mb-10">
            <div className="flex gap-3">
              <div className="bg-whatsapp-light/10 p-3 rounded-full">
                <MessageCircle className="h-6 w-6 text-whatsapp-light" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Atendimento Unificado</h3>
                <p className="text-muted-foreground">Centralize todas as conversas de WhatsApp em uma única plataforma</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="bg-whatsapp-light/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-whatsapp-light" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Captura Inteligente de Leads</h3>
                <p className="text-muted-foreground">Automatize a captura e qualificação de potenciais clientes</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-whatsapp-light/10 p-3 rounded-full">
                <BarChartBig className="h-6 w-6 text-whatsapp-light" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Controle de Funil de Vendas</h3>
                <p className="text-muted-foreground">Monitore cada fase da jornada de compra do seu cliente</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-whatsapp-light/10 p-3 rounded-full">
                <HeartHandshake className="h-6 w-6 text-whatsapp-light" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Relacionamento Pós-Venda</h3>
                <p className="text-muted-foreground">Mantenha a qualidade do atendimento e aumente a fidelização</p>
              </div>
            </div>
          </div>

          <Card className="border-whatsapp-light/20 bg-white/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg flex items-center gap-2 mb-3">
                <Check className="h-5 w-5 text-whatsapp-light" />
                O que nossos clientes conseguem:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-whatsapp-light" />
                  <span>Aumento de 35% na taxa de conversão de leads</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-whatsapp-light" />
                  <span>Redução de 40% no tempo de resposta ao cliente</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-whatsapp-light" />
                  <span>Melhora de 28% na satisfação do cliente</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LeadCapture;

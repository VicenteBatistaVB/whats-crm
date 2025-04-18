
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Check, MessageCircle, Users, BarChartBig, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Obrigado! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Transforme seu Atendimento no WhatsApp
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Descubra como nosso CRM especializado para WhatsApp Business pode 
              revolucionar seu relacionamento com clientes e impulsionar suas vendas.
            </p>

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

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-secondary mb-2">
                Quero conhecer o ZapSafe
              </h2>
              <p className="text-muted-foreground">
                Preencha o formulário e nossa equipe entrará em contato para uma demonstração exclusiva
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Seu nome completo"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="seu@email.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="(00) 00000-0000"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  placeholder="Nome da sua empresa"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-nos sobre suas necessidades..."
                  className="mt-1 resize-none"
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full">
                Solicitar Demonstração
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Ao enviar, você concorda com nossa política de privacidade 
                e aceita receber comunicações sobre nossos serviços.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCapture;

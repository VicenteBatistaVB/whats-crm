
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-whatsapp-dark text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme seu atendimento hoje mesmo
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Junte-se a milhares de empresas que estão revolucionando seu relacionamento com clientes através do WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-whatsapp-light hover:bg-whatsapp-light/90 text-white">
              Comece Grátis por 14 Dias
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Agendar Demonstração
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-gray-300">
            Sem necessidade de cartão de crédito • Cancelamento fácil • Suporte completo durante o teste
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

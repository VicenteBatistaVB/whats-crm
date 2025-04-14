
import { Button } from "@/components/ui/button";

const CTA = () => {
  const phoneNumber = "+558001119150";

  return (
    <section className="py-16 md:py-24 bg-whatsapp-dark text-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme seu atendimento hoje mesmo
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-800">
            Junte-se a milhares de empresas que estão revolucionando seu relacionamento com clientes através do WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-black border-black hover:bg-black/10">
                Fale com um consultor
              </Button>
            </a>
          </div>
          
          <p className="mt-8 text-sm text-gray-700">
            Sem necessidade de cartão de crédito • Cancelamento fácil • Suporte completo durante o teste
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;



import { MessageCircle, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="h-6 w-6 text-whatsapp-light" />
              <span className="font-bold text-xl text-secondary">
                WhatsApp<span className="text-whatsapp-light">CRM</span>
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Transforme seu atendimento e controle de clientes com a melhor solução de CRM integrada ao WhatsApp.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-whatsapp-light">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-whatsapp-light">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-whatsapp-light">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-whatsapp-light">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Produto</h3>
            <ul className="space-y-3">
              <li><a href="#recursos" className="text-gray-600 hover:text-whatsapp-light">Recursos</a></li>
              <li><a href="#precos" className="text-gray-600 hover:text-whatsapp-light">Preços</a></li>
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">API</a></li>
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">Integrações</a></li>
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">Novidades</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">Sobre nós</a></li>
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">Clientes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">Carreiras</a></li>
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">Documentação</a></li>
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">Status</a></li>
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-600 hover:text-whatsapp-light">Termos de Serviço</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WhatsApp CRM. Todos os direitos reservados.
          </p>
          <p className="text-gray-600">
            WhatsApp é uma marca registrada de Meta Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

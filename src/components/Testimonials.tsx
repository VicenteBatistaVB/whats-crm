
import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
};

const TestimonialCard = ({ quote, author, role, company, avatar, stars }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card bg-white p-8 rounded-xl shadow-md border border-gray-100">
      <div className="flex gap-1 mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 pl-6">{quote}</p>
      
      <div className="flex items-center gap-4">
        <img 
          src={avatar} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Desde que implementamos o WhatsApp CRM, nosso tempo de resposta diminuiu em 70% e as conversões aumentaram. Os clientes adoram a rapidez do atendimento.",
      author: "Ana Silva",
      role: "Gerente de Marketing",
      company: "Boutique Fashion",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      stars: 5
    },
    {
      quote: "A possibilidade de gerenciar todos os atendimentos em um só lugar revolucionou nossa operação. Conseguimos escalar sem perder qualidade.",
      author: "Roberto Martins",
      role: "CEO",
      company: "Tech Solutions",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5
    },
    {
      quote: "O agendamento automático e os lembretes por WhatsApp diminuíram nossas faltas em 50%. Ferramenta essencial para clínicas.",
      author: "Carla Mendes",
      role: "Administradora",
      company: "Clínica Saúde Total",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      stars: 4
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="depoimentos">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 text-lg">
            Empresas de todos os portes estão transformando seu atendimento com nosso WhatsApp CRM.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatar}
              stars={testimonial.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

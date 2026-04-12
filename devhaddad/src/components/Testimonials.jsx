import React, { useState } from 'react';
import { Plus, User, Upload } from 'lucide-react';

const Testimonials = () => {
  const [showModal, setShowModal] = useState(false);

  const testimonials = [
    {
      nome: "Murilo Guizelin",
      cargo: "Ex-Colegas de Time na Nasajon",
      comentario: "Foi uma grande experiência trabalhar com o Pablo na Nasajon. Ele é um profissional extremamente competente e que agrega muito à equipe.",
      link: "https://linkedin.com/in/muriloguizelin",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQFjsJKM8keMXg/profile-displayphoto-scale_200_200/B4DZn4KLoJGkAY-/0/1760805044888?e=1777507200&v=beta&t=zZ4bKWzrsl6OtJz4NQ0j83RS1c2uDF6NgHmUKQBYtF4" 
    },
    {
      nome: "Caio Souza",
      cargo: "Colega de Faculdade",
      comentario: "Uma pessoa brilhante e, sem dúvida, uma das pessoas mais dedicadas e esforçadas que eu já conheci.",
      link: "https://linkedin.com/in/caiosouzasantos",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQHoWcHKy2XM7Q/profile-displayphoto-scale_200_200/B4DZzy_tf4IwAY-/0/1773603314373?e=1777507200&v=beta&t=WAbQmVnC6TQ2njp3lX1l5qyWERzNap8uR4qRyI_R60M" 
    },
    {
      nome: "Davi Dias",
      cargo: "Colega de profissão",
      comentario: "Pablo, sem dúvidas, foi uma das pessoas mais esforçadas que eu conheci. Já na primeira impressão, vi que ele é bem receptivo em ajudar, mesmo que não ganhe nada em troca, e sempre confirma se o que ensinou foi realmente compreendido, o que eu considero uma grande diferença.",
      link: "https://linkedin.com/in/davifernandodias",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQFUa1xpbHdzLw/profile-displayphoto-shrink_200_200/B4DZRczKREGUAg-/0/1736723704646?e=1777507200&v=beta&t=yYNp6wwckltR04WAhUbjvFgOr3wpNT3EQzdR8HhGlg0" 
    },
  ];

  const displayList = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white border-t-4 border-black font-mono overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="bg-purple-400 text-black text-2xl md:text-3xl font-black px-4 py-1 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">
            Depoimentos_
          </h2>
          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 font-black text-sm border-2 border-black shadow-[4px_4px_0px_0px_#A78BFA] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <Plus size={18} /> ADICIONAR RECOMENDAÇÃO
          </button>
        </div>

        {/* Container do Carrossel */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex gap-8 py-4 w-max group"
            style={{ animation: 'loop-scroll 30s linear infinite' }}
          >
            <style>
              {`
                @keyframes loop-scroll {
                  from { transform: translateX(0); }
                  to { transform: translateX(-50%); }
                }
                .group:hover { animation-play-state: paused !important; }
              `}
            </style>

            {displayList.map((t, i) => (
              <div 
                key={i} 
                className="w-[300px] md:w-[450px] bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:scale-[1.01] transition-transform"
              >
                <div className="flex items-start gap-4 mb-4">
                  <a href={t.link} target="_blank" rel="noopener noreferrer" className="relative flex-shrink-0 group/photo block" title={`Ver perfil de ${t.nome}`}>
                    <div className="w-14 h-14 border-4 border-black bg-gray-200 overflow-hidden relative z-10 group-hover/photo:-translate-x-1 group-hover/photo:-translate-y-1 transition-transform">
                      {t.foto ? (
                        <img src={t.foto} alt={t.nome} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                          <User size={24} />
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-blue-400 border-4 border-black translate-x-1 translate-y-1 -z-0"></div>
                  </a>
                  <div>
                    <p className="font-black text-lg leading-tight uppercase">{t.nome}</p>
                    <p className="text-[10px] font-bold text-purple-600 uppercase tracking-tighter">{t.cargo}</p>
                  </div>
                </div>
                <p className="text-sm font-medium leading-relaxed italic">
                  "{t.comentario}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal atualizado com Envio de Foto e Efeito de Clique */}
        {showModal && (
          <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white border-4 border-black p-8 max-w-2xl w-full shadow-[10px_10px_0px_0px_#A78BFA] relative">
              <button onClick={() => setShowModal(false)} className="absolute -top-4 -right-4 bg-red-500 text-white font-black border-4 border-black w-10 h-10 hover:bg-black transition-colors">X</button>
              <h3 className="text-2xl font-black mb-4 uppercase italic">Deixe sua recomendação!_</h3>
              
              {/* Formulário com accept de arquivos e enctype multipart */}
              <form 
                action="https://formspree.io/f/xojpglpg"
                method="POST" 
                enctype="multipart/form-data" // OBRIGATÓRIO PARA ENVIAR ARQUIVOS
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* Inputs com efeito de foco brutalista: borda grossa e sombra */}
                <input 
                  name="nome" 
                  placeholder="NOME" 
                  required 
                  className="p-3 border-2 border-black outline-none bg-yellow-50 focus:border-blue-500 focus:shadow-[4px_4px_0px_0px_#60A5FA] transition-all" 
                />
                <input 
                  name="onde_trabalha" 
                  placeholder="ONDE TRABALHAMOS?" 
                  className="p-3 border-2 border-black outline-none bg-yellow-50 focus:border-blue-500 focus:shadow-[4px_4px_0px_0px_#60A5FA] transition-all" 
                />
                <input 
                  name="social" 
                  placeholder="LINKEDIN (Usarei sua foto de perfil)" 
                  required 
                  className="p-3 border-2 border-black outline-none bg-yellow-50 md:col-span-2 focus:border-blue-500 focus:shadow-[4px_4px_0px_0px_#60A5FA] transition-all" 
                />

                <textarea 
                  name="comentario" 
                  placeholder="SUA MENSAGEM..." 
                  required 
                  rows="4" 
                  className="p-3 border-2 border-black outline-none bg-yellow-50 md:col-span-2 resize-none focus:border-blue-500 focus:shadow-[4px_4px_0px_0px_#60A5FA] transition-all"
                ></textarea>
                
                <button type="submit" className="md:col-span-2 bg-black text-white font-black py-4 uppercase border-2 border-black hover:bg-purple-600 transition-all">
                  ENVIAR PARA VALIDAÇÃO _
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
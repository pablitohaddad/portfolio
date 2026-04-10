import React from 'react';

function Contact() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-black font-mono">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho Estilo Sticker */}
        <div className="flex justify-center mb-12">
          <h2 className="inline-block bg-[#FFEB3B] text-black text-4xl md:text-6xl font-black px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            CONTATO_
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Lado Esquerdo: Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter">Vamos construir algo juntos?</h3>
            <p className="text-gray-700 font-medium leading-relaxed">
              Estou sempre aberto a novas oportunidades, colaborações em projetos open-source ou apenas para um café virtual sobre engenharia de software.
            </p>
            
            <div className="bg-blue-400 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xs font-black uppercase text-black mb-1">Direct_Mail:</p>
              <a href="mailto:pablohaddad73@gmail.com" className="text-lg font-bold text-white hover:underline">
                pablohaddad73@gmail.com
              </a>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          {/* IMPORTANTE: Troque "SEU_ID_AQUI" pelo ID que você ganhar no Formspree */}
          <form 
            action="https://formspree.io/f/pablohaddad73@gmail.com" 
            method="POST"
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col">
              <label className="text-xs font-black uppercase mb-1">Seu E-mail:</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="exemplo@email.com"
                className="p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-black uppercase mb-1">Assunto:</label>
              <input 
                type="text" 
                name="subject"
                required
                placeholder="Título da mensagem"
                className="p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-black uppercase mb-1">Mensagem:</label>
              <textarea 
                name="message"
                required
                placeholder="O que você tem em mente?"
                rows="4"
                className="p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all outline-none resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-4 bg-black text-white font-black py-4 uppercase tracking-widest border-2 border-black shadow-[6px_6px_0px_0px_rgba(96,165,250,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:bg-gray-800"
            >
              Enviar Mensagem _
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
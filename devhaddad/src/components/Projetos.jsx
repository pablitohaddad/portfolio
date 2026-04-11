import React from 'react';

function Projetos() {
  const projects = [
    {
      title: 'F-DOZE',
      description: 'Jogo de navegador para testar os conhecimentos do jogador no F12 (DevTools).',
      link: 'https://f-doze.vercel.app/',
      // Nomes dos arquivos SVG que já mapeamos anteriormente
      techs: ['react-svgrepo-com', 'java-svgrepo-com', 'icons8-spring-boot']
    }
  ];

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-black font-mono">
      <div className="max-w-6xl mx-auto">
        
        {/* Título Estilo Badge */}
        <div className="flex justify-center mb-16">
          <h2 className="inline-block bg-blue-400 text-black text-4xl md:text-6xl font-black px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1">
            ./PROJETOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card do F-DOZE */}
          <div className="bg-gray-100 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between transition-all duration-75 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-black uppercase tracking-tighter">F-DOZE</h3>
                <span className="bg-black text-white text-[10px] px-2 py-1 font-bold"></span>
              </div>
              <p className="text-gray-700 font-medium mb-6 leading-relaxed">
                {projects[0].description}
              </p>
              
              {/* Ícones das Techs do Projeto */}
              <div className="flex gap-3 mb-8">
                {projects[0].techs.map(tech => (
                  <div 
                    key={tech} 
                    className="flex items-center justify-center w-10 h-10 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    title={tech.split('-')[0]}
                  >
                    <img 
                      src={`/images/techs/${tech}.svg`} 
                      alt={tech} 
                      className="w-6 h-6 object-contain" 
                    />
                  </div>
                ))}
              </div>
            </div>
            <a 
              href={projects[0].link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-blue-500 text-white border-2 border-black py-3 font-black uppercase hover:bg-blue-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              Acessar Projeto _
            </a>
          </div>

          {/* Destaque Especial: Canal devhaddad */}
          <div className="bg-[#FF0000] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white flex flex-col justify-between relative overflow-hidden group transition-all duration-75 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black">
                  <svg className="w-6 h-6 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-black tracking-tighter uppercase">devhaddad</h3>
              </div>
              
              <p className="text-white text-xl font-bold mb-2">Videos de vez em nunca (nunca mesmo)</p>
              <p className="text-red-100 font-medium mb-6">
                Fiz meu curso de Java básico pro GEDS no YouTube. E parei por aí. 
                Quem sabe não volto algum dia.
              </p>
            </div>

            <a 
              href="https://youtube.com/@devhaddad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 inline-block w-full text-center bg-white text-[#FF0000] border-2 border-black py-4 font-black uppercase hover:bg-gray-100 transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              Inscrever-se no Canal
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projetos;
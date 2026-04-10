import React from "react";

function Home() {
  const socialLinks = [
    {
      name: "Instagram",
      user: "devhaddad",
      url: "https://instagram.com/devhaddad",
      color: "hover:text-pink-400",
    },
    {
      name: "X",
      user: "devhaddad",
      url: "https://twitter.com/devhaddad",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      user: "pablohaddad",
      url: "https://linkedin.com/in/pablohaddad",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      user: "pablitohaddad",
      url: "https://github.com/pablitohaddad",
      color: "hover:text-gray-300",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900 text-white overflow-hidden font-mono border-t-2 border-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-20">
        {/* Imagem - Tamanho levemente reduzido para equilíbrio */}
        <div className="shrink-0 w-64 h-64 md:w-72 md:h-72 rounded-none overflow-hidden border-4 border-white shadow-[8px_8px_0px_0px_rgba(96,165,250,1)] transform transition-transform duration-500 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
          <img
            src="/assets/images/pablohaddad.jpeg"
            alt="Pablo Haddad - Engenheiro de Software"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Conteúdo de Texto */}
        <div className="text-center md:text-left">
          <p className="text-lg md:text-xl text-blue-400 mb-2 font-bold uppercase tracking-widest">
            // Bem-vindo!
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4 tracking-tighter uppercase">
            PABLO HADDAD
          </h1>

          <div className="inline-block bg-white text-gray-900 px-4 py-1 mb-6 border-2 border-blue-400 shadow-[4px_4px_0px_0px_rgba(96,165,250,1)]">
            <p className="text-md md:text-lg font-bold uppercase">
              Software Engineer
            </p>
          </div>

          <p className="max-w-lg mx-auto md:mx-0 text-base md:text-lg text-gray-300 leading-relaxed mb-8 border-l-4 border-white pl-4 italic">
            Sou pedreiro de software desde 2023, amante do Home Office e
            entusiasta de soluções simples. Gosto de ler, aprender e
            compartilhar meus conhecimentos com meus colegas.
          </p>

          {/* Seção de Redes Sociais */}
          <div className="pt-4">
            <p className="text-xs font-black uppercase tracking-widest text-white mb-4">
              // ME_SIGA_NAS_REDES_SOCIAIS
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {/* Instagram - Vermelho/Rosa vibrante */}
              <a
                href="https://instagram.com/devhaddad"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E1306C] text-white text-[10px] md:text-xs font-black px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-75 uppercase tracking-tighter"
              >
                Instagram
              </a>

              {/* LinkedIn - Azul Clássico */}
              <a
                href="https://linkedin.com/in/pablohaddad"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] text-white text-[10px] md:text-xs font-black px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-75 uppercase tracking-tighter"
              >
                LinkedIn
              </a>

              {/* X (Twitter) - Preto com borda branca para contraste */}
              <a
                href="https://twitter.com/devhaddad"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-[10px] md:text-xs font-black px-4 py-2 border-2 border-white shadow-[3px_3px_0px_0px_rgba(96,165,250,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-75 uppercase tracking-tighter"
              >
                X
              </a>

              {/* GitHub - Cinza Escuro/Preto com borda branca */}
              <a
                href="https://github.com/pablitohaddad"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-[10px] md:text-xs font-black px-4 py-2 border-2 border-white shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-75 uppercase tracking-tighter"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

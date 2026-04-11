import React from "react";

function About() {
  return (
    // bg-white com borda superior preta grossa para separar da Home
    <section
      id="sobre"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-black font-mono"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título com "Badge" estilo adesivo */}
        <div className="flex justify-center mb-16">
          <h2 className="inline-block bg-[#FFEB3B] text-black text-4xl md:text-6xl font-black px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            SOBRE_MIM
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo: Texto Principal */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 uppercase">
              // Trajetória
            </h3>
            <div className="bg-gray-100 p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-lg text-gray-800 leading-relaxed">
                Iniciei minha jornada em 2023, com vontade em atuar
                como analista de dados e Machine Learning. A área de dados
                despertou meu interesse na faculdade.
              </p>
              <p className="mt-4 text-lg text-gray-800 leading-relaxed font-medium">
                Depois de muito estudo (e sorte), consegui meu primeiro estágio na área
                de DEV (que ironia), na
                <span className="text-orange-500 font-bold"> Compass UOL</span>,
                passando por projetos acadêmicos na 
                <span className="text-blue-800 font-bold"> UNEMAT</span>
                , até o estágio remoto na
                <span className="text-blue-600 font-bold"> Nasajon</span>. Hoje,
                atuo como desenvolvedor na{" "}
                <span className="text-red-600 font-bold"> Total Express</span>.
              </p>
            </div>
          </div>

          {/* Lado Direito: "Cards" de Habilidades/Fatos */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-blue-400 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-black uppercase">💡 Filosofia</h4>
              <p className="text-sm font-bold text-white">
                Código limpo e soluções escaláveis.
              </p>
            </div>

            <div className="bg-pink-400 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-black uppercase">🚀 Foco Atual</h4>
              <p className="text-sm font-bold text-white">
                Desenvolvimento de Software & AWS Solutions.
              </p>
            </div>

            <div className="bg-green-400 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-black uppercase">🎓 Formação</h4>
              <p className="text-sm font-bold text-white">
                Ciência da Computação - UNEMAT (2023-2027)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from 'react';

function Books() {
  const technicalBooks = [
    {
      title: 'Entendendo Algoritmos',
      progress: 100,
      analysis: 'Melhor livro para quem nao sabe nada de Algoritmos (meu caso).',
      color: 'bg-green-400',
      amazon: 'https://amzn.to/3PzX1X1',
      cover: '/images/books/entendendoalgoritmos.png'
    },
    {
      title: '14 Hábitos de Programadores Produtivos',
      progress: 100,
      analysis: 'O Zeno foca no que importa: consistência, soft skills e hábitos que te tornam um profissional completo.',
      color: 'bg-yellow-400',
      amazon: 'https://amzn.to/3PyZ2Y2',
      cover: '/images/books/14habitosdeprogramadoresaltamenteprodutivos.png'
    },
    {
      title: 'The Pragmatic Programmer',
      progress: 5,
      analysis: 'Começando agora, estou lendo em ingles para praticar o idioma. O título é autoexplicativo.',
      color: 'bg-blue-400',
      amazon: 'https://amzn.to/3v0A3B3',
      cover: '/images/books/thepragmaticprogammer.png'
    },
    {
      title: 'Design Patterns',
      progress: 10,
      analysis: 'Denso. Mas estudar os padrões de projeto é essencial MESMO.',
      color: 'bg-purple-400',
      amazon: 'https://amzn.to/3I1C4D4',
      cover: '/images/books/designpatterns.png'
    }
  ];

  const nonTechnicalBooks = [
    {
      title: 'O Hobbit',
      progress: 100,
      analysis: 'Tolkien é um gênio da construção de mundos. O melhor livro que ja li na vida, com certeza.',
      color: 'bg-green-400',
      amazon: 'https://amzn.to/3T5E5F5',
      cover: '/images/books/hobbit.png'
    },
    {
      title: 'O guia do mochileiro das galáxias',
      progress: 100,
      analysis: 'Livro de ficção científica com uma pegada de filosofia também. O humor está presente do começo ao fim. Ri muito. Uma obra prima também.',
      color: 'bg-blue-600',
      amazon: 'https://amzn.to/3V7H7I7',
      cover: '/images/books/guiadomochileirodasgalaxias.png'
    },
    {
      title: 'Dom Quixote',
      progress: 100,
      analysis: 'Dom quixote é um maluco. Mas o livro é uma obra prima. Li ainda na adolescência e preciso ler novamente.',
      color: 'bg-amber-600',
      amazon: 'https://amzn.to/3V7H7I7',
      cover: '/images/books/domquixote.png'
    },
    {
      title: 'Fahrenheit 451',
      progress: 18,
      analysis: 'Ainda tentando me fixar no livro. Uma  hora vai.',
      color: 'bg-red-500',
      amazon: 'https://amzn.to/3W8I8J8',
      cover: '/images/books/fahrenheit451.png'
    },
    {
      title: 'O Mágico de Oz',
      progress: 10,
      analysis: 'Confesso que esse aqui eu por impulso. Mas to gostando.',
      color: 'bg-green-700',
      amazon: 'https://amzn.to/3X9J9K9',
      cover: '/images/books/magicodeoz.png'
    }
  ];

  const renderBookCard = (book) => {
    const totalBlocks = 10;
    const activeBlocks = Math.round(book.progress / 10);

    return (
      <div key={book.title} className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10 flex flex-col sm:flex-row gap-6 group/card">
        
        <a 
          href={book.amazon} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-shrink-0 group/cover relative inline-block mx-auto sm:mx-0"
        >
          <div className="w-32 h-44 bg-gray-200 border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group-hover/cover:translate-x-1 group-hover/cover:translate-y-1 group-hover/cover:shadow-none">
            <img 
              src={book.cover} 
              alt={`Capa do livro ${book.title}`}
              className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500"
              onError={(e) => {
                console.error(`Falha ao carregar: ${book.cover}`);
              }}
            />
          </div>
          <span className="absolute -bottom-2 -right-2 bg-yellow-400 text-black text-[10px] font-black px-2 border-2 border-black uppercase rotate-3 group-hover/cover:rotate-0 transition-transform">
            COMPRAR
          </span>
        </a>

        <div className="flex-grow">
          <div className="flex justify-between items-end mb-4">
            <h4 className="font-black uppercase text-base leading-none text-black max-w-[70%] tracking-tighter">{book.title}</h4>
            <span className="text-xl font-black italic text-black tabular-nums">{book.progress}%</span>
          </div>
          
          <div className="flex gap-1 mb-4">
            {[...Array(totalBlocks)].map((_, i) => (
              <div 
                key={i}
                className={`h-6 flex-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors duration-300 ${
                  i < activeBlocks ? book.color : 'bg-gray-100'
                }`}
              />
            ))}
          </div>

          <div className="bg-black text-white p-3 border-2 border-black relative mt-2">
            <p className="text-xs leading-relaxed italic opacity-90">
              "{book.analysis}"
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="livros" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white font-mono border-t-4 border-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter inline-block border-b-8 border-blue-400 pb-2">
            ./leituras_log
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-black uppercase mb-10 flex items-center text-blue-400">
              [ LIVROS_TECNICOS ]
            </h3>
            <div className="space-y-2">
              {technicalBooks.map(renderBookCard)}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black uppercase mb-10 flex items-center text-purple-400">
              [ LIVROS_NÃO_TECNICOS ]
            </h3>
            <div className="space-y-2">
              {nonTechnicalBooks.map(renderBookCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Books;
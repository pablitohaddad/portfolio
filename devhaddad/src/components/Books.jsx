import React from 'react';

function Books() {
  const technicalBooks = [
    {
      title: 'Entendendo Algoritmos',
      progress: 100,
      analysis: 'Melhor livro para quem nao sabe nada de Algoritmos (meu caso).',
      color: 'bg-green-400',
      amazon: 'https://www.amazon.com.br/Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos/dp/8575225634/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3VZ54YU1SZLK9&dib=eyJ2IjoiMSJ9.-Ji9GX_3ouLtmbRUcyx7lLtiLEosDn0fMDWAWq3nCTM6aSwfg4AwWVbs2zuBy1hsu2mBVaZeDHsEc9Ln4pOhRHmlmhIfBU5v5zkIzQnPuag8sZJv-MyLMoK8giW9eJbvoyyu9vmP3zo2uddbbMlTQvltxeyDMEOGVDK-3ijW7ZWlVpR2V0HMNOS1FZ2b4GfioXVNTCQJ1k5YYgAZjl0bcfDrZ6g6Tm-1Pl9S_Z1QISjf_KzJ4rAaNxkLT9Ydhx4NhvIIC0dIT578YkJZGR4nnaL90_5jiTR6-qo3zpL0-q4.gmB19X9AUorUK0VVL9Jpj9txWIzoS4lRlJ2ov7leMWU&dib_tag=se&keywords=entendendo+algoritmos&qid=1776485796&sprefix=entendendo+algoritmo%2Caps%2C202&sr=8-1',
      cover: '/images/books/entendendoalgoritmos.png'
    },
    {
      title: '14 Hábitos de Programadores Produtivos',
      progress: 100,
      analysis: 'O Zeno foca no que importa: consistência, soft skills e hábitos que te tornam um profissional completo.',
      color: 'bg-yellow-400',
      amazon: 'https://www.amazon.com.br/14-H%C3%A1bitos-Desenvolvedores-Altamente-Produtivos-ebook/dp/B08BF7PZZX/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3ALGOGFAVC1XM&dib=eyJ2IjoiMSJ9.L0vesxbko0SshpU0kXXjzj93W1aYt_3_-UA4OwdKrvLsMNPpgyLyw0mKOcLE9JzJc16QbIRyMfXnwGHT_xByFhe2PhSB9__zSyyyE9hOS35AtqEqTca-U05xGyemoKCxHn1Hl2urFT_JeVbjvCZcSdh29f07ci3q_0pOsuKiLFvqfaq8bDFY4ov3cjBCgdI5xolhJvnIM_qoSp_d-pIB8mwtlICqQ417qpMrm_cJk513kxUtxOuNGTd7JQIm-NklTfdFLcp_bV25iwz7c1jCbx3fOlilmCDBqAchftJ6WpQ.13xAWAqgQ10AW1sqn0Y7Pkg0yxXYI39xewJGX_VL0gA&dib_tag=se&keywords=14+habitos&qid=1776485826&sprefix=14+habitos%2Caps%2C210&sr=8-1',
      cover: '/images/books/14habitosdeprogramadoresaltamenteprodutivos.png'
    },
    {
      title: 'The Pragmatic Programmer',
      progress: 5,
      analysis: 'Começando agora, estou lendo em ingles para praticar o idioma. O título é autoexplicativo.',
      color: 'bg-blue-400',
      amazon: 'https://www.amazon.com.br/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052/ref=sr_1_1?crid=3LKQXFV9UCGU0&dib=eyJ2IjoiMSJ9.SAmqIxJO7d1n2XsZ7vN59UwiKLSiD-iVwQg2TU1GTusA9DEzSm28NUz8vTjHvtqa4fNSgQ2ofMvZH7hxFY4T1Yf5q1a54-6I1xjBwufdWyuiPattYQwFBunX12vlDfBNYKvDu1TdLA8fpzOdYAVwkCByeukio-T8YVa_bbBEKEBbRbX9drsiG1h8zwj53IDteGgOWI9c3NlK_XNs3XujObdZIB1za9EsL-5MDZm_m9ICgyxONAEfvkQPfjp2USiN3DIn6mlqXwMeYvLM3o1MuBdMEoVTXenbX6G1T5_2Vkc.lL5qE9ykVm6lCM_IFDlpKfoSqR2Z8ou1N6jnhox_Qt4&dib_tag=se&keywords=the+pragmatic+programmer&qid=1776485845&sprefix=The+pra%2Caps%2C216&sr=8-1&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678',
      cover: '/images/books/thepragmaticprogammer.png'
    },
    {
      title: 'Padrões de Projetos',
      progress: 10,
      analysis: 'Denso. Mas estudar os padrões de projeto é essencial MESMO.',
      color: 'bg-purple-400',
      amazon: 'https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3JOSQ3OTJFEJV&dib=eyJ2IjoiMSJ9.YlpKyGacQnfFFe0JTqnKGTVcuvdacdiRbL0hKMvl4SmSM0ZH0j1S0GjHw6Jnw9GorJrnQe9c-5J9DPHFEAseuULRlD9FSOlpjv4wLtoAt76sDYP64xLw37IQahI05bXLiNibl6XRETKpn74D--61J-4P9Bv1BMW0evEuzoDOFNzsa5_slk51lHh-d9cEHOWmho-abWy5IU2JNn0La8bgKoHVJfi4pr4C0vYUbyXpdlyiD7GL4TEa7xVn2WKD9ozHXQtGkTUa17K4pqzIQlE3zIVskoRgKBJI2SIebyMFGtY.18ZaDya87O30xGmJbM8A6QNbSQC4sdyaNb6e2mslbA8&dib_tag=se&keywords=padroes+de+projeto&qid=1776485865&sprefix=padroes+de+projet%2Caps%2C204&sr=8-1&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678',
      cover: '/images/books/designpatterns.png'
    }
  ];

  const nonTechnicalBooks = [
    {
      title: 'O Hobbit',
      progress: 100,
      analysis: 'Tolkien é um gênio da construção de mundos. O melhor livro que ja li na vida, com certeza.',
      color: 'bg-green-400',
      amazon: 'https://www.amazon.com.br/Hobbit-p%C3%B4ster-J-R-R-Tolkien/dp/8595084742/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=38G7PEV5SORNL&dib=eyJ2IjoiMSJ9.ukkXhruHGRPPxH_mBXThN9k-qUMvvr-2d4rH7OyrrWaU6e5ay-c6t_7innFdQc1YREshH412zny4N7s-HE4-eecuZz7mxOusBlvBdyj70BAsu-PJyC9bZsUyBqDlSh49fuQPcvH1xcPZfvLRWoafXLDfmvQmZ60H2_7YHECtwd2Oo-XO3G69A3p6uVpNzx_5vYDRC_VfgDHnirhAhBzKSaEy3RwQBvDOj7tbzQZgSCm-qNu0xzz-8cYMAXpRgMub8LY8-IwVfKuYdapgqNlQMbTDKrNeKaulXNb1wCQVzRI.QII6rlpFr_mOuq2KPXh8kTtD40NF2Daec4ol48GDYG4&dib_tag=se&keywords=o+hobbit&qid=1776485893&sprefix=o+hobbi%2Caps%2C207&sr=8-1',
      cover: '/images/books/hobbit.png'
    },
    {
      title: 'O guia do mochileiro das galáxias',
      progress: 100,
      analysis: 'Livro de ficção científica com uma pegada de filosofia também. O humor está presente do começo ao fim. Ri muito. Uma obra prima também.',
      color: 'bg-blue-600',
      amazon: 'https://www.amazon.com.br/guia-mochileiro-das-gal%C3%A1xias-Ilustrada/dp/6555651326/ref=sr_1_2?crid=AVD8SVM0QLS0&dib=eyJ2IjoiMSJ9.xWfFBdIujPV-RquYB21FIjD7JCV5wc-fXtADF5bxMyv2xYF5ShEJb6bpcRfpuWBwwuHcrqbdFeEQVoAO87SHPFU9O9Xb_WToo2I88URcwg97W0FVdu5xEbkXr0THW11KCvmSChzwdd0DfLK-_bC7RFa6Y_P01UpRKS0mwhoq1UXPlmNbfSHiRazHaOWJ5pZF8kfFMroH1C7R1R7586CWDR4E3G9EodjeFaDKHOaKpTT-5nzA3GNOM3oE2eLnlEQVNlDubZZT1HwtvMIyJ0za8Ls7f8h0ucNqgSXUdMNUzWM.iccReVh-2ZsiHTL9hApSSGZatCYA6KFosT6R4IySvnw&dib_tag=se&keywords=o+guia+do+mochileiro+das+gal%C3%A1xias&qid=1776485922&sprefix=o+guia+do+%2Caps%2C221&sr=8-2',
      cover: '/images/books/guiadomochileirodasgalaxias.png'
    },
    {
      title: 'A Metamorfose',
      progress: 100,
      analysis: 'O cara virou uma barata. Sem mais nem menos. Uma barata. Genial.',
      color: 'bg-green-670',
      amazon: 'https://www.amazon.com.br/metamorfose-Franz-Kafka/dp/8594318782/ref=sr_1_2?crid=3GZLROME3VSY5&dib=eyJ2IjoiMSJ9.HYYXXbYpCuik2_Wk9ah06HYPaEehL0kXf_APmIujDpz6Ogb1SSQWhqO7-hPGEx0gkpKRMKmJ6W3fm_duSsW-mx0hIJbKX9WQbGEfdSzOx2wkBBerlwLKeJQj8hJCB8uozxGDJdEJhdiRA_MmbxMw9-_AhXAS012bs2sOtsmtSfZK3dKAArlH0ZvqmE5KarOAabr-b-jw2yGvRiuckeD4B3ycOQvJsUMFQfTyp5rLZoSPYy5Yy8jhtqbmaf93FI-AcJQ8K2UZoZEIPXCmBDzPl-b6Z6ueXylhGc4-FoVc08A.OP_p-Kh4qUKUzn-wJOcjBG6P676WQDG6SQHsA1XdO5Y&dib_tag=se&keywords=metamorfose&qid=1776485999&sprefix=metamor%2Caps%2C216&sr=8-2',
      cover: '/images/books/metamorfose.jpg'
    },
    {
      title: 'Dom Quixote',
      progress: 100,
      analysis: 'Dom quixote é um maluco. Mas o livro é uma obra prima. Li ainda na adolescência e preciso ler novamente.',
      color: 'bg-amber-600',
      amazon: 'https://www.amazon.com.br/Dom-Quixote-Acompanha-marcador-p%C3%A1ginas/dp/6584956261/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=TXV4RHQCLP15&dib=eyJ2IjoiMSJ9.gbK0ULusUivJJoh2tSQJGSeZlAPPi4rmEyT3fsxpW5lSfjpx0WSlrRFOtIRlY_AO1cjG3UYrwCmQuAdxESXxXTGxpvFNFzxurY7rfZGKdJqMiDvbcqjKZfA257_8F4J-PKbNyZTYLEeFxQ02VVXCUL-r-m8F9n2f15-plDKQVQTNkl8ypQKlVeTYMRh26oFD6S5esLhQi9C-Xe7phXZORWerdfY8wooMit3tfZJoUPhOrOFAK-_dTJkpgpM0X1a-Py-Slp7g2fttlJcTaXb_ekAADO-jEy2G7WAeCE7Cex0.w5nOw6cp2zZC7Rar7_9vCT4O363Ps--SEjk7TkaEdlQ&dib_tag=se&keywords=Dom+quixote&qid=1776485940&sprefix=dom+quixo%2Caps%2C231&sr=8-3',
      cover: '/images/books/domquixote.png'
    },
    {
      title: 'Fahrenheit 451',
      progress: 18,
      analysis: 'Ainda tentando me fixar no livro. Uma  hora vai.',
      color: 'bg-red-451',
      amazon: 'https://www.amazon.com.br/Fahrenheit-451-Ray-Bradbury/dp/8525052248/ref=sr_1_2?crid=23ZDE9GVSJDXD&dib=eyJ2IjoiMSJ9.zows6BATrRi9YoJTQWxUoUtr7xzvm_NG_U6oue6c1XvIy3TX6IQ92TFPhSQq6TqTm3XMCmcU_RyM0IBXZvXyyR5vmKM4fZas-_bhDGrQzSvBpJ4Arb0WlgfOd9hAaGvhtfxsZqF5WeIHE_Dai9GG-geJUq8i9hQSQRMV7j-3zLEdupd5uvkTmByKx1hgVa8fMxXcU_iyDDrl083UDFg1Ixe-hl-skEgX3EW9p0MxXIpLFIB5TuUXFK_KNVi1K9pnVBGLGud3Ny9I-6B4mVk9pJaoxMBhW1npPzqxu7mLE0E.9yLu88zNZ1B0z2xkn7ng8Q9qFqzMn2rikxfkBCnb7nQ&dib_tag=se&keywords=fahrenheit+451&qid=1776485960&sprefix=fah%2Caps%2C213&sr=8-2',
      cover: '/images/books/fahrenheit451.png'
    },
    {
      title: 'O Mágico de Oz',
      progress: 45,
      analysis: 'Confesso que esse aqui eu por impulso. Mas to gostando.',
      color: 'bg-green-700',
      amazon: 'https://www.amazon.com.br/M%C3%A1gico-Oz-Edi%C3%A7%C3%A3o-bil%C3%ADngue-ilustrada/dp/6583545551/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=YJHQD6WZ06TO&dib=eyJ2IjoiMSJ9.lgmDF91pM-siBCWC2qOBQAbLCluqRTGshzoFSW9OSJCL2FMGDcL2YCcS_2tgOgm9Np3dip5hQQ6d4gBe_zVU-EenGdZOx10m7LLRl2uDinkVWlK8YpgszaVV3SE2xxg5dlX6rKv4pwPqyy4q5H3xpNyuUux3bk2RMrFATIitsf8b0SP-0yi1eloCOE40WmcUTgYBPUktbHFLFfKZr94B9MtcFgrplOY60PpknTtTIkmapZ_b7z8V-39SkDWeP9nASil1Qy5cE5K1RzocQymkj9uPBlN0jZz95Z8Ue-JNr_w.2mJHDk1oR7GstltBOkotUx00_qNdXS_6jDMsEqknUIY&dib_tag=se&keywords=O+magico+de+oz&qid=1776485983&sprefix=o+magico+de+o%2Caps%2C214&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
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
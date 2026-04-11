import React from 'react';

function Experience() {
  // Mapeamento de links das docs oficiais para as techs
  const techDocs = {
    'docker-svgrepo-com': 'https://docs.docker.com/',
    'java-svgrepo-com': 'https://docs.oracle.com/en/java/',
    'icons8-spring-boot': 'https://spring.io/projects/spring-boot',
    'postgresql-svgrepo-com': 'https://www.postgresql.org/docs/',
    'git-svgrepo-com': 'https://git-scm.com/doc',
    'linux-tux-svgrepo-com': 'https://www.kernel.org/doc/html/latest/',
    'flask-svgrepo-com': 'https://flask.palletsprojects.com/',
    'php-svgrepo-com': 'https://www.php.net/docs.php',
    'python-svgrepo-com': 'https://docs.python.org/3/',
    'rabbitmq-icon-svgrepo-com': 'https://www.rabbitmq.com/documentation.html',
    'react-svgrepo-com': 'https://react.dev/',
    'typescript-icon-svgrepo-com': 'https://www.typescriptlang.org/docs/',
    'kafka-svgrepo-com': 'https://kafka.apache.org/documentation/',
    'sqlite-svgrepo-com': 'https://www.sqlite.org/docs.html',
    'aws-svgrepo-com': 'https://docs.aws.amazon.com/',
    'mongo-svgrepo-com': 'https://www.mongodb.com/docs/',
  };

  const experiences = [
    {
      company: 'Total Express',
      role: 'Back-End Jr. Developer',
      period: '03/2026 – Atual',
      logo: '/images/experiences/totalexpresslogo.jpeg',
      linkedin: 'https://www.linkedin.com/company/totalexpress',
      color: 'bg-yellow-400',
      description: 'Estou construindo minha jornada na maior empresa de entrega privada do Brasil :)',
      techs: ['docker-svgrepo-com', 'java-svgrepo-com', 'icons8-spring-boot', 'postgresql-svgrepo-com', 'git-svgrepo-com', 'linux-tux-svgrepo-com'],
      bullets: ['Atuação no ecossistema de logística e entregas.', 'Desenvolvimento de soluções robustas para alta demanda.']
    },
    {
      company: 'Nasajon',
      role: 'Full Stack Intern',
      period: '06/2025 – 03/2026',
      logo: '/images/experiences/nasajon_logo.jpeg',
      linkedin: 'https://www.linkedin.com/company/nasajon/',
      color: 'bg-red-500',
      techs: ['docker-svgrepo-com', 'flask-svgrepo-com', 'git-svgrepo-com', 'linux-tux-svgrepo-com', 'php-svgrepo-com', 'postgresql-svgrepo-com', 'python-svgrepo-com', 'rabbitmq-icon-svgrepo-com', 'react-svgrepo-com', 'typescript-icon-svgrepo-com'],
      bullets: ['Desenvolvimento do Gateway "Base Forte".', 'Redução de latência na sincronização ERP/CRM.', 'Otimização de performance em PL/pgSQL.']
    },
    {
      company: 'UNEMAT',
      role: 'Instrutor Back-End (GEDS)',
      period: '01/2025 – 12/2025',
      logo: '/images/experiences/unematoficial_logo.jpeg',
      linkedin: 'https://www.linkedin.com/company/unematoficial/',
      color: 'bg-blue-600',
      techs: ['java-svgrepo-com', 'icons8-spring-boot', 'git-svgrepo-com', 'linux-tux-svgrepo-com', 'postgresql-svgrepo-com', 'rabbitmq-icon-svgrepo-com', 'kafka-svgrepo-com'],
      bullets: ['Capacitação de 22 alunos em Java/Spring Boot.', 'Orientação em projetos reais usando Kafka e RabbitMQ.']
    },
    {
      company: 'ExpiaAí',
      role: 'Software Engineer',
      period: '05/2024 – 06/2025',
      logo: null,
      linkedin: null,
      color: 'bg-orange-500',
      techs: ['java-svgrepo-com', 'icons8-spring-boot', 'docker-svgrepo-com', 'git-svgrepo-com', 'postgresql-svgrepo-com', 'rabbitmq-icon-svgrepo-com', 'linux-tux-svgrepo-com', 'sqlite-svgrepo-com'],
      bullets: ['Arquitetura de plataforma QR Code.', '90% de cobertura de testes com JUnit/Mockito.']
    },
    {
      company: 'CompassUOL',
      role: 'Back-end Intern',
      period: '12/2023 – 05/2024',
      logo: '/images/experiences/compass_uol_logo.jpeg',
      linkedin: 'https://www.linkedin.com/company/compass-uol',
      color: 'bg-black',
      techs: ['java-svgrepo-com', 'icons8-spring-boot', 'aws-svgrepo-com', 'docker-svgrepo-com', 'git-svgrepo-com', 'postgresql-svgrepo-com', 'rabbitmq-icon-svgrepo-com', 'linux-tux-svgrepo-com', 'mongo-svgrepo-com'],
      bullets: ['Desenvolvimento de APIs RESTful.', 'Gerenciamento de infraestrutura AWS (EC2, S3).']
    }
  ];

  const getFallbackLogo = (companyName, color) => {
    const initial = companyName.substring(0, 1).toUpperCase();
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect width="60" height="60" fill="${encodeURIComponent(color)}"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-family="Arial, sans-serif" font-size="30" font-weight="bold">${initial}</text></svg>`;
  };

  return (
    <section id="experiencias" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white font-mono border-t-4 border-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter inline-block border-b-4 border-blue-400 pb-2">
            ./experiência_profissional
          </h2>
        </div>

        <div className="relative border-l-4 border-white ml-6 md:ml-16 pl-10 pb-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-20 relative">
              
              {/* LOGO DA EMPRESA: Aumentado (w-14 h-14) e com animação hover */}
              <div className="absolute -left-[62px] top-0 w-14 h-14 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center overflow-hidden bg-gray-700 transition-all duration-75 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer">
                {exp.linkedin ? (
                  <a href={exp.linkedin} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
                    <img 
                      src={exp.logo || getFallbackLogo(exp.company, exp.color.replace('bg-', ''))} 
                      alt={exp.company}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = getFallbackLogo(exp.company, exp.color.replace('bg-', '')); }}
                    />
                  </a>
                ) : (
                  <img src={exp.logo || getFallbackLogo(exp.company, exp.color.replace('bg-', ''))} className="w-full h-full object-cover" />
                )}
              </div>

              {/* CARD: Estático (sem hover translate) */}
              <div className="bg-white text-black p-6 border-2 border-white shadow-[6px_6px_0px_0px_rgba(96,165,250,1)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b-2 border-gray-200 pb-2">
                  <div>
                    <h3 className="text-xl font-black uppercase">{exp.role}</h3>
                    <p className="text-blue-600 font-bold uppercase">{exp.company}</p>
                  </div>
                  <span className="bg-black text-white px-3 py-1 text-xs font-bold mt-2 md:mt-0 border border-black">
                    {exp.period}
                  </span>
                </div>

                {exp.description && (
                  <p className="mb-4 text-sm italic font-bold text-gray-600">{exp.description}</p>
                )}

                <ul className="space-y-2 mb-6 text-sm">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2 font-black">{">"}</span>
                      <span className="font-medium text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {exp.techs.map((tech) => (
                    <a 
                      key={tech} 
                      href={techDocs[tech] || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-gray-50 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-75 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                      title={`Doc: ${tech.split('-')[0]}`} 
                    >
                      <img src={`/images/techs/${tech}.svg`} alt={tech} className="w-6 h-6 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
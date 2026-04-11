import React, { useState, useEffect, useRef, use } from 'react';
import { ThumbsUp, ThumbsDown, Eye } from 'lucide-react';

function Header() {
  const navLinks = ['Home', 'Sobre', 'Experiências', 'Projetos', 'Livros', 'Contato'];
  const [likes, setLikes] = useState(0); 
  const [hasVoted, setHasVoted] = useState(false);
  
  // 1. Estado para armazenar as visualizações
  const [views, setViews] = useState(0);

  const hasCounted = useRef(false);

  useEffect(() => {
    // Lógica do Like (Persistência)
    const voted = localStorage.getItem('pablo_voted');
    if (voted) {
      setHasVoted(true);
      setLikes(1); 
    }
  }, []);
  
 useEffect(() => {
  if (hasCounted.current) return;

  // Pegando a chave das variáveis de ambiente
  const API_KEY = import.meta.env.VITE_COUNTER_API_KEY;
  
  // URLs configuradas para enviar a chave como parâmetro (evita erro de CORS no navegador do seu amigo)
  const UP_ENDPOINT = `https://api.counterapi.dev/v2/pablo-haddads-team-3684/first-counter-3684/up?api_key=${API_KEY}`;
  const GET_ENDPOINT = `https://api.counterapi.dev/v2/pablo-haddads-team-3684/first-counter-3684?api_key=${API_KEY}`;

  // 1. Primeiro incrementamos a visita
  fetch(UP_ENDPOINT)
    .then(res => {
      if (!res.ok) throw new Error('Falha ao incrementar');
      return fetch(GET_ENDPOINT); // 2. Busca o valor real após o incremento
    })
    .then(res => res.json())
    .then(response => {
      if (response?.data?.up_count !== undefined) {
        setViews(response.data.up_count);
      }
    })
    .catch(err => console.error("Erro na contagem global:", err));

  hasCounted.current = true;
}, []);

  const handleLike = () => {
    if (!hasVoted) {
      setLikes(1);
      setHasVoted(true);
      localStorage.setItem('pablo_voted', 'true');
    } else {
      setLikes(0);
      setHasVoted(false);
      localStorage.removeItem('pablo_voted');
    }
  };

  const handleDislike = () => {
    window.open('https://twitter.com/devhaddad', '_blank');
  };

  const sanitizeId = (label) => {
    return label.toLowerCase().replace(/ç/g, 'c').replace(/[áàâã]/g, 'a').replace(/[éèê]/g, 'e').replace(/[íìî]/g, 'i').replace(/[óòôõ]/g, 'o').replace(/[úùû]/g, 'u').replace(/ /g, '');
  };

  return (
    <header className="bg-gray-900 border-b-2 border-white sticky top-0 z-50 font-mono">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between p-4 gap-2 flex-nowrap overflow-hidden">
        
        {/* ESQUERDA: Logo + Contador de Visitas ADICIONADO */}
        <div className="flex-shrink-0 flex items-center gap-4">
          <a href="#home" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity whitespace-nowrap">
            <span className="text-white">PABLO</span>
            <span className="text-blue-400">HADDAD</span>
          </a>

          {/* Badge do Contador de Views */}
<div className="hidden sm:flex items-center gap-2 bg-gray-800 border-2 border-white px-2 py-1 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
  <Eye size={14} strokeWidth={3} className="text-blue-400" />
  <span className="text-[10px] font-black text-white tabular-nums uppercase tracking-tighter">
    Views: {views}
  </span>
</div>
        </div>

        {/* CENTRO: Navegação */}
        <nav className="flex items-center gap-2 overflow-x-auto overflow-y-hidden px-2 flex-nowrap scrollbar-hide">
          {navLinks.map((label) => (
            <a
              key={label}
              href={`#${sanitizeId(label)}`}
              className="inline-flex items-center justify-center h-8 px-3 text-[10px] font-bold uppercase tracking-widest text-white bg-gray-800 border border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-75 whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* DIREITA: Votos (MANTIDO EXATAMENTE COMO VOCÊ MANDOU) */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Botão LIKE - Exatamente o mesmo padrão */}
          <button 
            onClick={handleLike}
            className="
              flex items-center gap-2 px-3 py-1 border-2 border-white bg-gray-800 text-white text-[10px] font-black uppercase transition-all 
              shadow-[2px_2px_0px_0px] shadow-green-500
              hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
              active:bg-green-500
            "
          >
            <ThumbsUp size={14} strokeWidth={3} className="text-white" />
            {likes}
          </button>
          
          <button 
            onClick={handleDislike}
            className="
              flex items-center gap-2 px-3 py-1 border-2 border-white bg-gray-800 text-white text-[10px] font-black uppercase transition-all 
              shadow-[2px_2px_0px_0px] shadow-red-500
              hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
              active:bg-red-500
            "
          >
            <ThumbsDown size={14} strokeWidth={3} className="text-white" />
            0
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
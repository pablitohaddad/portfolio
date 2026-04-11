import React, { useState, useEffect, useRef } from "react";
import { ThumbsUp, ThumbsDown, Eye } from "lucide-react";

function Header() {
  const navLinks = ["Home", "Sobre", "Experiências", "Projetos", "Livros", "Contato"];
  
  // Estados
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [isLiked, setIsLiked] = useState(() => localStorage.getItem("pablo_voted") === "true");

  // Refs e Configs
  const hasCounted = useRef(false);
  const API_KEY = import.meta.env.VITE_COUNTER_API_KEY;
  const BASE_URL = "https://api.counterapi.dev/v2/pablo-haddads-team-3684";

  // 1. Efeito Unificado: Visitas e Likes iniciais
  useEffect(() => {
    // Trava para evitar loops em navegadores como Brave ou StrictMode do React
    if (hasCounted.current || window.alreadyCounted) return;

    const viewsUrl = `${BASE_URL}/first-counter-3684/up?api_key=${API_KEY}`;
    const likesUrl = `${BASE_URL}/like-pablitohaddadev?api_key=${API_KEY}`;

    // Incrementa Views e busca total
    fetch(viewsUrl)
      .then(res => res.json())
      .then(res => {
        if (res?.data?.count !== undefined) setViews(res.data.count);
      })
      .catch(err => console.error("Erro views:", err));

    // Busca saldo de Likes
    fetch(likesUrl)
      .then(res => res.json())
      .then(res => {
        if (res?.data?.count !== undefined) setLikes(res.data.count);
      })
      .catch(err => console.error("Erro likes:", err));

    hasCounted.current = true;
    window.alreadyCounted = true; // Proteção extra no nível da janela
  }, [API_KEY]);

  // 2. Função de Like (Apenas soma)
  const handleLike = () => {
    if (isLiked) return;

    const URL = `${BASE_URL}/like-pablitohaddadev/up?api_key=${API_KEY}`;

    // Update Otimista
    setLikes(prev => prev + 1);
    setIsLiked(true);
    localStorage.setItem("pablo_voted", "true");

    fetch(URL).catch(err => {
      setLikes(prev => prev - 1);
      setIsLiked(false);
      localStorage.removeItem("pablo_voted");
      console.error("Erro ao registrar like:", err);
    });
  };

  const handleDislike = () => window.open("https://twitter.com/devhaddad", "_blank");

  const sanitizeId = (label) => 
    label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");

  return (
    <header className="bg-gray-900 border-b-2 border-white sticky top-0 z-50 font-mono">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between p-4 gap-2 flex-nowrap">
        
        {/* LOGO & VIEWS */}
        <div className="flex-shrink-0 flex items-center gap-4">
          <a href="#home" className="text-xl font-bold tracking-tighter text-white">
            PABLO<span className="text-blue-400">HADDAD</span>
          </a>
          <div className="hidden sm:flex items-center gap-2 bg-gray-800 border-2 border-white px-2 py-1 shadow-[2px_2px_0px_0px_white]">
            <Eye size={14} className="text-blue-400" />
            <span className="text-[10px] font-black text-white uppercase tabular-nums">
              Views: {views}
            </span>
          </div>
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-2 overflow-x-auto px-2 scrollbar-hide">
          {navLinks.map((label) => (
            <a 
              key={label} 
              href={`#${sanitizeId(label)}`} 
              className="h-8 px-3 text-[10px] font-bold uppercase text-white bg-gray-800 border border-white shadow-[2px_2px_0px_0px_white] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* VOTES */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleLike}
            disabled={isLiked}
            className={`flex items-center gap-2 px-3 py-1 border-2 border-white text-[10px] font-black uppercase transition-all 
              ${isLiked 
                ? 'bg-green-600 text-white cursor-default' 
                : 'bg-gray-800 text-white shadow-[2px_2px_0px_0px_#22c55e] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
              }
            `}
          >
            <ThumbsUp size={14} strokeWidth={3} />
            {likes}
          </button>

          <button 
            onClick={handleDislike} 
            className="flex items-center gap-2 px-3 py-1 border-2 border-white bg-gray-800 text-white text-[10px] font-black uppercase transition-all shadow-[2px_2px_0px_0px_#ef4444] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:bg-red-500"
          >
            <ThumbsDown size={14} strokeWidth={3} />
            0
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
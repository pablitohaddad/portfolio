import React, { useState, useEffect, useRef } from "react";
import { ThumbsUp, ThumbsDown, Eye } from "lucide-react";

function Header() {
  const navLinks = ["Home", "Sobre", "Experiências", "Projetos", "Livros", "Contato"];
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem("pablo_voted") === "true";
  });

  const hasCounted = useRef(false);
  const API_KEY = import.meta.env.VITE_COUNTER_API_KEY;

  // // 1. Contador de Visitas
  // useEffect(() => {
  //   if (hasCounted.current) return;
  //   const ENDPOINT = `https://api.counterapi.dev/v2/pablo-haddads-team-3684/first-counter-3684/up?api_key=${API_KEY}`;
    
  //   fetch(ENDPOINT)
  //     .then(res => res.json())
  //     .then(response => {
  //       if (response?.data?.up_count !== undefined) setViews(response.data.up_count);
  //     })
  //     .catch(err => console.error("Erro views:", err));

  //   hasCounted.current = true;
  // }, [API_KEY]);

  // // 2. Buscar Likes Globais (Apenas up_count)
  // useEffect(() => {
  //   const GET_LIKES = `https://api.counterapi.dev/v2/pablo-haddads-team-3684/like-pablitohaddadev?api_key=${API_KEY}`;
  //   fetch(GET_LIKES)
  //     .then(res => res.json())
  //     .then(response => {
  //       if (response?.data?.up_count !== undefined) setLikes(response.data.up_count);
  //     });
  // }, [API_KEY]);

  // 3. Função de Like (Apenas soma, sem ficar negativo)
  const handleLike = () => {
    if (isLiked) return; // Se já deu like, não faz nada (evita spam e erro de lógica)

    const URL = `https://api.counterapi.dev/v2/pablo-haddads-team-3684/like-pablitohaddadev/up?api_key=${API_KEY}`;

    setLikes(prev => prev + 1);
    setIsLiked(true);
    localStorage.setItem("pablo_voted", "true");

    fetch(URL).catch(err => {
      setLikes(prev => prev - 1);
      setIsLiked(false);
      localStorage.removeItem("pablo_voted");
      console.error("Erro like:", err);
    });
  };

  const handleDislike = () => window.open("https://twitter.com/devhaddad", "_blank");

  const sanitizeId = (label) => label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "");

  return (
    <header className="bg-gray-900 border-b-2 border-white sticky top-0 z-50 font-mono">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between p-4 gap-2 flex-nowrap overflow-hidden">
        <div className="flex-shrink-0 flex items-center gap-4">
          <a href="#home" className="text-xl font-bold tracking-tighter text-white">
            PABLO<span className="text-blue-400">HADDAD</span>
          </a>
          {/* <div className="hidden sm:flex items-center gap-2 bg-gray-800 border-2 border-white px-2 py-1 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            <Eye size={14} className="text-blue-400" />
            <span className="text-[10px] font-black text-white uppercase">Views: {views}</span>
          </div> */}
        </div>

        <nav className="flex items-center gap-2 overflow-x-auto px-2 scrollbar-hide">
          {navLinks.map((label) => (
            <a key={label} href={`#${sanitizeId(label)}`} className="h-8 px-3 text-[10px] font-bold uppercase text-white bg-gray-800 border border-white shadow-[2px_2px_0px_0px_white] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center">
              {label}
            </a>
          ))}
        </nav>

        {/* <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleLike}
            disabled={isLiked}
            className={`flex items-center gap-2 px-3 py-1 border-2 border-white text-[10px] font-black uppercase transition-all 
              ${isLiked ? 'bg-green-600 text-white cursor-default' : 'bg-gray-800 text-white shadow-[2px_2px_0px_0px_#22c55e] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'}
            `}
          >
            <ThumbsUp size={14} strokeWidth={3} />
            {likes}
          </button>

          <button onClick={handleDislike} className="flex items-center gap-2 px-3 py-1 border-2 border-white bg-gray-800 text-white text-[10px] font-black uppercase transition-all shadow-[2px_2px_0px_0px_#ef4444] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:bg-red-500">
            <ThumbsDown size={14} strokeWidth={3} />0
          </button>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
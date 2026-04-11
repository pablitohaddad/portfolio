import React, { useState, useEffect, useRef } from "react";
import { ThumbsUp, ThumbsDown, Eye } from "lucide-react";

function Header() {
  const navLinks = ["Home", "Sobre", "Experiências", "Projetos", "Livros", "Contato"];
  
  // Estados
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(() => {
    // Inicia verificando se já deu like no passado
    return localStorage.getItem("pablo_voted") === "true";
  });

  const hasCounted = useRef(false);
  const API_KEY = import.meta.env.VITE_COUNTER_API_KEY;

  // 1. EFEITO: Contador de Visitas (Global)
  useEffect(() => {
    if (hasCounted.current) return;

    const UP_VIEWS = `https://api.counterapi.dev/v2/pablo-haddads-team-3684/first-counter-3684/up?api_key=${API_KEY}`;
    const GET_VIEWS = `https://api.counterapi.dev/v2/pablo-haddads-team-3684/first-counter-3684?api_key=${API_KEY}`;

    fetch(UP_VIEWS)
      .then(() => fetch(GET_VIEWS))
      .then((res) => res.json())
      .then((response) => {
        if (response?.data?.up_count !== undefined) {
          setViews(response.data.up_count);
        }
      })
      .catch((err) => console.error("Erro views:", err));

    hasCounted.current = true;
  }, [API_KEY]);

  // 2. EFEITO: Buscar Likes Globais ao carregar
  useEffect(() => {
    const GET_LIKES = `https://api.counterapi.dev/v2/pablo-haddads-team-3684/like-pablitohaddadev?api_key=${API_KEY}`;

    fetch(GET_LIKES)
      .then((res) => res.json())
      .then((response) => {
        // Se você usa up/down, o ideal é pegar o 'count' (saldo líquido)
        if (response?.data?.count !== undefined) {
          setLikes(response.data.count);
        }
      })
      .catch((err) => console.error("Erro likes:", err));
  }, [API_KEY]);

  // 3. FUNÇÃO: Alternar Like (Global + LocalStorage)
  const handleLike = () => {
    const action = isLiked ? "down" : "up";
    const URL = `https://api.counterapi.dev/v2/pablo-haddads-team-3684/like-pablitohaddadev/${action}?api_key=${API_KEY}`;

    const newLikedStatus = !isLiked;
    
    // Atualização Otimista
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(newLikedStatus);
    localStorage.setItem("pablo_voted", newLikedStatus);

    fetch(URL).catch((err) => {
      // Reverte se der erro
      setLikes((prev) => (isLiked ? prev + 1 : prev - 1));
      setIsLiked(isLiked);
      localStorage.setItem("pablo_voted", isLiked);
      console.error("Erro like:", err);
    });
  };

  const handleDislike = () => {
    window.open("https://twitter.com/devhaddad", "_blank");
  };

  const sanitizeId = (label) => {
    return label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "");
  };

  return (
    <header className="bg-gray-900 border-b-2 border-white sticky top-0 z-50 font-mono">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between p-4 gap-2 flex-nowrap overflow-hidden">
        
        <div className="flex-shrink-0 flex items-center gap-4">
          <a href="#home" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity whitespace-nowrap">
            <span className="text-white">PABLO</span>
            <span className="text-blue-400">HADDAD</span>
          </a>

          <div className="hidden sm:flex items-center gap-2 bg-gray-800 border-2 border-white px-2 py-1 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            <Eye size={14} strokeWidth={3} className="text-blue-400" />
            <span className="text-[10px] font-black text-white tabular-nums uppercase tracking-tighter">
              Views: {views}
            </span>
          </div>
        </div>

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

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleLike}
            className={`
              flex items-center gap-2 px-3 py-1 border-2 border-white text-[10px] font-black uppercase transition-all 
              hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
              ${isLiked ? 'bg-green-500 text-gray-900 shadow-none' : 'bg-gray-800 text-white shadow-[2px_2px_0px_0px] shadow-green-500'}
            `}
          >
            <ThumbsUp size={14} strokeWidth={3} />
            {likes}
          </button>

          <button
            onClick={handleDislike}
            className="flex items-center gap-2 px-3 py-1 border-2 border-white bg-gray-800 text-white text-[10px] font-black uppercase transition-all shadow-[2px_2px_0px_0px] shadow-red-500 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:bg-red-500"
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
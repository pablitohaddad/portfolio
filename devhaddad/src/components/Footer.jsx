import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 border-t-4 border-white text-white font-mono py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Marca / Logo Reduzida */}
        <div className="text-xl font-black tracking-tighter">
          <span>PABLO</span>
          <span className="text-blue-400">HADDAD</span>
        </div>

        {/* Links Sociais no estilo Badge */}
        <div className="flex gap-4">
          <a 
            href="https://linkedin.com/in/pablohaddad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-3 py-1 text-xs font-black border-2 border-white hover:bg-blue-400 hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a 
            href="https://github.com/pablitohaddad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-3 py-1 text-xs font-black border-2 border-white hover:bg-gray-300 transition-colors"
          >
            GITHUB
          </a>
          <a 
            href="https://youtube.com/@devhaddad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-3 py-1 text-xs font-black border-2 border-white hover:bg-[#FF0000] hover:text-white transition-colors"
          >
            YOUTUBE
          </a>
        </div>

        {/* Copyright Minimalista */}
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          © {new Date().getFullYear()} — Feito por Pablo Haddad
        </div>

      </div>
    </footer> // <-- Agora fechando corretamente com footer
  );
}

export default Footer;
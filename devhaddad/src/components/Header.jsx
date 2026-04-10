import React from 'react';

function Header() {
  const navLinks = ['Home', 'Sobre', 'Experiências', 'Projetos', 'Livros', 'Contato'];

  const sanitizeId = (label) => {
    return label
      .toLowerCase()
      .replace(/ç/g, 'c')
      .replace(/á/g, 'a')
      .replace(/é/g, 'e')
      .replace(/ê/g, 'e')
      .replace(/í/g, 'i')
      .replace(/ó/g, 'o')
      .replace(/ú/g, 'u')
      .replace(/ /g, '');
  };

  return (
    <header className="bg-gray-900 border-b-2 border-white sticky top-0 z-50 font-mono">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between p-4 gap-4">
        
        {/* Logo Minimalista como Link para Home */}
        <a 
          href="#home" 
          className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          <span className="text-white">PABLO</span>
          <span className="text-blue-400">HADDAD</span>
        </a>

        {/* Navegação Neo-Brutalista Minimalista */}
        <nav className="flex flex-wrap justify-center sm:justify-end gap-2">
          {navLinks.map((label) => (
            <a
              key={label}
              href={`#${sanitizeId(label)}`}
              className="inline-flex items-center justify-center h-9 px-4 text-[11px] font-bold uppercase tracking-widest text-white bg-gray-800 border border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-75"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
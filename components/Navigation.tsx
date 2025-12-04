'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'how-i-work', label: 'How I Work' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About me' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const [activeId, setActiveId] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120;
      let currentId = 'home';

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
          currentId = item.id;
          break;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(target);
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <div className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-neutral-700 bg-neutral-900/90 px-3 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-1.5 text-xs md:text-sm rounded-full transition-colors duration-200 ${
                isActive
                  ? 'bg-neutral-100 text-black'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from '../animations/gsapConfig';
import { useContactDialog } from './ContactDialogProvider';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const { open } = useContactDialog();

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let currentId = 'home';

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          currentId = item.id;
          break;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen || !mobileMenuRef.current) return;

    const el = mobileMenuRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: -8, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out' }
    );
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(target);
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-end md:justify-center">
        <div className="hidden md:inline-flex items-center gap-1 rounded-full border border-white/10 bg-neutral-900/40 px-3 py-2 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() =>
                  item.id === 'contact' ? open() : scrollToSection(item.id)
                }
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

        <button
          type="button"
          onClick={() => setIsMenuOpen((openState) => !openState)}
          className="inline-flex md:hidden items-center gap-2 rounded-full border border-white/10 bg-neutral-900/80 px-4 py-2 text-xs font-medium text-neutral-100 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="tracking-[0.2em] uppercase">Menu</span>
          {isMenuOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-3 px-4 md:hidden" ref={mobileMenuRef}>
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-neutral-900/95 px-3 py-3 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'contact') {
                        open();
                        setIsMenuOpen(false);
                      } else {
                        scrollToSection(item.id);
                      }
                    }}
                    className={`flex w-full items-center justify-between rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                      isActive
                        ? 'bg-neutral-100 text-black'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800/80'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

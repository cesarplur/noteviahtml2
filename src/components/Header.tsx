import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, ShoppingBagIcon, UserIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '../contexts/CartContext';

const sectionLinks = [
{ label: 'Categorías', to: '/#categorias' },
{ label: 'Catálogo', to: '/#catalogo' },
{ label: 'Preguntas', to: '/#preguntas' }];


const ease = [0.23, 1, 0.32, 1] as const;

export function Header() {
  const { count, open } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pillLink = 'rounded-full px-4 py-2 text-sm text-ink/70 transition-colors hover:bg-surface hover:text-ink';

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 md:px-6">
      <div
        className={`relative mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border bg-white/90 pl-4 pr-2 backdrop-blur-md transition-[border-color,box-shadow] duration-200 md:h-16 md:pl-6 ${
        scrolled ? 'border-line-strong shadow-[0_12px_32px_-16px_rgba(17,20,22,0.25)]' : 'border-line'}`
        }>
        
        <Link to="/" aria-label="NOTTEVIA inicio" className="flex items-center">
          <Logo className="h-9 md:h-11" />
        </Link>

        <nav aria-label="Principal" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          <NavLink to="/tienda" className={({ isActive }) => `${pillLink} ${isActive ? 'bg-surface text-ink' : ''}`}>
            Tienda
          </NavLink>
          {sectionLinks.map((item) =>
          <Link key={item.label} to={item.to} className={pillLink}>
              {item.label}
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className="hidden h-10 w-10 place-items-center rounded-full text-ink/70 transition-colors hover:bg-surface hover:text-ink md:grid"
            aria-label="Mi cuenta">
            
            <UserIcon className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            onClick={open}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-ink pl-4 pr-1.5 text-sm font-medium text-white transition-transform duration-150 active:scale-[0.97] md:h-11"
            aria-label={`Abrir carrito, ${count} artículos`}>
            
            <ShoppingBagIcon className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Carrito</span>
            <motion.span
              key={count}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.16, ease }}
              className="grid h-7 min-w-[1.75rem] place-items-center rounded-full bg-brand px-2 text-xs tabular-nums text-ink md:h-8 md:min-w-[2rem]">
              
              {count}
            </motion.span>
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-ink lg:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}>
            
            {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen &&
          <motion.nav
            aria-label="Móvil"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease }}
            style={{ transformOrigin: 'top right' }}
            className="absolute inset-x-0 top-[calc(100%+8px)] rounded-3xl border border-line bg-white p-2 shadow-[0_16px_40px_-20px_rgba(17,20,22,0.3)] lg:hidden">
            
              {[{ label: 'Tienda', to: '/tienda' }, ...sectionLinks, { label: 'Mi cuenta', to: '/' }].map((item) =>
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base text-ink transition-colors hover:bg-surface">
              
                  {item.label}
                </Link>
            )}
            </motion.nav>
          }
        </AnimatePresence>
      </div>
    </header>);

}
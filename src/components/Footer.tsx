import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { categories } from '../data/categories';

export function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <Logo className="h-14" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Productos e insumos originales de medicina estética para profesionales de la salud, con envío a todo México.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-ink">Categorías</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.map((c) =>
            <li key={c.id}>
                <Link to={`/tienda?categoria=${c.id}`} className="text-muted transition-colors hover:text-ink">
                  {c.name}
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium text-ink">Ayuda</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li><Link to="/#preguntas" className="transition-colors hover:text-ink">Preguntas frecuentes</Link></li>
            <li><Link to="/#catalogo" className="transition-colors hover:text-ink">Catálogo 2026</Link></li>
            <li><a href="mailto:hola@nottevia.com" className="transition-colors hover:text-ink">hola@nottevia.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted md:flex-row md:justify-between md:px-8">
          <p>© 2026 NOTTEVIA. Todos los derechos reservados.</p>
          <p>Productos de uso exclusivo para profesionales de la salud.</p>
        </div>
      </div>
    </footer>);

}
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { categories } from '../../data/categories';
import { products } from '../../data/products';

export function CategoryGrid() {
  return (
    <section id="categorias" className="scroll-mt-28 bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-light md:text-5xl">Explora por categoría</h2>
          <Link to="/tienda" className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-brand-deep">
            Ver toda la tienda
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const count = products.filter((p) => p.category === c.id).length;
            return (
              <Link key={c.id} to={`/tienda?categoria=${c.id}`} className="group flex flex-col">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-surface-2">
                  <img
                    src={c.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
                  
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl text-ink">{c.name}</h3>
                  <span className="shrink-0 text-xs text-muted">{count} productos</span>
                </div>
                <p className="mt-1 text-sm text-muted">{c.description}</p>
              </Link>);

          })}
        </div>
      </div>
    </section>);

}
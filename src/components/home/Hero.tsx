import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import { formatMXN } from '../../utils/currency';

const highlight = products.find((p) => p.slug === 'sculptra-galderma');

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-brand-deep">Innovamos para ti</p>
          <h1 className="mt-5 font-display text-5xl font-light leading-[1.02] text-ink md:text-7xl">
            Medicina estética original, <span className="text-brand-deep">directo a tu clínica.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Bioestimuladores, exosomas, toxinas e insumos para médicos y profesionales de la salud, con envío refrigerado a todo México.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/tienda"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-white transition-transform duration-150 active:scale-[0.97]">
              
              Explorar tienda
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="#catalogo" className="rounded-full border border-line-strong px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-surface">
              Descargar catálogo
            </a>
          </div>

          <div className="mt-12 border-t border-line pt-6">
            <p className="text-xs text-muted">Ir directo a</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {categories.map((c) =>
              <li key={c.id}>
                  <Link
                  to={`/tienda?categoria=${c.id}`}
                  className="inline-block rounded-full bg-surface px-3.5 py-1.5 text-sm text-ink/80 transition-colors hover:bg-surface-2 hover:text-ink">
                  
                    {c.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] max-h-[640px] w-full overflow-hidden rounded-[2rem] bg-surface">
            <img
              src="/1253a45b-5f6a-4b53-b010-a89e5ede64f0.jpg"
              alt="Viales, jeringa estéril y caja de producto sobre bases color turquesa"
              className="h-full w-full object-cover" />
            
          </div>
          {highlight &&
          <Link
            to={`/producto/${highlight.slug}`}
            className="group absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl bg-white/95 p-4 shadow-[0_16px_40px_-20px_rgba(17,20,22,0.35)] backdrop-blur sm:right-auto sm:min-w-[300px]">
            
              <span>
                <span className="block text-xs text-brand-deep">Más pedido del mes</span>
                <span className="mt-0.5 block font-display text-lg text-ink">{highlight.name}</span>
                <span className="block text-sm tabular-nums text-muted">{formatMXN(highlight.variants[0].price)}</span>
              </span>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-white transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          }
        </div>
      </div>
    </section>);

}
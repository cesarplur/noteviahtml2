import React from 'react';
import { SearchIcon, XIcon } from 'lucide-react';
import { categories } from '../data/categories';
import { ProductCard } from '../components/ProductCard';
import { sortOptions, useShopFilters } from '../hooks/useShopFilters';
import type { SortKey } from '../hooks/useShopFilters';
import type { CategoryId } from '../types/product';

export function Shop() {
  const f = useShopFilters();
  const options: {id: CategoryId | null;name: string;}[] = [{ id: null, name: 'Todos los productos' }, ...categories];

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-10 md:px-8 md:pt-14">
      <header className="max-w-2xl">
        <h1 className="font-display text-5xl font-light md:text-6xl">{f.category ? f.category.name : 'Tienda'}</h1>
        <p className="mt-3 text-muted">
          {f.category ? f.category.description : 'Productos e insumos originales de medicina estética para profesionales de la salud.'}
        </p>
      </header>

      {/* Mobile category chips */}
      <div className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 lg:hidden">
        {options.map((o) => {
          const active = (f.category?.id ?? null) === o.id;
          return (
            <button
              key={o.name}
              type="button"
              onClick={() => f.setCategory(o.id)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors ${
              active ? 'bg-ink text-white' : 'bg-surface text-ink/80 hover:bg-surface-2'}`
              }>
              
              {o.name}
            </button>);

        })}
      </div>

      <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <nav aria-label="Categorías" className="sticky top-28">
            <h2 className="text-sm font-medium text-ink">Categorías</h2>
            <ul className="mt-3 space-y-0.5">
              {options.map((o) => {
                const active = (f.category?.id ?? null) === o.id;
                return (
                  <li key={o.name}>
                    <button
                      type="button"
                      onClick={() => f.setCategory(o.id)}
                      aria-current={active ? 'true' : undefined}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                      active ? 'bg-surface font-medium text-ink' : 'text-ink/70 hover:bg-surface hover:text-ink'}`
                      }>
                      
                      {o.name}
                      <span className="text-xs tabular-nums text-muted">{f.countFor(o.id)}</span>
                    </button>
                  </li>);

              })}
            </ul>
            <label className="mt-6 flex cursor-pointer items-center gap-3 border-t border-line pt-6 text-sm text-ink/80">
              <input
                type="checkbox"
                checked={f.onlyAvailable}
                onChange={(e) => f.setOnlyAvailable(e.target.checked)}
                className="h-4 w-4 accent-[#296266]" />
              
              Solo disponibles
            </label>
          </nav>
        </aside>

        <div>
          <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
              <input
                type="search"
                value={f.query}
                onChange={(e) => f.setQuery(e.target.value)}
                placeholder="Buscar producto"
                aria-label="Buscar producto"
                className="w-full rounded-full border border-line-strong bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted focus:border-brand-deep focus:outline-none focus:ring-2 focus:ring-brand/50" />
              
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-ink/80 lg:hidden">
                <input
                  type="checkbox"
                  checked={f.onlyAvailable}
                  onChange={(e) => f.setOnlyAvailable(e.target.checked)}
                  className="h-4 w-4 accent-[#296266]" />
                
                Disponibles
              </label>
              <select
                value={f.sort}
                onChange={(e) => f.setSort(e.target.value as SortKey)}
                aria-label="Ordenar por"
                className="flex-1 rounded-full border border-line-strong bg-white px-4 py-3 text-sm text-ink focus:border-brand-deep focus:outline-none sm:flex-none">
                
                {sortOptions.map((o) =>
                <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                )}
              </select>
            </div>
          </div>

          <p className="mt-5 text-sm text-muted" aria-live="polite">
            {f.results.length} {f.results.length === 1 ? 'producto' : 'productos'}
          </p>

          {f.results.length === 0 ?
          <div className="mt-8 rounded-2xl bg-surface px-6 py-16 text-center">
              <p className="font-display text-2xl">No encontramos productos</p>
              <p className="mt-2 text-sm text-muted">Prueba con otra búsqueda o quita los filtros.</p>
              <button
              type="button"
              onClick={f.reset}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white">
              
                <XIcon className="h-4 w-4" aria-hidden="true" />
                Limpiar filtros
              </button>
            </div> :

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 xl:grid-cols-3">
              {f.results.map((p) =>
            <ProductCard key={p.slug} product={p} />
            )}
            </div>
          }
        </div>
      </div>
    </section>);

}
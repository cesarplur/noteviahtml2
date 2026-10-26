import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { products } from '../../data/products';
import { ProductCard } from '../ProductCard';

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured);
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-4xl font-light md:text-5xl">Lo más pedido</h2>
          <p className="mt-3 text-muted">Los productos que más eligen las clínicas que trabajan con nosotros.</p>
        </div>
        <Link to="/tienda" className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-brand-deep">
          Ver todos
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
        {featured.map((p) =>
        <ProductCard key={p.slug} product={p} />
        )}
      </div>
    </section>);

}
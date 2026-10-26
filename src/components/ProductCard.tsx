import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, PlusIcon } from 'lucide-react';
import { ProductPack } from './ProductPack';
import { categories } from '../data/categories';
import { useCart } from '../contexts/CartContext';
import { priceLabel } from '../utils/product';
import type { Product } from '../types/product';

type ProductCardProps = {product: Product;};

export function ProductCard({ product }: ProductCardProps) {
  const { add } = useCart();
  const category = categories.find((c) => c.id === product.category);
  const href = `/producto/${product.slug}`;
  const single = product.variants.length === 1;
  const iconBtn =
  'grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white';

  return (
    <article className="group flex h-full flex-col">
      <Link to={href} className="relative block aspect-square overflow-hidden rounded-2xl bg-surface" tabIndex={-1} aria-hidden="true">
        <ProductPack
          kind={product.kind}
          label={product.packLabel}
          tone={category?.tone ?? '#9fc9cb'}
          className={`absolute inset-0 m-auto h-[80%] w-[80%] transition-transform duration-300 ease-out group-hover:scale-[1.03] ${
          product.inStock ? '' : 'opacity-60'}`
          } />
        
        {!product.inStock &&
        <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-muted">Agotado</span>
        }
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        <p className="text-xs text-brand-deep">{category?.name}</p>
        <h3 className="mt-1 font-display text-lg leading-snug text-ink">
          <Link to={href} className="hover:underline hover:decoration-line-strong hover:underline-offset-4">
            {product.name}
          </Link>
        </h3>
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <span className="text-sm tabular-nums text-ink/80">{priceLabel(product)}</span>
          {product.inStock && single &&
          <button type="button" onClick={() => add(product.slug, product.variants[0].id)} className={iconBtn} aria-label={`Agregar ${product.name} al carrito`}>
              <PlusIcon className="h-4 w-4" />
            </button>
          }
          {product.inStock && !single &&
          <Link to={href} className={iconBtn} aria-label={`Ver opciones de ${product.name}`}>
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          }
        </div>
      </div>
    </article>);

}
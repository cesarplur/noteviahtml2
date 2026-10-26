import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BadgeCheckIcon, BellIcon, CheckIcon, ChevronRightIcon, MinusIcon, PlusIcon, ShieldCheckIcon, SnowflakeIcon } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { useCart } from '../contexts/CartContext';
import { ProductPack } from '../components/ProductPack';
import { ProductCard } from '../components/ProductCard';
import { formatMXN } from '../utils/currency';

export function Product() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { add } = useCart();
  const [variantId, setVariantId] = useState(product?.variants[0].id ?? '');
  const [qty, setQty] = useState(1);
  const [email, setEmail] = useState('');
  const [notified, setNotified] = useState(false);

  useEffect(() => {
    setVariantId(product?.variants[0].id ?? '');
    setQty(1);
    setNotified(false);
    setEmail('');
  }, [product]);

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-32 text-center md:px-8">
        <h1 className="font-display text-5xl font-light">Producto no encontrado</h1>
        <Link to="/tienda" className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-white">
          Ir a la tienda
        </Link>
      </section>);

  }

  const category = categories.find((c) => c.id === product.category);
  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-8 md:px-8 md:pt-12">
        <nav aria-label="Ruta" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          <Link to="/tienda" className="hover:text-ink">Tienda</Link>
          <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
          <Link to={`/tienda?categoria=${product.category}`} className="hover:text-ink">{category?.name}</Link>
          <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-surface">
            <ProductPack
              kind={product.kind}
              label={product.packLabel}
              tone={category?.tone ?? '#9fc9cb'}
              className="absolute inset-0 m-auto h-[78%] w-[78%]" />
            
            {!product.inStock &&
            <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-muted">Agotado</span>
            }
          </div>

          <div className="flex flex-col">
            <p className="text-sm text-brand-deep">{category?.name}</p>
            <h1 className="mt-2 font-display text-4xl font-light leading-tight md:text-5xl">{product.name}</h1>
            <p className="mt-5 font-display text-3xl tabular-nums">{formatMXN(variant.price)}</p>
            <p className="mt-1 text-sm text-muted">Precio en MXN · IVA incluido</p>

            {product.variants.length > 1 &&
            <fieldset className="mt-8">
                <legend className="text-sm font-medium text-ink">Presentación</legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {product.variants.map((v) => {
                  const selected = v.id === variant.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariantId(v.id)}
                      aria-pressed={selected}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-left text-sm transition-colors ${
                      selected ? 'border-ink bg-white text-ink' : 'border-line-strong text-ink/75 hover:border-ink/40'}`
                      }>
                      
                        <span>{v.label}</span>
                        <span className="tabular-nums text-muted">{formatMXN(v.price)}</span>
                      </button>);

                })}
                </div>
              </fieldset>
            }

            {product.inStock ?
            <div className="mt-8 flex gap-3">
                <div className="flex items-center rounded-full border border-line-strong">
                  <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-4 text-muted hover:text-ink" aria-label="Disminuir cantidad">
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span className="w-7 text-center tabular-nums" aria-live="polite">{qty}</span>
                  <button type="button" onClick={() => setQty((q) => Math.min(99, q + 1))} className="p-4 text-muted hover:text-ink" aria-label="Aumentar cantidad">
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
                <button
                type="button"
                onClick={() => add(product.slug, variant.id, qty)}
                className="flex-1 rounded-full bg-ink py-4 text-sm font-medium text-white transition-transform duration-150 active:scale-[0.98]">
                
                  Agregar · {formatMXN(variant.price * qty)}
                </button>
              </div> :

            <div className="mt-8 rounded-2xl bg-surface p-5">
                {notified ?
              <p className="flex items-center gap-2 text-sm text-ink">
                    <CheckIcon className="h-4 w-4 text-brand-deep" aria-hidden="true" />
                    Listo. Te avisaremos a {email} cuando vuelva a estar disponible.
                  </p> :

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.includes('@')) setNotified(true);
                }}>
                
                    <label htmlFor="notify-email" className="text-sm font-medium text-ink">
                      Producto agotado. ¿Te avisamos cuando regrese?
                    </label>
                    <div className="mt-3 flex gap-2">
                      <input
                    id="notify-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="min-w-0 flex-1 rounded-full border border-line-strong bg-white px-4 py-3 text-sm focus:border-brand-deep focus:outline-none focus:ring-2 focus:ring-brand/50" />
                  
                      <button type="submit" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white">
                        <BellIcon className="h-4 w-4" aria-hidden="true" />
                        Avisarme
                      </button>
                    </div>
                  </form>
              }
              </div>
            }

            <ul className="mt-8 space-y-3 text-sm text-ink/80">
              <li className="flex items-center gap-3">
                <ShieldCheckIcon className="h-4 w-4 shrink-0 text-brand-deep" aria-hidden="true" />
                Producto original, con lote y caducidad visibles.
              </li>
              <li className="flex items-center gap-3">
                <SnowflakeIcon className="h-4 w-4 shrink-0 text-brand-deep" aria-hidden="true" />
                Envío con cadena de frío cuando el producto lo requiere.
              </li>
              <li className="flex items-center gap-3">
                <BadgeCheckIcon className="h-4 w-4 shrink-0 text-brand-deep" aria-hidden="true" />
                Venta exclusiva a profesionales de la salud.
              </li>
            </ul>

            <div className="mt-10 border-t border-line pt-8">
              <h2 className="font-display text-xl">Descripción</h2>
              <p className="mt-3 leading-relaxed text-muted">{product.description}</p>
              <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
                <div className="flex justify-between gap-6 py-3">
                  <dt className="text-muted">Presentación</dt>
                  <dd className="text-right text-ink">{product.presentation}</dd>
                </div>
                <div className="flex justify-between gap-6 py-3">
                  <dt className="text-muted">Categoría</dt>
                  <dd className="text-right text-ink">{category?.name}</dd>
                </div>
                <div className="flex justify-between gap-6 py-3">
                  <dt className="text-muted">Uso</dt>
                  <dd className="text-right text-ink">Profesional</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 &&
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <h2 className="font-display text-3xl font-light md:text-4xl">También en {category?.name}</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
            {related.map((p) =>
          <ProductCard key={p.slug} product={p} />
          )}
          </div>
        </section>
      }
    </>);

}
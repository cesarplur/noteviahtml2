import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2Icon, Loader2Icon, MinusIcon, PlusIcon, SnowflakeIcon, Trash2Icon, XIcon } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { ProductPack } from './ProductPack';
import { categories } from '../data/categories';
import { formatMXN } from '../utils/currency';

type Status = 'idle' | 'processing' | 'success';

const ease = [0.23, 1, 0.32, 1] as const;

export function CartDrawer() {
  const { lines, subtotal, isOpen, close, setQty, remove, clear } = useCart();
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen && status === 'success') {
      setStatus('idle');
      setConfirmed(false);
    }
  }, [isOpen, status]);

  const checkout = () => {
    setStatus('processing');
    window.setTimeout(() => {
      setOrderId(`NTV-${Math.floor(100000 + Math.random() * 900000)}`);
      clear();
      setStatus('success');
    }, 1100);
  };

  return (
    <AnimatePresence>
      {isOpen &&
      <div className="fixed inset-0 z-50">
          <motion.div
          className="absolute inset-0 bg-ink/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={close} />
        
          <motion.aside
          role="dialog"
          aria-modal="true"
          aria-label="Carrito"
          className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.28, ease }}>
          
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <h2 className="font-display text-2xl">Tu carrito</h2>
              <button type="button" onClick={close} className="rounded-full p-2 text-muted transition-colors hover:bg-surface hover:text-ink" aria-label="Cerrar carrito">
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            {status === 'success' ?
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <CheckCircle2Icon className="h-10 w-10 text-brand-deep" aria-hidden="true" />
                <h3 className="mt-5 font-display text-3xl">Pedido recibido</h3>
                <p className="mt-2 text-sm text-muted">Folio {orderId}</p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/80">
                  Validaremos tu cédula profesional y te contactaremos para confirmar pago y envío.
                </p>
                <button type="button" onClick={close} className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white">
                  Seguir comprando
                </button>
              </div> :
          lines.length === 0 ?
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <p className="font-display text-3xl">Tu carrito está vacío</p>
                <p className="mt-2 text-sm text-muted">Explora bioestimuladores, exosomas, insumos y más.</p>
                <Link to="/tienda" onClick={close} className="mt-8 rounded-full border border-line-strong px-6 py-3 text-sm text-ink transition-colors hover:bg-surface">
                  Ir a la tienda
                </Link>
              </div> :

          <>
                <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
                  {lines.map(({ key, qty, product, variant }) =>
              <li key={key} className="flex gap-4 py-5">
                      <div className="h-20 w-20 shrink-0 rounded-xl bg-surface p-1.5">
                        <ProductPack
                    kind={product.kind}
                    label={product.packLabel}
                    tone={categories.find((c) => c.id === product.category)?.tone ?? '#9fc9cb'}
                    className="h-full w-full" />
                  
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium">{product.name}</p>
                            {product.variants.length > 1 && <p className="mt-0.5 text-xs text-muted">{variant.label}</p>}
                          </div>
                          <button type="button" onClick={() => remove(key)} className="p-1 text-muted transition-colors hover:text-ink" aria-label={`Eliminar ${product.name}`}>
                            <Trash2Icon className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center rounded-full border border-line-strong">
                            <button type="button" onClick={() => setQty(key, qty - 1)} className="p-2 text-muted hover:text-ink" aria-label="Disminuir cantidad">
                              <MinusIcon className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-7 text-center text-sm tabular-nums">{qty}</span>
                            <button type="button" onClick={() => setQty(key, qty + 1)} className="p-2 text-muted hover:text-ink" aria-label="Aumentar cantidad">
                              <PlusIcon className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="text-sm tabular-nums">{formatMXN(variant.price * qty)}</p>
                        </div>
                      </div>
                    </li>
              )}
                </ul>

                <div className="space-y-4 border-t border-line bg-surface px-6 py-6">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <SnowflakeIcon className="h-4 w-4 text-brand-deep" aria-hidden="true" />
                    Los productos que lo requieren viajan con cadena de frío.
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-muted">Subtotal</span>
                    <span className="font-display text-2xl tabular-nums">{formatMXN(subtotal)}</span>
                  </div>
                  <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-ink/80">
                    <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#296266]" />
                
                    Confirmo que soy profesional de la salud y cuento con cédula profesional vigente.
                  </label>
                  <button
                type="button"
                onClick={checkout}
                disabled={!confirmed || status === 'processing'}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-medium text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-35">
                
                    {status === 'processing' && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
                    {status === 'processing' ? 'Procesando…' : 'Finalizar compra'}
                  </button>
                </div>
              </>
          }
          </motion.aside>
        </div>
      }
    </AnimatePresence>);

}
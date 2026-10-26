import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { products } from '../data/products';
import type { Product, Variant } from '../types/product';

type CartLine = {key: string;slug: string;variantId: string;qty: number;};
type CartLineDetailed = CartLine & {product: Product;variant: Variant;};

type CartContextValue = {
  lines: CartLineDetailed[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (slug: string, variantId: string, qty?: number) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
};

const MAX_QTY = 99;
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: {children: React.ReactNode;}) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const add = useCallback((slug: string, variantId: string, qty = 1) => {
    const key = `${slug}:${variantId}`;
    setItems((prev) => {
      const existing = prev.find((l) => l.key === key);
      if (existing) return prev.map((l) => l.key === key ? { ...l, qty: Math.min(l.qty + qty, MAX_QTY) } : l);
      return [...prev, { key, slug, variantId, qty }];
    });
    setIsOpen(true);
  }, []);

  const setQty = useCallback((key: string, qty: number) => {
    setItems((prev) =>
    qty <= 0 ? prev.filter((l) => l.key !== key) : prev.map((l) => l.key === key ? { ...l, qty: Math.min(qty, MAX_QTY) } : l)
    );
  }, []);

  const remove = useCallback((key: string) => setItems((prev) => prev.filter((l) => l.key !== key)), []);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const lines: CartLineDetailed[] = [];
    items.forEach((l) => {
      const product = products.find((p) => p.slug === l.slug);
      const variant = product?.variants.find((v) => v.id === l.variantId);
      if (product && variant) lines.push({ ...l, product, variant });
    });
    return {
      lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal: lines.reduce((s, l) => s + l.qty * l.variant.price, 0),
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add,
      setQty,
      remove,
      clear
    };
  }, [items, isOpen, add, setQty, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
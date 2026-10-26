import type { Product } from '../types/product';
import { formatMXN } from './currency';

export function minPrice(product: Product): number {
  return Math.min(...product.variants.map((v) => v.price));
}

export function priceLabel(product: Product): string {
  const prices = product.variants.map((v) => v.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? formatMXN(min) : `Desde ${formatMXN(min)}`;
}
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { minPrice } from '../utils/product';
import type { CategoryId } from '../types/product';

export type SortKey = 'relevancia' | 'precio-asc' | 'precio-desc' | 'nombre';

export const sortOptions: {value: SortKey;label: string;}[] = [
{ value: 'relevancia', label: 'Relevancia' },
{ value: 'precio-asc', label: 'Precio: menor a mayor' },
{ value: 'precio-desc', label: 'Precio: mayor a menor' },
{ value: 'nombre', label: 'Nombre (A–Z)' }];


function normalize(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export function useShopFilters() {
  const [params, setParams] = useSearchParams();
  const categoryParam = params.get('categoria');
  const category = categories.find((c) => c.id === categoryParam) ?? null;
  const query = params.get('q') ?? '';
  const sort = (sortOptions.find((o) => o.value === params.get('orden'))?.value ?? 'relevancia') as SortKey;
  const onlyAvailable = params.get('disponibles') === '1';

  const update = (key: string, value: string | null) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);else
    next.delete(key);
    setParams(next, { replace: true });
  };

  const results = useMemo(() => {
    const q = normalize(query.trim());
    const list = products.filter(
      (p) =>
      (!category || p.category === category.id) && (
      !onlyAvailable || p.inStock) && (
      !q || normalize(`${p.name} ${p.description}`).includes(q))
    );
    const sorted = [...list];
    if (sort === 'precio-asc') sorted.sort((a, b) => minPrice(a) - minPrice(b));
    if (sort === 'precio-desc') sorted.sort((a, b) => minPrice(b) - minPrice(a));
    if (sort === 'nombre') sorted.sort((a, b) => a.name.localeCompare(b.name, 'es'));
    if (sort === 'relevancia') sorted.sort((a, b) => Number(b.inStock) - Number(a.inStock));
    return sorted;
  }, [category, query, sort, onlyAvailable]);

  const countFor = (id: CategoryId | null) => products.filter((p) => !id || p.category === id).length;

  return {
    category,
    query,
    sort,
    onlyAvailable,
    results,
    countFor,
    setCategory: (id: CategoryId | null) => update('categoria', id),
    setQuery: (q: string) => update('q', q || null),
    setSort: (s: SortKey) => update('orden', s === 'relevancia' ? null : s),
    setOnlyAvailable: (v: boolean) => update('disponibles', v ? '1' : null),
    reset: () => setParams(new URLSearchParams(), { replace: true })
  };
}
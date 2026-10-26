export type CategoryId = 'toxinas' | 'bioestimuladores' | 'exosomas' | 'hilos' | 'lipoliticos' | 'insumos';

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
  image: string;
  tone: string;
};

export type PackKind = 'box' | 'vial' | 'pouch';

export type Variant = {
  id: string;
  label: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  packLabel: string;
  kind: PackKind;
  variants: Variant[];
  inStock: boolean;
  featured?: boolean;
  description: string;
  presentation: string;
};

export type Faq = {
  question: string;
  answer: string;
};
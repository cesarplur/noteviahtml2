import type { Product } from '../types/product';

export const products: Product[] = [
// Toxinas y medicamentos
{
  slug: 'botox',
  name: 'Botox',
  category: 'toxinas',
  packLabel: 'BOTOX',
  kind: 'box',
  variants: [{ id: '100u', label: 'Vial 100 U', price: 4000 }],
  inStock: true,
  featured: true,
  description: 'Toxina botulínica tipo A para procedimientos de medicina estética realizados por profesionales de la salud.',
  presentation: 'Caja con 1 vial liofilizado de 100 U.'
},
{
  slug: 'triamcinolona',
  name: 'Triamcinolona',
  category: 'toxinas',
  packLabel: 'TRIAMCIN.',
  kind: 'vial',
  variants: [{ id: 'unico', label: 'Vial', price: 500 }],
  inStock: false,
  description: 'Corticoesteroide inyectable de uso profesional.',
  presentation: 'Vial individual.'
},
// Bioestimuladores
{
  slug: 'sculptra-galderma',
  name: 'Sculptra Galderma',
  category: 'bioestimuladores',
  packLabel: 'SCULPTRA',
  kind: 'box',
  variants: [{ id: 'unico', label: 'Caja', price: 9500 }],
  inStock: true,
  featured: true,
  description: 'Bioestimulador de ácido poli-L-láctico que promueve la producción natural de colágeno.',
  presentation: 'Caja con vial liofilizado para reconstitución.'
},
{
  slug: 'sculptra-sanofi',
  name: 'Sculptra Sanofi',
  category: 'bioestimuladores',
  packLabel: 'SCULPTRA',
  kind: 'box',
  variants: [{ id: 'unico', label: 'Caja', price: 3000 }],
  inStock: false,
  description: 'Bioestimulador de ácido poli-L-láctico.',
  presentation: 'Caja con vial liofilizado para reconstitución.'
},
{
  slug: 'richesse-hi-lo-pro-pn',
  name: 'Richesse Hi-Lo Pro con PN',
  category: 'bioestimuladores',
  packLabel: 'RICHESSE',
  kind: 'box',
  variants: [{ id: 'unico', label: 'Caja', price: 3300 }],
  inStock: true,
  featured: true,
  description: 'Complejo de ácido hialurónico de alto y bajo peso molecular con polinucleótidos.',
  presentation: 'Caja con jeringa prellenada.'
},
{
  slug: 'richesse-eyes',
  name: 'Richesse Eyes',
  category: 'bioestimuladores',
  packLabel: 'RICHESSE',
  kind: 'box',
  variants: [{ id: 'unico', label: 'Caja', price: 1800 }],
  inStock: true,
  description: 'Fórmula diseñada para el área periocular.',
  presentation: 'Caja con jeringa prellenada.'
},
{
  slug: 'kiara-reju',
  name: 'Kiara Reju',
  category: 'bioestimuladores',
  packLabel: 'KIARA',
  kind: 'box',
  variants: [{ id: 'unico', label: 'Caja', price: 2900 }],
  inStock: true,
  featured: true,
  description: 'Polinucleótidos para revitalización e hidratación profunda de la piel.',
  presentation: 'Caja con jeringa prellenada.'
},
{
  slug: 'collafilo',
  name: 'Collafiló',
  category: 'bioestimuladores',
  packLabel: 'COLLAFILO',
  kind: 'box',
  variants: [{ id: 'unico', label: 'Caja', price: 1600 }],
  inStock: true,
  featured: true,
  description: 'Bioestimulador a base de colágeno para mejorar firmeza y textura.',
  presentation: 'Caja con viales.'
},
{
  slug: 'demei-h140-complex',
  name: 'Demei H140 Complex',
  category: 'bioestimuladores',
  packLabel: 'DEMEI',
  kind: 'vial',
  variants: [
  { id: 'vial', label: 'Vial individual', price: 999 },
  { id: 'caja6', label: 'Caja con 6 viales', price: 6000 }],

  inStock: true,
  description: 'Complejo revitalizante para protocolos de calidad de piel.',
  presentation: 'Vial individual o caja con 6 viales.'
},
// Exosomas y skin boosters
{
  slug: 'exo-one-v',
  name: 'Exo One V',
  category: 'exosomas',
  packLabel: 'EXO ONE V',
  kind: 'vial',
  variants: [{ id: 'unico', label: 'Kit', price: 2400 }],
  inStock: true,
  featured: true,
  description: 'Exosomas para regeneración cutánea y protocolos post-procedimiento.',
  presentation: 'Kit con vial liofilizado y diluyente.'
},
{
  slug: 'exo-one-2x',
  name: 'Exo One 2X',
  category: 'exosomas',
  packLabel: 'EXO ONE 2X',
  kind: 'vial',
  variants: [{ id: 'unico', label: 'Kit', price: 2300 }],
  inStock: true,
  description: 'Exosomas de doble concentración.',
  presentation: 'Kit con vial liofilizado y diluyente.'
},
{
  slug: 'exo-19',
  name: 'Exo 19',
  category: 'exosomas',
  packLabel: 'EXO 19',
  kind: 'vial',
  variants: [{ id: 'unico', label: 'Vial', price: 1500 }],
  inStock: true,
  description: 'Skin booster con exosomas para luminosidad y textura.',
  presentation: 'Vial individual.'
},
{
  slug: 'nad-plus',
  name: 'NAD+',
  category: 'exosomas',
  packLabel: 'NAD+',
  kind: 'vial',
  variants: [{ id: 'unico', label: 'Vial', price: 2200 }],
  inStock: true,
  description: 'Coenzima para protocolos de bienestar y longevidad celular.',
  presentation: 'Vial individual.'
},
// Hilos PDO
{
  slug: 'hilos-cog-4d-l-needle-21g',
  name: 'Hilos COG 4D L-Needle 21G × 100 mm',
  category: 'hilos',
  packLabel: 'COG 4D',
  kind: 'pouch',
  variants: [{ id: 'unico', label: 'Paquete', price: 2500 }],
  inStock: false,
  description: 'Hilos PDO tensores con espículas 4D y aguja L.',
  presentation: 'Paquete estéril.'
},
{
  slug: 'hilos-cog-3-1-l-needle-19g',
  name: 'Hilos COG 3-1 L-Needle 19G × 125 mm',
  category: 'hilos',
  packLabel: 'COG 3-1',
  kind: 'pouch',
  variants: [{ id: 'unico', label: 'Paquete', price: 2500 }],
  inStock: false,
  description: 'Hilos PDO tensores con espículas 3-1.',
  presentation: 'Paquete estéril.'
},
{
  slug: 'hilos-cog-4d-blunt-19g',
  name: 'Hilos COG 4D Blunt 19G × 100 mm',
  category: 'hilos',
  packLabel: 'COG BLUNT',
  kind: 'pouch',
  variants: [{ id: 'unico', label: 'Paquete', price: 2500 }],
  inStock: false,
  description: 'Hilos PDO tensores con cánula roma.',
  presentation: 'Paquete estéril.'
},
{
  slug: 'hilos-mono-27g-50mm',
  name: 'Hilos MONO PDO 27G × 50 mm',
  category: 'hilos',
  packLabel: 'MONO 27G',
  kind: 'pouch',
  variants: [{ id: 'unico', label: 'Paquete', price: 2600 }],
  inStock: false,
  description: 'Hilos lisos PDO para bioestimulación.',
  presentation: 'Paquete estéril.'
},
{
  slug: 'hilos-mono-26g-90mm',
  name: 'Hilos MONO PDO 26G × 90 mm',
  category: 'hilos',
  packLabel: 'MONO 26G',
  kind: 'pouch',
  variants: [{ id: 'unico', label: 'Paquete', price: 2600 }],
  inStock: false,
  description: 'Hilos lisos PDO para bioestimulación.',
  presentation: 'Paquete estéril.'
},
// Lipolíticos
{
  slug: 'fb-premium-v-line',
  name: 'F&B Premium V-Line',
  category: 'lipoliticos',
  packLabel: 'F&B',
  kind: 'vial',
  variants: [
  { id: 'vial', label: 'Vial individual', price: 450 },
  { id: 'caja', label: 'Caja con 10 viales', price: 3500 }],

  inStock: true,
  description: 'Lipolítico para contorno facial y papada.',
  presentation: 'Vial individual o caja con 10 viales.'
},
{
  slug: 'lipo-one-v-line',
  name: 'Lipo One V-Line',
  category: 'lipoliticos',
  packLabel: 'LIPO ONE',
  kind: 'vial',
  variants: [
  { id: 'vial', label: 'Vial individual', price: 400 },
  { id: 'caja', label: 'Caja con 10 viales', price: 3000 }],

  inStock: true,
  description: 'Lipolítico para definición del óvalo facial.',
  presentation: 'Vial individual o caja con 10 viales.'
},
{
  slug: 'lipo-one-premium',
  name: 'Lipo One Premium',
  category: 'lipoliticos',
  packLabel: 'LIPO ONE',
  kind: 'vial',
  variants: [
  { id: 'vial', label: 'Vial individual', price: 400 },
  { id: 'caja', label: 'Caja con 10 viales', price: 3000 }],

  inStock: true,
  featured: true,
  description: 'Lipolítico corporal de fórmula premium.',
  presentation: 'Vial individual o caja con 10 viales.'
},
// Agujas, cánulas y jeringas
{
  slug: 'jeringa-21-30g',
  name: 'Jeringa de 21 y 30 G',
  category: 'insumos',
  packLabel: '21 / 30 G',
  kind: 'pouch',
  variants: [
  { id: '21g', label: '21 G', price: 4.5 },
  { id: '30g', label: '30 G', price: 3.5 }],

  inStock: true,
  description: 'Jeringa estéril desechable con aguja.',
  presentation: 'Pieza individual.'
},
{
  slug: 'jeringas-insulina',
  name: 'Jeringas de insulina',
  category: 'insumos',
  packLabel: 'INSULINA',
  kind: 'pouch',
  variants: [
  { id: '05ml', label: '0.5 ml', price: 3.5 },
  { id: '1ml', label: '1 ml', price: 3.5 }],

  inStock: true,
  description: 'Jeringa de insulina estéril de un solo uso.',
  presentation: 'Pieza individual.'
},
{
  slug: 'aguja-mesoterapia-sin-tubo',
  name: 'Aguja mesoterapia mini sin tubo',
  category: 'insumos',
  packLabel: 'MESO MINI',
  kind: 'pouch',
  variants: [
  { id: 'pieza', label: 'Pieza', price: 15 },
  { id: 'caja', label: 'Caja con 50 piezas', price: 600 }],

  inStock: true,
  description: 'Aguja hipodérmica mini para aplicación de skin boosters.',
  presentation: 'Pieza o caja con 50 piezas.'
},
{
  slug: 'aguja-mesoterapia-con-tubo',
  name: 'Aguja mesoterapia mini con tubo',
  category: 'insumos',
  packLabel: 'MESO TUBO',
  kind: 'pouch',
  variants: [{ id: 'pieza', label: 'Pieza', price: 7.5 }],
  inStock: true,
  description: 'Aguja hipodérmica mini con tubo protector.',
  presentation: 'Pieza individual.'
},
{
  slug: 'aguja-hipodermica',
  name: 'Aguja hipodérmica desechable',
  category: 'insumos',
  packLabel: 'AGUJA',
  kind: 'pouch',
  variants: [
  { id: '27g', label: '27 G', price: 3.5 },
  { id: '30g', label: '30 G', price: 3.5 },
  { id: '32g', label: '32 G', price: 3.5 }],

  inStock: true,
  featured: true,
  description: 'Aguja estéril de un solo uso.',
  presentation: 'Pieza individual.'
},
{
  slug: 'caja-canulas',
  name: 'Caja de cánulas',
  category: 'insumos',
  packLabel: 'CÁNULAS',
  kind: 'box',
  variants: [
  { id: '25g50', label: '25 G × 50 mm', price: 1600 },
  { id: '22g70', label: '22 G × 70 mm', price: 1600 }],

  inStock: true,
  description: 'Cánulas de punta roma para aplicación de rellenos y bioestimuladores.',
  presentation: 'Caja con cánulas estériles.'
},
{
  slug: 'neofiller-canula',
  name: 'Neofiller cánula',
  category: 'insumos',
  packLabel: 'NEOFILLER',
  kind: 'pouch',
  variants: [
  { id: '25g', label: '25 G', price: 100 },
  { id: '22g', label: '22 G', price: 100 }],

  inStock: true,
  description: 'Cánula flexible de punta roma.',
  presentation: 'Pieza individual.'
},
{
  slug: 'micro-canulas',
  name: 'Micro cánulas',
  category: 'insumos',
  packLabel: 'MICRO',
  kind: 'pouch',
  variants: [
  { id: '27g', label: '27 G', price: 100 },
  { id: '25g', label: '25 G', price: 100 }],

  inStock: true,
  description: 'Micro cánula de alta precisión.',
  presentation: 'Pieza individual.'
}];
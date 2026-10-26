const formatter = new Intl.NumberFormat('es-MX', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export function formatMXN(value: number): string {
  return `$${formatter.format(value)} MXN`;
}
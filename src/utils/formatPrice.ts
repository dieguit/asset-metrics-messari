const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function formatPrice(value: string) {
  const numValue = Number.parseFloat(value);
  return formatter.format(numValue);
}

export function formatPrice(value: number) {
  return value.toFixed(2).replace('.', ',')
}

export function capitalizeWords(text: string) {
  return text.replace(/\b\w/g, (match) => match.toUpperCase())
}

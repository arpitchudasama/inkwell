/**
 * Merges class names — lightweight alternative to clsx.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format large numbers to compact form (e.g. 2847 → "2.8k")
 */
export function formatCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

/**
 * Truncate text to a given word count.
 */
export function truncate(text, words = 20) {
  const parts = text.split(' ')
  if (parts.length <= words) return text
  return parts.slice(0, words).join(' ') + '…'
}

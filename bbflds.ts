/**
 * Formats a car price value into a readable currency string
 * @param price - The price value to format
 * @param currency - The currency symbol (default: '$')
 * @returns Formatted price string (e.g., "$25,000")
 */
export function formatCarPrice(price: number, currency: string = '$'): string {
  if (isNaN(price) || price < 0) {
    return `${currency}0`;
  }
  
  return `${currency}${price.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}

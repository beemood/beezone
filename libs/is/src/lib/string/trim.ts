export function trim(value: string): string {
  return value
    .replace(/\s{2,}/g, ' ')
    .replace(/\n/, ' ')
    .replace(/\t/, ' ')
    .trim();
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatDate(
  day?: number,
  month?: number,
  year?: number
): string {
  const pad = (value: string) => value.padStart(2, '0');
  return pad(String(day)) + '/' + pad(String(month)) + '/' + pad(String(year));
}

export function isDevelopmentMode(): boolean {
  return Boolean(process.env.DEV);
}

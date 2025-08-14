export function modelFileName(filepath: string) {
  return filepath.split(/\/\\/).pop();
}

export function inferResourceName(className: string): string {
  return className.replace('Controller', '').replace('Service', '');
}

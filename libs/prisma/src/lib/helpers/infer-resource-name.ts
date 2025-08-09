
export function inferResourceName(targetClassName: string) {
  return targetClassName.replace('Controller', '').replace('Service', '');
}

export function pluralize(name: string) {
  if (name.endsWith('y')) {
    if (!name.match(/[aeoui]y$/)) {
      return name.slice(0, -1) + ['i', 'e', 's'].join('');
    }
  }
  return name + 's';
}

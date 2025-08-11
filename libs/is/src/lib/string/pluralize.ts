export function pluralize(name: string) {
  if (name.endsWith('y')) {
    if (!name.match(/[aeoui]y$/)) {
      // eslint-disable-next-line spellcheck/spell-checker
      return name.slice(0, -1) + 'ies';
    }
  }
  return name + 's';
}

import { EmptyError } from '@beezone/errors';
import { trim } from './trim.js';

export type Names = {
  camelCase: string;
  pascalCase: string;
  snakeCase: string;
  kebabCase: string;
  screamingSnakeCase: string;
  titleCase: string;
  sentenceCase: string;
};

/**
 * Uppercase the first letter of he given {@link name} string
 * @param name string
 * @returns string
 */
function upperCaseFirst(name: string) {
  return name[0].toUpperCase() + name.slice(1);
}

/**
 * Transform the given {@link name} string into kebab-case
 * @param name string
 * @returns string as kebab-case
 */
function toKebabCase(name: string) {
  const trimed = trim(name);
  if (trimed.length == 0) {
    throw new EmptyError(`string value is empty`);
  }
  return trimed.toLowerCase().replace(/\s/g, '-');
}

/**
 * Transform the given kebab-case {@link name} string into camelCase
 * @param name string
 * @returns string
 */
function toCamelCase(name: string) {
  return name
    .split('-')
    .map((e, index) => {
      if (index > 0) {
        return upperCaseFirst(e);
      }
      return e;
    })
    .join('');
}

/**
 * Transform the given kebab-case {@link name} string into PascalCase
 * @param name string
 * @returns string
 */
function toPascalCase(name: string) {
  return name.split('-').map(upperCaseFirst).join('');
}

/**
 * Transform the given kebab-case {@link name} string into snake_case
 * @param name string
 * @returns string
 */
function toSnakeCase(name: string) {
  return name.replace(/[-]/g, '_');
}

/**
 * Transform the given kebab-case {@link name} string into SCREAMING_SNAKE_CASE
 * @param name string
 * @returns string
 */
function toScreamingSnakeCase(name: string) {
  return toSnakeCase(name).toUpperCase();
}

/**
 * Transform the given kebab-case {@link name} string into Title Case
 * @param name string
 * @returns string
 */
function toTitleCase(name: string) {
  return name.split('-').map(upperCaseFirst).join(' ');
}

function toSenteceCase(name: string) {
  return upperCaseFirst(name.split('-').join(' '));
}

export function names(name: string): Names {
  const normal = toKebabCase(name);
  return {
    camelCase: toCamelCase(normal),
    kebabCase: normal,
    pascalCase: toPascalCase(normal),
    screamingSnakeCase: toScreamingSnakeCase(normal),
    sentenceCase: toSenteceCase(normal),
    snakeCase: toSnakeCase(normal),
    titleCase: toTitleCase(normal),
  };
}

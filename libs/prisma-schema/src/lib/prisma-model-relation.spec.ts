import { PrismaModelRelation } from './prisma-model-relation.js';

describe('PrismaModelRelation', () => {
  it('should generate many-to-many relation', () => {
    const actual = new PrismaModelRelation({
      name: 'user',
      type: 'many-to-many',
      target: 'user',
    }).toString();

    const expected = ['users User[]'].join('\n');

    expect(actual).toEqual(expected);
  });

  it('should generate one-to-many relation', () => {
    const actual = new PrismaModelRelation({
      name: 'user',
      type: 'one-to-many',
      target: 'user',
    }).toString();

    const expected = ['users User[]'].join('\n');

    expect(actual).toEqual(expected);
  });

  it('should generate owner relation', () => {
    const actual = new PrismaModelRelation({
      name: 'user',
      type: 'owner',
      target: 'user',
    }).toString();

    const expected = [
      'user User @relation(fields: [userId], references: [userId], onDelete: Cascade, onUpdate: Cascade)',
      'userId String',
    ].join('\n');

    expect(actual).toEqual(expected);
  });

  it('should generate group relation', () => {
    const actual = new PrismaModelRelation({
      name: 'user',
      type: 'group',
      target: 'user',
    }).toString();

    const expected = [
      'user User @relation(fields: [userId], references: [id], onDelete: SetNull, onUpdate: NoAction)',
      'userId Int?',
    ].join('\n');

    expect(actual).toEqual(expected);
  });

  it('should generate group relation', () => {
    const actual = new PrismaModelRelation({
      name: 'user',
      type: 'group',
      target: 'user',
    }).toString();

    const expected = [
      'user User @relation(fields: [userId], references: [id], onDelete: SetNull, onUpdate: NoAction)',
      'userId Int?',
    ].join('\n');

    expect(actual).toEqual(expected);
  });

  it('should generate one-to-one relation', () => {
    const actual = new PrismaModelRelation({
      name: 'user',
      type: 'one-to-one',
      target: 'user',
    }).toString();

    const expected = [
      'user User @relation(fields: [userId], references: [id], onDelete: SetNull, onUpdate: NoAction)',
      'userId Int?',
    ].join('\n');

    expect(actual).toEqual(expected);
  });

  it('should generate many-to-one relation', () => {
    const actual = new PrismaModelRelation({
      name: 'user',
      type: 'many-to-one',
      target: 'user',
    }).toString();

    const expected = [
      'user User @relation(fields: [userId], references: [id], onDelete: SetNull, onUpdate: NoAction)',
      'userId Int?',
    ].join('\n');

    expect(actual).toEqual(expected);
  });
});

import { transformRefsToDefinitionPaths } from './transform-refs-to-definition-paths.js';

describe('transformRefsToDefinitionPaths', () => {
  it('should transformRefsToDefinitionPaths', () => {
    expect(
      transformRefsToDefinitionPaths({
        properties: { name: { $ref: './enum/name.schema.json' } },

        definitions: {
          Some: {
            $ref: './enum/some.schema.json',
          },
        },
      })
    ).toEqual({
      properties: { name: { $ref: '#/definitions/NameSchema' } },
      definitions: {
        Some: {
          $ref: '#/definitions/SomeSchema',
        },
      },
    });
  });
});

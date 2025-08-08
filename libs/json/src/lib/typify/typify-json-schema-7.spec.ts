import { writeTextFile } from '@beezone/fs';
import { join } from 'path';
import { typifyJsonSchema7 } from './typify-json-schema-7.js';

describe('typifyJsonSchema7', () => {
  it('should typify the json schema', async () => {
    const result = await typifyJsonSchema7(
      join(__dirname, 'model.schema.json')
    );

    await writeTextFile(join(__dirname, 'model-schema.ts'), result);
  });
});

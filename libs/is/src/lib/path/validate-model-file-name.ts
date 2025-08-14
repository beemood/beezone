import { InvalidNameError } from '@beezone/errors';

export const MODEL_FILE_NAME_EXPRESSION = /^[a-z.]{2,}.model.yaml$/;

export function validateModelFileName(fileName: string) {
  if (MODEL_FILE_NAME_EXPRESSION.test(fileName)) {
    return true;
  }
  throw new InvalidNameError(`Invalid model file name: ${fileName}`);
}

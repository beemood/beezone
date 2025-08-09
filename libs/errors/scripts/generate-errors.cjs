const { names } = require('@nx/devkit');
const { writeFile } = require('fs/promises');
const { join } = require('path');

const errors = [
  'Unkown',
  'Undefined',
  'Empty',
  'OutOfScope',
  'InvalidName',
  'InvalidParameter',
];

function createErrorClass(code) {
  const { className, constantName } = names(code);
  return `export class ${className}Error extends BaseError {
  constructor(message = '${constantName}: No message') {
    super(message, ErrorCodes.${constantName});
  }
}`.trim();
}

async function build() {
  const errorClasses = [
    "import { BaseError } from '../common/base-error.js';",
    "import { ErrorCodes } from '../common/error-codes.js';",
  ];

  const errorCodes = [];

  for (const code of errors) {
    errorClasses.push(createErrorClass(code));

    errorCodes.push(names(code).constantName);
  }

  const errorsClassesText = errorClasses.join('\n');

  await writeFile(
    join(__dirname, './../src/lib/errors/errors.ts'),
    errorsClassesText,
    { encoding: 'utf-8' }
  );

  await writeFile(
    join(__dirname, './../src/lib/common/error-codes.ts'),
    `export enum ErrorCodes {
   ${errorCodes.map((e) => `${e}='${e}'`).join(',\n')}

  }`
  );
}

build();

import type { CustomDecorator} from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';
import { OPERATION_NAME_METADATA_KEY } from './metadata-keys.js';
import { Operations } from './operations.js';

/**
 * Define operation name
 * @param operationName
 * @returns
 */
export function Operation(operationName: Operations): CustomDecorator<string> {
  return ((...args) => {
    SetMetadata(OPERATION_NAME_METADATA_KEY, operationName)(...args);
  }) as MethodDecorator as CustomDecorator<string>;
}

export function ReadOneOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.READ_ONE)(...args);
  };
}
export function WriteOneOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.WRITE_ONE)(...args);
  };
}
export function UdpateOneOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.UDPATE_ONE)(...args);
  };
}
export function DeleteOneOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.DELETE_ONE)(...args);
  };
}
export function ReadManyOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.READ_MANY)(...args);
  };
}
export function WriteManyOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.WRITE_MANY)(...args);
  };
}
export function UdpateManyOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.UDPATE_MANY)(...args);
  };
}
export function DeleteManyOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.DELETE_MANY)(...args);
  };
}
export function ReadOneOwnOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.READ_ONE_OWN)(...args);
  };
}
export function WriteOneOwnOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.WRITE_ONE_OWN)(...args);
  };
}
export function UdpateOneOwnOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.UDPATE_ONE_OWN)(...args);
  };
}
export function DeleteOneOwnOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.DELETE_ONE_OWN)(...args);
  };
}
export function ReadManyOwnOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.READ_MANY_OWN)(...args);
  };
}
export function WriteManyOwnOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.WRITE_MANY_OWN)(...args);
  };
}
export function UdpateManyOwnOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.UDPATE_MANY_OWN)(...args);
  };
}
export function DeleteManyOwnOperation(): MethodDecorator {
  return (...args) => {
    Operation(Operations.DELETE_MANY_OWN)(...args);
  };
}

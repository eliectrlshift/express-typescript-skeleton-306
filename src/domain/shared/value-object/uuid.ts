import { v4, validate } from 'uuid';

import { StringValueObject } from './string-value-object';
import { InvalidParameterException } from '@domain/shared/exceptions';

class Uuid extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.checkIfValueIsValid(value);
  }

  public static random(): Uuid {
    return new Uuid(v4());
  }

  private checkIfValueIsValid(value: string): void {
    if (!validate(value)) {
      throw new InvalidParameterException(
        `<${this.constructor.name}> does not allow the value <${value}>`
      );
    }
  }
}

export { Uuid };

import { StatusCodes } from 'http-status-codes';
import { get as emojiGet } from 'node-emoji';

import { ApiException } from './api.exception';

class ForbiddenException extends ApiException {
  constructor() {
    super(
      StatusCodes.FORBIDDEN,
      'forbidden',
      `${emojiGet('no_entry_sign')} Forbidden.`
    );
  }
}

export { ForbiddenException };

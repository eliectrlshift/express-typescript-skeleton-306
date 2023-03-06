import { StatusCodes } from 'http-status-codes';
import { get as emojiGet } from 'node-emoji';

import { ApiException } from './api.exception';

class InternalServerErrorException extends ApiException {
  constructor() {
    super(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'unexpected_error',
      `${emojiGet(
        'female-technologist'
      )} An unexpected error has occurred. Please contact the administrator.`
    );
  }
}

export { InternalServerErrorException };

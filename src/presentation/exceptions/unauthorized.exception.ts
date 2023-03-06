import { StatusCodes } from 'http-status-codes';
import { get as emojiGet } from 'node-emoji';

import { ApiException } from './api.exception';

class UnauthorizedException extends ApiException {
  constructor() {
    super(
      StatusCodes.UNAUTHORIZED,
      'unauthorized',
      `${emojiGet('ticket')} Failed to authenticate.`
    );
  }
}

export { UnauthorizedException };

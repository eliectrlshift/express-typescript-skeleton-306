import { StatusCodes } from 'http-status-codes';
import { get as emojiGet } from 'node-emoji';

import { ApiException } from './api.exception';

class ResourceNotFoundException extends ApiException {
  constructor(message: string) {
    super(StatusCodes.NOT_FOUND, 'not_found', `${emojiGet('cry')} ${message}.`);
  }
}

export { ResourceNotFoundException };

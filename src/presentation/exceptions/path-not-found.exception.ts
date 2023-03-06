import { StatusCodes } from 'http-status-codes';
import { get as emojiGet } from 'node-emoji';

import { ApiException } from './api.exception';

class PathNotFoundException extends ApiException {
  constructor(method: string, path: string) {
    super(
      StatusCodes.NOT_FOUND,
      'not_found',
      `${emojiGet(
        'cry'
      )} Can't find ${method.toUpperCase()} ${path} on this server.`
    );
  }
}

export { PathNotFoundException };

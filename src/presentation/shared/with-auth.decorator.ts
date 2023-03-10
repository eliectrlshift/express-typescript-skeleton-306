import { UseAuth } from '@tsed/common';
import { useDecorators } from '@tsed/core';
import { Returns, Security } from '@tsed/schema';
import { StatusCodes } from 'http-status-codes';

import { ExceptionResponse } from '@presentation/exceptions';
import { AuthenticationMiddleware } from '@presentation/middlewares';

interface AuthOptions extends Record<string, unknown> {
  roles?: string[];
}

const WithAuth = (options: AuthOptions = {}): any =>
  useDecorators(
    UseAuth(AuthenticationMiddleware, options),
    Security('Bearer'),
    Returns(StatusCodes.UNAUTHORIZED, ExceptionResponse),
    Returns(StatusCodes.FORBIDDEN, ExceptionResponse)
  );

export { WithAuth };

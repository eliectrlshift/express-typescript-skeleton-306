import { Middleware, Next, Req, Res, MiddlewareMethods } from '@tsed/common';

import { PathNotFoundException } from '@presentation/exceptions';

@Middleware()
class NotFoundMiddleware implements MiddlewareMethods {
  public use(
    @Req() request: Req,
    @Res() _response: Res,
    @Next() next: Next
  ): void {
    next(new PathNotFoundException(request.method, request.originalUrl));
  }
}

export { NotFoundMiddleware };

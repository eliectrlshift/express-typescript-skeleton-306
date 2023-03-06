import { UseCaseRequest } from '@application/shared';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';
import { InvalidParameterException } from '@domain/shared/exceptions';

class ForgotUserPasswordRequest extends UseCaseRequest {
  readonly email: string;

  constructor(triggeredBy: TriggeredBy, email: string) {
    super(triggeredBy);
    this.email = email;
  }

  public static create(
    triggeredBy: TriggeredBy,
    email: string
  ): ForgotUserPasswordRequest {
    return new ForgotUserPasswordRequest(triggeredBy, email);
  }

  protected validatePayload(): void {
    if (this.email == null) {
      throw new InvalidParameterException('<email> can not be null');
    }
  }
}

export { ForgotUserPasswordRequest };

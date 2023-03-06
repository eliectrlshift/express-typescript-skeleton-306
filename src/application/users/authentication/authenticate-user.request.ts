import { UseCaseRequest } from '@application/shared';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';
import { InvalidParameterException } from '@domain/shared/exceptions';

class AuthenticateUserRequest extends UseCaseRequest {
  readonly email: string;

  readonly password: string;

  constructor(triggeredBy: TriggeredBy, email: string, password: string) {
    super(triggeredBy);
    this.email = email;
    this.password = password;
  }

  public static create(
    triggeredBy: TriggeredBy,
    email: string,
    password: string
  ): AuthenticateUserRequest {
    return new AuthenticateUserRequest(triggeredBy, email, password);
  }

  protected validatePayload(): void {
    if (this.email == null) {
      throw new InvalidParameterException('<email> can not be null');
    }

    if (this.password == null) {
      throw new InvalidParameterException('<password> can not be null');
    }
  }
}

export { AuthenticateUserRequest };

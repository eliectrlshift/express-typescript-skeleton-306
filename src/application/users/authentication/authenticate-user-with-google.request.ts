import { UseCaseRequest } from '@application/shared';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';
import { InvalidParameterException } from '@domain/shared/exceptions';

class AuthenticateUserWithGoogleRequest extends UseCaseRequest {
  readonly email: string;

  readonly firstName: string;

  readonly lastName: string;

  constructor(
    triggeredBy: TriggeredBy,
    email: string,
    firstName: string,
    lastName: string
  ) {
    super(triggeredBy);
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public static create(
    triggeredBy: TriggeredBy,
    email: string,
    firstName: string,
    lastName: string
  ): AuthenticateUserWithGoogleRequest {
    return new AuthenticateUserWithGoogleRequest(
      triggeredBy,
      email,
      firstName,
      lastName
    );
  }

  protected validatePayload(): void {
    if (this.email == null) {
      throw new InvalidParameterException('<email> can not be null');
    }

    if (this.firstName == null) {
      throw new InvalidParameterException('<firstName> can not be null');
    }

    if (this.lastName == null) {
      throw new InvalidParameterException('<lastName> can not be null');
    }
  }
}

export { AuthenticateUserWithGoogleRequest };

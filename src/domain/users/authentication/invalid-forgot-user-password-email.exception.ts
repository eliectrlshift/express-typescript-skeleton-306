import { DomainException } from '@domain/shared/exceptions';

class InvalidForgotUserPasswordEmailException extends DomainException {
  constructor(email: string) {
    super(
      'invalid_authentication_email',
      `The user with email <${email}> does not exist`
    );
  }
}

export { InvalidForgotUserPasswordEmailException };

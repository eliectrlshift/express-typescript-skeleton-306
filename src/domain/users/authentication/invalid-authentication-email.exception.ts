import { DomainException } from '@domain/shared/exceptions';

class InvalidAuthenticationEmailException extends DomainException {
  constructor(email: string) {
    super(
      'invalid_authentication_email',
      `The user with email <${email}> does not exist`
    );
  }
}

export { InvalidAuthenticationEmailException };

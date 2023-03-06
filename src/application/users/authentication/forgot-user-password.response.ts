import { Nullable } from '@domain/shared';
import { User } from '@domain/users';

class ForgotUserPasswordResponse {
  readonly email: string;

  readonly forgotPasswordToken: Nullable<string>;

  constructor(email: string, forgotPasswordToken: Nullable<string>) {
    this.email = email;
    this.forgotPasswordToken = forgotPasswordToken;
  }

  public static fromDomainModel(user: User): ForgotUserPasswordResponse {
    return new ForgotUserPasswordResponse(
      user.email.value,
      user.forgotPasswordToken?.value || null
    );
  }
}

export { ForgotUserPasswordResponse };

import { Email, Property } from '@tsed/schema';
import { Nullable } from '@domain/shared';

class ForgotUserPasswordApiResponse {
  @Email()
  readonly email: string;

  @Property()
  readonly token: Nullable<string>;

  constructor(email: string, token: Nullable<string>) {
    this.email = email;
    this.token = token;
  }

  public static create(
    email: string,
    token: Nullable<string>
  ): ForgotUserPasswordApiResponse {
    return new ForgotUserPasswordApiResponse(email, token);
  }

  public static response(
    email: string,
    token: Nullable<string>
  ): ForgotUserPasswordApiResponse {
    return new ForgotUserPasswordApiResponse(email, token);
  }
}

export { ForgotUserPasswordApiResponse };

import { ForgotUserPasswordRequest } from './forgot-user-password.request';
import { ForgotUserPasswordResponse } from './forgot-user-password.response';
import { BaseUseCase, UseCase } from '@application/shared';
import { Nullable } from '@domain/shared';
import { MailerDomainService } from '@domain/shared/services';
import { User, UserRepository, UserEmail } from '@domain/users';
import { InvalidForgotUserPasswordEmailException } from '@domain/users/authentication/invalid-forgot-user-password-email.exception';
import { AuthenticationForgotPasswordMailTemplate } from '@presentation/emails/authentication-forgot-password-mail-template';

@UseCase()
class ForgotUserPasswordUseCase extends BaseUseCase<
  ForgotUserPasswordRequest,
  ForgotUserPasswordResponse
> {
  private userRepository: UserRepository;

  private mailerService: MailerDomainService;

  constructor(
    userRepository: UserRepository,
    mailerService: MailerDomainService
  ) {
    super();
    this.userRepository = userRepository;
    this.mailerService = mailerService;
  }

  public async performOperation({
    email,
  }: ForgotUserPasswordRequest): Promise<ForgotUserPasswordResponse> {
    let user = await this.userRepository.findByEmail(new UserEmail(email));

    this.ensureUserExists(user, email);

    if (user) {
      user.generateForgotPasswordToken();

      user = await this.userRepository.update(user);

      if (user.forgotPasswordToken) {
        this.mailerService.send(
          new AuthenticationForgotPasswordMailTemplate(user.email.value).get({
            username: user.username.value,
            token: user.forgotPasswordToken.value,
          }),
          this.constructor.name
        );
      }
    }

    return ForgotUserPasswordResponse.fromDomainModel(user as User);
  }

  private ensureUserExists(user: Nullable<User>, email: string): void {
    if (!user) {
      throw new InvalidForgotUserPasswordEmailException(email);
    }
  }
}

export { ForgotUserPasswordUseCase };

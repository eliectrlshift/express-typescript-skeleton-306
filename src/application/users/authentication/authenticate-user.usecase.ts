import { AuthenticateUserRequest } from './authenticate-user.request';
import { BaseUseCase, UseCase } from '@application/shared';
import { UserResponse } from '@application/users';
import { Nullable } from '@domain/shared';
import { User, UserRepository, UserEmail } from '@domain/users';
import {
  InvalidAuthenticationCredentialsException,
  InvalidAuthenticationEmailException,
} from '@domain/users/authentication';

@UseCase()
class AuthenticateUserUseCase extends BaseUseCase<
  AuthenticateUserRequest,
  UserResponse
> {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    super();
    this.userRepository = userRepository;
  }

  public async performOperation({
    email,
    password,
  }: AuthenticateUserRequest): Promise<UserResponse> {
    const user = await this.userRepository.findByEmail(new UserEmail(email));

    this.ensureUserExists(user, email);

    await this.ensureCredentialsAreValid(user as User, password);

    return UserResponse.fromDomainModel(user as User);
  }

  private ensureUserExists(user: Nullable<User>, email: string): void {
    if (!user) {
      throw new InvalidAuthenticationEmailException(email);
    }
  }

  private async ensureCredentialsAreValid(
    user: User,
    password: string
  ): Promise<void> {
    if (!(await user?.passwordMatches(password))) {
      throw new InvalidAuthenticationCredentialsException(user.email.value);
    }
  }
}

export { AuthenticateUserUseCase };

import { AuthenticateUserWithGoogleRequest } from './authenticate-user-with-google.request';
import { BaseUseCase, UseCase } from '@application/shared';
import { UserResponse } from '@application/users';
import {
  UserRepository,
  User,
  UserUuid,
  UserAddress,
  UserBirthDate,
  UserEmail,
  UserGender,
  UserName,
  UserPasswordHash,
  UserPhoneNumber,
  UserProfilePicture,
  UserUsername,
  UserRole,
  UserRoles,
  UserGenders,
} from '@domain/users';

@UseCase()
class AuthenticateUserWithGoogleUseCase extends BaseUseCase<
  AuthenticateUserWithGoogleRequest,
  UserResponse
> {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    super();
    this.userRepository = userRepository;
  }

  public async performOperation({
    email,
    firstName,
    lastName,
  }: AuthenticateUserWithGoogleRequest): Promise<UserResponse> {
    let user = await this.userRepository.findByEmail(new UserEmail(email));

    if (!user) {
      user = await this.firstTimeAuthenticate(email, firstName, lastName);
    }

    return UserResponse.fromDomainModel(user as User);
  }

  private async firstTimeAuthenticate(
    email: string,
    firstName: string,
    lastName: string
  ): Promise<User> {
    const user = new User(
      null,
      UserUuid.random(),
      new UserGender(UserGenders.UNDEFINED),
      new UserName(firstName, lastName),
      new UserBirthDate(new Date()),
      new UserUsername(''),
      new UserEmail(email),
      new UserPhoneNumber(''),
      new UserAddress(''),
      new UserProfilePicture(''),
      new UserPasswordHash(''),
      [new UserRole(UserRoles.USER), new UserRole(UserRoles.ADMIN)],
      true,
      true,
      true,
      undefined
    );

    return await this.userRepository.create(user);
  }
}

export { AuthenticateUserWithGoogleUseCase };

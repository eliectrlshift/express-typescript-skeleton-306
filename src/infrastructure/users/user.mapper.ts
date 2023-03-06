import { UserModel, Gender, Role } from '@tsed/prisma';

import {
  User,
  UserAddress,
  UserBirthDate,
  UserEmail,
  UserForgotPasswordToken,
  UserGender,
  UserId,
  UserName,
  UserPasswordHash,
  UserPhoneNumber,
  UserProfilePicture,
  UserRole,
  UserUuid,
} from '@domain/users';
import { UserUsername } from '@domain/users/user-username';

class UserMapper {
  public static toDomainModel(userPersistenceModel: UserModel): User {
    return new User(
      new UserId(userPersistenceModel.id),
      new UserUuid(userPersistenceModel.uuid),
      UserGender.fromValue(userPersistenceModel.gender.toLowerCase()),
      new UserName(
        userPersistenceModel.firstName,
        userPersistenceModel.lastName
      ),
      new UserBirthDate(userPersistenceModel.birthDate),
      new UserUsername(userPersistenceModel.username),
      new UserEmail(userPersistenceModel.email),
      new UserPhoneNumber(userPersistenceModel.phoneNumber),
      new UserAddress(userPersistenceModel.address),
      new UserProfilePicture(userPersistenceModel.profilePicUrl),
      new UserPasswordHash(userPersistenceModel.passwordHash),
      userPersistenceModel.roles.map((role) =>
        UserRole.fromValue(role.toLowerCase())
      ),
      userPersistenceModel.verified,
      userPersistenceModel.enabled,
      userPersistenceModel.googleOIDC,
      userPersistenceModel.forgotPasswordToken
        ? new UserForgotPasswordToken(userPersistenceModel.forgotPasswordToken)
        : null
    );
  }

  public static toPersistenceModel(user: User): UserModel {
    const userPersistenceModel = new UserModel();
    if (user.id != null) {
      userPersistenceModel.id = user.id.value;
    }
    userPersistenceModel.uuid = user.uuid.value;
    userPersistenceModel.gender = <Gender>user.gender.value.toUpperCase();
    userPersistenceModel.firstName = user.name.firstName;
    userPersistenceModel.lastName = user.name.lastName;
    userPersistenceModel.birthDate = user.birthDate.value;
    userPersistenceModel.username = user.username.value;
    userPersistenceModel.email = user.email.value;
    userPersistenceModel.phoneNumber = user.phoneNumber.value;
    userPersistenceModel.address = user.address.value;
    userPersistenceModel.profilePicUrl = user.profilePicUrl.value;
    userPersistenceModel.passwordHash = user.passwordHash.value;
    userPersistenceModel.roles = user.roles.map(
      (role) => <Role>role.value.toUpperCase()
    );
    userPersistenceModel.verified = user.verified;
    userPersistenceModel.enabled = user.enabled;
    userPersistenceModel.googleOIDC = user.googleOIDC;
    userPersistenceModel.forgotPasswordToken =
      user.forgotPasswordToken?.value || null;
    return userPersistenceModel;
  }
}

export { UserMapper };

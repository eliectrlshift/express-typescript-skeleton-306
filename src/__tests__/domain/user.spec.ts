import { describe, expect, test } from '@jest/globals';
import {
  User,
  UserAddress,
  UserBirthDate,
  UserEmail,
  UserForgotPasswordToken,
  UserGender,
  UserGenders,
  UserId,
  UserName,
  UserPasswordHash,
  UserPhoneNumber,
  UserProfilePicture,
  UserRole,
  UserRoles,
  UserUsername,
  UserUuid,
} from '@domain/users';

describe('User', () => {
  let userAddress: UserAddress;
  let userBirthDate: UserBirthDate;
  let userEmail: UserEmail;
  let userForgotPasswordToken: UserForgotPasswordToken;
  let userGender: UserGender;
  let userId: UserId;
  let userName: UserName;
  let userPasswordHash: UserPasswordHash;
  let userPhoneNumber: UserPhoneNumber;
  let userProfilePicture: UserProfilePicture;
  let userRole: UserRole;
  let userUsername: UserUsername;
  let userUuid: UserUuid;

  const uuid = UserUuid.random();
  const date = new Date();
  const gender = UserGenders.MALE;
  const role = UserRoles.USER;

  beforeAll(() => {
    userAddress = new UserAddress('jest');
    userBirthDate = new UserBirthDate(date);
    userEmail = new UserEmail('jest');
    userForgotPasswordToken = new UserForgotPasswordToken('jest');
    userGender = new UserGender(gender);
    userId = new UserId(10);
    userName = new UserName('jest', 'tsej');
    userPasswordHash = new UserPasswordHash('jest');
    userPhoneNumber = new UserPhoneNumber('jest');
    userProfilePicture = new UserProfilePicture('jest');
    userRole = new UserRole(role);
    userUsername = new UserUsername('jest');
    userUuid = new UserUuid(uuid.value);
  });

  test('UserAddress must be instanciate', () => {
    expect(userAddress.value).toStrictEqual('jest');
  });

  test('UserBirthDate must be instanciate', () => {
    expect(userBirthDate.value).toStrictEqual(date);
  });

  test('UserEmail must be instanciate', () => {
    expect(userEmail.value).toStrictEqual('jest');
  });

  test('UserForgotPasswordToken must be instanciate', () => {
    expect(userForgotPasswordToken.value).toStrictEqual('jest');
  });

  test('UserGender must be instanciate', () => {
    expect(userGender.value).toStrictEqual(gender);
  });

  test('UserId must be instanciate', () => {
    expect(userId.value).toStrictEqual(10);
  });

  test('UserName must be instanciate', () => {
    expect(userName.firstName).toStrictEqual('jest');
    expect(userName.lastName).toStrictEqual('tsej');
  });

  test('UserPasswordHash must be instanciate', () => {
    expect(userPasswordHash.value).toStrictEqual('jest');
  });

  test('UserPhoneNumber must be instanciate', () => {
    expect(userPhoneNumber.value).toStrictEqual('jest');
  });

  test('UserProfilePicture must be instanciate', () => {
    expect(userProfilePicture.value).toStrictEqual('jest');
  });

  test('UserRole must be instanciate', () => {
    expect(userRole.value).toStrictEqual(role);
  });

  test('UserUsername must be instanciate', () => {
    expect(userUsername.value).toStrictEqual('jest');
  });

  test('UserUuid must be instanciate', () => {
    expect(userUuid.value).toStrictEqual(uuid.value);
  });

  test('User must be instanciate', () => {
    const user = new User(
      userId,
      userUuid,
      userGender,
      userName,
      userBirthDate,
      userUsername,
      userEmail,
      userPhoneNumber,
      userAddress,
      userProfilePicture,
      userPasswordHash,
      [userRole],
      true,
      false,
      true,
      null
    );

    expect(user.id?.value).toStrictEqual(10);
    expect(user.uuid.value).toStrictEqual(uuid.value);
    expect(user.name.firstName).toStrictEqual('jest');
    expect(user.name.lastName).toStrictEqual('tsej');
    expect(user.birthDate.value).toStrictEqual(date);
    expect(user.gender.value).toStrictEqual(gender);
    expect(user.roles).toHaveLength(1);
    expect(user.roles[0].value).toStrictEqual(role);
    expect(user.verified).toBeTruthy();
    expect(user.enabled).toBeFalsy();
    expect(user.forgotPasswordToken).toBeNull();
  });
});

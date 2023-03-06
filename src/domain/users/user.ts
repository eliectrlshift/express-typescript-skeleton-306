import { UserAddress } from './user-address';
import { UserBirthDate } from './user-birth-date';
import { UserEmail } from './user-email';
import { UserForgotPasswordToken } from './user-forgot-password-token';
import { UserGender } from './user-gender';
import { UserId } from './user-id';
import { UserName } from './user-name';
import { UserPasswordHash } from './user-password-hash';
import { UserPhoneNumber } from './user-phone-number';
import { UserProfilePicture } from './user-profile-picture';
import { UserRole } from './user-role';
import { UserUsername } from './user-username';
import { UserUuid } from './user-uuid';
import { Nullable } from '@domain/shared';
import { DomainEntity } from '@domain/shared/entities/domain-entity';
import { Uuid } from '@domain/shared/value-object';

interface UserFlattened {
  id: Nullable<number>;
  uuid: string;
  gender: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  username: string;
  email: string;
  phoneNumber: string;
  address: string;
  profilePicUrl: string;
  passwordHash: string;
  roles: string[];
  verified: boolean;
  enabled: boolean;
  googleOIDC: boolean;
  forgotPasswordToken: Nullable<string>;
}

class User extends DomainEntity {
  id: Nullable<UserId>;

  uuid: UserUuid;

  gender: UserGender;

  name: UserName;

  birthDate: UserBirthDate;

  username: UserUsername;

  email: UserEmail;

  phoneNumber: UserPhoneNumber;

  address: UserAddress;

  profilePicUrl: UserProfilePicture;

  passwordHash: UserPasswordHash;

  roles: UserRole[];

  verified: boolean;

  enabled: boolean;

  googleOIDC: boolean;

  forgotPasswordToken: Nullable<UserForgotPasswordToken>;

  constructor(
    id: Nullable<UserId>,
    uuid: UserUuid,
    gender: UserGender,
    name: UserName,
    birthDate: UserBirthDate,
    username: UserUsername,
    email: UserEmail,
    phoneNumber: UserPhoneNumber,
    address: UserAddress,
    profilePicUrl: UserProfilePicture,
    passwordHash: UserPasswordHash,
    roles: UserRole[],
    verified: boolean,
    enabled: boolean,
    googleOIDC: boolean,
    forgotPasswordToken: Nullable<UserForgotPasswordToken>
  ) {
    super();
    this.id = id;
    this.uuid = uuid;
    this.gender = gender;
    this.name = name;
    this.birthDate = birthDate;
    this.username = username;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.profilePicUrl = profilePicUrl;
    this.passwordHash = passwordHash;
    this.roles = roles;
    this.verified = verified;
    this.enabled = enabled;
    this.googleOIDC = googleOIDC;
    this.forgotPasswordToken = forgotPasswordToken;
  }

  public static create(
    uuid: UserUuid,
    gender: UserGender,
    name: UserName,
    birthDate: UserBirthDate,
    username: UserUsername,
    email: UserEmail,
    phoneNumber: UserPhoneNumber,
    address: UserAddress,
    profilePicUrl: UserProfilePicture,
    passwordHash: UserPasswordHash,
    roles: UserRole[],
    verified: boolean,
    enabled: boolean,
    googleOIDC: boolean
  ): User {
    return new User(
      undefined,
      uuid,
      gender,
      name,
      birthDate,
      username,
      email,
      phoneNumber,
      address,
      profilePicUrl,
      passwordHash,
      roles,
      verified,
      enabled,
      googleOIDC,
      undefined
    );
  }

  public flat(): UserFlattened {
    return {
      id: this.id?.value,
      uuid: this.uuid.value,
      gender: this.gender.value,
      firstName: this.name.firstName,
      lastName: this.name.lastName,
      birthDate: this.birthDate.value,
      username: this.username.value,
      email: this.email.value,
      phoneNumber: this.phoneNumber.value,
      address: this.address.value,
      profilePicUrl: this.profilePicUrl.value,
      passwordHash: this.passwordHash.value,
      roles: this.roles.map((role) => role.value),
      verified: this.verified,
      enabled: this.enabled,
      googleOIDC: this.googleOIDC,
      forgotPasswordToken: this.forgotPasswordToken?.value,
    };
  }

  public async passwordMatches(plainUserPassword: string): Promise<boolean> {
    return this.passwordHash.checkIfMatchesWithPlainPassword(plainUserPassword);
  }

  public generateForgotPasswordToken(): void {
    this.forgotPasswordToken = Uuid.random() as UserForgotPasswordToken;
  }
}

export { User, UserFlattened };

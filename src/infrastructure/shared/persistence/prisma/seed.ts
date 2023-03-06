/* spell-checker: disable */
import { randomUUID } from 'crypto';
import {
  randAvatar,
  randFullAddress,
  randPastDate,
  randPhoneNumber,
} from '@ngneat/falso';
import { Gender, PrismaClient, Role, Prisma } from '@prisma/client';
import { DateTime } from 'luxon';
import { ProjectDriveMapper } from '@infrastructure/projects-drive';
import { ProjectDrive, ProjectDriveFolderId, ProjectDriveName, ProjectDriveUrl, ProjectDriveUuid } from '@domain/projects-drive';

const prisma = new PrismaClient();

const CURRENT_DATE = DateTime.utc().toJSDate();
const SEED_USER = 'seed';

const USERS: Prisma.UserCreateInput[] = [
  {
    uuid: randomUUID(),
    gender: Gender.UNDEFINED,
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: randPastDate(),
    username: 'janedoe',
    email: 'hello@janedoe.com',
    phoneNumber: randPhoneNumber(),
    address: randFullAddress(),
    profilePicUrl: randAvatar(),
    passwordHash:
      '$argon2id$v=19$m=4096,t=3,p=1$SnlvMThQRzN5cWhoWnkySQ$YOsVi7+r5v8ngtUmfBNCJpv3Nx/Om6s2nvfEOgSqgKs',
    verified: true,
    enabled: true,
    googleOIDC: false,
    roles: Array.of(Role.ADMIN),
    createdAt: CURRENT_DATE,
    createdBy: SEED_USER,
    updatedAt: CURRENT_DATE,
    updatedBy: SEED_USER,
  },
];

const main = async (): Promise<void> => {
  const PROJECTS_DRIVE = [
    new ProjectDrive(
      undefined,
      ProjectDriveUuid.random(),
      new ProjectDriveFolderId('thisisatestid'),
      new ProjectDriveName('thisisatestname'),
      new ProjectDriveUrl(
            `https://drive.google.com/drive/folders/thisisatestid`
          )
    ),
    new ProjectDrive(
      undefined,
      ProjectDriveUuid.random(),
      new ProjectDriveFolderId('thisisatestid2'),
      new ProjectDriveName('thisisatestname2'),
      new ProjectDriveUrl(
            `https://drive.google.com/drive/folders/thisisatestid2`
          )
    ),
  ]

  try {
    USERS.forEach(async (user) => {
      await prisma.user.create({
        data: user,
      });
    });


    PROJECTS_DRIVE.forEach(async (projectDrive) => {
      await prisma.projectDrive.create({
        data: ProjectDriveMapper.toPersistenceModel(projectDrive),
      });
    });
  } catch {
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main();

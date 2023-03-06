import { describe, expect, test } from '@jest/globals';
import {
  ProjectDrive,
  ProjectDriveId,
  ProjectDriveUrl,
  ProjectDriveUuid,
} from '@domain/projects-drive';

let projectDriveId: ProjectDriveId;
let projectDriveUrl: ProjectDriveUrl;
let projectDriveUuid: ProjectDriveUuid;

const uuid = ProjectDriveUuid.random();

describe('ProjectDrive', () => {
  beforeAll(() => {
    projectDriveId = new ProjectDriveId(10);
    projectDriveUrl = new ProjectDriveUrl('jest');
    projectDriveUuid = new ProjectDriveUuid(uuid.value);
  });

  test('ProjectDriveId must be instanciate', () => {
    expect(projectDriveId.value).toStrictEqual(10);
  });

  test('ProjectDriveUrl must be instanciate', () => {
    expect(projectDriveUrl.value).toStrictEqual('jest');
  });

  test('ProjectDriveUuid must be instanciate', () => {
    expect(projectDriveUuid.value).toStrictEqual(uuid.value);
  });

  test('ProjectDrive must be instanciate', () => {
    const projectDrive = new ProjectDrive(
      projectDriveId,
      projectDriveUuid,
      projectDriveUrl
    );

    expect(projectDrive.id?.value).toStrictEqual(10);
    expect(projectDrive.uuid?.value).toStrictEqual(uuid.value);
    expect(projectDrive.url?.value).toStrictEqual('jest');
  });
});

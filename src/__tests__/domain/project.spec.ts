import { describe, expect, test } from '@jest/globals';
import {
  Project,
  ProjectDescription,
  ProjectId,
  ProjectPrivateName,
  ProjectPublicName,
  ProjectSlug,
  ProjectUuid,
} from '@domain/projects';

const uuid = ProjectUuid.random();

let projectDescription: ProjectDescription;
let projectId: ProjectId;
let projectPrivateName: ProjectPrivateName;
let projectPublicName: ProjectPublicName;
let projectSlug: ProjectSlug;
let projectUuid: ProjectUuid;

describe('Project', () => {
  beforeAll(() => {
    projectDescription = new ProjectDescription('jest');
    projectId = new ProjectId(10);
    projectPrivateName = new ProjectPrivateName('jest');
    projectPublicName = new ProjectPublicName('jest');
    projectSlug = new ProjectSlug('jest');
    projectUuid = new ProjectUuid(uuid.value);
  });

  test('ProjectDescription must be instanciate', () => {
    expect(projectDescription.value).toStrictEqual('jest');
  });

  test('ProjectId must be instanciate', () => {
    expect(projectId.value).toStrictEqual(10);
  });

  test('ProjectPrivateName must be instanciate', () => {
    expect(projectPrivateName.value).toStrictEqual('jest');
  });

  test('ProjectPublicName must be instanciate', () => {
    expect(projectPublicName.value).toStrictEqual('jest');
  });

  test('ProjectSlug must be instanciate', () => {
    expect(projectSlug.value).toStrictEqual('jest');
  });

  test('ProjectUuid must be instanciate', () => {
    expect(projectUuid.value).toStrictEqual(uuid.value);
  });

  test('Project must be instanciate', () => {
    const project = new Project(
      projectId,
      projectUuid,
      projectPublicName,
      projectPrivateName,
      projectSlug,
      projectDescription
    );

    expect(project.description.value).toStrictEqual('jest');
    expect(project.id?.value).toStrictEqual(10);
    expect(project.uuid.value).toStrictEqual(uuid.value);
  });
});

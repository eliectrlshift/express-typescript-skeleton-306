import { describe, expect, test } from '@jest/globals';
import {
  ProjectSlack,
  ProjectSlackChannelId,
  ProjectSlackContextTeamId,
  ProjectSlackConversationHostId,
  ProjectSlackCreated,
  ProjectSlackCreator,
  ProjectSlackId,
  ProjectSlackInternalTeamId,
  ProjectSlackIsMoved,
  ProjectSlackName,
  ProjectSlackNameNormalized,
  ProjectSlackNumMembers,
  ProjectSlackPendingConnectedTeamId,
  ProjectSlackPendingShared,
  ProjectSlackPreviousName,
  ProjectSlackPriority,
  ProjectSlackPurposeCreator,
  ProjectSlackPurposeLastSet,
  ProjectSlackPurposeValue,
  ProjectSlackTopicCreator,
  ProjectSlackTopicLastSet,
  ProjectSlackTopicValue,
  ProjectSlackUnlinked,
  ProjectSlackUser,
  ProjectSlackUuid,
} from '@domain/projects-slack';

let projectSlackChannelId: ProjectSlackChannelId;
let projectSlackContextTeamId: ProjectSlackContextTeamId;
let projectSlackConversationHostId: ProjectSlackConversationHostId;
let projectSlackCreated: ProjectSlackCreated;
let projectSlackCreator: ProjectSlackCreator;
let projectSlackId: ProjectSlackId;
let projectSlackInternalTeamId: ProjectSlackInternalTeamId;
let projectSlackIsMoved: ProjectSlackIsMoved;
let projectSlackName: ProjectSlackName;
let projectSlackNameNormalized: ProjectSlackNameNormalized;
let projectSlackNumMembers: ProjectSlackNumMembers;
let projectSlackPendingConnectedTeamId: ProjectSlackPendingConnectedTeamId;
let projectSlackPendingShared: ProjectSlackPendingShared;
let projectSlackPreviousName: ProjectSlackPreviousName;
let projectSlackPriority: ProjectSlackPriority;
let projectSlackPurposeCreator: ProjectSlackPurposeCreator;
let projectSlackPurposeLastSet: ProjectSlackPurposeLastSet;
let projectSlackPurposeValue: ProjectSlackPurposeValue;
let projectSlackTopicCreator: ProjectSlackTopicCreator;
let projectSlackTopicLastSet: ProjectSlackTopicLastSet;
let projectSlackTopicValue: ProjectSlackTopicValue;
let projectSlackUnlinked: ProjectSlackUnlinked;
let projectSlackUser: ProjectSlackUser;
let projectSlackUuid: ProjectSlackUuid;

const uuid = ProjectSlackUuid.random();

describe('ProjectSlack', () => {
  beforeAll(() => {
    projectSlackChannelId = new ProjectSlackChannelId('jest');
    projectSlackContextTeamId = new ProjectSlackContextTeamId('jest');
    projectSlackConversationHostId = new ProjectSlackConversationHostId('jest');
    projectSlackCreated = new ProjectSlackCreated(10);
    projectSlackCreator = new ProjectSlackCreator('jest');
    projectSlackId = new ProjectSlackId(10);
    projectSlackInternalTeamId = new ProjectSlackInternalTeamId('jest');
    projectSlackIsMoved = new ProjectSlackIsMoved(10);
    projectSlackName = new ProjectSlackName('jest');
    projectSlackNameNormalized = new ProjectSlackNameNormalized('jest');
    projectSlackNumMembers = new ProjectSlackNumMembers(10);
    projectSlackPendingConnectedTeamId = new ProjectSlackPendingConnectedTeamId(
      'jest'
    );
    projectSlackPendingShared = new ProjectSlackPendingShared('jest');
    projectSlackPreviousName = new ProjectSlackPreviousName('jest');
    projectSlackPriority = new ProjectSlackPriority(10);
    projectSlackPurposeCreator = new ProjectSlackPurposeCreator('jest');
    projectSlackPurposeLastSet = new ProjectSlackPurposeLastSet(10);
    projectSlackPurposeValue = new ProjectSlackPurposeValue('jest');
    projectSlackTopicCreator = new ProjectSlackTopicCreator('jest');
    projectSlackTopicLastSet = new ProjectSlackTopicLastSet(10);
    projectSlackTopicValue = new ProjectSlackTopicValue('jest');
    projectSlackUnlinked = new ProjectSlackUnlinked(10);
    projectSlackUser = new ProjectSlackUser('jest');
    projectSlackUuid = new ProjectSlackUuid(uuid.value);
  });

  test('ProjectSlackChannelId must be instanciate', () => {
    expect(projectSlackChannelId.value).toStrictEqual('jest');
  });

  test('ProjectSlackContextTeamId must be instanciate', () => {
    expect(projectSlackContextTeamId.value).toStrictEqual('jest');
  });

  test('ProjectSlackConversationHostId must be instanciate', () => {
    expect(projectSlackConversationHostId.value).toStrictEqual('jest');
  });

  test('ProjectSlackCreated must be instanciate', () => {
    expect(projectSlackCreated.value).toStrictEqual(10);
  });

  test('ProjectSlackCreator must be instanciate', () => {
    expect(projectSlackCreator.value).toStrictEqual('jest');
  });

  test('ProjectSlackId must be instanciate', () => {
    expect(projectSlackId.value).toStrictEqual(10);
  });

  test('ProjectSlackInternalTeamId must be instanciate', () => {
    expect(projectSlackInternalTeamId.value).toStrictEqual('jest');
  });

  test('ProjectSlackIsMoved must be instanciate', () => {
    expect(projectSlackIsMoved.value).toStrictEqual(10);
  });

  test('ProjectSlackName must be instanciate', () => {
    expect(projectSlackName.value).toStrictEqual('jest');
  });

  test('ProjectSlackNameNormalized must be instanciate', () => {
    expect(projectSlackNameNormalized.value).toStrictEqual('jest');
  });

  test('ProjectSlackNumMembers must be instanciate', () => {
    expect(projectSlackNumMembers.value).toStrictEqual(10);
  });

  test('ProjectSlackPendingConnectedTeamId must be instanciate', () => {
    expect(projectSlackPendingConnectedTeamId.value).toStrictEqual('jest');
  });

  test('ProjectSlackPendingShared must be instanciate', () => {
    expect(projectSlackPendingShared.value).toStrictEqual('jest');
  });

  test('ProjectSlackPreviousName must be instanciate', () => {
    expect(projectSlackPreviousName.value).toStrictEqual('jest');
  });

  test('ProjectSlackPriority must be instanciate', () => {
    expect(projectSlackPriority.value).toStrictEqual(10);
  });

  test('ProjectSlackPurposeCreator must be instanciate', () => {
    expect(projectSlackPurposeCreator.value).toStrictEqual('jest');
  });

  test('ProjectSlackPurposeLastSet must be instanciate', () => {
    expect(projectSlackPurposeLastSet.value).toStrictEqual(10);
  });

  test('ProjectSlackPurposeValue must be instanciate', () => {
    expect(projectSlackPurposeValue.value).toStrictEqual('jest');
  });

  test('ProjectSlackTopicCreator must be instanciate', () => {
    expect(projectSlackTopicCreator.value).toStrictEqual('jest');
  });

  test('ProjectSlackTopicLastSet must be instanciate', () => {
    expect(projectSlackTopicLastSet.value).toStrictEqual(10);
  });

  test('ProjectSlackTopicValue must be instanciate', () => {
    expect(projectSlackTopicValue.value).toStrictEqual('jest');
  });

  test('ProjectSlackUnlinked must be instanciate', () => {
    expect(projectSlackUnlinked.value).toStrictEqual(10);
  });

  test('ProjectSlackUser must be instanciate', () => {
    expect(projectSlackUser.value).toStrictEqual('jest');
  });

  test('ProjectSlackUuid must be instanciate', () => {
    expect(projectSlackUuid.value).toStrictEqual(uuid.value);
  });

  test('ProjectSlack must be instanciate', () => {
    const projectSlack = new ProjectSlack(
      projectSlackId,
      projectSlackUuid,
      projectSlackChannelId,
      projectSlackContextTeamId,
      projectSlackConversationHostId,
      projectSlackCreated,
      projectSlackCreator,
      [projectSlackInternalTeamId],
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      projectSlackIsMoved,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      projectSlackName,
      projectSlackNameNormalized,
      projectSlackNumMembers,
      [projectSlackPendingConnectedTeamId],
      [projectSlackPendingShared],
      [projectSlackPreviousName],
      projectSlackPriority,
      projectSlackPurposeCreator,
      projectSlackPurposeLastSet,
      projectSlackPurposeValue,
      projectSlackTopicCreator,
      projectSlackTopicLastSet,
      projectSlackTopicValue,
      projectSlackUnlinked,
      projectSlackUser
    );

    expect(projectSlack.uuid.value).toStrictEqual(uuid.value);
    expect(projectSlack.purposeCreator?.value).toStrictEqual(
      projectSlackPurposeCreator.value
    );
    expect(projectSlack.pendingConnectedTeamIds).toHaveLength(1);
    expect(projectSlack.pendingConnectedTeamIds?.[0].value).toStrictEqual(
      projectSlackPendingConnectedTeamId.value
    );
    expect(projectSlack.isArchived).toBeTruthy();
    expect(projectSlack.isChannel).toBeFalsy();
  });
});

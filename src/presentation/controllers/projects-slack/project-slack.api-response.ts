import { Property } from '@tsed/schema';
import { ProjectSlackResponse } from '@application/projects-slack';

import { Nullable } from '@domain/shared';

class ProjectSlackApiResponse {
  @Property()
  readonly uuid: string;

  @Property()
  readonly channelId: Nullable<string>;

  @Property()
  readonly contextTeamId: Nullable<string>;

  @Property()
  readonly conversationHostId: Nullable<string>;

  @Property()
  readonly created: Nullable<number>;

  @Property()
  readonly creator: Nullable<string>;

  @Property()
  readonly internalTeamIds: Nullable<string[]>;

  @Property()
  readonly isArchived: Nullable<boolean>;

  @Property()
  readonly isChannel: Nullable<boolean>;

  @Property()
  readonly isExtShared: Nullable<boolean>;

  @Property()
  readonly isGeneral: Nullable<boolean>;

  @Property()
  readonly isGlobalShared: Nullable<boolean>;

  @Property()
  readonly isGroup: Nullable<boolean>;

  @Property()
  readonly isIm: Nullable<boolean>;

  @Property()
  readonly isMember: Nullable<boolean>;

  @Property()
  readonly isMoved: Nullable<number>;

  @Property()
  readonly isMpim: Nullable<boolean>;

  @Property()
  readonly isOrgDefault: Nullable<boolean>;

  @Property()
  readonly isOrgMandatory: Nullable<boolean>;

  @Property()
  readonly isOrgShared: Nullable<boolean>;

  @Property()
  readonly isPendingExtShared: Nullable<boolean>;

  @Property()
  readonly isPrivate: Nullable<boolean>;

  @Property()
  readonly isShared: Nullable<boolean>;

  @Property()
  readonly isUserDeleted: Nullable<boolean>;

  @Property()
  readonly name: Nullable<string>;

  @Property()
  readonly nameNormalized: Nullable<string>;

  @Property()
  readonly numMembers: Nullable<number>;

  @Property()
  readonly pendingConnectedTeamIds: Nullable<string[]>;

  @Property()
  readonly pendingShared: Nullable<string[]>;

  @Property()
  readonly previousNames: Nullable<string[]>;

  @Property()
  readonly priority: Nullable<number>;

  @Property()
  readonly purposeCreator: Nullable<string>;

  @Property()
  readonly purposeLastSet: Nullable<number>;

  @Property()
  readonly purposeValue: Nullable<string>;

  @Property()
  readonly topicCreator: Nullable<string>;

  @Property()
  readonly topicLastSet: Nullable<number>;

  @Property()
  readonly topicValue: Nullable<string>;

  @Property()
  readonly unlinked: Nullable<number>;

  @Property()
  readonly user: Nullable<string>;

  constructor(
    uuid: string,
    channelId: Nullable<string>,
    contextTeamId: Nullable<string>,
    conversationHostId: Nullable<string>,
    created: Nullable<number>,
    creator: Nullable<string>,
    internalTeamIds: Nullable<string[]>,
    isArchived: Nullable<boolean>,
    isChannel: Nullable<boolean>,
    isExtShared: Nullable<boolean>,
    isGeneral: Nullable<boolean>,
    isGlobalShared: Nullable<boolean>,
    isGroup: Nullable<boolean>,
    isIm: Nullable<boolean>,
    isMember: Nullable<boolean>,
    isMoved: Nullable<number>,
    isMpim: Nullable<boolean>,
    isOrgDefault: Nullable<boolean>,
    isOrgMandatory: Nullable<boolean>,
    isOrgShared: Nullable<boolean>,
    isPendingExtShared: Nullable<boolean>,
    isPrivate: Nullable<boolean>,
    isShared: Nullable<boolean>,
    isUserDeleted: Nullable<boolean>,
    name: Nullable<string>,
    nameNormalized: Nullable<string>,
    numMembers: Nullable<number>,
    pendingConnectedTeamIds: Nullable<string[]>,
    pendingShared: Nullable<string[]>,
    previousNames: Nullable<string[]>,
    priority: Nullable<number>,
    purposeCreator: Nullable<string>,
    purposeLastSet: Nullable<number>,
    purposeValue: Nullable<string>,
    topicCreator: Nullable<string>,
    topicLastSet: Nullable<number>,
    topicValue: Nullable<string>,
    unlinked: Nullable<number>,
    user: Nullable<string>
  ) {
    this.uuid = uuid;
    this.channelId = channelId;
    this.contextTeamId = contextTeamId;
    this.conversationHostId = conversationHostId;
    this.created = created;
    this.creator = creator;
    this.internalTeamIds = internalTeamIds;
    this.isArchived = isArchived;
    this.isChannel = isChannel;
    this.isExtShared = isExtShared;
    this.isGeneral = isGeneral;
    this.isGlobalShared = isGlobalShared;
    this.isGroup = isGroup;
    this.isIm = isIm;
    this.isMember = isMember;
    this.isMoved = isMoved;
    this.isMpim = isMpim;
    this.isOrgDefault = isOrgDefault;
    this.isOrgMandatory = isOrgMandatory;
    this.isOrgShared = isOrgShared;
    this.isPendingExtShared = isPendingExtShared;
    this.isPrivate = isPrivate;
    this.isShared = isShared;
    this.isUserDeleted = isUserDeleted;
    this.name = name;
    this.nameNormalized = nameNormalized;
    this.numMembers = numMembers;
    this.pendingConnectedTeamIds = pendingConnectedTeamIds;
    this.pendingShared = pendingShared;
    this.previousNames = previousNames;
    this.priority = priority;
    this.purposeCreator = purposeCreator;
    this.purposeLastSet = purposeLastSet;
    this.purposeValue = purposeValue;
    this.topicCreator = topicCreator;
    this.topicLastSet = topicLastSet;
    this.topicValue = topicValue;
    this.unlinked = unlinked;
    this.user = user;
  }

  public static fromProjectSlackResponse(
    projectSlack: ProjectSlackResponse
  ): ProjectSlackApiResponse {
    return new ProjectSlackApiResponse(
      projectSlack.uuid,
      projectSlack.channelId,
      projectSlack.contextTeamId,
      projectSlack.conversationHostId,
      projectSlack.created,
      projectSlack.creator,
      projectSlack.internalTeamIds,
      projectSlack.isArchived,
      projectSlack.isChannel,
      projectSlack.isExtShared,
      projectSlack.isGeneral,
      projectSlack.isGlobalShared,
      projectSlack.isGroup,
      projectSlack.isIm,
      projectSlack.isMember,
      projectSlack.isMoved,
      projectSlack.isMpim,
      projectSlack.isOrgDefault,
      projectSlack.isOrgMandatory,
      projectSlack.isOrgShared,
      projectSlack.isPendingExtShared,
      projectSlack.isPrivate,
      projectSlack.isShared,
      projectSlack.isUserDeleted,
      projectSlack.name,
      projectSlack.nameNormalized,
      projectSlack.numMembers,
      projectSlack.pendingConnectedTeamIds,
      projectSlack.pendingShared,
      projectSlack.previousNames,
      projectSlack.priority,
      projectSlack.purposeCreator,
      projectSlack.purposeLastSet,
      projectSlack.purposeValue,
      projectSlack.topicCreator,
      projectSlack.topicLastSet,
      projectSlack.topicValue,
      projectSlack.unlinked,
      projectSlack.user
    );
  }
}

export { ProjectSlackApiResponse };

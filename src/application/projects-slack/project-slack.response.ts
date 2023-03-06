import { ProjectSlack } from '@domain/projects-slack';
import { Nullable } from '@domain/shared';

class ProjectSlackResponse {
  readonly uuid: string;

  readonly channelId: Nullable<string>;

  readonly contextTeamId: Nullable<string>;

  readonly conversationHostId: Nullable<string>;

  readonly created: Nullable<number>;

  readonly creator: Nullable<string>;

  readonly internalTeamIds: Nullable<string[]>;

  readonly isArchived: Nullable<boolean>;

  readonly isChannel: Nullable<boolean>;

  readonly isExtShared: Nullable<boolean>;

  readonly isGeneral: Nullable<boolean>;

  readonly isGlobalShared: Nullable<boolean>;

  readonly isGroup: Nullable<boolean>;

  readonly isIm: Nullable<boolean>;

  readonly isMember: Nullable<boolean>;

  readonly isMoved: Nullable<number>;

  readonly isMpim: Nullable<boolean>;

  readonly isOrgDefault: Nullable<boolean>;

  readonly isOrgMandatory: Nullable<boolean>;

  readonly isOrgShared: Nullable<boolean>;

  readonly isPendingExtShared: Nullable<boolean>;

  readonly isPrivate: Nullable<boolean>;

  readonly isShared: Nullable<boolean>;

  readonly isUserDeleted: Nullable<boolean>;

  readonly name: Nullable<string>;

  readonly nameNormalized: Nullable<string>;

  readonly numMembers: Nullable<number>;

  readonly pendingConnectedTeamIds: Nullable<string[]>;

  readonly pendingShared: Nullable<string[]>;

  readonly previousNames: Nullable<string[]>;

  readonly priority: Nullable<number>;

  readonly purposeCreator: Nullable<string>;

  readonly purposeLastSet: Nullable<number>;

  readonly purposeValue: Nullable<string>;

  readonly topicCreator: Nullable<string>;

  readonly topicLastSet: Nullable<number>;

  readonly topicValue: Nullable<string>;

  readonly unlinked: Nullable<number>;

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

  public static fromDomainModel(
    projectSlack: ProjectSlack
  ): ProjectSlackResponse {
    return new ProjectSlackResponse(
      projectSlack.uuid.value,
      projectSlack.channelId?.value || null,
      projectSlack.contextTeamId?.value || null,
      projectSlack.conversationHostId?.value || null,
      projectSlack.created?.value || null,
      projectSlack.creator?.value || null,
      projectSlack.internalTeamIds != undefined
        ? projectSlack.internalTeamIds.map(
            (internalTeamId) => internalTeamId.value
          )
        : [],
      projectSlack.isArchived != undefined ? projectSlack.isArchived : null,
      projectSlack.isChannel != undefined ? projectSlack.isChannel : null,
      projectSlack.isExtShared != undefined ? projectSlack.isExtShared : null,
      projectSlack.isGeneral != undefined ? projectSlack.isGeneral : null,
      projectSlack.isGlobalShared != undefined
        ? projectSlack.isGlobalShared
        : null,
      projectSlack.isGroup != undefined ? projectSlack.isGroup : null,
      projectSlack.isIm != undefined ? projectSlack.isIm : null,
      projectSlack.isMember != undefined ? projectSlack.isMember : null,
      projectSlack.isMoved?.value || null,
      projectSlack.isMpim != undefined ? projectSlack.isMpim : null,
      projectSlack.isOrgDefault != undefined ? projectSlack.isOrgDefault : null,
      projectSlack.isOrgMandatory != undefined
        ? projectSlack.isOrgMandatory
        : null,
      projectSlack.isOrgShared != undefined ? projectSlack.isOrgShared : null,
      projectSlack.isPendingExtShared != undefined
        ? projectSlack.isPendingExtShared
        : null,
      projectSlack.isPrivate != undefined ? projectSlack.isPrivate : null,
      projectSlack.isShared != undefined ? projectSlack.isShared : null,
      projectSlack.isUserDeleted != undefined
        ? projectSlack.isUserDeleted
        : null,
      projectSlack.name?.value || null,
      projectSlack.nameNormalized?.value || null,
      projectSlack.numMembers?.value || null,
      projectSlack.pendingConnectedTeamIds != undefined
        ? projectSlack.pendingConnectedTeamIds.map(
            (pendingConnectedTeamId) => pendingConnectedTeamId.value
          )
        : [],
      projectSlack.pendingShared != undefined
        ? projectSlack.pendingShared.map((pendingShared) => pendingShared.value)
        : [],
      projectSlack.previousNames != undefined
        ? projectSlack.previousNames.map((previousName) => previousName.value)
        : [],
      projectSlack.priority?.value || null,
      projectSlack.purposeCreator?.value || null,
      projectSlack.purposeLastSet?.value || null,
      projectSlack.purposeValue?.value || null,
      projectSlack.topicCreator?.value || null,
      projectSlack.topicLastSet?.value || null,
      projectSlack.topicValue?.value || null,
      projectSlack.unlinked?.value || null,
      projectSlack.user?.value || null
    );
  }
}

export { ProjectSlackResponse };

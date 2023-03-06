import { ProjectSlackChannelId } from './project-slack-channel-id';
import { ProjectSlackContextTeamId } from './project-slack-context-team-id';
import { ProjectSlackConversationHostId } from './project-slack-conversation-host-id';
import { ProjectSlackCreated } from './project-slack-created';
import { ProjectSlackCreator } from './project-slack-creator';
import { ProjectSlackId } from './project-slack-id';
import { ProjectSlackInternalTeamId } from './project-slack-internal-team-id';
import { ProjectSlackIsMoved } from './project-slack-is-moved';
import { ProjectSlackName } from './project-slack-name';
import { ProjectSlackNameNormalized } from './project-slack-name-normalized';
import { ProjectSlackNumMembers } from './project-slack-num-members';
import { ProjectSlackPendingConnectedTeamId } from './project-slack-pending-connected-team-id';
import { ProjectSlackPendingShared } from './project-slack-pending-shared';
import { ProjectSlackPreviousName } from './project-slack-previous-name';
import { ProjectSlackPriority } from './project-slack-priority';
import { ProjectSlackPurposeCreator } from './project-slack-purpose-creator';
import { ProjectSlackPurposeLastSet } from './project-slack-purpose-last-set';
import { ProjectSlackPurposeValue } from './project-slack-purpose-value';
import { ProjectSlackTopicCreator } from './project-slack-topic-creator';
import { ProjectSlackTopicLastSet } from './project-slack-topic-last-set';
import { ProjectSlackTopicValue } from './project-slack-topic-value';
import { ProjectSlackUnlinked } from './project-slack-unlinked';
import { ProjectSlackUser } from './project-slack-user';
import { ProjectSlackUuid } from './project-slack-uuid';
import { Nullable } from '@domain/shared';
import { DomainEntity } from '@domain/shared/entities/domain-entity';

interface ProjectSlackFlattened {
  id: Nullable<number>;
  uuid: string;
  channelId: Nullable<string>;
  contextTeamId: Nullable<string>;
  conversationHostId: Nullable<string>;
  created: Nullable<number>;
  creator: Nullable<string>;
  internalTeamIds: Nullable<string[]>;
  isArchived: Nullable<boolean>;
  isChannel: Nullable<boolean>;
  isExtShared: Nullable<boolean>;
  isGeneral: Nullable<boolean>;
  isGlobalShared: Nullable<boolean>;
  isGroup: Nullable<boolean>;
  isIm: Nullable<boolean>;
  isMember: Nullable<boolean>;
  isMoved: Nullable<number>;
  isMpim: Nullable<boolean>;
  isOrgDefault: Nullable<boolean>;
  isOrgMandatory: Nullable<boolean>;
  isOrgShared: Nullable<boolean>;
  isPendingExtShared: Nullable<boolean>;
  isPrivate: Nullable<boolean>;
  isShared: Nullable<boolean>;
  isUserDeleted: Nullable<boolean>;
  name: Nullable<string>;
  nameNormalized: Nullable<string>;
  numMembers: Nullable<number>;
  pendingConnectedTeamIds: Nullable<string[]>;
  pendingShared: Nullable<string[]>;
  previousNames: Nullable<string[]>;
  priority: Nullable<number>;
  purposeCreator: Nullable<string>;
  purposeLastSet: Nullable<number>;
  purposeValue: Nullable<string>;
  topicCreator: Nullable<string>;
  topicLastSet: Nullable<number>;
  topicValue: Nullable<string>;
  unlinked: Nullable<number>;
  user: Nullable<string>;
}

class ProjectSlack extends DomainEntity {
  id: Nullable<ProjectSlackId>;

  uuid: ProjectSlackUuid;

  channelId: Nullable<ProjectSlackChannelId>;

  contextTeamId: Nullable<ProjectSlackContextTeamId>;

  conversationHostId: Nullable<ProjectSlackConversationHostId>;

  created: Nullable<ProjectSlackCreated>;

  creator: Nullable<ProjectSlackCreator>;

  internalTeamIds: Nullable<ProjectSlackInternalTeamId[]>;

  isArchived: Nullable<boolean>;

  isChannel: Nullable<boolean>;

  isExtShared: Nullable<boolean>;

  isGeneral: Nullable<boolean>;

  isGlobalShared: Nullable<boolean>;

  isGroup: Nullable<boolean>;

  isIm: Nullable<boolean>;

  isMember: Nullable<boolean>;

  isMoved: Nullable<ProjectSlackIsMoved>;

  isMpim: Nullable<boolean>;

  isOrgDefault: Nullable<boolean>;

  isOrgMandatory: Nullable<boolean>;

  isOrgShared: Nullable<boolean>;

  isPendingExtShared: Nullable<boolean>;

  isPrivate: Nullable<boolean>;

  isShared: Nullable<boolean>;

  isUserDeleted: Nullable<boolean>;

  name: Nullable<ProjectSlackName>;

  nameNormalized: Nullable<ProjectSlackNameNormalized>;

  numMembers: Nullable<ProjectSlackNumMembers>;

  pendingConnectedTeamIds: Nullable<ProjectSlackPendingConnectedTeamId[]>;

  pendingShared: Nullable<ProjectSlackPendingShared[]>;

  previousNames: Nullable<ProjectSlackPreviousName[]>;

  priority: Nullable<ProjectSlackPriority>;

  purposeCreator: Nullable<ProjectSlackPurposeCreator>;

  purposeLastSet: Nullable<ProjectSlackPurposeLastSet>;

  purposeValue: Nullable<ProjectSlackPurposeValue>;

  topicCreator: Nullable<ProjectSlackTopicCreator>;

  topicLastSet: Nullable<ProjectSlackTopicLastSet>;

  topicValue: Nullable<ProjectSlackTopicValue>;

  unlinked: Nullable<ProjectSlackUnlinked>;

  user: Nullable<ProjectSlackUser>;

  constructor(
    id: Nullable<ProjectSlackId>,
    uuid: ProjectSlackUuid,
    channelId: Nullable<ProjectSlackChannelId>,
    contextTeamId: Nullable<ProjectSlackContextTeamId>,
    conversationHostId: Nullable<ProjectSlackConversationHostId>,
    created: Nullable<ProjectSlackCreated>,
    creator: Nullable<ProjectSlackCreator>,
    internalTeamIds: Nullable<ProjectSlackInternalTeamId[]>,
    isArchived: Nullable<boolean>,
    isChannel: Nullable<boolean>,
    isExtShared: Nullable<boolean>,
    isGeneral: Nullable<boolean>,
    isGlobalShared: Nullable<boolean>,
    isGroup: Nullable<boolean>,
    isIm: Nullable<boolean>,
    isMember: Nullable<boolean>,
    isMoved: Nullable<ProjectSlackIsMoved>,
    isMpim: Nullable<boolean>,
    isOrgDefault: Nullable<boolean>,
    isOrgMandatory: Nullable<boolean>,
    isOrgShared: Nullable<boolean>,
    isPendingExtShared: Nullable<boolean>,
    isPrivate: Nullable<boolean>,
    isShared: Nullable<boolean>,
    isUserDeleted: Nullable<boolean>,
    name: Nullable<ProjectSlackName>,
    nameNormalized: Nullable<ProjectSlackNameNormalized>,
    numMembers: Nullable<ProjectSlackNumMembers>,
    pendingConnectedTeamIds: Nullable<ProjectSlackPendingConnectedTeamId[]>,
    pendingShared: Nullable<ProjectSlackPendingShared[]>,
    previousNames: Nullable<ProjectSlackPreviousName[]>,
    priority: Nullable<ProjectSlackPriority>,
    purposeCreator: Nullable<ProjectSlackPurposeCreator>,
    purposeLastSet: Nullable<ProjectSlackPurposeLastSet>,
    purposeValue: Nullable<ProjectSlackPurposeValue>,
    topicCreator: Nullable<ProjectSlackTopicCreator>,
    topicLastSet: Nullable<ProjectSlackTopicLastSet>,
    topicValue: Nullable<ProjectSlackTopicValue>,
    unlinked: Nullable<ProjectSlackUnlinked>,
    user: Nullable<ProjectSlackUser>
  ) {
    super();
    this.id = id;
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

  public static create(
    uuid: ProjectSlackUuid,
    channelId: Nullable<ProjectSlackChannelId>,
    contextTeamId: Nullable<ProjectSlackContextTeamId>,
    conversationHostId: Nullable<ProjectSlackConversationHostId>,
    created: Nullable<ProjectSlackCreated>,
    creator: Nullable<ProjectSlackCreator>,
    internalTeamIds: Nullable<ProjectSlackInternalTeamId[]>,
    isArchived: Nullable<boolean>,
    isChannel: Nullable<boolean>,
    isExtShared: Nullable<boolean>,
    isGeneral: Nullable<boolean>,
    isGlobalShared: Nullable<boolean>,
    isGroup: Nullable<boolean>,
    isIm: Nullable<boolean>,
    isMember: Nullable<boolean>,
    isMoved: Nullable<ProjectSlackIsMoved>,
    isMpim: Nullable<boolean>,
    isOrgDefault: Nullable<boolean>,
    isOrgMandatory: Nullable<boolean>,
    isOrgShared: Nullable<boolean>,
    isPendingExtShared: Nullable<boolean>,
    isPrivate: Nullable<boolean>,
    isShared: Nullable<boolean>,
    isUserDeleted: Nullable<boolean>,
    name: Nullable<ProjectSlackName>,
    nameNormalized: Nullable<ProjectSlackNameNormalized>,
    numMembers: Nullable<ProjectSlackNumMembers>,
    pendingConnectedTeamIds: Nullable<ProjectSlackPendingConnectedTeamId[]>,
    pendingShared: Nullable<ProjectSlackPendingShared[]>,
    previousNames: Nullable<ProjectSlackPreviousName[]>,
    priority: Nullable<ProjectSlackPriority>,
    purposeCreator: Nullable<ProjectSlackPurposeCreator>,
    purposeLastSet: Nullable<ProjectSlackPurposeLastSet>,
    purposeValue: Nullable<ProjectSlackPurposeValue>,
    topicCreator: Nullable<ProjectSlackTopicCreator>,
    topicLastSet: Nullable<ProjectSlackTopicLastSet>,
    topicValue: Nullable<ProjectSlackTopicValue>,
    unlinked: Nullable<ProjectSlackUnlinked>,
    user: Nullable<ProjectSlackUser>
  ): ProjectSlack {
    return new ProjectSlack(
      undefined,
      uuid,
      channelId,
      contextTeamId,
      conversationHostId,
      created,
      creator,
      internalTeamIds,
      isArchived,
      isChannel,
      isExtShared,
      isGeneral,
      isGlobalShared,
      isGroup,
      isIm,
      isMember,
      isMoved,
      isMpim,
      isOrgDefault,
      isOrgMandatory,
      isOrgShared,
      isPendingExtShared,
      isPrivate,
      isShared,
      isUserDeleted,
      name,
      nameNormalized,
      numMembers,
      pendingConnectedTeamIds,
      pendingShared,
      previousNames,
      priority,
      purposeCreator,
      purposeLastSet,
      purposeValue,
      topicCreator,
      topicLastSet,
      topicValue,
      unlinked,
      user
    );
  }

  public flat(): ProjectSlackFlattened {
    return {
      id: this.id?.value,
      uuid: this.uuid.value,
      channelId: this.channelId?.value,
      contextTeamId: this.contextTeamId?.value,
      conversationHostId: this.conversationHostId?.value,
      created: this.created?.value,
      creator: this.creator?.value,
      internalTeamIds:
        this.internalTeamIds == undefined ? this.internalTeamIds : null,
      isArchived: this.isArchived,
      isChannel: this.isChannel,
      isExtShared: this.isExtShared,
      isGeneral: this.isGeneral,
      isGlobalShared: this.isGlobalShared,
      isGroup: this.isGroup,
      isIm: this.isIm,
      isMember: this.isMember,
      isMoved: this.isMoved?.value,
      isMpim: this.isMpim,
      isOrgDefault: this.isOrgDefault,
      isOrgMandatory: this.isOrgMandatory,
      isOrgShared: this.isOrgShared,
      isPendingExtShared: this.isPendingExtShared,
      isPrivate: this.isPrivate,
      isShared: this.isShared,
      isUserDeleted: this.isUserDeleted,
      name: this.name?.value,
      nameNormalized: this.nameNormalized?.value,
      numMembers: this.numMembers?.value,
      pendingConnectedTeamIds:
        this.pendingConnectedTeamIds != undefined
          ? this.pendingConnectedTeamIds.map(
              (pendingConnectedTeamId) => pendingConnectedTeamId.value
            )
          : null,
      pendingShared:
        this.pendingShared != undefined
          ? this.pendingShared.map((pendingShared) => pendingShared.value)
          : null,
      previousNames:
        this.previousNames != undefined
          ? this.previousNames.map((previousName) => previousName.value)
          : null,
      priority: this.priority?.value,
      purposeCreator: this.purposeCreator?.value,
      purposeLastSet: this.purposeLastSet?.value,
      purposeValue: this.purposeValue?.value,
      topicCreator: this.topicCreator?.value,
      topicLastSet: this.topicLastSet?.value,
      topicValue: this.topicValue?.value,
      unlinked: this.unlinked?.value,
      user: this.user?.value,
    };
  }
}

export { ProjectSlack, ProjectSlackFlattened };

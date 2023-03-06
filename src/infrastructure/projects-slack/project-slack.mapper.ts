import { ProjectSlackModel } from '@tsed/prisma';

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

class ProjectSlackMapper {
  public static toDomainModel(
    projectSlackPersistenceModel: ProjectSlackModel
  ): ProjectSlack {
    return new ProjectSlack(
      new ProjectSlackId(projectSlackPersistenceModel.id),
      new ProjectSlackUuid(projectSlackPersistenceModel.uuid),
      projectSlackPersistenceModel.channelId
        ? new ProjectSlackChannelId(projectSlackPersistenceModel.channelId)
        : null,
      projectSlackPersistenceModel.contextTeamId
        ? new ProjectSlackContextTeamId(
            projectSlackPersistenceModel.contextTeamId
          )
        : null,
      projectSlackPersistenceModel.conversationHostId
        ? new ProjectSlackConversationHostId(
            projectSlackPersistenceModel.conversationHostId
          )
        : null,
      projectSlackPersistenceModel.created
        ? new ProjectSlackCreated(projectSlackPersistenceModel.created)
        : null,
      projectSlackPersistenceModel.creator
        ? new ProjectSlackCreator(projectSlackPersistenceModel.creator)
        : null,
      projectSlackPersistenceModel.internalTeamIds
        ? projectSlackPersistenceModel.internalTeamIds.map(
            (internalTeamId: string) =>
              new ProjectSlackInternalTeamId(internalTeamId)
          )
        : null,
      projectSlackPersistenceModel.isArchived != undefined
        ? projectSlackPersistenceModel.isArchived
        : null,
      projectSlackPersistenceModel.isChannel != undefined
        ? projectSlackPersistenceModel.isChannel
        : null,
      projectSlackPersistenceModel.isExtShared != undefined
        ? projectSlackPersistenceModel.isExtShared
        : null,
      projectSlackPersistenceModel.isGeneral != undefined
        ? projectSlackPersistenceModel.isGeneral
        : null,
      projectSlackPersistenceModel.isGlobalShared != undefined
        ? projectSlackPersistenceModel.isGlobalShared
        : null,
      projectSlackPersistenceModel.isGroup != undefined
        ? projectSlackPersistenceModel.isGroup
        : null,
      projectSlackPersistenceModel.isIm != undefined
        ? projectSlackPersistenceModel.isIm
        : null,
      projectSlackPersistenceModel.isMember != undefined
        ? projectSlackPersistenceModel.isMember
        : null,
      projectSlackPersistenceModel.isMoved
        ? new ProjectSlackIsMoved(projectSlackPersistenceModel.isMoved)
        : null,
      projectSlackPersistenceModel.isMpim
        ? projectSlackPersistenceModel.isMpim
        : null,
      projectSlackPersistenceModel.isOrgDefault
        ? projectSlackPersistenceModel.isOrgDefault
        : null,
      projectSlackPersistenceModel.isOrgMandatory
        ? projectSlackPersistenceModel.isOrgMandatory
        : null,
      projectSlackPersistenceModel.isOrgShared
        ? projectSlackPersistenceModel.isOrgShared
        : null,
      projectSlackPersistenceModel.isPendingExtShared
        ? projectSlackPersistenceModel.isPendingExtShared
        : null,
      projectSlackPersistenceModel.isPrivate
        ? projectSlackPersistenceModel.isPrivate
        : null,
      projectSlackPersistenceModel.isShared
        ? projectSlackPersistenceModel.isShared
        : null,
      projectSlackPersistenceModel.isUserDeleted
        ? projectSlackPersistenceModel.isUserDeleted
        : null,
      projectSlackPersistenceModel.name
        ? new ProjectSlackName(projectSlackPersistenceModel.name)
        : null,
      projectSlackPersistenceModel.nameNormalized
        ? new ProjectSlackNameNormalized(
            projectSlackPersistenceModel.nameNormalized
          )
        : null,
      projectSlackPersistenceModel.numMembers
        ? new ProjectSlackNumMembers(projectSlackPersistenceModel.numMembers)
        : null,
      projectSlackPersistenceModel.pendingConnectedTeamIds
        ? projectSlackPersistenceModel.pendingConnectedTeamIds.map(
            (pendingConnectedTeamId: string) =>
              new ProjectSlackPendingConnectedTeamId(pendingConnectedTeamId)
          )
        : null,
      projectSlackPersistenceModel.pendingShared
        ? projectSlackPersistenceModel.pendingShared.map(
            (pendingShared: string) =>
              new ProjectSlackPendingShared(pendingShared)
          )
        : null,
      projectSlackPersistenceModel.previousNames
        ? projectSlackPersistenceModel.previousNames.map(
            (previousName: string) => new ProjectSlackPreviousName(previousName)
          )
        : null,
      projectSlackPersistenceModel.priority
        ? new ProjectSlackPriority(projectSlackPersistenceModel.priority)
        : null,
      projectSlackPersistenceModel.purposeCreator
        ? new ProjectSlackPurposeCreator(
            projectSlackPersistenceModel.purposeCreator
          )
        : null,
      projectSlackPersistenceModel.purposeLastSet
        ? new ProjectSlackPurposeLastSet(
            projectSlackPersistenceModel.purposeLastSet
          )
        : null,
      projectSlackPersistenceModel.purposeValue
        ? new ProjectSlackPurposeValue(
            projectSlackPersistenceModel.purposeValue
          )
        : null,
      projectSlackPersistenceModel.topicCreator
        ? new ProjectSlackTopicCreator(
            projectSlackPersistenceModel.topicCreator
          )
        : null,
      projectSlackPersistenceModel.topicLastSet
        ? new ProjectSlackTopicLastSet(
            projectSlackPersistenceModel.topicLastSet
          )
        : null,
      projectSlackPersistenceModel.topicValue
        ? new ProjectSlackTopicValue(projectSlackPersistenceModel.topicValue)
        : null,
      projectSlackPersistenceModel.unlinked
        ? new ProjectSlackUnlinked(projectSlackPersistenceModel.unlinked)
        : null,
      projectSlackPersistenceModel.user
        ? new ProjectSlackUser(projectSlackPersistenceModel.user)
        : null
    );
  }

  public static toPersistenceModel(
    projectSlack: ProjectSlack
  ): ProjectSlackModel {
    const projectSlackPersistenceModel = new ProjectSlackModel();
    if (projectSlack.id != null) {
      projectSlackPersistenceModel.id = projectSlack.id.value;
    }
    projectSlackPersistenceModel.uuid = projectSlack.uuid.value;
    projectSlackPersistenceModel.channelId =
      projectSlack.channelId?.value || null;
    projectSlackPersistenceModel.contextTeamId =
      projectSlack.contextTeamId?.value || null;
    projectSlackPersistenceModel.conversationHostId =
      projectSlack.conversationHostId?.value || null;
    projectSlackPersistenceModel.created = projectSlack.created?.value || null;
    projectSlackPersistenceModel.creator = projectSlack.creator?.value || null;
    projectSlackPersistenceModel.internalTeamIds =
      projectSlack.internalTeamIds != undefined
        ? projectSlack.internalTeamIds.map(
            (internalTeamId) => internalTeamId.value
          )
        : [];
    projectSlackPersistenceModel.isArchived =
      projectSlack.isArchived != undefined ? projectSlack.isArchived : null;
    projectSlackPersistenceModel.isChannel =
      projectSlack.isChannel != undefined ? projectSlack.isChannel : null;
    projectSlackPersistenceModel.isExtShared =
      projectSlack.isExtShared != undefined ? projectSlack.isExtShared : null;
    projectSlackPersistenceModel.isGeneral =
      projectSlack.isGeneral != undefined ? projectSlack.isGeneral : null;
    projectSlackPersistenceModel.isGlobalShared =
      projectSlack.isGlobalShared != undefined
        ? projectSlack.isGlobalShared
        : null;
    projectSlackPersistenceModel.isGroup =
      projectSlack.isGroup != undefined ? projectSlack.isGroup : null;
    projectSlackPersistenceModel.isIm =
      projectSlack.isIm != undefined ? projectSlack.isIm : null;
    projectSlackPersistenceModel.isMember =
      projectSlack.isMember != undefined ? projectSlack.isMember : null;
    projectSlackPersistenceModel.isMoved = projectSlack.isMoved?.value || null;
    projectSlackPersistenceModel.isMpim =
      projectSlack.isMpim != undefined ? projectSlack.isMpim : null;
    projectSlackPersistenceModel.isOrgDefault =
      projectSlack.isOrgDefault != undefined ? projectSlack.isOrgDefault : null;
    projectSlackPersistenceModel.isOrgMandatory =
      projectSlack.isOrgMandatory != undefined
        ? projectSlack.isOrgMandatory
        : null;
    projectSlackPersistenceModel.isOrgShared =
      projectSlack.isOrgShared != undefined ? projectSlack.isOrgShared : null;
    projectSlackPersistenceModel.isPendingExtShared =
      projectSlack.isPendingExtShared != undefined
        ? projectSlack.isPendingExtShared
        : null;
    projectSlackPersistenceModel.isPrivate =
      projectSlack.isPrivate != undefined ? projectSlack.isPrivate : null;
    projectSlackPersistenceModel.isShared =
      projectSlack.isShared != undefined ? projectSlack.isShared : null;
    projectSlackPersistenceModel.isUserDeleted =
      projectSlack.isUserDeleted != undefined
        ? projectSlack.isUserDeleted
        : null;
    projectSlackPersistenceModel.name = projectSlack.name?.value || null;
    projectSlackPersistenceModel.nameNormalized =
      projectSlack.nameNormalized?.value || null;
    projectSlackPersistenceModel.numMembers =
      projectSlack.numMembers?.value || null;
    projectSlackPersistenceModel.pendingConnectedTeamIds =
      projectSlack.pendingConnectedTeamIds != undefined
        ? projectSlack.pendingConnectedTeamIds.map(
            (pendingConnectedTeamId) => pendingConnectedTeamId.value
          )
        : [];
    projectSlackPersistenceModel.pendingShared =
      projectSlack.pendingShared != undefined
        ? projectSlack.pendingShared.map((pendingShared) => pendingShared.value)
        : [];
    projectSlackPersistenceModel.previousNames =
      projectSlack.previousNames != undefined
        ? projectSlack.previousNames.map((previousName) => previousName.value)
        : [];
    projectSlackPersistenceModel.priority =
      projectSlack.priority?.value || null;
    projectSlackPersistenceModel.purposeCreator =
      projectSlack.purposeCreator?.value || null;
    projectSlackPersistenceModel.purposeLastSet =
      projectSlack.purposeLastSet?.value || null;
    projectSlackPersistenceModel.purposeValue =
      projectSlack.purposeValue?.value || null;
    projectSlackPersistenceModel.topicCreator =
      projectSlack.topicCreator?.value || null;
    projectSlackPersistenceModel.topicLastSet =
      projectSlack.topicLastSet?.value || null;
    projectSlackPersistenceModel.topicValue =
      projectSlack.topicValue?.value || null;
    projectSlackPersistenceModel.unlinked =
      projectSlack.unlinked?.value || null;
    projectSlackPersistenceModel.user = projectSlack.user?.value || null;
    return projectSlackPersistenceModel;
  }
}

export { ProjectSlackMapper };

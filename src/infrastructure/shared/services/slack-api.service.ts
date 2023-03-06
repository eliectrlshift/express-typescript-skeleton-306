import { WebClient } from '@slack/web-api';
import { Channel } from '@slack/web-api/dist/response/ConversationsListResponse';
import {
  ProjectSlack,
  ProjectSlackChannelId,
  ProjectSlackContextTeamId,
  ProjectSlackConversationHostId,
  ProjectSlackCreated,
  ProjectSlackCreator,
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
import { ChannelsApiDomainService } from '@domain/shared/services/channels-api.domain-service';
import { InfrastructureService } from '@infrastructure/shared/infrastructure-service.decorator';

@InfrastructureService(ChannelsApiDomainService)
class SlackApiService extends ChannelsApiDomainService {
  private readonly client: WebClient = new WebClient('token');

  list = async (
    teamId = 'T033EU2V6LX',
    types = 'public_channel,private_channel'
  ): Promise<Channel[]> => {
    const response = await this.client.conversations.list({
      team_id: teamId,
      types,
    });
    return response.channels ? response.channels : [];
  };

  create = async () => {
    console.log('create function');
  };

  toDomainEntity = async (data: Channel): Promise<ProjectSlack> =>
    new ProjectSlack(
      undefined,
      ProjectSlackUuid.random(),
      data.id ? new ProjectSlackChannelId(data.id) : null,
      data.context_team_id
        ? new ProjectSlackContextTeamId(data.context_team_id)
        : null,
      data.conversation_host_id
        ? new ProjectSlackConversationHostId(data.conversation_host_id)
        : null,
      data.created ? new ProjectSlackCreated(data.created) : null,
      data.creator ? new ProjectSlackCreator(data.creator) : null,
      data.internal_team_ids
        ? data.internal_team_ids.map(
            (internal_team_id: string) =>
              new ProjectSlackInternalTeamId(internal_team_id)
          )
        : null,
      data.is_archived != undefined ? data.is_archived : null,
      data.is_channel != undefined ? data.is_channel : null,
      data.is_ext_shared != undefined ? data.is_ext_shared : null,
      data.is_general != undefined ? data.is_general : null,
      data.is_global_shared != undefined ? data.is_global_shared : null,
      data.is_group != undefined ? data.is_group : null,
      data.is_im != undefined ? data.is_im : null,
      data.is_member != undefined ? data.is_member : null,
      data.is_moved ? new ProjectSlackIsMoved(data.is_moved) : null,
      data.is_mpim ? data.is_mpim : null,
      data.is_org_default ? data.is_org_default : null,
      data.is_org_mandatory ? data.is_org_mandatory : null,
      data.is_org_shared ? data.is_org_shared : null,
      data.is_pending_ext_shared ? data.is_pending_ext_shared : null,
      data.is_private ? data.is_private : null,
      data.is_shared ? data.is_shared : null,
      data.is_user_deleted ? data.is_user_deleted : null,
      data.name ? new ProjectSlackName(data.name) : null,
      data.name_normalized
        ? new ProjectSlackNameNormalized(data.name_normalized)
        : null,
      data.num_members ? new ProjectSlackNumMembers(data.num_members) : null,
      data.pending_connected_team_ids
        ? data.pending_connected_team_ids.map(
            (pending_connected_team_id: string) =>
              new ProjectSlackPendingConnectedTeamId(pending_connected_team_id)
          )
        : null,
      data.pending_shared
        ? data.pending_shared.map(
            (pending_shared: string) =>
              new ProjectSlackPendingShared(pending_shared)
          )
        : null,
      data.previous_names
        ? data.previous_names.map(
            (previous_name: string) =>
              new ProjectSlackPreviousName(previous_name)
          )
        : null,
      data.priority ? new ProjectSlackPriority(data.priority) : null,
      data.purpose && data.purpose.creator
        ? new ProjectSlackPurposeCreator(data.purpose.creator)
        : null,
      data.purpose && data.purpose.last_set
        ? new ProjectSlackPurposeLastSet(data.purpose.last_set)
        : null,
      data.purpose && data.purpose.value
        ? new ProjectSlackPurposeValue(data.purpose.value)
        : null,
      data.topic && data.topic.creator
        ? new ProjectSlackTopicCreator(data.topic.creator)
        : null,
      data.topic && data.topic.last_set
        ? new ProjectSlackTopicLastSet(data.topic.last_set)
        : null,
      data.topic && data.topic.value
        ? new ProjectSlackTopicValue(data.topic.value)
        : null,
      data.unlinked ? new ProjectSlackUnlinked(data.unlinked) : null,
      data.user ? new ProjectSlackUser(data.user) : null
    );
}

export { SlackApiService };

import { Channel } from '@slack/web-api/dist/response/ConversationsListResponse';
import { ProjectSlack } from '@domain/projects-slack';

abstract class ChannelsApiDomainService {
  public abstract list(teamId?: string, types?: string): Promise<Channel[]>;
  public abstract create(): Promise<any>;
  public abstract toDomainEntity(data: Channel): Promise<ProjectSlack>;
}

export { ChannelsApiDomainService };

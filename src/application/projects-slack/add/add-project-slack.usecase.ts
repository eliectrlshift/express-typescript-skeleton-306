import { AddProjectSlackRequest } from './add-project-slack.request';
import { ProjectSlackResponse } from '@application/projects-slack';
import { BaseUseCase, UseCase } from '@application/shared';
import { ProjectSlackRepository } from '@domain/projects-slack';
import { ChannelsApiDomainService } from '@domain/shared/services';

@UseCase()
class AddProjectSlackUseCase extends BaseUseCase<
  AddProjectSlackRequest,
  ProjectSlackResponse[]
> {
  private projectSlackRepository: ProjectSlackRepository;

  private slackApiService: ChannelsApiDomainService;

  constructor(
    projectSlackRepository: ProjectSlackRepository,
    slackApiService: ChannelsApiDomainService
  ) {
    super();
    this.projectSlackRepository = projectSlackRepository;
    this.slackApiService = slackApiService;
  }

  public async performOperation(): Promise<ProjectSlackResponse[]> {
    const channels = await this.slackApiService.list();

    channels.map(async (channel) => {
      const projectSlack = await this.slackApiService.toDomainEntity(channel);
      this.projectSlackRepository.create(projectSlack);
    });

    const projectSlacks = await this.projectSlackRepository.findAll();
    return projectSlacks.map(ProjectSlackResponse.fromDomainModel);
  }
}

export { AddProjectSlackUseCase };

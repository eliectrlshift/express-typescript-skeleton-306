import { FindProjectSlackRequest } from './find-project-slack.request';
import { ProjectSlackResponse } from '@application/projects-slack';
import { BaseUseCase, UseCase } from '@application/shared';
import {
  ProjectSlack,
  ProjectSlackRepository,
  ProjectSlackNotExistsException,
  ProjectSlackUuid,
} from '@domain/projects-slack';
import { Nullable } from '@domain/shared';

@UseCase()
class FindProjectSlackUseCase extends BaseUseCase<
  FindProjectSlackRequest,
  ProjectSlackResponse
> {
  private projectSlackRepository: ProjectSlackRepository;

  constructor(projectSlackRepository: ProjectSlackRepository) {
    super();
    this.projectSlackRepository = projectSlackRepository;
  }

  public async performOperation({
    uuid,
  }: FindProjectSlackRequest): Promise<ProjectSlackResponse> {
    const projectSlack = await this.projectSlackRepository.findByUuid(
      new ProjectSlackUuid(uuid)
    );

    this.ensureProjectSlackExists(projectSlack, uuid);

    return ProjectSlackResponse.fromDomainModel(projectSlack as ProjectSlack);
  }

  private ensureProjectSlackExists(
    projectSlack: Nullable<ProjectSlack>,
    uuid: string
  ): void {
    if (!projectSlack) {
      throw new ProjectSlackNotExistsException(uuid);
    }
  }
}

export { FindProjectSlackUseCase };

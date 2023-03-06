import { FindProjectGithubRequest } from './find-project-github.request';
import { ProjectGithubResponse } from '@application/projects-github';
import { BaseUseCase, UseCase } from '@application/shared';
import {
  ProjectGithub,
  ProjectGithubRepository,
  ProjectGithubNotExistsException,
  ProjectGithubUuid,
} from '@domain/projects-github';
import { Nullable } from '@domain/shared';

@UseCase()
class FindProjectGithubUseCase extends BaseUseCase<
  FindProjectGithubRequest,
  ProjectGithubResponse
> {
  private projectGithubRepository: ProjectGithubRepository;

  constructor(projectGithubRepository: ProjectGithubRepository) {
    super();
    this.projectGithubRepository = projectGithubRepository;
  }

  public async performOperation({
    uuid,
  }: FindProjectGithubRequest): Promise<ProjectGithubResponse> {
    const projectGithub = await this.projectGithubRepository.findByUuid(
      new ProjectGithubUuid(uuid)
    );

    this.ensureProjectGithubExists(projectGithub, uuid);

    return ProjectGithubResponse.fromDomainModel(
      projectGithub as ProjectGithub
    );
  }

  private ensureProjectGithubExists(
    projectGithub: Nullable<ProjectGithub>,
    uuid: string
  ): void {
    if (!projectGithub) {
      throw new ProjectGithubNotExistsException(uuid);
    }
  }
}

export { FindProjectGithubUseCase };

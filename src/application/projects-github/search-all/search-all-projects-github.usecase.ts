import { SearchAllProjectGithubsRequest } from './search-all-projects-github.request';
import { ProjectGithubResponse } from '@application/projects-github';
import { BaseUseCase, UseCase } from '@application/shared';
import { ProjectGithubRepository } from '@domain/projects-github';

@UseCase()
class SearchAllProjectGithubsUseCase extends BaseUseCase<
  SearchAllProjectGithubsRequest,
  ProjectGithubResponse[]
> {
  private projectGithubRepository: ProjectGithubRepository;

  constructor(projectGithubRepository: ProjectGithubRepository) {
    super();
    this.projectGithubRepository = projectGithubRepository;
  }

  public async performOperation(): Promise<ProjectGithubResponse[]> {
    const projects = await this.projectGithubRepository.findAll();
    return projects.map(ProjectGithubResponse.fromDomainModel);
  }
}

export { SearchAllProjectGithubsUseCase };

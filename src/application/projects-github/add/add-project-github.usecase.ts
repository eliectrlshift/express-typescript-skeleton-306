import { AddProjectGithubRequest } from './add-project-github.request';
import { ProjectGithubResponse } from '@application/projects-github';
import { BaseUseCase, UseCase } from '@application/shared';
import { ProjectGithubRepository } from '@domain/projects-github';
import { RepositoriesApiDomainService } from '@domain/shared/services';

@UseCase()
class AddProjectGithubUseCase extends BaseUseCase<
  AddProjectGithubRequest,
  ProjectGithubResponse[]
> {
  private projectGithubRepository: ProjectGithubRepository;

  private githubApiService: RepositoriesApiDomainService;

  constructor(
    projectGithubRepository: ProjectGithubRepository,
    githubApiService: RepositoriesApiDomainService
  ) {
    super();
    this.projectGithubRepository = projectGithubRepository;
    this.githubApiService = githubApiService;
  }

  public async performOperation(): Promise<ProjectGithubResponse[]> {
    const repositories = await this.githubApiService.list();

    repositories.data.map(async (repo) => {
      const projectGithub = await this.githubApiService.toDomainEntity(repo);
      this.projectGithubRepository.create(projectGithub);
    });

    const projectGithubs = await this.projectGithubRepository.findAll();
    return projectGithubs.map(ProjectGithubResponse.fromDomainModel);
  }
}

export { AddProjectGithubUseCase };

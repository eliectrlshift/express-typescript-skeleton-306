import { SearchAllProjectsRequest } from './search-all-projects.request';
import { ProjectResponse } from '@application/projects';
import { BaseUseCase, UseCase } from '@application/shared';
import { ProjectRepository } from '@domain/projects';

@UseCase()
class SearchAllProjectsUseCase extends BaseUseCase<
  SearchAllProjectsRequest,
  ProjectResponse[]
> {
  private projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    super();
    this.projectRepository = projectRepository;
  }

  public async performOperation(): Promise<ProjectResponse[]> {
    const projects = await this.projectRepository.findAll();
    return projects.map(ProjectResponse.fromDomainModel);
  }
}

export { SearchAllProjectsUseCase };

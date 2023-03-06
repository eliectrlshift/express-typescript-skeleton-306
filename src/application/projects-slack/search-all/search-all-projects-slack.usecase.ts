import { SearchAllProjectSlacksRequest } from './search-all-projects-slack.request';
import { ProjectSlackResponse } from '@application/projects-slack';
import { BaseUseCase, UseCase } from '@application/shared';
import { ProjectSlackRepository } from '@domain/projects-slack';

@UseCase()
class SearchAllProjectSlacksUseCase extends BaseUseCase<
  SearchAllProjectSlacksRequest,
  ProjectSlackResponse[]
> {
  private projectSlackRepository: ProjectSlackRepository;

  constructor(projectSlackRepository: ProjectSlackRepository) {
    super();
    this.projectSlackRepository = projectSlackRepository;
  }

  public async performOperation(): Promise<ProjectSlackResponse[]> {
    const projects = await this.projectSlackRepository.findAll();
    return projects.map(ProjectSlackResponse.fromDomainModel);
  }
}

export { SearchAllProjectSlacksUseCase };

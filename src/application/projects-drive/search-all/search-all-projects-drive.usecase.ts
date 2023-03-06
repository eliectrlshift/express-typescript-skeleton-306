import { SearchAllProjectDrivesRequest } from './search-all-projects-drive.request';
import { ProjectDriveResponse } from '@application/projects-drive';
import { BaseUseCase, UseCase } from '@application/shared';
import { ProjectDriveRepository } from '@domain/projects-drive';

@UseCase()
class SearchAllProjectDrivesUseCase extends BaseUseCase<
  SearchAllProjectDrivesRequest,
  ProjectDriveResponse[]
> {
  private projectDriveRepository: ProjectDriveRepository;

  constructor(projectDriveRepository: ProjectDriveRepository) {
    super();
    this.projectDriveRepository = projectDriveRepository;
  }

  public async performOperation(): Promise<ProjectDriveResponse[]> {
    const projects = await this.projectDriveRepository.findAll();
    return projects.map(ProjectDriveResponse.fromDomainModel);
  }
}

export { SearchAllProjectDrivesUseCase };

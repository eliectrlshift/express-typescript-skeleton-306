import { AddProjectDriveRequest } from './add-project-drive.request';
import { ProjectDriveResponse } from '@application/projects-drive';
import { BaseUseCase, UseCase } from '@application/shared';
import { ProjectDriveRepository } from '@domain/projects-drive';
import { DrivesApiDomainService } from '@domain/shared/services';

@UseCase()
class AddProjectDriveUseCase extends BaseUseCase<
  AddProjectDriveRequest,
  ProjectDriveResponse[]
> {
  private projectDriveRepository: ProjectDriveRepository;

  private drivesApiService: DrivesApiDomainService;

  constructor(
    projectDriveRepository: ProjectDriveRepository,
    drivesApiService: DrivesApiDomainService
  ) {
    super();
    this.projectDriveRepository = projectDriveRepository;
    this.drivesApiService = drivesApiService;
  }

  public async performOperation(): Promise<ProjectDriveResponse[]> {
    const files = await this.drivesApiService.list();
    console.log(files);
    const projectDrives = await this.projectDriveRepository.findAll();
    return projectDrives.map(ProjectDriveResponse.fromDomainModel);
  }
}

export { AddProjectDriveUseCase };

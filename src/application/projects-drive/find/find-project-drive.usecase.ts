import { FindProjectDriveRequest } from './find-project-drive.request';
import { ProjectDriveResponse } from '@application/projects-drive';
import { BaseUseCase, UseCase } from '@application/shared';
import {
  ProjectDrive,
  ProjectDriveRepository,
  ProjectDriveNotExistsException,
  ProjectDriveUuid,
} from '@domain/projects-drive';
import { Nullable } from '@domain/shared';

@UseCase()
class FindProjectDriveUseCase extends BaseUseCase<
  FindProjectDriveRequest,
  ProjectDriveResponse
> {
  private projectDriveRepository: ProjectDriveRepository;

  constructor(projectDriveRepository: ProjectDriveRepository) {
    super();
    this.projectDriveRepository = projectDriveRepository;
  }

  public async performOperation({
    uuid,
  }: FindProjectDriveRequest): Promise<ProjectDriveResponse> {
    const projectDrive = await this.projectDriveRepository.findByUuid(
      new ProjectDriveUuid(uuid)
    );

    this.ensureProjectDriveExists(projectDrive, uuid);

    return ProjectDriveResponse.fromDomainModel(projectDrive as ProjectDrive);
  }

  private ensureProjectDriveExists(
    projectDrive: Nullable<ProjectDrive>,
    uuid: string
  ): void {
    if (!projectDrive) {
      throw new ProjectDriveNotExistsException(uuid);
    }
  }
}

export { FindProjectDriveUseCase };

import { ProjectDriveModel, ProjectDrivesRepository } from '@tsed/prisma';
import { ProjectDriveMapper } from './project-drive.mapper';
import {
  ProjectDrive,
  ProjectDriveUuid,
  ProjectDriveRepository,
} from '@domain/projects-drive';
import { Nullable } from '@domain/shared';

import {
  BasePrismaRepository,
  RepositoryAction,
} from '@infrastructure/shared/persistence/base-prisma-repository';
import { Repository } from '@infrastructure/shared/persistence/repository.decorator';

@Repository(ProjectDriveRepository)
class PrismaProjectDriveRepository
  extends BasePrismaRepository<ProjectDriveModel>
  implements ProjectDriveRepository
{
  private projectDrivesRepository: ProjectDrivesRepository;

  constructor(projectDrivesRepository: ProjectDrivesRepository) {
    super();
    this.projectDrivesRepository = projectDrivesRepository;
  }

  public async findByUuid(
    uuid: ProjectDriveUuid
  ): Promise<Nullable<ProjectDrive>> {
    const driveRepository = await this.projectDrivesRepository.findFirst({
      where: { uuid: uuid.value, deletedAt: null },
    });

    return driveRepository
      ? ProjectDriveMapper.toDomainModel(driveRepository)
      : null;
  }

  public async findAll(): Promise<ProjectDrive[]> {
    const projectDrives = await this.projectDrivesRepository.findMany({
      where: { deletedAt: null },
    });

    return projectDrives.map(ProjectDriveMapper.toDomainModel);
  }

  public async create(driveRepository: ProjectDrive): Promise<ProjectDrive> {
    const createdProjectDrive = await this.projectDrivesRepository.create({
      data: this.getAuditablePersitenceModel(
        RepositoryAction.CREATE,
        ProjectDriveMapper.toPersistenceModel(driveRepository)
      ),
    });
    return ProjectDriveMapper.toDomainModel(createdProjectDrive);
  }

  public async update(driveRepository: ProjectDrive): Promise<ProjectDrive> {
    const updatedProjectDrive = await this.projectDrivesRepository.update({
      where: { uuid: driveRepository.uuid.value },
      data: this.getAuditablePersitenceModel(
        RepositoryAction.UPDATE,
        ProjectDriveMapper.toPersistenceModel(driveRepository)
      ),
    });
    return ProjectDriveMapper.toDomainModel(updatedProjectDrive);
  }

  public async delete(uuid: ProjectDriveUuid): Promise<void> {
    await this.projectDrivesRepository.update({
      where: { uuid: uuid.value },
      data: this.getAuditablePersitenceModel(RepositoryAction.DELETE),
    });
  }
}

export { PrismaProjectDriveRepository };

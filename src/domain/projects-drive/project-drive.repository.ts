import { ProjectDrive } from './project-drive';
import { ProjectDriveUuid } from './project-drive-uuid';
import { Nullable } from '@domain/shared';

abstract class ProjectDriveRepository {
  public abstract findByUuid(
    uuid: ProjectDriveUuid
  ): Promise<Nullable<ProjectDrive>>;

  public abstract findAll(): Promise<ProjectDrive[]>;

  public abstract create(projectDrive: ProjectDrive): Promise<ProjectDrive>;

  public abstract update(projectDrive: ProjectDrive): Promise<ProjectDrive>;

  public abstract delete(projectDrive: ProjectDriveUuid): Promise<void>;
}

export { ProjectDriveRepository };

import { ProjectDriveModel } from '@tsed/prisma';
import {
  ProjectDrive,
  ProjectDriveFolderId,
  ProjectDriveId,
  ProjectDriveName,
  ProjectDriveUrl,
  ProjectDriveUuid,
} from '@domain/projects-drive';

class ProjectDriveMapper {
  public static toDomainModel(
    projectDrivePersistenceModel: ProjectDriveModel
  ): ProjectDrive {
    return new ProjectDrive(
      new ProjectDriveId(projectDrivePersistenceModel.id),
      new ProjectDriveUuid(projectDrivePersistenceModel.uuid),
      projectDrivePersistenceModel.folderId
        ? new ProjectDriveFolderId(projectDrivePersistenceModel.folderId)
        : null,
      projectDrivePersistenceModel.name
        ? new ProjectDriveName(projectDrivePersistenceModel.name)
        : null,
      projectDrivePersistenceModel.url
        ? new ProjectDriveUrl(projectDrivePersistenceModel.url)
        : null
    );
  }

  public static toPersistenceModel(
    projectDrive: ProjectDrive
  ): ProjectDriveModel {
    const projectDrivePersistenceModel = new ProjectDriveModel();
    if (projectDrive.id != null)
      projectDrivePersistenceModel.id = projectDrive.id.value;
    projectDrivePersistenceModel.uuid = projectDrive.uuid.value;
    projectDrivePersistenceModel.folderId =
      projectDrive.folderId?.value || null;
    projectDrivePersistenceModel.name = projectDrive.name?.value || null;
    projectDrivePersistenceModel.url = projectDrive.url?.value || null;
    return projectDrivePersistenceModel;
  }
}

export { ProjectDriveMapper };

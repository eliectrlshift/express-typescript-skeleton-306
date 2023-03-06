import { ProjectDrive } from '@domain/projects-drive';
import { Nullable } from '@domain/shared';

class ProjectDriveResponse {
  readonly uuid: string;

  readonly folderId: Nullable<string>;

  readonly name: Nullable<string>;

  readonly url: Nullable<string>;

  constructor(
    uuid: string,
    folderId: Nullable<string>,
    name: Nullable<string>,
    url: Nullable<string>
  ) {
    this.uuid = uuid;
    this.folderId = folderId;
    this.name = name;
    this.url = url;
  }

  public static fromDomainModel(
    projectDrive: ProjectDrive
  ): ProjectDriveResponse {
    return new ProjectDriveResponse(
      projectDrive.uuid.value,
      projectDrive.folderId?.value,
      projectDrive.name?.value,
      projectDrive.url?.value
    );
  }
}

export { ProjectDriveResponse };

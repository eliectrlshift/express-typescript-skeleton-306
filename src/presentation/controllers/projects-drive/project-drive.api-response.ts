import { Property } from '@tsed/schema';
import { ProjectDriveResponse } from '@application/projects-drive';
import { Nullable } from '@domain/shared';

class ProjectDriveApiResponse {
  @Property()
  readonly uuid: string;

  @Property()
  readonly folderId: Nullable<string>;

  @Property()
  readonly name: Nullable<string>;

  @Property()
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

  public static fromProjectDriveResponse(
    projectDrive: ProjectDriveResponse
  ): ProjectDriveApiResponse {
    return new ProjectDriveApiResponse(
      projectDrive.uuid,
      projectDrive.folderId ?? null,
      projectDrive.name ?? null,
      projectDrive.url ?? null
    );
  }
}

export { ProjectDriveApiResponse };

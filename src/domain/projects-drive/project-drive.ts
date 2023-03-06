import { ProjectDriveFolderId } from './project-drive-folder-id';
import { ProjectDriveId } from './project-drive-id';
import { ProjectDriveName } from './project-drive-name';
import { ProjectDriveUrl } from './project-drive-url';
import { ProjectDriveUuid } from './project-drive-uuid';
import { Nullable } from '@domain/shared';
import { DomainEntity } from '@domain/shared/entities';

interface ProjectDriveFlattened {
  id: Nullable<number>;
  uuid: string;
  folderId: Nullable<string>;
  name: Nullable<string>;
  url: Nullable<string>;
}

class ProjectDrive extends DomainEntity {
  id: Nullable<ProjectDriveId>;

  uuid: ProjectDriveUuid;

  folderId: Nullable<ProjectDriveFolderId>;

  name: Nullable<ProjectDriveName>;

  url: Nullable<ProjectDriveUrl>;

  constructor(
    id: Nullable<ProjectDriveId>,
    uuid: ProjectDriveUuid,
    folderId: Nullable<ProjectDriveFolderId>,
    name: Nullable<ProjectDriveName>,
    url: Nullable<ProjectDriveUrl>
  ) {
    super();
    this.id = id;
    this.uuid = uuid;
    this.folderId = folderId;
    this.name = name;
    this.url = url;
  }

  public static create(
    uuid: ProjectDriveUuid,
    folderId: Nullable<ProjectDriveFolderId>,
    name: Nullable<ProjectDriveName>,
    url: Nullable<ProjectDriveUrl>
  ): ProjectDrive {
    return new ProjectDrive(undefined, uuid, folderId, name, url);
  }

  public flat(): ProjectDriveFlattened {
    return {
      id: this.id?.value,
      uuid: this.uuid.value,
      folderId: this.folderId?.value,
      name: this.name?.value,
      url: this.url?.value,
    };
  }
}

export { ProjectDrive, ProjectDriveFlattened };

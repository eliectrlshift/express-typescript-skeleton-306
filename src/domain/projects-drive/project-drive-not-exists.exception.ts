import { DomainException } from '@domain/shared/exceptions';

class ProjectDriveNotExistsException extends DomainException {
  constructor(uuid: string) {
    super(
      'drive_folder_not_exists',
      `Project Drive with UUID <${uuid}> does not exists`
    );
  }
}

export { ProjectDriveNotExistsException };

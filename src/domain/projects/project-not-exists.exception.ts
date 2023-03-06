import { DomainException } from '@domain/shared/exceptions';

class ProjectNotExistsException extends DomainException {
  constructor(uuid: string) {
    super('project_not_exists', `Project with UUID <${uuid}> does not exists`);
  }
}

export { ProjectNotExistsException };

import { DomainException } from '@domain/shared/exceptions';

class ProjectGithubNotExistsException extends DomainException {
  constructor(uuid: string) {
    super(
      'github_project_not_exists',
      `Project Github with UUID <${uuid}> does not exists`
    );
  }
}

export { ProjectGithubNotExistsException };

import { DomainException } from '@domain/shared/exceptions';

class ProjectSlackNotExistsException extends DomainException {
  constructor(uuid: string) {
    super(
      'slack_project_not_exists',
      `Project Slack with UUID <${uuid}> does not exists`
    );
  }
}

export { ProjectSlackNotExistsException };

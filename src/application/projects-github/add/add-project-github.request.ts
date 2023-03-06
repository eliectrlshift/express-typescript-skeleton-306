import { UseCaseRequest } from '@application/shared';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';

class AddProjectGithubRequest extends UseCaseRequest {
  public static create(triggeredBy: TriggeredBy): AddProjectGithubRequest {
    return new AddProjectGithubRequest(triggeredBy);
  }

  protected validatePayload(): void {
    // no validation needed
  }
}

export { AddProjectGithubRequest };

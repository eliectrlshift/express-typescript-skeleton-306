import { UseCaseRequest } from '@application/shared';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';

class SearchAllProjectGithubsRequest extends UseCaseRequest {
  public static create(
    triggeredBy: TriggeredBy
  ): SearchAllProjectGithubsRequest {
    return new SearchAllProjectGithubsRequest(triggeredBy);
  }

  protected validatePayload(): void {
    // no validation needed
  }
}

export { SearchAllProjectGithubsRequest };

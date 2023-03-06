import { UseCaseRequest } from '@application/shared';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';

class SearchAllProjectsRequest extends UseCaseRequest {
  public static create(triggeredBy: TriggeredBy): SearchAllProjectsRequest {
    return new SearchAllProjectsRequest(triggeredBy);
  }

  protected validatePayload(): void {
    // no validation needed
  }
}

export { SearchAllProjectsRequest };

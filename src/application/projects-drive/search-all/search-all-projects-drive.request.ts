import { UseCaseRequest } from '@application/shared';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';

class SearchAllProjectDrivesRequest extends UseCaseRequest {
  public static create(
    triggeredBy: TriggeredBy
  ): SearchAllProjectDrivesRequest {
    return new SearchAllProjectDrivesRequest(triggeredBy);
  }

  protected validatePayload(): void {
    // no validation needed
  }
}

export { SearchAllProjectDrivesRequest };

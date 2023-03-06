import { UseCaseRequest } from '@application/shared';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';

class SearchAllProjectSlacksRequest extends UseCaseRequest {
  public static create(
    triggeredBy: TriggeredBy
  ): SearchAllProjectSlacksRequest {
    return new SearchAllProjectSlacksRequest(triggeredBy);
  }

  protected validatePayload(): void {
    // no validation needed
  }
}

export { SearchAllProjectSlacksRequest };

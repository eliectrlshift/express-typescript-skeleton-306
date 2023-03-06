import { UseCaseRequest } from '@application/shared';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';

class AddProjectSlackRequest extends UseCaseRequest {
  public static create(triggeredBy: TriggeredBy): AddProjectSlackRequest {
    return new AddProjectSlackRequest(triggeredBy);
  }

  protected validatePayload(): void {
    // no validation needed
  }
}

export { AddProjectSlackRequest };

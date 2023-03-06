import { UseCaseRequest } from '@application/shared';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';

class AddProjectDriveRequest extends UseCaseRequest {
  public static create(triggeredBy: TriggeredBy): AddProjectDriveRequest {
    return new AddProjectDriveRequest(triggeredBy);
  }

  protected validatePayload(): void {
    // no validation needed
  }
}

export { AddProjectDriveRequest };

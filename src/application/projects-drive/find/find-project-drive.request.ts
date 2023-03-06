import { UseCaseRequest } from '@application/shared';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';
import { InvalidParameterException } from '@domain/shared/exceptions';

class FindProjectDriveRequest extends UseCaseRequest {
  readonly uuid: string;

  constructor(triggeredBy: TriggeredBy, uuid: string) {
    super(triggeredBy);
    this.uuid = uuid;
  }

  public static create(
    triggeredBy: TriggeredBy,
    uuid: string
  ): FindProjectDriveRequest {
    return new FindProjectDriveRequest(triggeredBy, uuid);
  }

  protected validatePayload(): void {
    if (this.uuid == null) {
      throw new InvalidParameterException('<uuid> can not be null');
    }
  }
}

export { FindProjectDriveRequest };

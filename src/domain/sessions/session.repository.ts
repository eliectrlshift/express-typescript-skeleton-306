import { Session } from './session';
import { SessionUuid } from './session-uuid';
import { Nullable } from '@domain/shared';

abstract class SessionRepository {
  public abstract findByUuid(uuid: SessionUuid): Promise<Nullable<Session>>;

  public abstract create(refreshToken: Session): Promise<Session>;

  public abstract update(refreshToken: Session): Promise<Session>;

  public abstract delete(uuid: SessionUuid): Promise<void>;
}

export { SessionRepository };

import { Token, TokenType } from './token';
import { TokenExpiresAt } from './token-expires-at';
import { SessionUuid } from '@domain/sessions/session-uuid';
import { UserUuid } from '@domain/users';

class RefreshToken extends Token {
  constructor(
    sessionUuid: SessionUuid,
    value: string,
    expiresAt: TokenExpiresAt,
    userUuid: UserUuid
  ) {
    super(TokenType.REFRESH_TOKEN, sessionUuid, value, expiresAt, userUuid);
  }

  public static create(
    sessionUuid: SessionUuid,
    value: string,
    expiresAt: TokenExpiresAt,
    userUuid: UserUuid
  ): RefreshToken {
    return new RefreshToken(sessionUuid, value, expiresAt, userUuid);
  }
}

export { RefreshToken };

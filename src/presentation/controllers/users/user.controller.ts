import { Context, Get, PathParams } from '@tsed/common';
import { Role } from '@tsed/prisma';
import {
  Description,
  Returns,
  Status,
  Summary,
  Tags,
  Title,
} from '@tsed/schema';
import { StatusCodes } from 'http-status-codes';

import { UserApiResponse } from './user.api-response';
import { FindUserUseCase, FindUserRequest } from '@application/users/find';
import {
  SearchAllUsersUseCase,
  SearchAllUsersRequest,
} from '@application/users/search-all';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';
import { AppConfig } from '@presentation/config';
import { RestController } from '@presentation/shared/rest-controller.decorator';
import { WithAuth } from '@presentation/shared/with-auth.decorator';

@RestController('/users')
@Tags({ name: 'User', description: 'User management' })
class UserController {
  private findUserUseCase: FindUserUseCase;

  private searchAllUsersUseCase: SearchAllUsersUseCase;

  constructor(
    findUserUseCase: FindUserUseCase,
    searchAllUsersUseCase: SearchAllUsersUseCase
  ) {
    this.findUserUseCase = findUserUseCase;
    this.searchAllUsersUseCase = searchAllUsersUseCase;
  }

  @Get()
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Get all users')
  @Summary('Obtain all users')
  @Description('Endpoint to obtain all users')
  @Returns(StatusCodes.OK, Array).Of(UserApiResponse)
  @Status(StatusCodes.OK, Array).Of(UserApiResponse)
  public async searchAllUsers(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy
  ): Promise<UserApiResponse[]> {
    const userResponses = await this.searchAllUsersUseCase.execute(
      SearchAllUsersRequest.create(triggeredBy)
    );
    return userResponses.map(UserApiResponse.fromUserResponse);
  }

  @Get('/:uuid')
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Get user by UUID')
  @Summary('Obtain user by UUID')
  @Description('Endpoint to obtain a user by UUID')
  @Returns(StatusCodes.OK, UserApiResponse)
  @Status(StatusCodes.OK, UserApiResponse)
  public async findUser(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy,
    @PathParams('uuid') uuid: string
  ): Promise<UserApiResponse> {
    const userResponse = await this.findUserUseCase.execute(
      FindUserRequest.create(triggeredBy, uuid)
    );
    return UserApiResponse.fromUserResponse(userResponse);
  }
}

export { UserController };

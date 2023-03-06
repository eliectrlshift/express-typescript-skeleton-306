import { BodyParams, Context, Get, PathParams } from '@tsed/common';
import { Role } from '@tsed/prisma';
import {
  Description,
  Example,
  Post,
  Returns,
  Status,
  Summary,
  Tags,
  Title,
} from '@tsed/schema';
import { StatusCodes } from 'http-status-codes';

import { ProjectSlackApiResponse } from './project-slack.api-response';
import {
  AddProjectSlackUseCase,
  AddProjectSlackRequest,
} from '@application/projects-slack/add';
import {
  FindProjectSlackUseCase,
  FindProjectSlackRequest,
} from '@application/projects-slack/find';
import {
  SearchAllProjectSlacksUseCase,
  SearchAllProjectSlacksRequest,
} from '@application/projects-slack/search-all';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';
import { AppConfig } from '@presentation/config';
import { RestController } from '@presentation/shared/rest-controller.decorator';
import { WithAuth } from '@presentation/shared/with-auth.decorator';

@RestController('/projects-slack')
@Tags({ name: 'Project Slack', description: 'Project Slack management' })
class ProjectSlackController {
  private searchAllProjectSlacksUseCase: SearchAllProjectSlacksUseCase;

  private findProjectSlackUseCase: FindProjectSlackUseCase;

  private addProjectSlackUseCase: AddProjectSlackUseCase;

  constructor(
    searchAllProjectSlacksUseCase: SearchAllProjectSlacksUseCase,
    findProjectSlackUseCase: FindProjectSlackUseCase,
    addProjectSlackUseCase: AddProjectSlackUseCase
  ) {
    this.searchAllProjectSlacksUseCase = searchAllProjectSlacksUseCase;
    this.findProjectSlackUseCase = findProjectSlackUseCase;
    this.addProjectSlackUseCase = addProjectSlackUseCase;
  }

  @Get()
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Get all projects slack')
  @Summary('Obtain all projects slack')
  @Description('Endpoint to obtain all projects slack')
  @Returns(StatusCodes.OK, Array).Of(ProjectSlackApiResponse)
  @Status(StatusCodes.OK, Array).Of(ProjectSlackApiResponse)
  public async searchAllProjectSlacks(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy
  ): Promise<ProjectSlackApiResponse[]> {
    const projectSlackResponses =
      await this.searchAllProjectSlacksUseCase.execute(
        SearchAllProjectSlacksRequest.create(triggeredBy)
      );
    return projectSlackResponses.map(
      ProjectSlackApiResponse.fromProjectSlackResponse
    );
  }

  @Get('/:uuid')
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Get project slack by UUID')
  @Summary('Obtain project slack by UUID')
  @Description('Endpoint to obtain a project slack by UUID')
  @Returns(StatusCodes.OK, ProjectSlackApiResponse)
  @Status(StatusCodes.OK, ProjectSlackApiResponse)
  public async findProjectSlack(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy,
    @PathParams('uuid') uuid: string
  ): Promise<ProjectSlackApiResponse> {
    const projectSlackResponse = await this.findProjectSlackUseCase.execute(
      FindProjectSlackRequest.create(triggeredBy, uuid)
    );
    return ProjectSlackApiResponse.fromProjectSlackResponse(
      projectSlackResponse
    );
  }

  @Post('/')
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Add a new project slack')
  @Summary('Insert a new project slack')
  @Description('Endpoint to insert a new project slack')
  @Returns(StatusCodes.OK, ProjectSlackApiResponse)
  @Status(StatusCodes.OK, ProjectSlackApiResponse)
  public async addProjectSlack(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy,
    @Example('project') @BodyParams('name') _name: string
  ): Promise<ProjectSlackApiResponse[]> {
    const projectSlackResponses = await this.addProjectSlackUseCase.execute(
      AddProjectSlackRequest.create(triggeredBy)
    );
    return projectSlackResponses.map(
      ProjectSlackApiResponse.fromProjectSlackResponse
    );
  }
}

export { ProjectSlackController };

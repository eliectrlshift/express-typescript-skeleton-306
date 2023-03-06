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

import { ProjectGithubApiResponse } from './project-github.api-response';
import {
  AddProjectGithubUseCase,
  AddProjectGithubRequest,
} from '@application/projects-github/add';
import {
  FindProjectGithubUseCase,
  FindProjectGithubRequest,
} from '@application/projects-github/find';
import {
  SearchAllProjectGithubsUseCase,
  SearchAllProjectGithubsRequest,
} from '@application/projects-github/search-all';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';
import { AppConfig } from '@presentation/config';
import { RestController } from '@presentation/shared/rest-controller.decorator';
import { WithAuth } from '@presentation/shared/with-auth.decorator';

@RestController('/projects-github')
@Tags({ name: 'Project Github', description: 'Project Github management' })
class ProjectGithubController {
  private searchAllProjectGithubsUseCase: SearchAllProjectGithubsUseCase;

  private findProjectGithubUseCase: FindProjectGithubUseCase;

  private addProjectGithubUseCase: AddProjectGithubUseCase;

  constructor(
    searchAllProjectGithubsUseCase: SearchAllProjectGithubsUseCase,
    findProjectGithubUseCase: FindProjectGithubUseCase,
    addProjectGithubUseCase: AddProjectGithubUseCase
  ) {
    this.searchAllProjectGithubsUseCase = searchAllProjectGithubsUseCase;
    this.findProjectGithubUseCase = findProjectGithubUseCase;
    this.addProjectGithubUseCase = addProjectGithubUseCase;
  }

  @Get()
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Get all projects github')
  @Summary('Obtain all projects github')
  @Description('Endpoint to obtain all projects github')
  @Returns(StatusCodes.OK, Array).Of(ProjectGithubApiResponse)
  @Status(StatusCodes.OK, Array).Of(ProjectGithubApiResponse)
  public async searchAllProjectGithubs(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy
  ): Promise<ProjectGithubApiResponse[]> {
    const projectGithubResponses =
      await this.searchAllProjectGithubsUseCase.execute(
        SearchAllProjectGithubsRequest.create(triggeredBy)
      );
    return projectGithubResponses.map(
      ProjectGithubApiResponse.fromProjectGithubResponse
    );
  }

  @Get('/:uuid')
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Get project github by UUID')
  @Summary('Obtain project github by UUID')
  @Description('Endpoint to obtain a project github by UUID')
  @Returns(StatusCodes.OK, ProjectGithubApiResponse)
  @Status(StatusCodes.OK, ProjectGithubApiResponse)
  public async findProjectGithub(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy,
    @PathParams('uuid') uuid: string
  ): Promise<ProjectGithubApiResponse> {
    const projectGithubResponse = await this.findProjectGithubUseCase.execute(
      FindProjectGithubRequest.create(triggeredBy, uuid)
    );
    return ProjectGithubApiResponse.fromProjectGithubResponse(
      projectGithubResponse
    );
  }

  @Post('/')
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Add a new project github')
  @Summary('Insert a new project github')
  @Description('Endpoint to insert a new project github')
  @Returns(StatusCodes.OK, ProjectGithubApiResponse)
  @Status(StatusCodes.OK, ProjectGithubApiResponse)
  public async addProjectGithub(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy,
    @Example('project') @BodyParams('name') _name: string
  ): Promise<ProjectGithubApiResponse[]> {
    const projectGithubResponses = await this.addProjectGithubUseCase.execute(
      AddProjectGithubRequest.create(triggeredBy)
    );
    return projectGithubResponses.map(
      ProjectGithubApiResponse.fromProjectGithubResponse
    );
  }
}

export { ProjectGithubController };

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

import { ProjectApiResponse } from './project.api-response';
import {
  FindProjectUseCase,
  FindProjectRequest,
} from '@application/projects/find';
import {
  SearchAllProjectsUseCase,
  SearchAllProjectsRequest,
} from '@application/projects/search-all';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';
import { AppConfig } from '@presentation/config';
import { RestController } from '@presentation/shared/rest-controller.decorator';
import { WithAuth } from '@presentation/shared/with-auth.decorator';

@RestController('/projects')
@Tags({ name: 'Project', description: 'Project management' })
class ProjectController {
  private findProjectUseCase: FindProjectUseCase;

  private searchAllProjectsUseCase: SearchAllProjectsUseCase;

  constructor(
    findProjectUseCase: FindProjectUseCase,
    searchAllProjectsUseCase: SearchAllProjectsUseCase
  ) {
    this.findProjectUseCase = findProjectUseCase;
    this.searchAllProjectsUseCase = searchAllProjectsUseCase;
  }

  @Get()
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Get all projects')
  @Summary('Obtain all projects')
  @Description('Endpoint to obtain all projects')
  @Returns(StatusCodes.OK, Array).Of(ProjectApiResponse)
  @Status(StatusCodes.OK, Array).Of(ProjectApiResponse)
  public async searchAllProjects(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy
  ): Promise<ProjectApiResponse[]> {
    const projectResponses = await this.searchAllProjectsUseCase.execute(
      SearchAllProjectsRequest.create(triggeredBy)
    );
    return projectResponses.map(ProjectApiResponse.fromProjectResponse);
  }

  @Get('/:uuid')
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Get project by UUID')
  @Summary('Obtain project by UUID')
  @Description('Endpoint to obtain a project by UUID')
  @Returns(StatusCodes.OK, ProjectApiResponse)
  @Status(StatusCodes.OK, ProjectApiResponse)
  public async findProject(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy,
    @PathParams('uuid') uuid: string
  ): Promise<ProjectApiResponse> {
    const projectResponse = await this.findProjectUseCase.execute(
      FindProjectRequest.create(triggeredBy, uuid)
    );
    return ProjectApiResponse.fromProjectResponse(projectResponse);
  }
}

export { ProjectController };

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

import { ProjectDriveApiResponse } from './project-drive.api-response';
import {
  AddProjectDriveUseCase,
  AddProjectDriveRequest,
} from '@application/projects-drive/add';
import {
  FindProjectDriveUseCase,
  FindProjectDriveRequest,
} from '@application/projects-drive/find';
import {
  SearchAllProjectDrivesUseCase,
  SearchAllProjectDrivesRequest,
} from '@application/projects-drive/search-all';
import { TriggeredBy } from '@domain/shared/entities/triggered-by';
import { AppConfig } from '@presentation/config';
import { RestController } from '@presentation/shared/rest-controller.decorator';
import { WithAuth } from '@presentation/shared/with-auth.decorator';

@RestController('/projects-drive')
@Tags({ name: 'Project Drive', description: 'Project Drive management' })
class ProjectDriveController {
  private searchAllProjectDrivesUseCase: SearchAllProjectDrivesUseCase;

  private findProjectDriveUseCase: FindProjectDriveUseCase;

  private addProjectDriveUseCase: AddProjectDriveUseCase;

  constructor(
    searchAllProjectDrivesUseCase: SearchAllProjectDrivesUseCase,
    findProjectDriveUseCase: FindProjectDriveUseCase,
    addProjectDriveUseCase: AddProjectDriveUseCase
  ) {
    this.searchAllProjectDrivesUseCase = searchAllProjectDrivesUseCase;
    this.findProjectDriveUseCase = findProjectDriveUseCase;
    this.addProjectDriveUseCase = addProjectDriveUseCase;
  }

  @Get()
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Get all projects drive')
  @Summary('Obtain all projects drive')
  @Description('Endpoint to obtain all projects drive')
  @Returns(StatusCodes.OK, Array).Of(ProjectDriveApiResponse)
  @Status(StatusCodes.OK, Array).Of(ProjectDriveApiResponse)
  public async searchAllProjectDrives(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy
  ): Promise<ProjectDriveApiResponse[]> {
    const projectDriveResponses =
      await this.searchAllProjectDrivesUseCase.execute(
        SearchAllProjectDrivesRequest.create(triggeredBy)
      );
    return projectDriveResponses.map(
      ProjectDriveApiResponse.fromProjectDriveResponse
    );
  }

  @Get('/:uuid')
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Get project drive by UUID')
  @Summary('Obtain project drive by UUID')
  @Description('Endpoint to obtain a project drive by UUID')
  @Returns(StatusCodes.OK, ProjectDriveApiResponse)
  @Status(StatusCodes.OK, ProjectDriveApiResponse)
  public async findProjectDrive(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy,
    @PathParams('uuid') uuid: string
  ): Promise<ProjectDriveApiResponse> {
    const projectDriveResponse = await this.findProjectDriveUseCase.execute(
      FindProjectDriveRequest.create(triggeredBy, uuid)
    );
    return ProjectDriveApiResponse.fromProjectDriveResponse(
      projectDriveResponse
    );
  }

  @Post('/')
  @WithAuth({ roles: [Role.ADMIN] })
  @Title('Add a new project drive')
  @Summary('Insert a new project drive')
  @Description('Endpoint to insert a new project drive')
  @Returns(StatusCodes.OK, ProjectDriveApiResponse)
  @Status(StatusCodes.OK, ProjectDriveApiResponse)
  public async addProjectDrive(
    @Context(AppConfig.TRIGGERED_BY_CONTEXT_KEY) triggeredBy: TriggeredBy,
    @Example('project') @BodyParams('name') _name: string
  ): Promise<ProjectDriveApiResponse[]> {
    const projectDriveResponses = await this.addProjectDriveUseCase.execute(
      AddProjectDriveRequest.create(triggeredBy)
    );
    return projectDriveResponses.map(
      ProjectDriveApiResponse.fromProjectDriveResponse
    );
  }
}

export { ProjectDriveController };

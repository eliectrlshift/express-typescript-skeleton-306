import { FindProjectRequest } from './find-project.request';
import { ProjectResponse } from '@application/projects';
import { BaseUseCase, UseCase } from '@application/shared';
import {
  Project,
  ProjectRepository,
  ProjectNotExistsException,
  ProjectUuid,
} from '@domain/projects';
import { Nullable } from '@domain/shared';

@UseCase()
class FindProjectUseCase extends BaseUseCase<
  FindProjectRequest,
  ProjectResponse
> {
  private projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    super();
    this.projectRepository = projectRepository;
  }

  public async performOperation({
    uuid,
  }: FindProjectRequest): Promise<ProjectResponse> {
    const project = await this.projectRepository.findByUuid(
      new ProjectUuid(uuid)
    );

    this.ensureProjectExists(project, uuid);

    return ProjectResponse.fromDomainModel(project as Project);
  }

  private ensureProjectExists(project: Nullable<Project>, uuid: string): void {
    if (!project) {
      throw new ProjectNotExistsException(uuid);
    }
  }
}

export { FindProjectUseCase };

import { ProjectModel, ProjectsRepository } from '@tsed/prisma';
import { ProjectMapper } from './project.mapper';
import { ProjectSlug, ProjectUuid, ProjectRepository } from '@domain/projects';
import { Project } from '@domain/projects/project';
import { Nullable } from '@domain/shared';

import {
  BasePrismaRepository,
  RepositoryAction,
} from '@infrastructure/shared/persistence/base-prisma-repository';
import { Repository } from '@infrastructure/shared/persistence/repository.decorator';

@Repository(ProjectRepository)
class PrismaProjectRepository
  extends BasePrismaRepository<ProjectModel>
  implements ProjectRepository
{
  private projectsRepository: ProjectsRepository;

  constructor(projectsRepository: ProjectsRepository) {
    super();
    this.projectsRepository = projectsRepository;
  }

  public async findByUuid(uuid: ProjectUuid): Promise<Nullable<Project>> {
    const project = await this.projectsRepository.findFirst({
      where: { uuid: uuid.value, deletedAt: null },
    });

    return project ? ProjectMapper.toDomainModel(project) : null;
  }

  public async findBySlug(slug: ProjectSlug): Promise<Nullable<Project>> {
    const project = await this.projectsRepository.findFirst({
      where: { slug: slug.value, deletedAt: null },
    });

    return project ? ProjectMapper.toDomainModel(project) : null;
  }

  public async findAll(): Promise<Project[]> {
    const projects = await this.projectsRepository.findMany({
      where: { deletedAt: null },
    });

    return projects.map(ProjectMapper.toDomainModel);
  }

  public async create(project: Project): Promise<Project> {
    const createdProject = await this.projectsRepository.create({
      data: this.getAuditablePersitenceModel(
        RepositoryAction.CREATE,
        ProjectMapper.toPersistenceModel(project)
      ),
    });
    return ProjectMapper.toDomainModel(createdProject);
  }

  public async update(project: Project): Promise<Project> {
    const updatedProject = await this.projectsRepository.update({
      where: { uuid: project.uuid.value },
      data: this.getAuditablePersitenceModel(
        RepositoryAction.UPDATE,
        ProjectMapper.toPersistenceModel(project)
      ),
    });
    return ProjectMapper.toDomainModel(updatedProject);
  }

  public async delete(uuid: ProjectUuid): Promise<void> {
    await this.projectsRepository.update({
      where: { uuid: uuid.value },
      data: this.getAuditablePersitenceModel(RepositoryAction.DELETE),
    });
  }
}

export { PrismaProjectRepository };

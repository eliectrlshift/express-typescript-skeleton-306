import { ProjectGithubModel, ProjectGithubsRepository } from '@tsed/prisma';
import { ProjectGithubMapper } from './project-github.mapper';
import {
  ProjectGithub,
  ProjectGithubUuid,
  ProjectGithubRepository,
} from '@domain/projects-github';
import { Nullable } from '@domain/shared';

import {
  BasePrismaRepository,
  RepositoryAction,
} from '@infrastructure/shared/persistence/base-prisma-repository';
import { Repository } from '@infrastructure/shared/persistence/repository.decorator';

@Repository(ProjectGithubRepository)
class PrismaProjectGithubRepository
  extends BasePrismaRepository<ProjectGithubModel>
  implements ProjectGithubRepository
{
  private projectGithubsRepository: ProjectGithubsRepository;

  constructor(projectGithubsRepository: ProjectGithubsRepository) {
    super();
    this.projectGithubsRepository = projectGithubsRepository;
  }

  public async findByUuid(
    uuid: ProjectGithubUuid
  ): Promise<Nullable<ProjectGithub>> {
    const projectGithub = await this.projectGithubsRepository.findFirst({
      where: { uuid: uuid.value, deletedAt: null },
    });

    return projectGithub
      ? ProjectGithubMapper.toDomainModel(projectGithub)
      : null;
  }

  public async findAll(): Promise<ProjectGithub[]> {
    const projectGithubs = await this.projectGithubsRepository.findMany({
      where: { deletedAt: null },
    });

    return projectGithubs.map(ProjectGithubMapper.toDomainModel);
  }

  public async create(projectGithub: ProjectGithub): Promise<ProjectGithub> {
    const createdProjectGithub = await this.projectGithubsRepository.create({
      data: this.getAuditablePersitenceModel(
        RepositoryAction.CREATE,
        ProjectGithubMapper.toPersistenceModel(projectGithub)
      ),
    });
    return ProjectGithubMapper.toDomainModel(createdProjectGithub);
  }

  public async update(projectGithub: ProjectGithub): Promise<ProjectGithub> {
    const updatedProjectGithub = await this.projectGithubsRepository.update({
      where: { uuid: projectGithub.uuid.value },
      data: this.getAuditablePersitenceModel(
        RepositoryAction.UPDATE,
        ProjectGithubMapper.toPersistenceModel(projectGithub)
      ),
    });
    return ProjectGithubMapper.toDomainModel(updatedProjectGithub);
  }

  public async delete(uuid: ProjectGithubUuid): Promise<void> {
    await this.projectGithubsRepository.update({
      where: { uuid: uuid.value },
      data: this.getAuditablePersitenceModel(RepositoryAction.DELETE),
    });
  }
}

export { PrismaProjectGithubRepository };

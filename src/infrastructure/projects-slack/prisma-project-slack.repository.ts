import { ProjectSlackModel, ProjectSlacksRepository } from '@tsed/prisma';
import { ProjectSlackMapper } from './project-slack.mapper';

import {
  ProjectSlack,
  ProjectSlackUuid,
  ProjectSlackRepository,
} from '@domain/projects-slack';
import { Nullable } from '@domain/shared';
import {
  BasePrismaRepository,
  RepositoryAction,
} from '@infrastructure/shared/persistence/base-prisma-repository';
import { Repository } from '@infrastructure/shared/persistence/repository.decorator';

@Repository(ProjectSlackRepository)
class PrismaProjectSlackRepository
  extends BasePrismaRepository<ProjectSlackModel>
  implements ProjectSlackRepository
{
  private projectSlacksRepository: ProjectSlacksRepository;

  constructor(projectSlacksRepository: ProjectSlacksRepository) {
    super();
    this.projectSlacksRepository = projectSlacksRepository;
  }

  public async findByUuid(
    uuid: ProjectSlackUuid
  ): Promise<Nullable<ProjectSlack>> {
    const slackRepository = await this.projectSlacksRepository.findFirst({
      where: { uuid: uuid.value, deletedAt: null },
    });

    return slackRepository
      ? ProjectSlackMapper.toDomainModel(slackRepository)
      : null;
  }

  public async findAll(): Promise<ProjectSlack[]> {
    const projectSlacks = await this.projectSlacksRepository.findMany({
      where: { deletedAt: null },
    });

    return projectSlacks.map(ProjectSlackMapper.toDomainModel);
  }

  public async create(slackRepository: ProjectSlack): Promise<ProjectSlack> {
    const createdProjectSlack = await this.projectSlacksRepository.create({
      data: this.getAuditablePersitenceModel(
        RepositoryAction.CREATE,
        ProjectSlackMapper.toPersistenceModel(slackRepository)
      ),
    });
    return ProjectSlackMapper.toDomainModel(createdProjectSlack);
  }

  public async update(slackRepository: ProjectSlack): Promise<ProjectSlack> {
    const updatedProjectSlack = await this.projectSlacksRepository.update({
      where: { uuid: slackRepository.uuid.value },
      data: this.getAuditablePersitenceModel(
        RepositoryAction.UPDATE,
        ProjectSlackMapper.toPersistenceModel(slackRepository)
      ),
    });
    return ProjectSlackMapper.toDomainModel(updatedProjectSlack);
  }

  public async delete(uuid: ProjectSlackUuid): Promise<void> {
    await this.projectSlacksRepository.update({
      where: { uuid: uuid.value },
      data: this.getAuditablePersitenceModel(RepositoryAction.DELETE),
    });
  }
}

export { PrismaProjectSlackRepository };

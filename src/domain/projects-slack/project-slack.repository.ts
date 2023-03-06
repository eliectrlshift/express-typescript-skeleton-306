import { ProjectSlack } from './project-slack';
import { ProjectSlackUuid } from './project-slack-uuid';
import { Nullable } from '@domain/shared';

abstract class ProjectSlackRepository {
  public abstract findByUuid(
    uuid: ProjectSlackUuid
  ): Promise<Nullable<ProjectSlack>>;

  public abstract findAll(): Promise<ProjectSlack[]>;

  public abstract create(projectSlack: ProjectSlack): Promise<ProjectSlack>;

  public abstract update(projectSlack: ProjectSlack): Promise<ProjectSlack>;

  public abstract delete(projectSlack: ProjectSlackUuid): Promise<void>;
}

export { ProjectSlackRepository };

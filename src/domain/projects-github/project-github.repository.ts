import { ProjectGithub } from './project-github';
import { ProjectGithubUuid } from './project-github-uuid';
import { Nullable } from '@domain/shared';

abstract class ProjectGithubRepository {
  public abstract findByUuid(
    uuid: ProjectGithubUuid
  ): Promise<Nullable<ProjectGithub>>;

  public abstract findAll(): Promise<ProjectGithub[]>;

  public abstract create(projectGithub: ProjectGithub): Promise<ProjectGithub>;

  public abstract update(projectGithub: ProjectGithub): Promise<ProjectGithub>;

  public abstract delete(projectGithub: ProjectGithubUuid): Promise<void>;
}

export { ProjectGithubRepository };

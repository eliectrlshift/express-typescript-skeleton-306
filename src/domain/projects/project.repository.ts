import { Project } from './project';
import { ProjectSlug } from './project-slug';
import { ProjectUuid } from './project-uuid';
import { Nullable } from '@domain/shared';

abstract class ProjectRepository {
  public abstract findByUuid(uuid: ProjectUuid): Promise<Nullable<Project>>;

  public abstract findBySlug(slug: ProjectSlug): Promise<Nullable<Project>>;

  public abstract findAll(): Promise<Project[]>;

  public abstract create(user: Project): Promise<Project>;

  public abstract update(user: Project): Promise<Project>;

  public abstract delete(uuid: ProjectUuid): Promise<void>;
}

export { ProjectRepository };

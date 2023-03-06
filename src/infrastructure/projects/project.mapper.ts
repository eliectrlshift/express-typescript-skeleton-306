import { ProjectModel } from '@tsed/prisma';

import {
  Project,
  ProjectDescription,
  ProjectId,
  ProjectPrivateName,
  ProjectPublicName,
  ProjectSlug,
  ProjectUuid,
} from '@domain/projects';

class ProjectMapper {
  public static toDomainModel(projectPersistenceModel: ProjectModel): Project {
    return new Project(
      new ProjectId(projectPersistenceModel.id),
      new ProjectUuid(projectPersistenceModel.uuid),
      new ProjectPublicName(projectPersistenceModel.publicName),
      new ProjectPrivateName(projectPersistenceModel.privateName),
      new ProjectSlug(projectPersistenceModel.slug),
      new ProjectDescription(projectPersistenceModel.description)
    );
  }

  public static toPersistenceModel(project: Project): ProjectModel {
    const projectPersistenceModel = new ProjectModel();
    if (project.id != null) {
      projectPersistenceModel.id = project.id.value;
    }
    projectPersistenceModel.uuid = project.uuid.value;
    projectPersistenceModel.publicName = project.publicName.value;
    projectPersistenceModel.privateName = project.privateName.value;
    projectPersistenceModel.slug = project.slug.value;
    projectPersistenceModel.description = project.description.value;
    return projectPersistenceModel;
  }
}

export { ProjectMapper };

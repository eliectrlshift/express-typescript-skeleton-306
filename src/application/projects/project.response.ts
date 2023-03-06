import { Project } from '@domain/projects';

class ProjectResponse {
  readonly uuid: string;

  readonly publicName: string;

  readonly privateName: string;

  readonly slug: string;

  readonly description: string;

  constructor(
    uuid: string,
    publicName: string,
    privateName: string,
    slug: string,
    description: string
  ) {
    this.uuid = uuid;
    this.publicName = publicName;
    this.privateName = privateName;
    this.slug = slug;
    this.description = description;
  }

  public static fromDomainModel(project: Project): ProjectResponse {
    return new ProjectResponse(
      project.uuid.value,
      project.publicName.value,
      project.privateName.value,
      project.slug.value,
      project.description.value
    );
  }
}

export { ProjectResponse };

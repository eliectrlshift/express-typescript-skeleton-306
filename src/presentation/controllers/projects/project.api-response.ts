import { Property } from '@tsed/schema';

import { ProjectResponse } from '@application/projects';

class ProjectApiResponse {
  @Property()
  readonly uuid: string;

  @Property()
  readonly publicName: string;

  @Property()
  readonly privateName: string;

  @Property()
  readonly slug: string;

  @Property()
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

  public static fromProjectResponse(
    project: ProjectResponse
  ): ProjectApiResponse {
    return new ProjectApiResponse(
      project.uuid,
      project.publicName,
      project.privateName,
      project.slug,
      project.description
    );
  }
}

export { ProjectApiResponse };

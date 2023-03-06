import { ProjectDescription } from './project-description';
import { ProjectId } from './project-id';
import { ProjectPrivateName } from './project-private-name';
import { ProjectPublicName } from './project-public-name';
import { ProjectSlug } from './project-slug';
import { ProjectUuid } from './project-uuid';
import { Nullable } from '@domain/shared';
import { DomainEntity } from '@domain/shared/entities';

interface ProjectFlattened {
  id: Nullable<number>;
  uuid: string;
  publicName: string;
  privateName: string;
  slug: string;
  description: string;
}

class Project extends DomainEntity {
  id: Nullable<ProjectId>;

  uuid: ProjectUuid;

  publicName: ProjectPublicName;

  privateName: ProjectPrivateName;

  slug: ProjectSlug;

  description: ProjectDescription;

  constructor(
    id: Nullable<ProjectId>,
    uuid: ProjectUuid,
    publicName: ProjectPublicName,
    privateName: ProjectPrivateName,
    slug: ProjectSlug,
    description: ProjectDescription
  ) {
    super();
    this.id = id;
    this.uuid = uuid;
    this.publicName = publicName;
    this.privateName = privateName;
    this.slug = slug;
    this.description = description;
  }

  public static create(
    uuid: ProjectUuid,
    publicName: ProjectPublicName,
    privateName: ProjectPrivateName,
    slug: ProjectSlug,
    description: ProjectDescription
  ): Project {
    return new Project(
      undefined,
      uuid,
      publicName,
      privateName,
      slug,
      description
    );
  }

  public flat(): ProjectFlattened {
    return {
      id: this.id?.value,
      uuid: this.uuid.value,
      publicName: this.publicName.value,
      privateName: this.privateName.value,
      slug: this.slug.value,
      description: this.description.value,
    };
  }
}

export { Project, ProjectFlattened };

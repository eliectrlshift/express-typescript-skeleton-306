import { RestEndpointMethodTypes } from '@octokit/rest';
import { ProjectGithub } from '@domain/projects-github';

abstract class RepositoriesApiDomainService {
  public abstract list(): Promise<
    RestEndpointMethodTypes['repos']['listForOrg']['response']
  >;
  public abstract create(): any;
  public abstract toDomainEntity(data: any): Promise<ProjectGithub>;
}

export { RepositoriesApiDomainService };

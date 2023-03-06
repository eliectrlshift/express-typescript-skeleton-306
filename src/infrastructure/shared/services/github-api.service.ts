import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';
import {
  ProjectGithub,
  ProjectGithubUuid,
  ProjectGithubName,
  ProjectGithubFullName,
  ProjectGithubDescription,
  ProjectGithubForksUrl,
  ProjectGithubKeysUrl,
  ProjectGithubCollaboratorsUrl,
  ProjectGithubTeamsUrl,
  ProjectGithubHooksUrl,
  ProjectGithubIssueEventsUrl,
  ProjectGithubEventsUrl,
  ProjectGithubAssigneesUrl,
  ProjectGithubBranchesUrl,
  ProjectGithubTagsUrl,
  ProjectGithubBlobsUrl,
  ProjectGithubGitTagsUrl,
  ProjectGithubGitRefsUrl,
  ProjectGithubTreesUrl,
  ProjectGithubStatusesUrl,
  ProjectGithubLanguagesUrl,
  ProjectGithubStargazersUrl,
  ProjectGithubContributorsUrl,
  ProjectGithubSubscribersUrl,
  ProjectGithubSubscriptionUrl,
  ProjectGithubCommitsUrl,
  ProjectGithubGitCommitsUrl,
  ProjectGithubCommentsUrl,
  ProjectGithubIssueCommentUrl,
  ProjectGithubContentsUrl,
  ProjectGithubCompareUrl,
  ProjectGithubMergesUrl,
  ProjectGithubArchiveUrl,
  ProjectGithubDownloadsUrl,
  ProjectGithubIssuesUrl,
  ProjectGithubPullsUrl,
  ProjectGithubMilestonesUrl,
  ProjectGithubNotificationsUrl,
  ProjectGithubLabelsUrl,
  ProjectGithubReleasesUrl,
  ProjectGithubDeploymentsUrl,
  ProjectGithubGitUrl,
  ProjectGithubSshUrl,
  ProjectGithubCloneUrl,
  ProjectGithubSvnUrl,
  ProjectGithubHomepage,
  ProjectGithubSize,
  ProjectGithubStargazersCount,
  ProjectGithubWatchersCount,
  ProjectGithubLanguage,
  ProjectGithubMirrorUrl,
  ProjectGithubLicense,
  ProjectGithubForks,
  ProjectGithubOpenIssues,
  ProjectGithubWatchers,
  ProjectGithubDefaultBranch,
  ProjectGithubOpenIssuesCount,
  ProjectGithubNodeId,
  ProjectGithubUrl,
  ProjectGithubForksCount,
  ProjectGithubVisibility,
  ProjectGithubRepositoryId,
  ProjectGithubRepositoryUpdatedAt,
  ProjectGithubRepositoryPushedAt,
  ProjectGithubRepositoryCreatedAt,
} from '@domain/projects-github';
import { RepositoriesApiDomainService } from '@domain/shared/services/repositories-api.domain-service';
import { InfrastructureService } from '@infrastructure/shared/infrastructure-service.decorator';

@InfrastructureService(RepositoriesApiDomainService)
class GithubApiService extends RepositoriesApiDomainService {
  private readonly client: Octokit = new Octokit({
    auth: 'token',
  });

  list = async (): Promise<
    RestEndpointMethodTypes['repos']['listForOrg']['response']
  > => this.client.rest.repos.listForOrg({ org: 'value' });

  create = async () => this.client.rest.repos.createInOrg();

  toDomainEntity = async (data: any): Promise<ProjectGithub> =>
    new ProjectGithub(
      undefined,
      ProjectGithubUuid.random(),
      new ProjectGithubRepositoryId(data.id),
      new ProjectGithubNodeId(data.node_id),
      new ProjectGithubName(data.name),
      new ProjectGithubFullName(data.full_name),
      data.private,
      new ProjectGithubGitUrl(data.html_url),
      data.description ? new ProjectGithubDescription(data.description) : null,
      data.fork,
      new ProjectGithubUrl(data.url),
      new ProjectGithubForksUrl(data.forks_url),
      new ProjectGithubKeysUrl(data.keys_url),
      new ProjectGithubCollaboratorsUrl(data.collaborators_url),
      new ProjectGithubTeamsUrl(data.teams_url),
      new ProjectGithubHooksUrl(data.hooks_url),
      new ProjectGithubIssueEventsUrl(data.issue_events_url),
      new ProjectGithubEventsUrl(data.events_url),
      new ProjectGithubAssigneesUrl(data.assignees_url),
      new ProjectGithubBranchesUrl(data.branches_url),
      new ProjectGithubTagsUrl(data.tags_url),
      new ProjectGithubBlobsUrl(data.blobs_url),
      new ProjectGithubGitTagsUrl(data.git_tags_url),
      new ProjectGithubGitRefsUrl(data.git_refs_url),
      new ProjectGithubTreesUrl(data.trees_url),
      new ProjectGithubStatusesUrl(data.statuses_url),
      new ProjectGithubLanguagesUrl(data.languages_url),
      new ProjectGithubStargazersUrl(data.stargazers_url),
      new ProjectGithubContributorsUrl(data.contributors_url),
      new ProjectGithubSubscribersUrl(data.subscribers_url),
      new ProjectGithubSubscriptionUrl(data.subscription_url),
      new ProjectGithubCommitsUrl(data.commits_url),
      new ProjectGithubGitCommitsUrl(data.git_commits_url),
      new ProjectGithubCommentsUrl(data.comments_url),
      new ProjectGithubIssueCommentUrl(data.issue_comment_url),
      new ProjectGithubContentsUrl(data.contents_url),
      new ProjectGithubCompareUrl(data.compare_url),
      new ProjectGithubMergesUrl(data.merges_url),
      new ProjectGithubArchiveUrl(data.archive_url),
      new ProjectGithubDownloadsUrl(data.downloads_url),
      new ProjectGithubIssuesUrl(data.issues_url),
      new ProjectGithubPullsUrl(data.pulls_url),
      new ProjectGithubMilestonesUrl(data.milestones_url),
      new ProjectGithubNotificationsUrl(data.notifications_url),
      new ProjectGithubLabelsUrl(data.labels_url),
      new ProjectGithubReleasesUrl(data.releases_url),
      new ProjectGithubDeploymentsUrl(data.deployments_url),
      data.git_url ? new ProjectGithubGitUrl(data.git_url) : null,
      data.ssh_url ? new ProjectGithubSshUrl(data.ssh_url) : null,
      data.clone_url ? new ProjectGithubCloneUrl(data.clone_url) : null,
      data.svn_url ? new ProjectGithubSvnUrl(data.svn_url) : null,
      data.homepage ? new ProjectGithubHomepage(data.homepage) : null,
      data.size ? new ProjectGithubSize(data.size) : null,
      data.stargazers_count
        ? new ProjectGithubStargazersCount(data.stargazers_count)
        : null,
      data.watchers_count
        ? new ProjectGithubWatchersCount(data.watchers_count)
        : null,
      data.language ? new ProjectGithubLanguage(data.language) : null,
      data.has_issues != undefined ? data.has_issues : null,
      data.has_projects != undefined ? data.has_projects : null,
      data.has_downloads != undefined ? data.has_downloads : null,
      data.has_wiki != undefined ? data.has_wiki : null,
      data.has_pages != undefined ? data.has_pages : null,
      data.forks_count ? new ProjectGithubForksCount(data.forks_count) : null,
      data.mirror_url ? new ProjectGithubMirrorUrl(data.mirror_url) : null,
      data.archived != undefined ? data.archived : null,
      data.disabled != undefined ? data.disabled : null,
      data.open_issues_count
        ? new ProjectGithubOpenIssuesCount(data.open_issues_count)
        : null,
      // Hack for not having full Licence object
      data.license && data.license.name
        ? new ProjectGithubLicense(data.license.name)
        : null,
      data.allow_forking != undefined ? data.allow_forking : null,
      data.is_template != undefined ? data.is_template : null,
      data.web_commit_signoff_required != undefined
        ? data.web_commit_signoff_required
        : null,
      data.visibility ? new ProjectGithubVisibility(data.visibility) : null,
      data.forks ? new ProjectGithubForks(data.forks) : null,
      data.open_issues ? new ProjectGithubOpenIssues(data.open_issues) : null,
      data.watchers ? new ProjectGithubWatchers(data.watchers) : null,
      data.default_branch
        ? new ProjectGithubDefaultBranch(data.default_branch)
        : null,
      // Hack for not having fuill permissions object
      data.permissions && data.permissions.admin != undefined
        ? data.permissions.admin
        : null,
      data.permissions && data.permissions.maintain != undefined
        ? data.permissions.maintain
        : null,
      data.permissions && data.permissions.push != undefined
        ? data.permissions.push
        : null,
      data.permissions && data.permissions.triage != undefined
        ? data.permissions.triage
        : null,
      data.permissions && data.permissions.pull != undefined
        ? data.permissions.pull
        : null,
      data.created_at
        ? new ProjectGithubRepositoryCreatedAt(new Date(data.created_at))
        : null,
      data.updated_at
        ? new ProjectGithubRepositoryUpdatedAt(new Date(data.updated_at))
        : null,
      data.pushed_at
        ? new ProjectGithubRepositoryPushedAt(new Date(data.pushed_at))
        : null
    );
}

export { GithubApiService };

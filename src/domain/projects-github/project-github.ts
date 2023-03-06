import { ProjectGithubArchiveUrl } from './project-github-archive-url';
import { ProjectGithubAssigneesUrl } from './project-github-assignees-url';
import { ProjectGithubBlobsUrl } from './project-github-blobs-url';
import { ProjectGithubBranchesUrl } from './project-github-branches-url';
import { ProjectGithubCloneUrl } from './project-github-clone-url';
import { ProjectGithubCollaboratorsUrl } from './project-github-collaborators-url';
import { ProjectGithubCommentsUrl } from './project-github-comments-url';
import { ProjectGithubCommitsUrl } from './project-github-commits-url';
import { ProjectGithubCompareUrl } from './project-github-compare-url';
import { ProjectGithubContentsUrl } from './project-github-contents-url';
import { ProjectGithubContributorsUrl } from './project-github-contributors-url';
import { ProjectGithubDefaultBranch } from './project-github-default-branch';
import { ProjectGithubDeploymentsUrl } from './project-github-deployments-url';
import { ProjectGithubDescription } from './project-github-description';
import { ProjectGithubDownloadsUrl } from './project-github-downloads-url';
import { ProjectGithubEventsUrl } from './project-github-events-url';
import { ProjectGithubForksCount } from './project-github-forks-count';
import { ProjectGithubForksUrl } from './project-github-forks-url';
import { ProjectGithubFullName } from './project-github-full-name';
import { ProjectGithubGitCommitsUrl } from './project-github-git-commits-url';
import { ProjectGithubGitRefsUrl } from './project-github-git-refs-url';
import { ProjectGithubGitTagsUrl } from './project-github-git-tags-url';
import { ProjectGithubGitUrl } from './project-github-git-url';
import { ProjectGithubHomepage } from './project-github-homepage';
import { ProjectGithubHooksUrl } from './project-github-hooks-url';
import { ProjectGithubHtmlUrl } from './project-github-html-url';
import { ProjectGithubId } from './project-github-id';
import { ProjectGithubIssueCommentUrl } from './project-github-issue-comment-url';
import { ProjectGithubIssueEventsUrl } from './project-github-issue-events-url';
import { ProjectGithubIssuesUrl } from './project-github-issues-url';
import { ProjectGithubKeysUrl } from './project-github-keys-url';
import { ProjectGithubLabelsUrl } from './project-github-labels-url';
import { ProjectGithubLanguage } from './project-github-language';
import { ProjectGithubLanguagesUrl } from './project-github-languages-url';
import { ProjectGithubLicense } from './project-github-license';
import { ProjectGithubMergesUrl } from './project-github-merges-url';
import { ProjectGithubMilestonesUrl } from './project-github-milestones-url';
import { ProjectGithubMirrorUrl } from './project-github-mirror-url';
import { ProjectGithubName } from './project-github-name';
import { ProjectGithubNodeId } from './project-github-node-id';
import { ProjectGithubNotificationsUrl } from './project-github-notifications-url';
import { ProjectGithubOpenIssues } from './project-github-open-issues';
import { ProjectGithubOpenIssuesCount } from './project-github-open-issues-count';
import { ProjectGithubPullsUrl } from './project-github-pulls-url';
import { ProjectGithubReleasesUrl } from './project-github-releases-url';
import { ProjectGithubRepositoryCreatedAt } from './project-github-repository-created-at';
import { ProjectGithubRepositoryId } from './project-github-repository-id';
import { ProjectGithubRepositoryPushedAt } from './project-github-repository-pushed-at';
import { ProjectGithubRepositoryUpdatedAt } from './project-github-repository-updated-at';
import { ProjectGithubSize } from './project-github-size';
import { ProjectGithubSshUrl } from './project-github-ssh-url';
import { ProjectGithubStargazersCount } from './project-github-stargazers-count';
import { ProjectGithubStargazersUrl } from './project-github-stargazers-url';
import { ProjectGithubStatusesUrl } from './project-github-statuses-url';
import { ProjectGithubSubscribersUrl } from './project-github-subscribers-url';
import { ProjectGithubSubscriptionUrl } from './project-github-subscription-url';
import { ProjectGithubSvnUrl } from './project-github-svn-url';
import { ProjectGithubTagsUrl } from './project-github-tags-url';
import { ProjectGithubTeamsUrl } from './project-github-teams-url';
import { ProjectGithubTreesUrl } from './project-github-trees-url';
import { ProjectGithubUrl } from './project-github-url';
import { ProjectGithubUuid } from './project-github-uuid';
import { ProjectGithubVisibility } from './project-github-visibility';
import { ProjectGithubWatchers } from './project-github-watchers';
import { ProjectGithubWatchersCount } from './project-github-watchers-count';
import { Nullable } from '@domain/shared';
import { DomainEntity } from '@domain/shared/entities';

interface ProjectGithubFlattened {
  id: Nullable<number>;
  uuid: string;
  repositoryid: number;
  nodeid: string;
  name: string;
  fullName: string;
  private: boolean;
  htmlUrl: string;
  description: Nullable<string>;
  fork: boolean;
  url: string;
  forksUrl: string;
  keysUrl: string;
  collaboratorsUrl: string;
  teamsUrl: string;
  hooksUrl: string;
  issueEventsUrl: string;
  eventsUrl: string;
  assigneesUrl: string;
  branchesUrl: string;
  tagsUrl: string;
  blobsUrl: string;
  gitTagsUrl: string;
  gitRefsUrl: string;
  treesUrl: string;
  statusesUrl: string;
  languagesUrl: string;
  stargazersUrl: string;
  contributorsUrl: string;
  subscribersUrl: string;
  subscriptionUrl: string;
  commitsUrl: string;
  gitCommitsUrl: string;
  commentsUrl: string;
  issueCommentUrl: string;
  contentsUrl: string;
  compareUrl: string;
  mergesUrl: string;
  archiveUrl: string;
  downloadsUrl: string;
  issuesUrl: string;
  pullsUrl: string;
  milestonesUrl: string;
  notificationsUrl: string;
  labelsUrl: string;
  releasesUrl: string;
  deploymentsUrl: string;
  gitUrl: Nullable<string>;
  sshUrl: Nullable<string>;
  cloneUrl: Nullable<string>;
  svnUrl: Nullable<string>;
  homepage: Nullable<string>;
  size: Nullable<number>;
  stargazersCount: Nullable<number>;
  watchersCount: Nullable<number>;
  language: Nullable<string>;
  hasIssues: Nullable<boolean>;
  hasProjects: Nullable<boolean>;
  hasDownloads: Nullable<boolean>;
  hasWiki: Nullable<boolean>;
  hasPages: Nullable<boolean>;
  forksCount: Nullable<number>;
  mirrorUrl: Nullable<string>;
  archived: Nullable<boolean>;
  disabled: Nullable<boolean>;
  openIssuesCount: Nullable<number>;
  license: Nullable<string>;
  allowForking: Nullable<boolean>;
  isTemplate: Nullable<boolean>;
  webCommitSignoffRequired: Nullable<boolean>;
  visibility: Nullable<string>;
  forks: Nullable<number>;
  openIssues: Nullable<number>;
  watchers: Nullable<number>;
  defaultBranch: Nullable<string>;
  permissionsAdmin: Nullable<boolean>;
  permissionsMaintain: Nullable<boolean>;
  permissionsPush: Nullable<boolean>;
  permissionsTriage: Nullable<boolean>;
  permissionsPull: Nullable<boolean>;
  repositoryCreatedAt: Nullable<Date>;
  repositoryUpdatedAt: Nullable<Date>;
  repositoryPushedAt: Nullable<Date>;
}

class ProjectGithub extends DomainEntity {
  id: Nullable<ProjectGithubId>;

  uuid: ProjectGithubUuid;

  repositoryid: ProjectGithubRepositoryId;

  nodeid: ProjectGithubNodeId;

  name: ProjectGithubName;

  fullName: ProjectGithubFullName;

  private: boolean;

  htmlUrl: ProjectGithubHtmlUrl;

  description: Nullable<ProjectGithubDescription>;

  fork: boolean;

  url: ProjectGithubUrl;

  forksUrl: ProjectGithubForksUrl;

  keysUrl: ProjectGithubKeysUrl;

  collaboratorsUrl: ProjectGithubCollaboratorsUrl;

  teamsUrl: ProjectGithubTeamsUrl;

  hooksUrl: ProjectGithubHooksUrl;

  issueEventsUrl: ProjectGithubIssueEventsUrl;

  eventsUrl: ProjectGithubEventsUrl;

  assigneesUrl: ProjectGithubAssigneesUrl;

  branchesUrl: ProjectGithubBranchesUrl;

  tagsUrl: ProjectGithubTagsUrl;

  blobsUrl: ProjectGithubBlobsUrl;

  gitTagsUrl: ProjectGithubGitTagsUrl;

  gitRefsUrl: ProjectGithubGitRefsUrl;

  treesUrl: ProjectGithubTreesUrl;

  statusesUrl: ProjectGithubStatusesUrl;

  languagesUrl: ProjectGithubLanguagesUrl;

  stargazersUrl: ProjectGithubStargazersUrl;

  contributorsUrl: ProjectGithubContributorsUrl;

  subscribersUrl: ProjectGithubSubscribersUrl;

  subscriptionUrl: ProjectGithubSubscriptionUrl;

  commitsUrl: ProjectGithubCommitsUrl;

  gitCommitsUrl: ProjectGithubGitCommitsUrl;

  commentsUrl: ProjectGithubCommentsUrl;

  issueCommentUrl: ProjectGithubIssueCommentUrl;

  contentsUrl: ProjectGithubContentsUrl;

  compareUrl: ProjectGithubCompareUrl;

  mergesUrl: ProjectGithubMergesUrl;

  archiveUrl: ProjectGithubArchiveUrl;

  downloadsUrl: ProjectGithubDownloadsUrl;

  issuesUrl: ProjectGithubIssuesUrl;

  pullsUrl: ProjectGithubPullsUrl;

  milestonesUrl: ProjectGithubMilestonesUrl;

  notificationsUrl: ProjectGithubNotificationsUrl;

  labelsUrl: ProjectGithubLabelsUrl;

  releasesUrl: ProjectGithubReleasesUrl;

  deploymentsUrl: ProjectGithubDeploymentsUrl;

  gitUrl: Nullable<ProjectGithubGitUrl>;

  sshUrl: Nullable<ProjectGithubSshUrl>;

  cloneUrl: Nullable<ProjectGithubCloneUrl>;

  svnUrl: Nullable<ProjectGithubSvnUrl>;

  homepage: Nullable<ProjectGithubHomepage>;

  size: Nullable<ProjectGithubSize>;

  stargazersCount: Nullable<ProjectGithubStargazersCount>;

  watchersCount: Nullable<ProjectGithubWatchersCount>;

  language: Nullable<ProjectGithubLanguage>;

  hasIssues: Nullable<boolean>;

  hasProjects: Nullable<boolean>;

  hasDownloads: Nullable<boolean>;

  hasWiki: Nullable<boolean>;

  hasPages: Nullable<boolean>;

  forksCount: Nullable<ProjectGithubForksCount>;

  mirrorUrl: Nullable<ProjectGithubMirrorUrl>;

  archived: Nullable<boolean>;

  disabled: Nullable<boolean>;

  openIssuesCount: Nullable<ProjectGithubOpenIssuesCount>;

  license: Nullable<ProjectGithubLicense>;

  allowForking: Nullable<boolean>;

  isTemplate: Nullable<boolean>;

  webCommitSignoffRequired: Nullable<boolean>;

  visibility: Nullable<ProjectGithubVisibility>;

  forks: Nullable<ProjectGithubForksCount>;

  openIssues: Nullable<ProjectGithubOpenIssues>;

  watchers: Nullable<ProjectGithubWatchers>;

  defaultBranch: Nullable<ProjectGithubDefaultBranch>;

  permissionsAdmin: Nullable<boolean>;

  permissionsMaintain: Nullable<boolean>;

  permissionsPush: Nullable<boolean>;

  permissionsTriage: Nullable<boolean>;

  permissionsPull: Nullable<boolean>;

  repositoryCreatedAt: Nullable<ProjectGithubRepositoryCreatedAt>;

  repositoryUpdatedAt: Nullable<ProjectGithubRepositoryUpdatedAt>;

  repositoryPushedAt: Nullable<ProjectGithubRepositoryPushedAt>;

  constructor(
    id: Nullable<ProjectGithubId>,
    uuid: ProjectGithubUuid,
    repositoryid: ProjectGithubRepositoryId,
    nodeid: ProjectGithubNodeId,
    name: ProjectGithubName,
    fullName: ProjectGithubFullName,
    _private: boolean,
    htmlUrl: ProjectGithubHtmlUrl,
    description: Nullable<ProjectGithubDescription>,
    fork: boolean,
    url: ProjectGithubUrl,
    forksUrl: ProjectGithubForksUrl,
    keysUrl: ProjectGithubKeysUrl,
    collaboratorsUrl: ProjectGithubCollaboratorsUrl,
    teamsUrl: ProjectGithubTeamsUrl,
    hooksUrl: ProjectGithubHooksUrl,
    issueEventsUrl: ProjectGithubIssueEventsUrl,
    eventsUrl: ProjectGithubEventsUrl,
    assigneesUrl: ProjectGithubAssigneesUrl,
    branchesUrl: ProjectGithubBranchesUrl,
    tagsUrl: ProjectGithubTagsUrl,
    blobsUrl: ProjectGithubBlobsUrl,
    gitTagsUrl: ProjectGithubGitTagsUrl,
    gitRefsUrl: ProjectGithubGitRefsUrl,
    treesUrl: ProjectGithubTreesUrl,
    statusesUrl: ProjectGithubStatusesUrl,
    languagesUrl: ProjectGithubLanguagesUrl,
    stargazersUrl: ProjectGithubStargazersUrl,
    contributorsUrl: ProjectGithubContributorsUrl,
    subscribersUrl: ProjectGithubSubscribersUrl,
    subscriptionUrl: ProjectGithubSubscriptionUrl,
    commitsUrl: ProjectGithubCommitsUrl,
    gitCommitsUrl: ProjectGithubGitCommitsUrl,
    commentsUrl: ProjectGithubCommentsUrl,
    issueCommentUrl: ProjectGithubIssueCommentUrl,
    contentsUrl: ProjectGithubContentsUrl,
    compareUrl: ProjectGithubCompareUrl,
    mergesUrl: ProjectGithubMergesUrl,
    archiveUrl: ProjectGithubArchiveUrl,
    downloadsUrl: ProjectGithubDownloadsUrl,
    issuesUrl: ProjectGithubIssuesUrl,
    pullsUrl: ProjectGithubPullsUrl,
    milestonesUrl: ProjectGithubMilestonesUrl,
    notificationsUrl: ProjectGithubNotificationsUrl,
    labelsUrl: ProjectGithubLabelsUrl,
    releasesUrl: ProjectGithubReleasesUrl,
    deploymentsUrl: ProjectGithubDeploymentsUrl,
    gitUrl: Nullable<ProjectGithubGitUrl>,
    sshUrl: Nullable<ProjectGithubSshUrl>,
    cloneUrl: Nullable<ProjectGithubCloneUrl>,
    svnUrl: Nullable<ProjectGithubSvnUrl>,
    homepage: Nullable<ProjectGithubHomepage>,
    size: Nullable<ProjectGithubSize>,
    stargazersCount: Nullable<ProjectGithubStargazersCount>,
    watchersCount: Nullable<ProjectGithubWatchersCount>,
    language: Nullable<ProjectGithubLanguage>,
    hasIssues: Nullable<boolean>,
    hasProjects: Nullable<boolean>,
    hasDownloads: Nullable<boolean>,
    hasWiki: Nullable<boolean>,
    hasPages: Nullable<boolean>,
    forksCount: Nullable<ProjectGithubForksCount>,
    mirrorUrl: Nullable<ProjectGithubMirrorUrl>,
    archived: Nullable<boolean>,
    disabled: Nullable<boolean>,
    openIssuesCount: Nullable<ProjectGithubOpenIssuesCount>,
    license: Nullable<ProjectGithubLicense>,
    allowForking: Nullable<boolean>,
    isTemplate: Nullable<boolean>,
    webCommitSignoffRequired: Nullable<boolean>,
    visibility: Nullable<ProjectGithubVisibility>,
    forks: Nullable<ProjectGithubForksCount>,
    openIssues: Nullable<ProjectGithubOpenIssues>,
    watchers: Nullable<ProjectGithubWatchers>,
    defaultBranch: Nullable<ProjectGithubDefaultBranch>,
    permissionsAdmin: Nullable<boolean>,
    permissionsMaintain: Nullable<boolean>,
    permissionsPush: Nullable<boolean>,
    permissionsTriage: Nullable<boolean>,
    permissionsPull: Nullable<boolean>,
    repositoryCreatedAt: Nullable<ProjectGithubRepositoryCreatedAt>,
    repositoryUpdatedAt: Nullable<ProjectGithubRepositoryUpdatedAt>,
    repositoryPushedAt: Nullable<ProjectGithubRepositoryPushedAt>
  ) {
    super();
    this.id = id;
    this.uuid = uuid;
    this.repositoryid = repositoryid;
    this.nodeid = nodeid;
    this.name = name;
    this.fullName = fullName;
    this.private = _private;
    this.htmlUrl = htmlUrl;
    this.description = description;
    this.fork = fork;
    this.url = url;
    this.forksUrl = forksUrl;
    this.keysUrl = keysUrl;
    this.collaboratorsUrl = collaboratorsUrl;
    this.teamsUrl = teamsUrl;
    this.hooksUrl = hooksUrl;
    this.issueEventsUrl = issueEventsUrl;
    this.eventsUrl = eventsUrl;
    this.assigneesUrl = assigneesUrl;
    this.branchesUrl = branchesUrl;
    this.tagsUrl = tagsUrl;
    this.blobsUrl = blobsUrl;
    this.gitTagsUrl = gitTagsUrl;
    this.gitRefsUrl = gitRefsUrl;
    this.treesUrl = treesUrl;
    this.statusesUrl = statusesUrl;
    this.languagesUrl = languagesUrl;
    this.stargazersUrl = stargazersUrl;
    this.contributorsUrl = contributorsUrl;
    this.subscribersUrl = subscribersUrl;
    this.subscriptionUrl = subscriptionUrl;
    this.commitsUrl = commitsUrl;
    this.gitCommitsUrl = gitCommitsUrl;
    this.commentsUrl = commentsUrl;
    this.issueCommentUrl = issueCommentUrl;
    this.contentsUrl = contentsUrl;
    this.compareUrl = compareUrl;
    this.mergesUrl = mergesUrl;
    this.archiveUrl = archiveUrl;
    this.downloadsUrl = downloadsUrl;
    this.issuesUrl = issuesUrl;
    this.pullsUrl = pullsUrl;
    this.milestonesUrl = milestonesUrl;
    this.notificationsUrl = notificationsUrl;
    this.labelsUrl = labelsUrl;
    this.releasesUrl = releasesUrl;
    this.deploymentsUrl = deploymentsUrl;
    this.gitUrl = gitUrl;
    this.sshUrl = sshUrl;
    this.cloneUrl = cloneUrl;
    this.svnUrl = svnUrl;
    this.homepage = homepage;
    this.size = size;
    this.stargazersCount = stargazersCount;
    this.watchersCount = watchersCount;
    this.language = language;
    this.hasIssues = hasIssues;
    this.hasProjects = hasProjects;
    this.hasDownloads = hasDownloads;
    this.hasWiki = hasWiki;
    this.hasPages = hasPages;
    this.forksCount = forksCount;
    this.mirrorUrl = mirrorUrl;
    this.archived = archived;
    this.disabled = disabled;
    this.openIssuesCount = openIssuesCount;
    this.license = license;
    this.allowForking = allowForking;
    this.isTemplate = isTemplate;
    this.webCommitSignoffRequired = webCommitSignoffRequired;
    this.visibility = visibility;
    this.forks = forks;
    this.openIssues = openIssues;
    this.watchers = watchers;
    this.defaultBranch = defaultBranch;
    this.permissionsAdmin = permissionsAdmin;
    this.permissionsMaintain = permissionsMaintain;
    this.permissionsPush = permissionsPush;
    this.permissionsTriage = permissionsTriage;
    this.permissionsPull = permissionsPull;
    this.repositoryCreatedAt = repositoryCreatedAt;
    this.repositoryUpdatedAt = repositoryUpdatedAt;
    this.repositoryPushedAt = repositoryPushedAt;
  }

  public static create(
    uuid: ProjectGithubUuid,
    repositoryid: ProjectGithubRepositoryId,
    nodeid: ProjectGithubNodeId,
    name: ProjectGithubName,
    fullName: ProjectGithubFullName,
    _private: boolean,
    htmlUrl: ProjectGithubHtmlUrl,
    description: Nullable<ProjectGithubDescription>,
    fork: boolean,
    url: ProjectGithubUrl,
    forksUrl: ProjectGithubForksUrl,
    keysUrl: ProjectGithubKeysUrl,
    collaboratorsUrl: ProjectGithubCollaboratorsUrl,
    teamsUrl: ProjectGithubTeamsUrl,
    hooksUrl: ProjectGithubHooksUrl,
    issueEventsUrl: ProjectGithubIssueEventsUrl,
    eventsUrl: ProjectGithubEventsUrl,
    assigneesUrl: ProjectGithubAssigneesUrl,
    branchesUrl: ProjectGithubBranchesUrl,
    tagsUrl: ProjectGithubTagsUrl,
    blobsUrl: ProjectGithubBlobsUrl,
    gitTagsUrl: ProjectGithubGitTagsUrl,
    gitRefsUrl: ProjectGithubGitRefsUrl,
    treesUrl: ProjectGithubTreesUrl,
    statusesUrl: ProjectGithubStatusesUrl,
    languagesUrl: ProjectGithubLanguagesUrl,
    stargazersUrl: ProjectGithubStargazersUrl,
    contributorsUrl: ProjectGithubContributorsUrl,
    subscribersUrl: ProjectGithubSubscribersUrl,
    subscriptionUrl: ProjectGithubSubscriptionUrl,
    commitsUrl: ProjectGithubCommitsUrl,
    gitCommitsUrl: ProjectGithubGitCommitsUrl,
    commentsUrl: ProjectGithubCommentsUrl,
    issueCommentUrl: ProjectGithubIssueCommentUrl,
    contentsUrl: ProjectGithubContentsUrl,
    compareUrl: ProjectGithubCompareUrl,
    mergesUrl: ProjectGithubMergesUrl,
    archiveUrl: ProjectGithubArchiveUrl,
    downloadsUrl: ProjectGithubDownloadsUrl,
    issuesUrl: ProjectGithubIssuesUrl,
    pullsUrl: ProjectGithubPullsUrl,
    milestonesUrl: ProjectGithubMilestonesUrl,
    notificationsUrl: ProjectGithubNotificationsUrl,
    labelsUrl: ProjectGithubLabelsUrl,
    releasesUrl: ProjectGithubReleasesUrl,
    deploymentsUrl: ProjectGithubDeploymentsUrl,
    gitUrl: Nullable<ProjectGithubGitUrl>,
    sshUrl: Nullable<ProjectGithubSshUrl>,
    cloneUrl: Nullable<ProjectGithubCloneUrl>,
    svnUrl: Nullable<ProjectGithubSvnUrl>,
    homepage: Nullable<ProjectGithubHomepage>,
    size: Nullable<ProjectGithubSize>,
    stargazersCount: Nullable<ProjectGithubStargazersCount>,
    watchersCount: Nullable<ProjectGithubWatchersCount>,
    language: Nullable<ProjectGithubLanguage>,
    hasIssues: Nullable<boolean>,
    hasProjects: Nullable<boolean>,
    hasDownloads: Nullable<boolean>,
    hasWiki: Nullable<boolean>,
    hasPages: Nullable<boolean>,
    forksCount: Nullable<ProjectGithubForksCount>,
    mirrorUrl: Nullable<ProjectGithubMirrorUrl>,
    archived: boolean,
    disabled: boolean,
    openIssuesCount: Nullable<ProjectGithubOpenIssuesCount>,
    license: Nullable<ProjectGithubLicense>,
    allowForking: Nullable<boolean>,
    isTemplate: Nullable<boolean>,
    webCommitSignoffRequired: Nullable<boolean>,
    visibility: Nullable<ProjectGithubVisibility>,
    forks: Nullable<ProjectGithubForksCount>,
    openIssues: Nullable<ProjectGithubOpenIssues>,
    watchers: Nullable<ProjectGithubWatchers>,
    defaultBranch: Nullable<ProjectGithubDefaultBranch>,
    permissionsAdmin: Nullable<boolean>,
    permissionsMaintain: Nullable<boolean>,
    permissionsPush: Nullable<boolean>,
    permissionsTriage: Nullable<boolean>,
    permissionsPull: Nullable<boolean>,
    repositoryCreatedAt: Nullable<ProjectGithubRepositoryCreatedAt>,
    repositoryUpdatedAt: Nullable<ProjectGithubRepositoryUpdatedAt>,
    repositoryPushedAt: Nullable<ProjectGithubRepositoryPushedAt>
  ): ProjectGithub {
    return new ProjectGithub(
      undefined,
      uuid,
      repositoryid,
      nodeid,
      name,
      fullName,
      _private,
      htmlUrl,
      description,
      fork,
      url,
      forksUrl,
      keysUrl,
      collaboratorsUrl,
      teamsUrl,
      hooksUrl,
      issueEventsUrl,
      eventsUrl,
      assigneesUrl,
      branchesUrl,
      tagsUrl,
      blobsUrl,
      gitTagsUrl,
      gitRefsUrl,
      treesUrl,
      statusesUrl,
      languagesUrl,
      stargazersUrl,
      contributorsUrl,
      subscribersUrl,
      subscriptionUrl,
      commitsUrl,
      gitCommitsUrl,
      commentsUrl,
      issueCommentUrl,
      contentsUrl,
      compareUrl,
      mergesUrl,
      archiveUrl,
      downloadsUrl,
      issuesUrl,
      pullsUrl,
      milestonesUrl,
      notificationsUrl,
      labelsUrl,
      releasesUrl,
      deploymentsUrl,
      gitUrl,
      sshUrl,
      cloneUrl,
      svnUrl,
      homepage,
      size,
      stargazersCount,
      watchersCount,
      language,
      hasIssues,
      hasProjects,
      hasDownloads,
      hasWiki,
      hasPages,
      forksCount,
      mirrorUrl,
      archived,
      disabled,
      openIssuesCount,
      license,
      allowForking,
      isTemplate,
      webCommitSignoffRequired,
      visibility,
      forks,
      openIssues,
      watchers,
      defaultBranch,
      permissionsAdmin,
      permissionsMaintain,
      permissionsPush,
      permissionsTriage,
      permissionsPull,
      repositoryCreatedAt,
      repositoryUpdatedAt,
      repositoryPushedAt
    );
  }

  public flat(): ProjectGithubFlattened {
    return {
      id: this.id?.value,
      uuid: this.uuid.value,
      repositoryid: this.repositoryid.value,
      nodeid: this.nodeid.value,
      name: this.name.value,
      fullName: this.fullName.value,
      private: this.private,
      htmlUrl: this.htmlUrl.value,
      description: this.description?.value,
      fork: this.fork,
      url: this.url.value,
      forksUrl: this.forksUrl.value,
      keysUrl: this.keysUrl.value,
      collaboratorsUrl: this.collaboratorsUrl.value,
      teamsUrl: this.teamsUrl.value,
      hooksUrl: this.hooksUrl.value,
      issueEventsUrl: this.issueEventsUrl.value,
      eventsUrl: this.eventsUrl.value,
      assigneesUrl: this.assigneesUrl.value,
      branchesUrl: this.branchesUrl.value,
      tagsUrl: this.tagsUrl.value,
      blobsUrl: this.blobsUrl.value,
      gitTagsUrl: this.gitTagsUrl.value,
      gitRefsUrl: this.gitRefsUrl.value,
      treesUrl: this.treesUrl.value,
      statusesUrl: this.statusesUrl.value,
      languagesUrl: this.languagesUrl.value,
      stargazersUrl: this.stargazersUrl.value,
      contributorsUrl: this.contributorsUrl.value,
      subscribersUrl: this.subscribersUrl.value,
      subscriptionUrl: this.subscriptionUrl.value,
      commitsUrl: this.commitsUrl.value,
      gitCommitsUrl: this.gitCommitsUrl.value,
      commentsUrl: this.commentsUrl.value,
      issueCommentUrl: this.issueCommentUrl.value,
      contentsUrl: this.contentsUrl.value,
      compareUrl: this.compareUrl.value,
      mergesUrl: this.mergesUrl.value,
      archiveUrl: this.archiveUrl.value,
      downloadsUrl: this.downloadsUrl.value,
      issuesUrl: this.issuesUrl.value,
      pullsUrl: this.pullsUrl.value,
      milestonesUrl: this.milestonesUrl.value,
      notificationsUrl: this.notificationsUrl.value,
      labelsUrl: this.labelsUrl.value,
      releasesUrl: this.releasesUrl.value,
      deploymentsUrl: this.deploymentsUrl.value,
      gitUrl: this.gitUrl?.value,
      sshUrl: this.sshUrl?.value,
      cloneUrl: this.cloneUrl?.value,
      svnUrl: this.svnUrl?.value,
      homepage: this.homepage?.value,
      size: this.size?.value,
      stargazersCount: this.stargazersCount?.value,
      watchersCount: this.watchersCount?.value,
      language: this.language?.value,
      hasIssues: this.hasIssues,
      hasProjects: this.hasProjects,
      hasDownloads: this.hasDownloads,
      hasWiki: this.hasWiki,
      hasPages: this.hasPages,
      forksCount: this.forksCount?.value,
      mirrorUrl: this.mirrorUrl?.value,
      archived: this.archived,
      disabled: this.disabled,
      openIssuesCount: this.openIssuesCount?.value,
      license: this.license?.value,
      allowForking: this.allowForking,
      isTemplate: this.isTemplate,
      webCommitSignoffRequired: this.webCommitSignoffRequired,
      visibility: this.visibility?.value,
      forks: this.forks?.value,
      openIssues: this.openIssues?.value,
      watchers: this.watchers?.value,
      defaultBranch: this.defaultBranch?.value,
      permissionsAdmin: this.permissionsAdmin,
      permissionsMaintain: this.permissionsMaintain,
      permissionsPush: this.permissionsPush,
      permissionsTriage: this.permissionsTriage,
      permissionsPull: this.permissionsPull,
      repositoryCreatedAt: this.repositoryCreatedAt?.value,
      repositoryUpdatedAt: this.repositoryUpdatedAt?.value,
      repositoryPushedAt: this.repositoryUpdatedAt?.value,
    };
  }
}

export { ProjectGithub, ProjectGithubFlattened };

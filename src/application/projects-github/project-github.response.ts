import { ProjectGithub } from '@domain/projects-github';
import { Nullable } from '@domain/shared';

class ProjectGithubResponse {
  readonly uuid: string;

  readonly repositoryid: number;

  readonly nodeid: string;

  readonly name: string;

  readonly fullName: string;

  readonly private: boolean;

  readonly htmlUrl: string;

  readonly description: Nullable<string>;

  readonly fork: boolean;

  readonly url: string;

  readonly forksUrl: string;

  readonly keysUrl: string;

  readonly collaboratorsUrl: string;

  readonly teamsUrl: string;

  readonly hooksUrl: string;

  readonly issueEventsUrl: string;

  readonly eventsUrl: string;

  readonly assigneesUrl: string;

  readonly branchesUrl: string;

  readonly tagsUrl: string;

  readonly blobsUrl: string;

  readonly gitTagsUrl: string;

  readonly gitRefsUrl: string;

  readonly treesUrl: string;

  readonly statusesUrl: string;

  readonly languagesUrl: string;

  readonly stargazersUrl: string;

  readonly contributorsUrl: string;

  readonly subscribersUrl: string;

  readonly subscriptionUrl: string;

  readonly commitsUrl: string;

  readonly gitCommitsUrl: string;

  readonly commentsUrl: string;

  readonly issueCommentUrl: string;

  readonly contentsUrl: string;

  readonly compareUrl: string;

  readonly mergesUrl: string;

  readonly archiveUrl: string;

  readonly downloadsUrl: string;

  readonly issuesUrl: string;

  readonly pullsUrl: string;

  readonly milestonesUrl: string;

  readonly notificationsUrl: string;

  readonly labelsUrl: string;

  readonly releasesUrl: string;

  readonly deploymentsUrl: string;

  readonly gitUrl: Nullable<string>;

  readonly sshUrl: Nullable<string>;

  readonly cloneUrl: Nullable<string>;

  readonly svnUrl: Nullable<string>;

  readonly homepage: Nullable<string>;

  readonly size: Nullable<number>;

  readonly stargazersCount: Nullable<number>;

  readonly watchersCount: Nullable<number>;

  readonly language: Nullable<string>;

  readonly hasIssues: Nullable<boolean>;

  readonly hasProjects: Nullable<boolean>;

  readonly hasDownloads: Nullable<boolean>;

  readonly hasWiki: Nullable<boolean>;

  readonly hasPages: Nullable<boolean>;

  readonly forksCount: Nullable<number>;

  readonly mirrorUrl: Nullable<string>;

  readonly archived: Nullable<boolean>;

  readonly disabled: Nullable<boolean>;

  readonly openIssuesCount: Nullable<number>;

  readonly license: Nullable<string>;

  readonly allowForking: Nullable<boolean>;

  readonly isTemplate: Nullable<boolean>;

  readonly webCommitSignoffRequired: Nullable<boolean>;

  readonly visibility: Nullable<string>;

  readonly forks: Nullable<number>;

  readonly openIssues: Nullable<number>;

  readonly watchers: Nullable<number>;

  readonly defaultBranch: Nullable<string>;

  readonly permissionsAdmin: Nullable<boolean>;

  readonly permissionsMaintain: Nullable<boolean>;

  readonly permissionsPush: Nullable<boolean>;

  readonly permissionsTriage: Nullable<boolean>;

  readonly permissionsPull: Nullable<boolean>;

  readonly repositoryCreatedAt: Nullable<Date>;

  readonly repositoryUpdatedAt: Nullable<Date>;

  readonly repositoryPushedAt: Nullable<Date>;

  constructor(
    uuid: string,
    repositoryid: number,
    nodeid: string,
    name: string,
    fullName: string,
    _private: boolean,
    htmlUrl: string,
    description: Nullable<string>,
    fork: boolean,
    url: string,
    forksUrl: string,
    keysUrl: string,
    collaboratorsUrl: string,
    teamsUrl: string,
    hooksUrl: string,
    issueEventsUrl: string,
    eventsUrl: string,
    assigneesUrl: string,
    branchesUrl: string,
    tagsUrl: string,
    blobsUrl: string,
    gitTagsUrl: string,
    gitRefsUrl: string,
    treesUrl: string,
    statusesUrl: string,
    languagesUrl: string,
    stargazersUrl: string,
    contributorsUrl: string,
    subscribersUrl: string,
    subscriptionUrl: string,
    commitsUrl: string,
    gitCommitsUrl: string,
    commentsUrl: string,
    issueCommentUrl: string,
    contentsUrl: string,
    compareUrl: string,
    mergesUrl: string,
    archiveUrl: string,
    downloadsUrl: string,
    issuesUrl: string,
    pullsUrl: string,
    milestonesUrl: string,
    notificationsUrl: string,
    labelsUrl: string,
    releasesUrl: string,
    deploymentsUrl: string,
    gitUrl: Nullable<string>,
    sshUrl: Nullable<string>,
    cloneUrl: Nullable<string>,
    svnUrl: Nullable<string>,
    homepage: Nullable<string>,
    size: Nullable<number>,
    stargazersCount: Nullable<number>,
    watchersCount: Nullable<number>,
    language: Nullable<string>,
    hasIssues: Nullable<boolean>,
    hasProjects: Nullable<boolean>,
    hasDownloads: Nullable<boolean>,
    hasWiki: Nullable<boolean>,
    hasPages: Nullable<boolean>,
    forksCount: Nullable<number>,
    mirrorUrl: Nullable<string>,
    archived: Nullable<boolean>,
    disabled: Nullable<boolean>,
    openIssuesCount: Nullable<number>,
    license: Nullable<string>,
    allowForking: Nullable<boolean>,
    isTemplate: Nullable<boolean>,
    webCommitSignoffRequired: Nullable<boolean>,
    visibility: Nullable<string>,
    forks: Nullable<number>,
    openIssues: Nullable<number>,
    watchers: Nullable<number>,
    defaultBranch: Nullable<string>,
    permissionsAdmin: Nullable<boolean>,
    permissionsMaintain: Nullable<boolean>,
    permissionsPush: Nullable<boolean>,
    permissionsTriage: Nullable<boolean>,
    permissionsPull: Nullable<boolean>,
    repositoryCreatedAt: Nullable<Date>,
    repositoryUpdatedAt: Nullable<Date>,
    repositoryPushedAt: Nullable<Date>
  ) {
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

  public static fromDomainModel(
    projectGithub: ProjectGithub
  ): ProjectGithubResponse {
    return new ProjectGithubResponse(
      projectGithub.uuid.value,
      projectGithub.repositoryid.value,
      projectGithub.nodeid.value,
      projectGithub.name.value,
      projectGithub.fullName.value,
      projectGithub.private,
      projectGithub.htmlUrl.value,
      projectGithub.description?.value,
      projectGithub.fork,
      projectGithub.url.value,
      projectGithub.forksUrl.value,
      projectGithub.keysUrl.value,
      projectGithub.collaboratorsUrl.value,
      projectGithub.teamsUrl.value,
      projectGithub.hooksUrl.value,
      projectGithub.issueEventsUrl.value,
      projectGithub.eventsUrl.value,
      projectGithub.assigneesUrl.value,
      projectGithub.branchesUrl.value,
      projectGithub.tagsUrl.value,
      projectGithub.blobsUrl.value,
      projectGithub.gitTagsUrl.value,
      projectGithub.gitRefsUrl.value,
      projectGithub.treesUrl.value,
      projectGithub.statusesUrl.value,
      projectGithub.languagesUrl.value,
      projectGithub.stargazersUrl.value,
      projectGithub.contributorsUrl.value,
      projectGithub.subscribersUrl.value,
      projectGithub.subscriptionUrl.value,
      projectGithub.commitsUrl.value,
      projectGithub.gitCommitsUrl.value,
      projectGithub.commentsUrl.value,
      projectGithub.issueCommentUrl.value,
      projectGithub.contentsUrl.value,
      projectGithub.compareUrl.value,
      projectGithub.mergesUrl.value,
      projectGithub.archiveUrl.value,
      projectGithub.downloadsUrl.value,
      projectGithub.issuesUrl.value,
      projectGithub.pullsUrl.value,
      projectGithub.milestonesUrl.value,
      projectGithub.notificationsUrl.value,
      projectGithub.labelsUrl.value,
      projectGithub.releasesUrl.value,
      projectGithub.deploymentsUrl.value,
      projectGithub.gitUrl?.value || null,
      projectGithub.sshUrl?.value || null,
      projectGithub.cloneUrl?.value || null,
      projectGithub.svnUrl?.value || null,
      projectGithub.homepage?.value || null,
      projectGithub.size?.value || null,
      projectGithub.stargazersCount?.value || null,
      projectGithub.watchersCount?.value || null,
      projectGithub.language?.value || null,
      projectGithub.hasIssues != undefined ? projectGithub.hasIssues : null,
      projectGithub.hasProjects != undefined ? projectGithub.hasProjects : null,
      projectGithub.hasDownloads != undefined
        ? projectGithub.hasDownloads
        : null,
      projectGithub.hasWiki != undefined ? projectGithub.hasWiki : null,
      projectGithub.hasPages != undefined ? projectGithub.hasPages : null,
      projectGithub.forksCount?.value || null,
      projectGithub.mirrorUrl?.value || null,
      projectGithub.archived != undefined ? projectGithub.archived : null,
      projectGithub.disabled != undefined ? projectGithub.disabled : null,
      projectGithub.openIssuesCount?.value || null,
      projectGithub.license?.value || null,
      projectGithub.allowForking != undefined
        ? projectGithub.allowForking
        : null,
      projectGithub.isTemplate != undefined ? projectGithub.isTemplate : null,
      projectGithub.webCommitSignoffRequired != undefined
        ? projectGithub.webCommitSignoffRequired
        : null,
      projectGithub.visibility?.value || null,
      projectGithub.forks?.value || null,
      projectGithub.openIssues?.value || null,
      projectGithub.watchers?.value || null,
      projectGithub.defaultBranch?.value || null,
      projectGithub.permissionsAdmin != undefined
        ? projectGithub.permissionsAdmin
        : null,
      projectGithub.permissionsMaintain != undefined
        ? projectGithub.permissionsMaintain
        : null,
      projectGithub.permissionsPush != undefined
        ? projectGithub.permissionsPush
        : null,
      projectGithub.permissionsTriage != undefined
        ? projectGithub.permissionsTriage
        : null,
      projectGithub.permissionsPull != undefined
        ? projectGithub.permissionsPull
        : null,
      projectGithub.repositoryCreatedAt?.value || null,
      projectGithub.repositoryUpdatedAt?.value || null,
      projectGithub.repositoryPushedAt?.value || null
    );
  }
}

export { ProjectGithubResponse };

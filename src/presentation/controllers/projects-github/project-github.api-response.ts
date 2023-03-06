import { Property } from '@tsed/schema';
import { ProjectGithubResponse } from '@application/projects-github';

import { Nullable } from '@domain/shared';

class ProjectGithubApiResponse {
  @Property()
  readonly uuid: string;

  @Property()
  readonly repositoryid: number;

  @Property()
  readonly nodeid: string;

  @Property()
  readonly name: string;

  @Property()
  readonly fullName: string;

  @Property()
  readonly private: boolean;

  @Property()
  readonly htmlUrl: string;

  @Property()
  readonly description: Nullable<string>;

  @Property()
  readonly fork: boolean;

  @Property()
  readonly url: string;

  @Property()
  readonly forksUrl: string;

  @Property()
  readonly keysUrl: string;

  @Property()
  readonly collaboratorsUrl: string;

  @Property()
  readonly teamsUrl: string;

  @Property()
  readonly hooksUrl: string;

  @Property()
  readonly issueEventsUrl: string;

  @Property()
  readonly eventsUrl: string;

  @Property()
  readonly assigneesUrl: string;

  @Property()
  readonly branchesUrl: string;

  @Property()
  readonly tagsUrl: string;

  @Property()
  readonly blobsUrl: string;

  @Property()
  readonly gitTagsUrl: string;

  @Property()
  readonly gitRefsUrl: string;

  @Property()
  readonly treesUrl: string;

  @Property()
  readonly statusesUrl: string;

  @Property()
  readonly languagesUrl: string;

  @Property()
  readonly stargazersUrl: string;

  @Property()
  readonly contributorsUrl: string;

  @Property()
  readonly subscribersUrl: string;

  @Property()
  readonly subscriptionUrl: string;

  @Property()
  readonly commitsUrl: string;

  @Property()
  readonly gitCommitsUrl: string;

  @Property()
  readonly commentsUrl: string;

  @Property()
  readonly issueCommentUrl: string;

  @Property()
  readonly contentsUrl: string;

  @Property()
  readonly compareUrl: string;

  @Property()
  readonly mergesUrl: string;

  @Property()
  readonly archiveUrl: string;

  @Property()
  readonly downloadsUrl: string;

  @Property()
  readonly issuesUrl: string;

  @Property()
  readonly pullsUrl: string;

  @Property()
  readonly milestonesUrl: string;

  @Property()
  readonly notificationsUrl: string;

  @Property()
  readonly labelsUrl: string;

  @Property()
  readonly releasesUrl: string;

  @Property()
  readonly deploymentsUrl: string;

  @Property()
  readonly gitUrl: Nullable<string>;

  @Property()
  readonly sshUrl: Nullable<string>;

  @Property()
  readonly cloneUrl: Nullable<string>;

  @Property()
  readonly svnUrl: Nullable<string>;

  @Property()
  readonly homepage: Nullable<string>;

  @Property()
  readonly size: Nullable<number>;

  @Property()
  readonly stargazersCount: Nullable<number>;

  @Property()
  readonly watchersCount: Nullable<number>;

  @Property()
  readonly language: Nullable<string>;

  @Property()
  readonly hasIssues: Nullable<boolean>;

  @Property()
  readonly hasProjects: Nullable<boolean>;

  @Property()
  readonly hasDownloads: Nullable<boolean>;

  @Property()
  readonly hasWiki: Nullable<boolean>;

  @Property()
  readonly hasPages: Nullable<boolean>;

  @Property()
  readonly forksCount: Nullable<number>;

  @Property()
  readonly mirrorUrl: Nullable<string>;

  @Property()
  readonly archived: Nullable<boolean>;

  @Property()
  readonly disabled: Nullable<boolean>;

  @Property()
  readonly openIssuesCount: Nullable<number>;

  @Property()
  readonly license: Nullable<string>;

  @Property()
  readonly allowForking: Nullable<boolean>;

  @Property()
  readonly isTemplate: Nullable<boolean>;

  @Property()
  readonly webCommitSignoffRequired: Nullable<boolean>;

  @Property()
  readonly visibility: Nullable<string>;

  @Property()
  readonly forks: Nullable<number>;

  @Property()
  readonly openIssues: Nullable<number>;

  @Property()
  readonly watchers: Nullable<number>;

  @Property()
  readonly defaultBranch: Nullable<string>;

  @Property()
  readonly permissionsAdmin: Nullable<boolean>;

  @Property()
  readonly permissionsMaintain: Nullable<boolean>;

  @Property()
  readonly permissionsPush: Nullable<boolean>;

  @Property()
  readonly permissionsTriage: Nullable<boolean>;

  @Property()
  readonly permissionsPull: Nullable<boolean>;

  @Property()
  readonly repositoryCreatedAt: Nullable<Date>;

  @Property()
  readonly repositoryUpdatedAt: Nullable<Date>;

  @Property()
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

  public static fromProjectGithubResponse(
    projectGithub: ProjectGithubResponse
  ): ProjectGithubApiResponse {
    return new ProjectGithubApiResponse(
      projectGithub.uuid,
      projectGithub.repositoryid,
      projectGithub.nodeid,
      projectGithub.name,
      projectGithub.fullName,
      projectGithub.private,
      projectGithub.htmlUrl,
      projectGithub.description,
      projectGithub.fork,
      projectGithub.url,
      projectGithub.forksUrl,
      projectGithub.keysUrl,
      projectGithub.collaboratorsUrl,
      projectGithub.teamsUrl,
      projectGithub.hooksUrl,
      projectGithub.issueEventsUrl,
      projectGithub.eventsUrl,
      projectGithub.assigneesUrl,
      projectGithub.branchesUrl,
      projectGithub.tagsUrl,
      projectGithub.blobsUrl,
      projectGithub.gitTagsUrl,
      projectGithub.gitRefsUrl,
      projectGithub.treesUrl,
      projectGithub.statusesUrl,
      projectGithub.languagesUrl,
      projectGithub.stargazersUrl,
      projectGithub.contributorsUrl,
      projectGithub.subscribersUrl,
      projectGithub.subscriptionUrl,
      projectGithub.commitsUrl,
      projectGithub.gitCommitsUrl,
      projectGithub.commentsUrl,
      projectGithub.issueCommentUrl,
      projectGithub.contentsUrl,
      projectGithub.compareUrl,
      projectGithub.mergesUrl,
      projectGithub.archiveUrl,
      projectGithub.downloadsUrl,
      projectGithub.issuesUrl,
      projectGithub.pullsUrl,
      projectGithub.milestonesUrl,
      projectGithub.notificationsUrl,
      projectGithub.labelsUrl,
      projectGithub.releasesUrl,
      projectGithub.deploymentsUrl,
      projectGithub.gitUrl,
      projectGithub.sshUrl,
      projectGithub.cloneUrl,
      projectGithub.svnUrl,
      projectGithub.homepage,
      projectGithub.size,
      projectGithub.stargazersCount,
      projectGithub.watchersCount,
      projectGithub.language,
      projectGithub.hasIssues,
      projectGithub.hasProjects,
      projectGithub.hasDownloads,
      projectGithub.hasWiki,
      projectGithub.hasPages,
      projectGithub.forksCount,
      projectGithub.mirrorUrl,
      projectGithub.archived,
      projectGithub.disabled,
      projectGithub.openIssuesCount,
      projectGithub.license,
      projectGithub.allowForking,
      projectGithub.isTemplate,
      projectGithub.webCommitSignoffRequired,
      projectGithub.visibility,
      projectGithub.forks,
      projectGithub.openIssues,
      projectGithub.watchers,
      projectGithub.defaultBranch,
      projectGithub.permissionsAdmin,
      projectGithub.permissionsMaintain,
      projectGithub.permissionsPush,
      projectGithub.permissionsTriage,
      projectGithub.permissionsPull,
      projectGithub.repositoryCreatedAt,
      projectGithub.repositoryUpdatedAt,
      projectGithub.repositoryPushedAt
    );
  }
}

export { ProjectGithubApiResponse };

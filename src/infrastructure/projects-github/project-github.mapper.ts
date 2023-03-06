import { ProjectGithubModel } from '@tsed/prisma';

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
  ProjectGithubId,
  ProjectGithubNodeId,
  ProjectGithubUrl,
  ProjectGithubForksCount,
  ProjectGithubVisibility,
  ProjectGithubRepositoryId,
  ProjectGithubRepositoryUpdatedAt,
  ProjectGithubRepositoryPushedAt,
  ProjectGithubRepositoryCreatedAt,
} from '@domain/projects-github';

class ProjectGithubMapper {
  public static toDomainModel(
    projectGithubPersistenceModel: ProjectGithubModel
  ): ProjectGithub {
    return new ProjectGithub(
      new ProjectGithubId(projectGithubPersistenceModel.id),
      new ProjectGithubUuid(projectGithubPersistenceModel.uuid),
      new ProjectGithubRepositoryId(projectGithubPersistenceModel.repositoryid),
      new ProjectGithubNodeId(projectGithubPersistenceModel.nodeid),
      new ProjectGithubName(projectGithubPersistenceModel.name),
      new ProjectGithubFullName(projectGithubPersistenceModel.fullName),
      projectGithubPersistenceModel.private,
      new ProjectGithubGitUrl(projectGithubPersistenceModel.htmlUrl),
      projectGithubPersistenceModel.description
        ? new ProjectGithubDescription(
            projectGithubPersistenceModel.description
          )
        : null,
      projectGithubPersistenceModel.fork,
      new ProjectGithubUrl(projectGithubPersistenceModel.url),
      new ProjectGithubForksUrl(projectGithubPersistenceModel.forksUrl),
      new ProjectGithubKeysUrl(projectGithubPersistenceModel.keysUrl),
      new ProjectGithubCollaboratorsUrl(
        projectGithubPersistenceModel.collaboratorsUrl
      ),
      new ProjectGithubTeamsUrl(projectGithubPersistenceModel.teamsUrl),
      new ProjectGithubHooksUrl(projectGithubPersistenceModel.hooksUrl),
      new ProjectGithubIssueEventsUrl(
        projectGithubPersistenceModel.issueEventsUrl
      ),
      new ProjectGithubEventsUrl(projectGithubPersistenceModel.eventsUrl),
      new ProjectGithubAssigneesUrl(projectGithubPersistenceModel.assigneesUrl),
      new ProjectGithubBranchesUrl(projectGithubPersistenceModel.branchesUrl),
      new ProjectGithubTagsUrl(projectGithubPersistenceModel.tagsUrl),
      new ProjectGithubBlobsUrl(projectGithubPersistenceModel.blobsUrl),
      new ProjectGithubGitTagsUrl(projectGithubPersistenceModel.gitTagsUrl),
      new ProjectGithubGitRefsUrl(projectGithubPersistenceModel.gitRefsUrl),
      new ProjectGithubTreesUrl(projectGithubPersistenceModel.treesUrl),
      new ProjectGithubStatusesUrl(projectGithubPersistenceModel.statusesUrl),
      new ProjectGithubLanguagesUrl(projectGithubPersistenceModel.languagesUrl),
      new ProjectGithubStargazersUrl(
        projectGithubPersistenceModel.stargazersUrl
      ),
      new ProjectGithubContributorsUrl(
        projectGithubPersistenceModel.contributorsUrl
      ),
      new ProjectGithubSubscribersUrl(
        projectGithubPersistenceModel.subscribersUrl
      ),
      new ProjectGithubSubscriptionUrl(
        projectGithubPersistenceModel.subscriptionUrl
      ),
      new ProjectGithubCommitsUrl(projectGithubPersistenceModel.commitsUrl),
      new ProjectGithubGitCommitsUrl(
        projectGithubPersistenceModel.gitCommitsUrl
      ),
      new ProjectGithubCommentsUrl(projectGithubPersistenceModel.commentsUrl),
      new ProjectGithubIssueCommentUrl(
        projectGithubPersistenceModel.issueCommentUrl
      ),
      new ProjectGithubContentsUrl(projectGithubPersistenceModel.contentsUrl),
      new ProjectGithubCompareUrl(projectGithubPersistenceModel.compareUrl),
      new ProjectGithubMergesUrl(projectGithubPersistenceModel.mergesUrl),
      new ProjectGithubArchiveUrl(projectGithubPersistenceModel.archiveUrl),
      new ProjectGithubDownloadsUrl(projectGithubPersistenceModel.downloadsUrl),
      new ProjectGithubIssuesUrl(projectGithubPersistenceModel.issuesUrl),
      new ProjectGithubPullsUrl(projectGithubPersistenceModel.pullsUrl),
      new ProjectGithubMilestonesUrl(
        projectGithubPersistenceModel.milestonesUrl
      ),
      new ProjectGithubNotificationsUrl(
        projectGithubPersistenceModel.notificationsUrl
      ),
      new ProjectGithubLabelsUrl(projectGithubPersistenceModel.labelsUrl),
      new ProjectGithubReleasesUrl(projectGithubPersistenceModel.releasesUrl),
      new ProjectGithubDeploymentsUrl(
        projectGithubPersistenceModel.deploymentsUrl
      ),
      projectGithubPersistenceModel.gitUrl
        ? new ProjectGithubGitUrl(projectGithubPersistenceModel.gitUrl)
        : null,
      projectGithubPersistenceModel.sshUrl
        ? new ProjectGithubSshUrl(projectGithubPersistenceModel.sshUrl)
        : null,
      projectGithubPersistenceModel.cloneUrl
        ? new ProjectGithubCloneUrl(projectGithubPersistenceModel.cloneUrl)
        : null,
      projectGithubPersistenceModel.svnUrl
        ? new ProjectGithubSvnUrl(projectGithubPersistenceModel.svnUrl)
        : null,
      projectGithubPersistenceModel.homepage
        ? new ProjectGithubHomepage(projectGithubPersistenceModel.homepage)
        : null,
      projectGithubPersistenceModel.size
        ? new ProjectGithubSize(projectGithubPersistenceModel.size)
        : null,
      projectGithubPersistenceModel.stargazersCount
        ? new ProjectGithubStargazersCount(
            projectGithubPersistenceModel.stargazersCount
          )
        : null,
      projectGithubPersistenceModel.watchersCount
        ? new ProjectGithubWatchersCount(
            projectGithubPersistenceModel.watchersCount
          )
        : null,
      projectGithubPersistenceModel.language
        ? new ProjectGithubLanguage(projectGithubPersistenceModel.language)
        : null,
      projectGithubPersistenceModel.hasIssues != undefined
        ? projectGithubPersistenceModel.hasIssues
        : null,
      projectGithubPersistenceModel.hasProjects != undefined
        ? projectGithubPersistenceModel.hasProjects
        : null,
      projectGithubPersistenceModel.hasDownloads != undefined
        ? projectGithubPersistenceModel.hasDownloads
        : null,
      projectGithubPersistenceModel.hasWiki != undefined
        ? projectGithubPersistenceModel.hasWiki
        : null,
      projectGithubPersistenceModel.hasPages != undefined
        ? projectGithubPersistenceModel.hasPages
        : null,
      projectGithubPersistenceModel.forksCount
        ? new ProjectGithubForksCount(projectGithubPersistenceModel.forksCount)
        : null,
      projectGithubPersistenceModel.mirrorUrl
        ? new ProjectGithubMirrorUrl(projectGithubPersistenceModel.mirrorUrl)
        : null,
      projectGithubPersistenceModel.archived,
      projectGithubPersistenceModel.disabled,
      projectGithubPersistenceModel.openIssuesCount
        ? new ProjectGithubOpenIssuesCount(
            projectGithubPersistenceModel.openIssuesCount
          )
        : null,
      projectGithubPersistenceModel.license
        ? new ProjectGithubLicense(projectGithubPersistenceModel.license)
        : null,
      projectGithubPersistenceModel.allowForking != undefined
        ? projectGithubPersistenceModel.allowForking
        : null,
      projectGithubPersistenceModel.isTemplate != undefined
        ? projectGithubPersistenceModel.isTemplate
        : null,
      projectGithubPersistenceModel.webCommitSignoffRequired != undefined
        ? projectGithubPersistenceModel.webCommitSignoffRequired
        : null,
      projectGithubPersistenceModel.visibility
        ? new ProjectGithubVisibility(projectGithubPersistenceModel.visibility)
        : null,
      projectGithubPersistenceModel.forks
        ? new ProjectGithubForks(projectGithubPersistenceModel.forks)
        : null,
      projectGithubPersistenceModel.openIssues
        ? new ProjectGithubOpenIssues(projectGithubPersistenceModel.openIssues)
        : null,
      projectGithubPersistenceModel.watchers
        ? new ProjectGithubWatchers(projectGithubPersistenceModel.watchers)
        : null,
      projectGithubPersistenceModel.defaultBranch
        ? new ProjectGithubDefaultBranch(
            projectGithubPersistenceModel.defaultBranch
          )
        : null,
      projectGithubPersistenceModel.permissionsAdmin != undefined
        ? projectGithubPersistenceModel.permissionsAdmin
        : null,
      projectGithubPersistenceModel.permissionsMaintain != undefined
        ? projectGithubPersistenceModel.permissionsMaintain
        : null,
      projectGithubPersistenceModel.permissionsPush != undefined
        ? projectGithubPersistenceModel.permissionsPush
        : null,
      projectGithubPersistenceModel.permissionsTriage != undefined
        ? projectGithubPersistenceModel.permissionsTriage
        : null,
      projectGithubPersistenceModel.permissionsPull != undefined
        ? projectGithubPersistenceModel.permissionsPull
        : null,
      projectGithubPersistenceModel.repositoryCreatedAt
        ? new ProjectGithubRepositoryCreatedAt(
            projectGithubPersistenceModel.repositoryCreatedAt
          )
        : null,
      projectGithubPersistenceModel.repositoryUpdatedAt
        ? new ProjectGithubRepositoryUpdatedAt(
            projectGithubPersistenceModel.repositoryUpdatedAt
          )
        : null,
      projectGithubPersistenceModel.repositoryPushedAt
        ? new ProjectGithubRepositoryPushedAt(
            projectGithubPersistenceModel.repositoryPushedAt
          )
        : null
    );
  }

  public static toPersistenceModel(
    projectGithub: ProjectGithub
  ): ProjectGithubModel {
    const projectGithubPersistenceModel = new ProjectGithubModel();
    if (projectGithub.id != null) {
      projectGithubPersistenceModel.id = projectGithub.id.value;
    }
    projectGithubPersistenceModel.uuid = projectGithub.uuid.value;
    projectGithubPersistenceModel.repositoryid =
      projectGithub.repositoryid.value;
    projectGithubPersistenceModel.nodeid = projectGithub.nodeid.value;
    projectGithubPersistenceModel.name = projectGithub.name.value;
    projectGithubPersistenceModel.fullName = projectGithub.fullName.value;
    projectGithubPersistenceModel.htmlUrl = projectGithub.htmlUrl.value;
    projectGithubPersistenceModel.private = projectGithub.private;
    projectGithubPersistenceModel.description =
      projectGithub.description?.value || null;
    projectGithubPersistenceModel.fork = projectGithub.fork;
    projectGithubPersistenceModel.url = projectGithub.url.value;
    projectGithubPersistenceModel.forksUrl = projectGithub.forksUrl.value;
    projectGithubPersistenceModel.keysUrl = projectGithub.keysUrl.value;
    projectGithubPersistenceModel.collaboratorsUrl =
      projectGithub.collaboratorsUrl.value;
    projectGithubPersistenceModel.teamsUrl = projectGithub.teamsUrl.value;
    projectGithubPersistenceModel.hooksUrl = projectGithub.hooksUrl.value;
    projectGithubPersistenceModel.issueEventsUrl =
      projectGithub.issueEventsUrl.value;
    projectGithubPersistenceModel.eventsUrl = projectGithub.eventsUrl.value;
    projectGithubPersistenceModel.assigneesUrl =
      projectGithub.assigneesUrl.value;
    projectGithubPersistenceModel.branchesUrl = projectGithub.branchesUrl.value;
    projectGithubPersistenceModel.tagsUrl = projectGithub.tagsUrl.value;
    projectGithubPersistenceModel.blobsUrl = projectGithub.blobsUrl.value;
    projectGithubPersistenceModel.gitTagsUrl = projectGithub.gitTagsUrl.value;
    projectGithubPersistenceModel.gitRefsUrl = projectGithub.gitRefsUrl.value;
    projectGithubPersistenceModel.treesUrl = projectGithub.treesUrl.value;
    projectGithubPersistenceModel.statusesUrl = projectGithub.statusesUrl.value;
    projectGithubPersistenceModel.languagesUrl =
      projectGithub.languagesUrl.value;
    projectGithubPersistenceModel.stargazersUrl =
      projectGithub.stargazersUrl.value;
    projectGithubPersistenceModel.contributorsUrl =
      projectGithub.contributorsUrl.value;
    projectGithubPersistenceModel.subscribersUrl =
      projectGithub.subscribersUrl.value;
    projectGithubPersistenceModel.subscriptionUrl =
      projectGithub.subscriptionUrl.value;
    projectGithubPersistenceModel.commitsUrl = projectGithub.commitsUrl.value;
    projectGithubPersistenceModel.gitCommitsUrl =
      projectGithub.gitCommitsUrl.value;
    projectGithubPersistenceModel.commentsUrl = projectGithub.commentsUrl.value;
    projectGithubPersistenceModel.issueCommentUrl =
      projectGithub.issueCommentUrl.value;
    projectGithubPersistenceModel.contentsUrl = projectGithub.contentsUrl.value;
    projectGithubPersistenceModel.compareUrl = projectGithub.compareUrl.value;
    projectGithubPersistenceModel.mergesUrl = projectGithub.mergesUrl.value;
    projectGithubPersistenceModel.archiveUrl = projectGithub.archiveUrl.value;
    projectGithubPersistenceModel.downloadsUrl =
      projectGithub.downloadsUrl.value;
    projectGithubPersistenceModel.issuesUrl = projectGithub.issuesUrl.value;
    projectGithubPersistenceModel.pullsUrl = projectGithub.pullsUrl.value;
    projectGithubPersistenceModel.milestonesUrl =
      projectGithub.milestonesUrl.value;
    projectGithubPersistenceModel.notificationsUrl =
      projectGithub.notificationsUrl.value;
    projectGithubPersistenceModel.labelsUrl = projectGithub.labelsUrl.value;
    projectGithubPersistenceModel.releasesUrl = projectGithub.releasesUrl.value;
    projectGithubPersistenceModel.deploymentsUrl =
      projectGithub.deploymentsUrl.value;
    projectGithubPersistenceModel.gitUrl = projectGithub.gitUrl?.value || null;
    projectGithubPersistenceModel.sshUrl = projectGithub.sshUrl?.value || null;
    projectGithubPersistenceModel.cloneUrl =
      projectGithub.cloneUrl?.value || null;
    projectGithubPersistenceModel.svnUrl = projectGithub.svnUrl?.value || null;
    projectGithubPersistenceModel.homepage =
      projectGithub.homepage?.value || null;
    projectGithubPersistenceModel.size = projectGithub.size?.value || null;
    projectGithubPersistenceModel.stargazersCount =
      projectGithub.stargazersCount?.value || null;
    projectGithubPersistenceModel.watchersCount =
      projectGithub.watchersCount?.value || null;
    projectGithubPersistenceModel.language =
      projectGithub.language?.value || null;
    projectGithubPersistenceModel.hasIssues =
      projectGithub.hasIssues != undefined ? projectGithub.hasIssues : null;
    projectGithubPersistenceModel.hasProjects =
      projectGithub.hasProjects != undefined ? projectGithub.hasProjects : null;
    projectGithubPersistenceModel.hasDownloads =
      projectGithub.hasDownloads != undefined
        ? projectGithub.hasDownloads
        : null;
    projectGithubPersistenceModel.hasWiki =
      projectGithub.hasWiki != undefined ? projectGithub.hasWiki : null;
    projectGithubPersistenceModel.hasPages =
      projectGithub.hasPages != undefined ? projectGithub.hasPages : null;
    projectGithubPersistenceModel.forksCount =
      projectGithub.forksCount?.value || null;
    projectGithubPersistenceModel.mirrorUrl =
      projectGithub.mirrorUrl?.value || null;
    projectGithubPersistenceModel.archived =
      projectGithub.archived != undefined ? projectGithub.archived : null;
    projectGithubPersistenceModel.disabled =
      projectGithub.disabled != undefined ? projectGithub.disabled : null;
    projectGithubPersistenceModel.license =
      projectGithub.license?.value || null;
    projectGithubPersistenceModel.allowForking =
      projectGithub.allowForking != undefined
        ? projectGithub.allowForking
        : null;
    projectGithubPersistenceModel.forks = projectGithub.forks?.value || null;
    projectGithubPersistenceModel.openIssues =
      projectGithub.openIssues?.value || null;
    projectGithubPersistenceModel.watchers =
      projectGithub.watchers?.value || null;
    projectGithubPersistenceModel.defaultBranch =
      projectGithub.defaultBranch?.value || null;
    projectGithubPersistenceModel.permissionsAdmin =
      projectGithub.permissionsAdmin != undefined
        ? projectGithub.permissionsAdmin
        : null;
    projectGithubPersistenceModel.permissionsMaintain =
      projectGithub.permissionsMaintain != undefined
        ? projectGithub.permissionsMaintain
        : null;
    projectGithubPersistenceModel.permissionsPush =
      projectGithub.permissionsPush != undefined
        ? projectGithub.permissionsPush
        : null;
    projectGithubPersistenceModel.permissionsTriage =
      projectGithub.permissionsTriage != undefined
        ? projectGithub.permissionsTriage
        : null;
    projectGithubPersistenceModel.permissionsPull =
      projectGithub.permissionsPull != undefined
        ? projectGithub.permissionsPull
        : null;
    projectGithubPersistenceModel.repositoryUpdatedAt =
      projectGithub.repositoryUpdatedAt?.value || null;
    projectGithubPersistenceModel.repositoryPushedAt =
      projectGithub.repositoryPushedAt?.value || null;
    return projectGithubPersistenceModel;
  }
}

export { ProjectGithubMapper };

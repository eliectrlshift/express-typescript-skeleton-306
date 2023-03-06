import { describe, expect, test } from '@jest/globals';

import {
  ProjectGithub,
  ProjectGithubArchiveUrl,
  ProjectGithubAssigneesUrl,
  ProjectGithubBlobsUrl,
  ProjectGithubBranchesUrl,
  ProjectGithubCloneUrl,
  ProjectGithubCollaboratorsUrl,
  ProjectGithubCommentsUrl,
  ProjectGithubCommitsUrl,
  ProjectGithubCompareUrl,
  ProjectGithubContentsUrl,
  ProjectGithubContributorsUrl,
  ProjectGithubDefaultBranch,
  ProjectGithubDeploymentsUrl,
  ProjectGithubDescription,
  ProjectGithubDownloadsUrl,
  ProjectGithubEventsUrl,
  ProjectGithubForks,
  ProjectGithubForksCount,
  ProjectGithubForksUrl,
  ProjectGithubFullName,
  ProjectGithubGitCommitsUrl,
  ProjectGithubGitRefsUrl,
  ProjectGithubGitTagsUrl,
  ProjectGithubGitUrl,
  ProjectGithubHomepage,
  ProjectGithubHooksUrl,
  ProjectGithubHtmlUrl,
  ProjectGithubId,
  ProjectGithubIssueCommentUrl,
  ProjectGithubIssueEventsUrl,
  ProjectGithubIssuesUrl,
  ProjectGithubKeysUrl,
  ProjectGithubLabelsUrl,
  ProjectGithubLanguage,
  ProjectGithubLanguagesUrl,
  ProjectGithubLicense,
  ProjectGithubMergesUrl,
  ProjectGithubMilestonesUrl,
  ProjectGithubMirrorUrl,
  ProjectGithubName,
  ProjectGithubNodeId,
  ProjectGithubNotificationsUrl,
  ProjectGithubOpenIssues,
  ProjectGithubOpenIssuesCount,
  ProjectGithubPullsUrl,
  ProjectGithubReleasesUrl,
  ProjectGithubRepositoryCreatedAt,
  ProjectGithubRepositoryId,
  ProjectGithubRepositoryPushedAt,
  ProjectGithubRepositoryUpdatedAt,
  ProjectGithubSize,
  ProjectGithubSshUrl,
  ProjectGithubStargazersCount,
  ProjectGithubStargazersUrl,
  ProjectGithubStatusesUrl,
  ProjectGithubSubscribersUrl,
  ProjectGithubSubscriptionUrl,
  ProjectGithubSvnUrl,
  ProjectGithubTagsUrl,
  ProjectGithubTeamsUrl,
  ProjectGithubTreesUrl,
  ProjectGithubUrl,
  ProjectGithubUuid,
  ProjectGithubVisibility,
  ProjectGithubWatchers,
  ProjectGithubWatchersCount,
} from '@domain/projects-github';

const date = new Date();
const uuid = ProjectGithubUuid.random();

let projectGithubArchiveUrl: ProjectGithubArchiveUrl;
let projectGithubAssigneesUrl: ProjectGithubAssigneesUrl;
let projectGithubBlobsUrl: ProjectGithubBlobsUrl;
let projectGithubBranchesUrl: ProjectGithubBranchesUrl;
let projectGithubCloneUrl: ProjectGithubCloneUrl;
let projectGithubCollaboratorsUrl: ProjectGithubCollaboratorsUrl;
let projectGithubCommentsUrl: ProjectGithubCommentsUrl;
let projectGithubCommitsUrl: ProjectGithubCommitsUrl;
let projectGithubCompareUrl: ProjectGithubCompareUrl;
let projectGithubContentsUrl: ProjectGithubContentsUrl;
let projectGithubContributorsUrl: ProjectGithubContributorsUrl;
let projectGithubDefaultBranch: ProjectGithubDefaultBranch;
let projectGithubDeploymentsUrl: ProjectGithubDeploymentsUrl;
let projectGithubDescription: ProjectGithubDescription;
let projectGithubDownloadsUrl: ProjectGithubDownloadsUrl;
let projectGithubEventsUrl: ProjectGithubEventsUrl;
let projectGithubForksCount: ProjectGithubForksCount;
let projectGithubForksUrl: ProjectGithubForksUrl;
let projectGithubForks: ProjectGithubForks;
let projectGithubFullName: ProjectGithubFullName;
let projectGithubGitCommitsUrl: ProjectGithubGitCommitsUrl;
let projectGithubGitRefsUrl: ProjectGithubGitRefsUrl;
let projectGithubGitTagsUrl: ProjectGithubGitTagsUrl;
let projectGithubGitUrl: ProjectGithubGitUrl;
let projectGithubHomepage: ProjectGithubHomepage;
let projectGithubHooksUrl: ProjectGithubHooksUrl;
let projectGithubHtmlUrl: ProjectGithubHtmlUrl;
let projectGithubId: ProjectGithubId;
let projectGithubIssueCommentUrl: ProjectGithubIssueCommentUrl;
let projectGithubIssueEventsUrl: ProjectGithubIssueEventsUrl;
let projectGithubIssuesUrl: ProjectGithubIssuesUrl;
let projectGithubKeysUrl: ProjectGithubKeysUrl;
let projectGithubLabelsUrl: ProjectGithubLabelsUrl;
let projectGithubLanguage: ProjectGithubLanguage;
let projectGithubLanguagesUrl: ProjectGithubLanguagesUrl;
let projectGithubLicense: ProjectGithubLicense;
let projectGithubMergesUrl: ProjectGithubMergesUrl;
let projectGithubMilestonesUrl: ProjectGithubMilestonesUrl;
let projectGithubMirrorUrl: ProjectGithubMirrorUrl;
let projectGithubName: ProjectGithubName;
let projectGithubNodeId: ProjectGithubNodeId;
let projectGithubNotificationsUrl: ProjectGithubNotificationsUrl;
let projectGithubOpenIssuesCount: ProjectGithubOpenIssuesCount;
let projectGithubOpenIssues: ProjectGithubOpenIssues;
let projectGithubPullsUrl: ProjectGithubPullsUrl;
let projectGithubReleasesUrl: ProjectGithubReleasesUrl;
let projectGithubRepositoryCreatedAt: ProjectGithubRepositoryCreatedAt;
let projectGithubRepositoryId: ProjectGithubRepositoryId;
let projectGithubRepositoryPushedAt: ProjectGithubRepositoryPushedAt;
let projectGithubRepositoryUpdatedAt: ProjectGithubRepositoryUpdatedAt;
let projectGithubSize: ProjectGithubSize;
let projectGithubSshUrl: ProjectGithubSshUrl;
let projectGithubStargazersCount: ProjectGithubStargazersCount;
let projectGithubStargazersUrl: ProjectGithubStargazersUrl;
let projectGithubStatusesUrl: ProjectGithubStatusesUrl;
let projectGithubSubscribersUrl: ProjectGithubSubscribersUrl;
let projectGithubSubscriptionUrl: ProjectGithubSubscriptionUrl;
let projectGithubSvnUrl: ProjectGithubSvnUrl;
let projectGithubTagsUrl: ProjectGithubTagsUrl;
let projectGithubTeamsUrl: ProjectGithubTeamsUrl;
let projectGithubTreesUrl: ProjectGithubTreesUrl;
let projectGithubUrl: ProjectGithubUrl;
let projectGithubUuid: ProjectGithubUuid;
let projectGithubVisibility: ProjectGithubVisibility;
let projectGithubWatchersCount: ProjectGithubWatchersCount;
let projectGithubWatchers: ProjectGithubWatchers;

describe('ProjectGithub', () => {
  beforeAll(() => {
    projectGithubArchiveUrl = new ProjectGithubArchiveUrl('jest');
    projectGithubAssigneesUrl = new ProjectGithubAssigneesUrl('jest');
    projectGithubBlobsUrl = new ProjectGithubBlobsUrl('jest');
    projectGithubBranchesUrl = new ProjectGithubBranchesUrl('jest');
    projectGithubCloneUrl = new ProjectGithubCloneUrl('jest');
    projectGithubCollaboratorsUrl = new ProjectGithubCollaboratorsUrl('jest');
    projectGithubCommentsUrl = new ProjectGithubCommentsUrl('jest');
    projectGithubCommitsUrl = new ProjectGithubCommitsUrl('jest');
    projectGithubCompareUrl = new ProjectGithubCompareUrl('jest');
    projectGithubContentsUrl = new ProjectGithubContentsUrl('jest');
    projectGithubContributorsUrl = new ProjectGithubContributorsUrl('jest');
    projectGithubDefaultBranch = new ProjectGithubDefaultBranch('jest');
    projectGithubDeploymentsUrl = new ProjectGithubDeploymentsUrl('jest');
    projectGithubDescription = new ProjectGithubDescription('jest');
    projectGithubDownloadsUrl = new ProjectGithubDownloadsUrl('jest');
    projectGithubEventsUrl = new ProjectGithubEventsUrl('jest');
    projectGithubForksCount = new ProjectGithubForksCount(10);
    projectGithubForksUrl = new ProjectGithubForksUrl('jest');
    projectGithubForks = new ProjectGithubForks(10);
    projectGithubFullName = new ProjectGithubFullName('jest');
    projectGithubGitCommitsUrl = new ProjectGithubGitCommitsUrl('jest');
    projectGithubGitRefsUrl = new ProjectGithubGitRefsUrl('jest');
    projectGithubGitTagsUrl = new ProjectGithubGitTagsUrl('jest');
    projectGithubGitUrl = new ProjectGithubGitUrl('jest');
    projectGithubHomepage = new ProjectGithubHomepage('jest');
    projectGithubHooksUrl = new ProjectGithubHooksUrl('jest');
    projectGithubHtmlUrl = new ProjectGithubHtmlUrl('jest');
    projectGithubId = new ProjectGithubId(10);
    projectGithubIssueCommentUrl = new ProjectGithubIssueCommentUrl('jest');
    projectGithubIssueEventsUrl = new ProjectGithubIssueEventsUrl('jest');
    projectGithubIssuesUrl = new ProjectGithubIssuesUrl('jest');
    projectGithubKeysUrl = new ProjectGithubKeysUrl('jest');
    projectGithubLabelsUrl = new ProjectGithubLabelsUrl('jest');
    projectGithubLanguage = new ProjectGithubLanguage('jest');
    projectGithubLanguagesUrl = new ProjectGithubLanguagesUrl('jest');
    projectGithubLicense = new ProjectGithubLicense('jest');
    projectGithubMergesUrl = new ProjectGithubMergesUrl('jest');
    projectGithubMilestonesUrl = new ProjectGithubMilestonesUrl('jest');
    projectGithubMirrorUrl = new ProjectGithubMirrorUrl('jest');
    projectGithubName = new ProjectGithubName('jest');
    projectGithubNodeId = new ProjectGithubNodeId('jest');
    projectGithubNotificationsUrl = new ProjectGithubNotificationsUrl('jest');
    projectGithubOpenIssuesCount = new ProjectGithubOpenIssuesCount(10);
    projectGithubOpenIssues = new ProjectGithubOpenIssues(10);
    projectGithubPullsUrl = new ProjectGithubPullsUrl('jest');
    projectGithubReleasesUrl = new ProjectGithubReleasesUrl('jest');
    projectGithubRepositoryCreatedAt = new ProjectGithubRepositoryCreatedAt(
      date
    );
    projectGithubRepositoryId = new ProjectGithubRepositoryId(10);
    projectGithubRepositoryPushedAt = new ProjectGithubRepositoryPushedAt(date);
    projectGithubRepositoryUpdatedAt = new ProjectGithubRepositoryUpdatedAt(
      date
    );
    projectGithubSize = new ProjectGithubSize(10);
    projectGithubSshUrl = new ProjectGithubSshUrl('jest');
    projectGithubStargazersCount = new ProjectGithubStargazersCount(10);
    projectGithubStargazersUrl = new ProjectGithubStargazersUrl('jest');
    projectGithubStatusesUrl = new ProjectGithubStatusesUrl('jest');
    projectGithubSubscribersUrl = new ProjectGithubSubscribersUrl('jest');
    projectGithubSubscriptionUrl = new ProjectGithubSubscriptionUrl('jest');
    projectGithubSvnUrl = new ProjectGithubSvnUrl('jest');
    projectGithubTagsUrl = new ProjectGithubTagsUrl('jest');
    projectGithubTeamsUrl = new ProjectGithubTeamsUrl('jest');
    projectGithubTreesUrl = new ProjectGithubTreesUrl('jest');
    projectGithubUrl = new ProjectGithubUrl('jest');
    projectGithubUuid = new ProjectGithubUuid(uuid.value);
    projectGithubVisibility = new ProjectGithubVisibility('jest');
    projectGithubWatchersCount = new ProjectGithubWatchersCount(10);
    projectGithubWatchers = new ProjectGithubWatchers(10);
  });

  test('ProjectGithubArchiveUrl must be instanciate', () => {
    expect(projectGithubArchiveUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubAssigneesUrl must be instanciate', () => {
    expect(projectGithubAssigneesUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubBlobsUrl must be instanciate', () => {
    expect(projectGithubBlobsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubBranchesUrl must be instanciate', () => {
    expect(projectGithubBranchesUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubCloneUrl must be instanciate', () => {
    expect(projectGithubCloneUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubCollaboratorsUrl must be instanciate', () => {
    expect(projectGithubCollaboratorsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubCommentsUrl must be instanciate', () => {
    expect(projectGithubCommentsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubCommitsUrl must be instanciate', () => {
    expect(projectGithubCommitsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubCompareUrl must be instanciate', () => {
    expect(projectGithubCompareUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubContentsUrl must be instanciate', () => {
    expect(projectGithubContentsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubContributorsUrl must be instanciate', () => {
    expect(projectGithubContributorsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubDefaultBranchst must be instanciate', () => {
    expect(projectGithubDefaultBranch.value).toStrictEqual('jest');
  });

  test('ProjectGithubDeploymentsUrl must be instanciate', () => {
    expect(projectGithubDeploymentsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubDescription must be instanciate', () => {
    expect(projectGithubDescription.value).toStrictEqual('jest');
  });

  test('ProjectGithubDownloadsUrl must be instanciate', () => {
    expect(projectGithubDownloadsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubEventsUrl must be instanciate', () => {
    expect(projectGithubEventsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubForksCount must be instanciate', () => {
    expect(projectGithubForksCount.value).toStrictEqual(10);
  });

  test('ProjectGithubForksUrl must be instanciate', () => {
    expect(projectGithubForksUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubForks must be instanciate', () => {
    expect(projectGithubForks.value).toStrictEqual(10);
  });

  test('ProjectGithubFullName must be instanciate', () => {
    expect(projectGithubFullName.value).toStrictEqual('jest');
  });

  test('ProjectGithubGitCommitsUrl must be instanciate', () => {
    expect(projectGithubGitCommitsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubGitRefsUrl must be instanciate', () => {
    expect(projectGithubGitRefsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubGitTagsUrl must be instanciate', () => {
    expect(projectGithubGitTagsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubGitUrl must be instanciate', () => {
    expect(projectGithubGitUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubHomepage must be instanciate', () => {
    expect(projectGithubHomepage.value).toStrictEqual('jest');
  });

  test('ProjectGithubHooksUrl must be instanciate', () => {
    expect(projectGithubHooksUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubHtmlUrl must be instanciate', () => {
    expect(projectGithubHtmlUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubId must be instanciate', () => {
    expect(projectGithubId.value).toStrictEqual(10);
  });

  test('ProjectGithubIssueCommentUrl must be instanciate', () => {
    expect(projectGithubIssueCommentUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubIssueEventsUrl must be instanciate', () => {
    expect(projectGithubIssueEventsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubIssuesUrl must be instanciate', () => {
    expect(projectGithubIssuesUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubKeysUrl must be instanciate', () => {
    expect(projectGithubKeysUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubLabelsUrl must be instanciate', () => {
    expect(projectGithubLabelsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubLanguage must be instanciate', () => {
    expect(projectGithubLanguage.value).toStrictEqual('jest');
  });

  test('ProjectGithubLanguagesUrl must be instanciate', () => {
    expect(projectGithubLanguagesUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubLicense must be instanciate', () => {
    expect(projectGithubLicense.value).toStrictEqual('jest');
  });

  test('ProjectGithubMergesUrl must be instanciate', () => {
    expect(projectGithubMergesUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubMilestonesUrl must be instanciate', () => {
    expect(projectGithubMilestonesUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubMirrorUrl must be instanciate', () => {
    expect(projectGithubMirrorUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubName must be instanciate', () => {
    expect(projectGithubName.value).toStrictEqual('jest');
  });

  test('ProjectGithubNodeId must be instanciate', () => {
    expect(projectGithubNodeId.value).toStrictEqual('jest');
  });

  test('ProjectGithubNotificationsUrl must be instanciate', () => {
    expect(projectGithubNotificationsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubOpenIssuesCount must be instanciate', () => {
    expect(projectGithubOpenIssuesCount.value).toStrictEqual(10);
  });

  test('ProjectGithubOpenIssues must be instanciate', () => {
    expect(projectGithubOpenIssues.value).toStrictEqual(10);
  });

  test('ProjectGithubPullsUrl must be instanciate', () => {
    expect(projectGithubPullsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubReleasesUrl must be instanciate', () => {
    expect(projectGithubReleasesUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubRepositoryCreatedAt must be instanciate', () => {
    expect(projectGithubRepositoryCreatedAt.value).toStrictEqual(date);
  });

  test('ProjectGithubRepositoryId must be instanciate', () => {
    expect(projectGithubRepositoryId.value).toStrictEqual(10);
  });

  test('ProjectGithubRepositoryPushedAt must be instanciate', () => {
    expect(projectGithubRepositoryPushedAt.value).toStrictEqual(date);
  });

  test('ProjectGithubRepositoryUpdatedAt must be instanciate', () => {
    expect(projectGithubRepositoryUpdatedAt.value).toStrictEqual(date);
  });

  test('ProjectGithubSize must be instanciate', () => {
    expect(projectGithubSize.value).toStrictEqual(10);
  });

  test('ProjectGithubSshUrl must be instanciate', () => {
    expect(projectGithubSshUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubStargazersCount must be instanciate', () => {
    expect(projectGithubStargazersCount.value).toStrictEqual(10);
  });

  test('ProjectGithubStargazersUrl must be instanciate', () => {
    expect(projectGithubStargazersUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubStatusesUrl must be instanciate', () => {
    expect(projectGithubStatusesUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubSubscribersUrl must be instanciate', () => {
    expect(projectGithubSubscribersUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubSubscriptionUrl must be instanciate', () => {
    expect(projectGithubSubscriptionUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubSvnUrl must be instanciate', () => {
    expect(projectGithubSvnUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubTagsUrl must be instanciate', () => {
    expect(projectGithubTagsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubTeamsUrl must be instanciate', () => {
    expect(projectGithubTeamsUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubTreesUrl must be instanciate', () => {
    expect(projectGithubTreesUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubUrl must be instanciate', () => {
    expect(projectGithubUrl.value).toStrictEqual('jest');
  });

  test('ProjectGithubUuid must be instanciate', () => {
    expect(projectGithubUuid.value).toStrictEqual(uuid.value);
  });

  test('ProjectGithubVisibility must be instanciate', () => {
    expect(projectGithubVisibility.value).toStrictEqual('jest');
  });

  test('ProjectGithubWatchersCount must be instanciate', () => {
    expect(projectGithubWatchersCount.value).toStrictEqual(10);
  });

  test('ProjectGithubWatchers must be instanciate', () => {
    expect(projectGithubWatchers.value).toStrictEqual(10);
  });

  test('ProjectGithub must be instanciate', () => {
    const projectGithub = new ProjectGithub(
      projectGithubId,
      projectGithubUuid,
      projectGithubRepositoryId,
      projectGithubNodeId,
      projectGithubName,
      projectGithubFullName,
      true,
      projectGithubHtmlUrl,
      projectGithubDescription,
      true,
      projectGithubUrl,
      projectGithubForksUrl,
      projectGithubKeysUrl,
      projectGithubCollaboratorsUrl,
      projectGithubTeamsUrl,
      projectGithubHooksUrl,
      projectGithubIssueEventsUrl,
      projectGithubEventsUrl,
      projectGithubAssigneesUrl,
      projectGithubBranchesUrl,
      projectGithubTagsUrl,
      projectGithubBlobsUrl,
      projectGithubGitTagsUrl,
      projectGithubGitRefsUrl,
      projectGithubTreesUrl,
      projectGithubStatusesUrl,
      projectGithubLanguagesUrl,
      projectGithubStargazersUrl,
      projectGithubContributorsUrl,
      projectGithubSubscribersUrl,
      projectGithubSubscriptionUrl,
      projectGithubCommitsUrl,
      projectGithubGitCommitsUrl,
      projectGithubCommentsUrl,
      projectGithubIssueCommentUrl,
      projectGithubContentsUrl,
      projectGithubCompareUrl,
      projectGithubMergesUrl,
      projectGithubArchiveUrl,
      projectGithubDownloadsUrl,
      projectGithubIssuesUrl,
      projectGithubPullsUrl,
      projectGithubMilestonesUrl,
      projectGithubNotificationsUrl,
      projectGithubLabelsUrl,
      projectGithubReleasesUrl,
      projectGithubDeploymentsUrl,
      projectGithubGitUrl,
      projectGithubSshUrl,
      null,
      projectGithubSvnUrl,
      projectGithubHomepage,
      projectGithubSize,
      projectGithubStargazersCount,
      projectGithubWatchersCount,
      projectGithubLanguage,
      true,
      true,
      true,
      true,
      true,
      projectGithubForksCount,
      projectGithubMirrorUrl,
      true,
      true,
      projectGithubOpenIssuesCount,
      projectGithubLicense,
      true,
      true,
      true,
      projectGithubVisibility,
      projectGithubForksCount,
      projectGithubOpenIssues,
      projectGithubWatchers,
      projectGithubDefaultBranch,
      true,
      true,
      false,
      true,
      true,
      projectGithubRepositoryCreatedAt,
      projectGithubRepositoryUpdatedAt,
      projectGithubRepositoryPushedAt
    );

    expect(projectGithub.sshUrl?.value).toStrictEqual('jest');
    expect(projectGithub.cloneUrl).toBeNull();
    expect(projectGithub.stargazersCount?.value).toStrictEqual(10);
    expect(projectGithub.repositoryCreatedAt?.value).toStrictEqual(date);
    expect(projectGithub.permissionsAdmin).toBeTruthy();
    expect(projectGithub.permissionsPush).toBeFalsy();
  });
});

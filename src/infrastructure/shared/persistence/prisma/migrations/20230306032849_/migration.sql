-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('UNDEFINED', 'MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'AUDITOR');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR(1000) NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'UNDEFINED',
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(500) NOT NULL,
    "birthDate" DATE NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(100) NOT NULL,
    "address" VARCHAR(1500) NOT NULL,
    "profilePicUrl" VARCHAR(2500) NOT NULL,
    "passwordHash" VARCHAR(100) NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "googleOIDC" BOOLEAN NOT NULL DEFAULT false,
    "roles" "Role"[] DEFAULT ARRAY['USER']::"Role"[],
    "forgotPasswordToken" VARCHAR(1500),
    "createdAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(255),
    "updatedAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" VARCHAR(255),
    "deletedAt" TIMESTAMPTZ(3),
    "deletedBy" VARCHAR(255),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR(1000) NOT NULL,
    "userUuid" VARCHAR(1000) NOT NULL,
    "userData" JSONB NOT NULL,
    "refreshTokenHash" VARCHAR(5000) NOT NULL,
    "revokedAt" TIMESTAMPTZ(3),
    "revokedBy" VARCHAR(255),
    "revocationReason" VARCHAR(1000),
    "expiresAt" TIMESTAMPTZ(3) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(255),
    "updatedAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" VARCHAR(255),
    "deletedAt" TIMESTAMPTZ(3),
    "deletedBy" VARCHAR(255),

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR(1000) NOT NULL,
    "publicName" VARCHAR(255) NOT NULL,
    "privateName" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(255),
    "updatedAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" VARCHAR(255),
    "deletedAt" TIMESTAMPTZ(3),
    "deletedBy" VARCHAR(255),

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectGithub" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR(1000) NOT NULL,
    "repositoryid" INTEGER NOT NULL,
    "nodeid" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "private" BOOLEAN NOT NULL,
    "htmlUrl" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "fork" BOOLEAN NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "forksUrl" VARCHAR(255) NOT NULL,
    "keysUrl" VARCHAR(255) NOT NULL,
    "collaboratorsUrl" VARCHAR(255) NOT NULL,
    "teamsUrl" VARCHAR(255) NOT NULL,
    "hooksUrl" VARCHAR(255) NOT NULL,
    "issueEventsUrl" VARCHAR(255) NOT NULL,
    "eventsUrl" VARCHAR(255) NOT NULL,
    "assigneesUrl" VARCHAR(255) NOT NULL,
    "branchesUrl" VARCHAR(255) NOT NULL,
    "tagsUrl" VARCHAR(255) NOT NULL,
    "blobsUrl" VARCHAR(255) NOT NULL,
    "gitTagsUrl" VARCHAR(255) NOT NULL,
    "gitRefsUrl" VARCHAR(255) NOT NULL,
    "treesUrl" VARCHAR(255) NOT NULL,
    "statusesUrl" VARCHAR(255) NOT NULL,
    "languagesUrl" VARCHAR(255) NOT NULL,
    "stargazersUrl" VARCHAR(255) NOT NULL,
    "contributorsUrl" VARCHAR(255) NOT NULL,
    "subscribersUrl" VARCHAR(255) NOT NULL,
    "subscriptionUrl" VARCHAR(255) NOT NULL,
    "commitsUrl" VARCHAR(255) NOT NULL,
    "gitCommitsUrl" VARCHAR(255) NOT NULL,
    "commentsUrl" VARCHAR(255) NOT NULL,
    "issueCommentUrl" VARCHAR(255) NOT NULL,
    "contentsUrl" VARCHAR(255) NOT NULL,
    "compareUrl" VARCHAR(255) NOT NULL,
    "mergesUrl" VARCHAR(255) NOT NULL,
    "archiveUrl" VARCHAR(255) NOT NULL,
    "downloadsUrl" VARCHAR(255) NOT NULL,
    "issuesUrl" VARCHAR(255) NOT NULL,
    "pullsUrl" VARCHAR(255) NOT NULL,
    "milestonesUrl" VARCHAR(255) NOT NULL,
    "notificationsUrl" VARCHAR(255) NOT NULL,
    "labelsUrl" VARCHAR(255) NOT NULL,
    "releasesUrl" VARCHAR(255) NOT NULL,
    "deploymentsUrl" VARCHAR(255) NOT NULL,
    "gitUrl" VARCHAR(255),
    "sshUrl" VARCHAR(255),
    "cloneUrl" VARCHAR(255),
    "svnUrl" VARCHAR(255),
    "homepage" VARCHAR(255),
    "size" INTEGER,
    "stargazersCount" INTEGER,
    "watchersCount" INTEGER,
    "language" VARCHAR(255),
    "hasIssues" BOOLEAN,
    "hasProjects" BOOLEAN,
    "hasDownloads" BOOLEAN,
    "hasWiki" BOOLEAN,
    "hasPages" BOOLEAN,
    "hasDiscussions" BOOLEAN,
    "forksCount" INTEGER,
    "mirrorUrl" VARCHAR(255),
    "archived" BOOLEAN,
    "disabled" BOOLEAN,
    "openIssuesCount" INTEGER,
    "license" VARCHAR(255),
    "allowForking" BOOLEAN,
    "isTemplate" BOOLEAN,
    "webCommitSignoffRequired" BOOLEAN,
    "visibility" VARCHAR(255),
    "forks" INTEGER,
    "openIssues" INTEGER,
    "watchers" INTEGER,
    "defaultBranch" VARCHAR(255),
    "permissionsAdmin" BOOLEAN,
    "permissionsMaintain" BOOLEAN,
    "permissionsPush" BOOLEAN,
    "permissionsTriage" BOOLEAN,
    "permissionsPull" BOOLEAN,
    "repositoryCreatedAt" TIMESTAMPTZ(3),
    "repositoryUpdatedAt" TIMESTAMPTZ(3),
    "repositoryPushedAt" TIMESTAMPTZ(3),
    "createdAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(255),
    "updatedAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" VARCHAR(255),
    "deletedAt" TIMESTAMPTZ(3),
    "deletedBy" VARCHAR(255),

    CONSTRAINT "ProjectGithub_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectSlack" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR(1000) NOT NULL,
    "channelId" VARCHAR(255),
    "contextTeamId" VARCHAR(255),
    "conversationHostId" VARCHAR(255),
    "created" INTEGER,
    "creator" VARCHAR(255),
    "internalTeamIds" TEXT[],
    "isArchived" BOOLEAN,
    "isChannel" BOOLEAN,
    "isExtShared" BOOLEAN,
    "isGeneral" BOOLEAN,
    "isGlobalShared" BOOLEAN,
    "isGroup" BOOLEAN,
    "isIm" BOOLEAN,
    "isMember" BOOLEAN,
    "isMoved" INTEGER,
    "isMpim" BOOLEAN,
    "isOrgDefault" BOOLEAN,
    "isOrgMandatory" BOOLEAN,
    "isOrgShared" BOOLEAN,
    "isPendingExtShared" BOOLEAN,
    "isPrivate" BOOLEAN,
    "isShared" BOOLEAN,
    "isUserDeleted" BOOLEAN,
    "name" VARCHAR(255),
    "nameNormalized" VARCHAR(255),
    "numMembers" INTEGER,
    "pendingConnectedTeamIds" TEXT[],
    "pendingShared" TEXT[],
    "previousNames" TEXT[],
    "priority" INTEGER,
    "purposeCreator" VARCHAR(255),
    "purposeLastSet" INTEGER,
    "purposeValue" VARCHAR(255),
    "topicCreator" VARCHAR(255),
    "topicLastSet" INTEGER,
    "topicValue" VARCHAR(255),
    "unlinked" INTEGER,
    "user" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(255),
    "updatedAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" VARCHAR(255),
    "deletedAt" TIMESTAMPTZ(3),
    "deletedBy" VARCHAR(255),

    CONSTRAINT "ProjectSlack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectDrive" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR(1000) NOT NULL,
    "folderId" VARCHAR(500),
    "name" VARCHAR(500),
    "url" VARCHAR(500),
    "projectUid" TEXT,
    "createdAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(255),
    "updatedAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" VARCHAR(255),
    "deletedAt" TIMESTAMPTZ(3),
    "deletedBy" VARCHAR(255),

    CONSTRAINT "ProjectDrive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookmark" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR(1000) NOT NULL,
    "name" VARCHAR(1000) NOT NULL,
    "description" VARCHAR(1000),
    "url" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(255),
    "updatedAt" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" VARCHAR(255),
    "deletedAt" TIMESTAMPTZ(3),
    "deletedBy" VARCHAR(255),

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_uuid_key" ON "Session"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Project_uuid_key" ON "Project"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_uuid_key" ON "ProjectGithub"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_repositoryid_key" ON "ProjectGithub"("repositoryid");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_name_key" ON "ProjectGithub"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_fullName_key" ON "ProjectGithub"("fullName");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_htmlUrl_key" ON "ProjectGithub"("htmlUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_url_key" ON "ProjectGithub"("url");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_forksUrl_key" ON "ProjectGithub"("forksUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_keysUrl_key" ON "ProjectGithub"("keysUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_collaboratorsUrl_key" ON "ProjectGithub"("collaboratorsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_teamsUrl_key" ON "ProjectGithub"("teamsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_hooksUrl_key" ON "ProjectGithub"("hooksUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_issueEventsUrl_key" ON "ProjectGithub"("issueEventsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_eventsUrl_key" ON "ProjectGithub"("eventsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_assigneesUrl_key" ON "ProjectGithub"("assigneesUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_branchesUrl_key" ON "ProjectGithub"("branchesUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_tagsUrl_key" ON "ProjectGithub"("tagsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_blobsUrl_key" ON "ProjectGithub"("blobsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_gitTagsUrl_key" ON "ProjectGithub"("gitTagsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_gitRefsUrl_key" ON "ProjectGithub"("gitRefsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_treesUrl_key" ON "ProjectGithub"("treesUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_statusesUrl_key" ON "ProjectGithub"("statusesUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_languagesUrl_key" ON "ProjectGithub"("languagesUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_stargazersUrl_key" ON "ProjectGithub"("stargazersUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_contributorsUrl_key" ON "ProjectGithub"("contributorsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_subscribersUrl_key" ON "ProjectGithub"("subscribersUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_subscriptionUrl_key" ON "ProjectGithub"("subscriptionUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_commitsUrl_key" ON "ProjectGithub"("commitsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_gitCommitsUrl_key" ON "ProjectGithub"("gitCommitsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_commentsUrl_key" ON "ProjectGithub"("commentsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_issueCommentUrl_key" ON "ProjectGithub"("issueCommentUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_contentsUrl_key" ON "ProjectGithub"("contentsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_compareUrl_key" ON "ProjectGithub"("compareUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_mergesUrl_key" ON "ProjectGithub"("mergesUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_archiveUrl_key" ON "ProjectGithub"("archiveUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_downloadsUrl_key" ON "ProjectGithub"("downloadsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_issuesUrl_key" ON "ProjectGithub"("issuesUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_pullsUrl_key" ON "ProjectGithub"("pullsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_milestonesUrl_key" ON "ProjectGithub"("milestonesUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_notificationsUrl_key" ON "ProjectGithub"("notificationsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_labelsUrl_key" ON "ProjectGithub"("labelsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_releasesUrl_key" ON "ProjectGithub"("releasesUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_deploymentsUrl_key" ON "ProjectGithub"("deploymentsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_gitUrl_key" ON "ProjectGithub"("gitUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_sshUrl_key" ON "ProjectGithub"("sshUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_cloneUrl_key" ON "ProjectGithub"("cloneUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectGithub_svnUrl_key" ON "ProjectGithub"("svnUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectSlack_uuid_key" ON "ProjectSlack"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectSlack_channelId_key" ON "ProjectSlack"("channelId");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectSlack_name_key" ON "ProjectSlack"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectSlack_nameNormalized_key" ON "ProjectSlack"("nameNormalized");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectDrive_uuid_key" ON "ProjectDrive"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectDrive_folderId_key" ON "ProjectDrive"("folderId");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectDrive_name_key" ON "ProjectDrive"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectDrive_projectUid_key" ON "ProjectDrive"("projectUid");

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_uuid_key" ON "Bookmark"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_name_key" ON "Bookmark"("name");

-- AddForeignKey
ALTER TABLE "ProjectDrive" ADD CONSTRAINT "ProjectDrive_projectUid_fkey" FOREIGN KEY ("projectUid") REFERENCES "Project"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

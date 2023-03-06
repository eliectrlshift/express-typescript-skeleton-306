import { google, drive_v3 } from 'googleapis';
import {
  ProjectDrive,
  ProjectDriveFolderId,
  ProjectDriveName,
  ProjectDriveUrl,
  ProjectDriveUuid,
} from '@domain/projects-drive';
import { DrivesApiDomainService } from '@domain/shared/services/drives-api.domain-service';
import { GoogleApi } from '@infrastructure/shared/google-api';
import { InfrastructureService } from '@infrastructure/shared/infrastructure-service.decorator';

@InfrastructureService(DrivesApiDomainService)
class GoogleDriveApiService extends DrivesApiDomainService {
  private readonly client = new GoogleApi().authorize();
  private readonly drive = google.drive({ version: 'v3', auth: this.client });

  list = async (): Promise<drive_v3.Schema$File[]> => {
    const files = await this.drive.files.list({
      corpora: 'drive',
      supportsAllDrives: true,
      driveId: 'value',
      includeItemsFromAllDrives: true,
      q: 'mimeType = "application/vnd.google-apps.folder" and "value" in parents',
    });

    return files.data.files
      ? files.data.files.filter(
          (file) => file.mimeType === 'application/vnd.google-apps.folder'
        )
      : [];
  };

  create = async () => {
    console.log('create function');
  };

  toDomainEntity = async (data: drive_v3.Schema$File): Promise<ProjectDrive> =>
    new ProjectDrive(
      undefined,
      ProjectDriveUuid.random(),
      data.id ? new ProjectDriveFolderId(data.id) : null,
      data.name ? new ProjectDriveName(data.name) : null,
      data.id
        ? new ProjectDriveUrl(
            `https://drive.google.com/drive/folders/${data.id}`
          )
        : null
    );
}

export { GoogleDriveApiService };

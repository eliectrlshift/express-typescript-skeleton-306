import { google } from 'googleapis';

class GoogleApi {
  private readonly client_id =
    'token';
  private readonly client_secret = 'token';
  private readonly refresh_token =
    'token';
  private readonly redirect_url =
    'https://developers.google.com/oauthplayground';

  authorize = () => {
    const oauth2Client = new google.auth.OAuth2(
      this.client_id,
      this.client_secret,
      this.redirect_url
    );

    oauth2Client.setCredentials({ refresh_token: this.refresh_token });

    return oauth2Client;
  };
}

export { GoogleApi };

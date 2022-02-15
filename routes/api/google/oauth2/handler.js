import { google } from 'googleapis';
import clientSecret from './.client_secret.json';

const get = async (req, res, next) => {
  console.log(req.query.refreshToken);
  if(process.env.ACCESS_TOKEN && req.query.refreshToken === undefined) {
    res.status(200).end('ACCESS TOKEN exists already!');
  } else if (process.env.ACESS_TOKEN === undefined || req.query.refreshToken === 'true') {
    const googleOAuth = () => {
      let oauth2Client = new google.auth.OAuth2(
        clientSecret.web.client_id,
        clientSecret.web.client_secret,
        clientSecret.web.redirect_uris[0]
      );
      let scopes = [
        'https://www.googleapis.com/auth/analytics.readonly'
      ];
      let url = oauth2Client.generateAuthUrl({
        access_type: 'online',
        scope: scopes
      });
      return url;
    }
    const url = await googleOAuth();
    res.redirect(url);
  }
}

const getRedirect = async (req, res, next) => {
  const code = await req.query.code;
  if(process.env.ACCESS_TOKEN) {
    res.status(200).end('ACCESS TOKEN exists already!');
  } else if (code && process.env.ACCESS_TOKEN == undefined) {
    process.env.ACCESS_TOKEN = code;
    res.status(200).end('ACCESS TOKEN is issued.');
  }
}

export {
  get,
  getRedirect
}
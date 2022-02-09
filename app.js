import express from 'express';

import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import clientSecret from './.client_secret.json';
import axios from 'axios';
import { google } from 'googleapis';
//import mongoose from 'mongoose';

import analyticsRouter from '@api/google/analytics/router';
import oauth2Router from '@api/google/oauth2/router';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/google/analytics", analyticsRouter);
app.use("/api/google/oauth2", oauth2Router);

// when starting server, get auth from google oauth2, save access toke to .env
const googleOAuth = async () => {
  const oauth2Client = new google.auth.OAuth2(
    clientSecret.web["client_id"],
    clientSecret.web["client_secret"],
    'http://localhost:3000/api/google/oauth2'
  );
  const scopes = [
    'https://www.googleapis.com/auth/analytics.readonly'
  ];
  const url = oauth2Client.generateAuthUrl({
    access_type: 'online',
    scope: scopes,
    response_type: 'token'
  });
  try {
    const call = await axios.get(url);
  } catch (error) {
    console.error(error);
  }
}

googleOAuth();

export default app
import express from 'express';

import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
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

export default app
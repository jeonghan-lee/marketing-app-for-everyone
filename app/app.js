import express from 'express';

import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
//import mongoose from 'mongoose';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

export default app;
import express from 'express';
import { get, getRedirect } from './handler';

const router = express.Router();

router.get('/', (req, res, next) => get(req, res, next));

router.get('/redirect', (req, res, next) => getRedirect(req, res, next));

export default router;
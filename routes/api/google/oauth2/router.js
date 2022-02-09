import express from 'express';
import { get, post } from './handler';

const router = express.Router();

router.get('/', (req, res, next) => post(req, res, next));


router.post('/', (req, res, next) => post(req, res, next));

export default router;
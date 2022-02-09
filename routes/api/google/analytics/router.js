import express from 'express';
import { get } from "./handler";

const router = express.Router();

router.get("/", (req, res, next) => get(req, res, next))

export default router
import express from 'express';

// routes for skills
export const skillRouter = express.Router();
import { getAllSkills } from '../controllers/skills.controller.js';
skillRouter.get('/skills', getAllSkills);
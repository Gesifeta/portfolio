import express from 'express';
import { getAllSkills } from "../controllers/skill.controller.js";
// routes for skills
export const skillRouter = express.Router();

skillRouter.get('/skills', getAllSkills);
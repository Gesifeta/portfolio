import express from "express";

import {
  getAllExperiences,
  addNewExperience,
  deleteExperience,
  updateExperience,
  getExperienceById,
  uploadExperienceImage,
  getExperienceByUserId,
} from "../controllers/experience.controller.js";
// routes for the experiences
export const experienceRoutes = express.Router();
experienceRoutes.get("/experiences", getAllExperiences);
experienceRoutes.post("/experiences/new",express.json(), addNewExperience);
experienceRoutes.delete("/experiences/:id", express.json(), deleteExperience);
experienceRoutes.put("/experiences/:id", express.json(), updateExperience);
experienceRoutes.get("/experiences/:id", getExperienceById);
experienceRoutes.post(
  "/experiences/:id/upload",
  express.json(),
  uploadExperienceImage,
  updateExperience
);
// get experience by user id
experienceRoutes.get("/experiences/user/:id", getExperienceByUserId);
export default experienceRoutes;

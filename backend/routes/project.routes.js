import express from "express";
import multer from "multer";
import { fileStorageEngine } from "../utils/upload.js";
import { isAuthenticated } from "../auth/middleware.js";

import {
  addNewProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  uploadProjectImage,
} from "../controllers/project.controller.js";

// project routes
export const projectRoutes = express.Router();

projectRoutes.post("/projects/new", addNewProject);
projectRoutes.get("/projects", getAllProjects);
projectRoutes.get("/projects/:id", getProjectById);
// upload images using multer

const upload = multer({ storage: fileStorageEngine });
projectRoutes.post(
  "/projects/upload",
  upload.single("file"),
  uploadProjectImage
);

projectRoutes.put("/projects/:id", updateProject);
projectRoutes.delete("/projects/:id", deleteProject);

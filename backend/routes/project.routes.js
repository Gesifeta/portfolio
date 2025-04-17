import express from "express";
import multer from "multer";
import crypto from "crypto";

import {
  addNewProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  uploadImage,
} from "../controllers/project.controller.js";

// project routes
export const projectRoutes = express.Router();

projectRoutes.post("/projects/new", addNewProject);
projectRoutes.get("/projects", getAllProjects);
projectRoutes.get("/projects/:id", getProjectById);
// upload images using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname );
  },
});
const upload = multer({ storage: storage });
projectRoutes.post("/projects/upload", upload.single("image"), uploadImage);

projectRoutes.put("/projects/:id", updateProject);
projectRoutes.delete("/projects/:id", deleteProject);

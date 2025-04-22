
import express from "express";
import {
  addNewEducation,
  getAllEducations,
  getEducationById,
  deleteEducation,
  updateEducation,
} from "../controllers/education.controller.js";

export const educationRoutes = express.Router();
educationRoutes.get("/educations", getAllEducations);
educationRoutes.post("/educations/new", express.json(), addNewEducation);
educationRoutes.get("/educations/:id", getEducationById);
educationRoutes.delete("/educations/:id", deleteEducation);
educationRoutes.put("/educations/:id", express.json(), updateEducation);
educationRoutes.get("/educations/user/:id", getEducationById);

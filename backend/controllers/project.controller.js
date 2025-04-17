import { ordinaryDatabaseQuery } from "../database/db";

// A function to post new project
export const postNewProject = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      technologies,
      live_url,
      image_url,
      github_url,
    } = req.body;
    const queryString = `INSERT INTO projects (id,title, description, category, technologies, live_url, github_url, image_url) VALUES ($1, $2, $3, $4, $5,$6, $7,$8) RETURNING *`;
    const params = [
      title,
      description,
      category,
      technologies,
      live_url,
      github_url,
      image_url,
    ];
    const result = await ordinaryDatabaseQuery(queryString, params);
    return res.json(result.rows[0]);
  } catch (error) {
    return res.json({
      error: error.message,
      message: "Unexpected error occured",
    });
  }
};

// Function definitions
export const getAllProjects = async (req, res) => {
  try {
    const queryString = `SELECT * FROM projects`;
    const result = await ordinaryDatabaseQuery(queryString);
    if (result.rowCount === 0) {
      return res.json({
        message: "No categories found",
      });
    }
    return res.json(result.rows);
  } catch (error) {
    return res.json({
      error: error.message,
      message: "Unexpected error occured",
    });
  }
};

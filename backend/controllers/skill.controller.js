import { ordinaryDatabaseQuery } from "../database/db.js";

// Route for getting all the skills
export const getAllSkills = async (req, res) => {
  try {
    const queryString = `SELECT * FROM skills`;
    const result = await ordinaryDatabaseQuery(queryString);
    if (result.rowCount === 0) {
      return res.json({
        message: "No skills found",
      });
    }
    // Return the skills
    return res.json(result.rows);
  } catch (error) {
    return res.json({
      error: error.message,
      message: "Unexpected error occured",
    });
  }
};
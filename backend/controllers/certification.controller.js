import { ordinaryDatabaseQuery } from "../database/db.js";

// a function to add new certifications
export const addNewCertification = async (req, res) => {
  try {
    const {
      id,
      user_id,
      title,
      description,
      certification_number,
      certification_link,
      awarded_by,
      awarded_date,
      expiration_date,
      image_url,
      icon_url,
    } = req.body;
    const queryString = `INSERT INTO certifications (id, user_id, title, description, certification_number, certification_link, awarded_by, awarded_date, expiration_date, image_url, icon_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`;
    const params = [
      id,
      user_id,
      title,
      description,
      certification_number,
      certification_link,
      awarded_by,
      awarded_date,
      expiration_date,
      image_url,
      icon_url,
    ];
    const result = await ordinaryDatabaseQuery(queryString, params);
    console.log(result.rows[0]);
    return res.json(result.rows);
  } catch (error) {
    console.log(error);
    return res.json({
      error: error.message,
      message: "Unexpected error occured",
    });
  }
};

// A fucntion to get all certifications

import { ordinaryDatabaseQuery } from "../database/db.js";

export async function doesItExist(id, entity) {
  try {
    const queryString = `SELECT * FROM $2 WHERE id = $1`;
    const params = [id, entity];
    const result = await ordinaryDatabaseQuery(queryString, params);
    if (result.rows.length === 0) {
      return false;
    }
    return true;
  } catch (error) {
    return error;
  }
}

import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";


import {
  verifyToken,
  generateSalt,
  generateToken,
  hashPassword,
} from "../auth/authentication.js";

import { ordinaryDatabaseQuery } from "../database/db.js";
import { doesItExist } from "../validation/search.js";

// function to register user
export const registerUser = async (req, res) => {
  try {
    const {
      user_name,
      email,
      password,
      first_name,
      last_name,
      profile_image,
      bio,
    } = req.body;
    // check if user is already registered
    console.log(await doesItExist(email,"users"))
    if (await doesItExist(email, "users")) {
      return res.json({
        error: "Email is arlead registered",
        message: "If you forget your password please reset.",
      });
    }
    // generate salt
    const salt = generateSalt();
    // hash password
    const hashedPassword = hashPassword(password, salt);

    const queryString = `INSERT INTO users (id, user_name, first_name, last_name, email, password, profile_image, bio) VALUES ($1, $2, $3, $4,$5, $6, $7, $8)  RETURNING id, first_name, last_name, email, profile_image`;
    const params = [
      uuidv4(),
      user_name,
      first_name,
      last_name,
      email,
      hashedPassword,
      profile_image,
      bio,
    ];
    const result = await ordinaryDatabaseQuery(queryString, params);
    if (result.rows.length === 0) {
      return res.status(400).json({ message: "User not created" });
    }
    // generate token
    const token = generateToken({
      id: result.rows[0].id,
      email: result.rows[0].email,
      first_name: result.rows[0].first_name,
      last_name: result.rows[0].last_name,
      profile_image: result.rows[0].profile_image,
    });
    // set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 5,
      sameSite: "none",
    });
    // navigate to login
    
    return res.json({
      message: "User created successfully",
      data: result.rows[0],
    }) ;
  } catch (error) {
    return res.json({
      error: error.message,
      message: "Unexpected error occured",
    });
  }
};
// function to login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const queryString = `SELECT * FROM users WHERE email = $1 AND password = $2`;
    const params = [email, password];
    const result = await ordinaryDatabaseQuery(queryString, params);
    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    return res.json(result.rows[0]);
  } catch (error) {}
};

// function to get user by id
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const queryString = `SELECT * FROM users WHERE id = $1`;
    const params = [id];
    const result = await ordinaryDatabaseQuery(queryString, params);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(result.rows[0]);
  } catch (error) {}
};
// function to get all users
export const getAllUsers = async (req, res) => {
  try {
    const queryString = `SELECT * FROM users`;
    const result = await ordinaryDatabaseQuery(queryString);
    return res.json(result.rows);
  } catch (error) {}
};
// function to update user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_name, email, password } = req.body;
    const queryString = `UPDATE users SET user_name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *`;
    const params = [user_name, email, password, id];
    const result = await ordinaryDatabaseQuery(queryString, params);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(result.rows[0]);
  } catch (error) {}
};
// function to delete user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const queryString = `DELETE FROM users WHERE id = $1 RETURNING *`;
    const params = [id];
    const result = await ordinaryDatabaseQuery(queryString, params);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(result.rows[0]);
  } catch (error) {}
};
// function to get user by email
export const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const queryString = `SELECT * FROM users WHERE email = $1`;
    const params = [email];
    const result = await ordinaryDatabaseQuery(queryString, params);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(result.rows[0]);
  } catch (error) {}
};
// function to get user by user_name
export const getUserByUser_name = async (req, res) => {
  try {
    const { user_name } = req.params;
    const queryString = `SELECT * FROM users WHERE user_name = $1`;
    const params = [user_name];
    const result = await ordinaryDatabaseQuery(queryString, params);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(result.rows[0]);
  } catch (error) {}
};
// function to get user by user_name or email
export const getUserByUser_nameOrEmail = async (req, res) => {
  try {
    const { user_nameOrEmail } = req.params;
    const queryString = `SELECT * FROM users WHERE user_name = $1 OR email = $1`;
    const params = [user_nameOrEmail];
    const result = await ordinaryDatabaseQuery(queryString, params);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(result.rows[0]);
  } catch (error) {}
};
// function to get user by user_name or email or password
export const getUserByUser_nameOrEmailOrPassword = async (req, res) => {
  try {
    const { user_nameOrEmailOrPassword } = req.params;
    const queryString = `SELECT * FROM users WHERE user_name = $1 OR email = $1 OR password = $1`;
    const params = [user_nameOrEmailOrPassword];
    const result = await ordinaryDatabaseQuery(queryString, params);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(result.rows[0]);
  } catch (error) {}
};
// function to get user by user_name or email or password or id
export const getUserByUser_nameOrEmailOrPasswordOrId = async (req, res) => {
  try {
    const { user_nameOrEmailOrPasswordOrId } = req.params;
    const queryString = `SELECT * FROM users WHERE user_name = $1 OR email = $1 OR password = $1 OR id = $1`;
    const params = [user_nameOrEmailOrPasswordOrId];
    const result = await ordinaryDatabaseQuery(queryString, params);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(result.rows[0]);
  } catch (error) {}
};

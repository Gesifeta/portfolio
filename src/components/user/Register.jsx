import React, { useState } from "react";
import { API_URL } from "../../utils/constants";

const Register = () => {
  const [user, setUser] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState({
    error: "",
    message: "",
  });
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle user input
  const handleUserInput = (e) => {
    setError({
      error: "",
      message: "",
    });
    const { name, value } = e.target;
    return setUser((prev) => ({ ...prev, [name]: value }));
  };
  // function to handle user form
  const handleUserForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
         setLoading(false);
      const data = await response.json();
      if (data.error) {
        setError({
          error: data.error,
          message: data.message,
        });
      }
    }
  };
  return (
    <div className="container-form">
      <h1>Register</h1>
      <p>Register to access the full features of the app</p>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
      <form
        className="user-form"
        action=""
        method="post"
        onSubmit={handleUserForm}
      >
        <div className="form-group">
          <label htmlFor="user_name">User name</label>
          <input
            type="text"
            value={user.user_name}
            name="user_name"
            id="user_name"
            placeholder="User name"
            onChange={handleUserInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            value={user.first_name}
            name="first_name"
            id="first_name"
            placeholder="First name"
            onChange={handleUserInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            value={user.last_name}
            name="last_name"
            id="last_name"
            placeholder="Last name"
            onChange={handleUserInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={user.email}
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleUserInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={user.password}
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleUserInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">Repeat password</label>
          <input
            type="password"
            value={user.confirm_password}
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            onChange={handleUserInput}
          />
        </div>
        <div className="form-group">
          <p style={{ color: "red" }}>{error.error}</p>
          <p style={{ color: "red" }}>{error.message}</p>
        </div>
        <div className="btn-group">
          <button type="submit">Register</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

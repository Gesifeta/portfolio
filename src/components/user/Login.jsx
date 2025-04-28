import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

import { API_URL } from "../../utils/constants.js";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState({
    data: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    error: "",
    message: "",
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { mutateAsync: userLogin, isLoading } = useMutation({
    mutationFn: async (data) => {
      return await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => data);
    },
    mutationKey: ["login"],
    onSuccess: (data) => {
      if (data.error) {
        setErrorMessage({
          error: data.error,
          message: data.message,
        });
        setSuccess("");
        localStorage.removeItem("user");
      } else {
        setSuccess(data);
        localStorage.setItem("user", JSON.stringify(data.user));
        setErrorMessage("");
        return navigate("/home", { replace: true });
      }
    },
    onError: (err) => {
      setErrorMessage({
        error: err.error,
        message: err.message,
      });
    },
  });
  function handleUserInput(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return isLoading ? (
    <Loader />
  ) : (
    <div className="login-form">
      <h2>Login</h2>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>

      <fieldset>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await userLogin(user);
          }}
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              autoComplete="on"
              onChange={handleUserInput}
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              autoComplete="on"
              onChange={handleUserInput}
              id="password"
              placeholder="Password"
            />
          </div>
          {success.message && (
            <p style={{ color: success.error ? "red" : "green" }}>
              {success.message}
            </p>
          )}
          {errorMessage.message && (
            <p style={{ color: "red" }}>
              {errorMessage.message},{errorMessage.error}
            </p>
          )}
          <p>
            Forgot your password? <a href="/forgot-password">Forgot password</a>
          </p>
          <div className="btn-group">
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;

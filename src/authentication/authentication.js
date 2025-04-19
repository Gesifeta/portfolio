import { useNavigate } from "react-router-dom";

export function isAuthenticated() {
  const token = localStorage.getItem("user");
  if (!token) {
    return window.location.replace("/login");
  }
  return token;
}

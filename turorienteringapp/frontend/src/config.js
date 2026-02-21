// Prefer explicit environment value; fall back to sensible defaults.
const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://tur-orienterings-app-backend.onrender.com"
    : "http://localhost:8000");

export default API_BASE_URL; 

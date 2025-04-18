import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("Login", "routes/Login.tsx"),
  route("Dashboard", "routes/Dashboard.jsx"),
  route("Mocktest", "routes/Mocktest.jsx"),
  route("test", "routes/test.tsx"),
] satisfies RouteConfig;

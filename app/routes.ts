import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("/jobs", "routes/jobs.jsx"),
  route("/jobs/new", "routes/form.jsx"),
  route("/jobs/:id", "routes/details.jsx"),
] satisfies RouteConfig;

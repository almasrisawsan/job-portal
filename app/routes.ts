import { type RouteConfig, index, route } from "@react-router/dev/routes";
export default [
  index("routes/landingPage.tsx"),
  route("/jobs/jobs-list", "routes/jobs/jobListPage.tsx"),
  route("/jobs/:id", "routes/jobs/jobDetailsPage.tsx"),
  route("/jobs/create-job", "routes/jobs/createJobPage.tsx"),
] satisfies RouteConfig;

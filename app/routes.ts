import { type RouteConfig, index, route } from "@react-router/dev/routes";
export default [
  index("routes/landingPage.tsx"),
  route("/job/jobs-list", "routes/jobs/jobListPage.tsx"),
  route("/job/:id", "routes/jobs/jobDetailsPage.tsx"),
  route("/job/create-job", "routes/jobs/createJobPage.tsx"),
  route("/job/job-info", "routes/jobs/jobInfoPage.tsx"),
] satisfies RouteConfig;

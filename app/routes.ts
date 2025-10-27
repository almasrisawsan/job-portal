
import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layout.tsx", [
    index("routes/Home/home.tsx"),
    route("/job/:jobId", "routes/JobDetails/JobDetails.tsx"),
    route("/create-job", "routes/CreateJob/CreateJob.jsx"),
    route("/dashboard", "routes/Dashboard/Dashboard.jsx"),
  ]),
] satisfies RouteConfig;

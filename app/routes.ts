import { type RouteConfig, index, route } from "@react-router/dev/routes";
export default [
  index("routes/home.tsx"),
  route("/form", "routes/form/Form.jsx"),
] satisfies RouteConfig;

import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("category/:id", "routes/category/category.jsx", {
    id: "category-detail",
  }),
  route("job/:id", "routes/job/job.jsx", { id: "user-detail" }),
  route("/jobs-list","routes/JobListPage.tsx")

] satisfies RouteConfig;

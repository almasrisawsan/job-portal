import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("category/:id", "routes/category/category.jsx", {
    id: "category-detail",
  }),
  route("job/:id", "routes/Job/JobDetailPage.jsx", { id: "user-detail" }),
  route("/jobs-list", "routes/Job/JobListPage.tsx"),
  route("/create-job", "routes/Job/JobForm.tsx"),

  // asharaf
  route("/job-details/:id", "routes/jobs/job-details.tsx"),
] satisfies RouteConfig;

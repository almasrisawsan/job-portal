import { type RouteConfig, index ,route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("/jobs-list","routes/JobListPage.tsx")
] satisfies RouteConfig;

import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),

        ...prefix("jobs", [
            route(":id", "routes/jobs/job-info.tsx"),
            route("/create-job", "routes/jobs/create-job.tsx"),
            route("/job-list", "routes/jobs/job-list.tsx"),
        ]),

        // Catch-all route for unmatched URLs
        route("*", "routes/error-boundary.tsx"),
    ]),
] satisfies RouteConfig;

import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";


export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),

        ...prefix("jobs", [
            route("/job-info/:id", "routes/jobs/job-info.tsx"),
            route("/create-job", "routes/jobs/create-job.tsx"),
            route("/job-list", "routes/jobs/job-list.tsx"),
        ]),

        route("*", "routes/not-found.tsx"),

    ]),
] satisfies RouteConfig;

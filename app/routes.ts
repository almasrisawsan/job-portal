import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";


export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),

        ...prefix("jobs", [
            index("routes/jobs/job-list.tsx"),
            route("/job-info/:id", "routes/jobs/job-info.tsx"),
            route("/create-job", "routes/jobs/create-job.tsx"),
        ]),
        route("*", "routes/not-found.tsx"),

    ]),
] satisfies RouteConfig;

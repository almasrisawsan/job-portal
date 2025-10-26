export const ROUTES = {
    HOME: "/",
    JOBS: {
        CREATE: "/jobs/create-job",
        INFO: (id: string | number) => (`/jobs/job-info/${id}`),
        LIST: "/jobs",
    },
} as const;

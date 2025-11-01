import { create } from "zustand";
import type { Job } from "src/types/jobs.type";

interface JobsState {
    jobs: Job[];
    job: Job | null;        // store single job
    loading: boolean;
    error: string | null;
    setJobs: (jobs: Job[]) => void;
    removeJob: (id: string) => void;
    setJob: (job: Job | null) => void;  // setter for single job
    getJob: (id: string) => Job | null; // return a job
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;

    // FilteredJobs
    filteredJobs: Job[];
    setFilteredJobs: (jobs: Job[]) => void;
}

export const useJobsStore = create<JobsState>((set, get) => ({
    jobs: [],
    job: null,
    loading: false,
    error: null,
    setJobs: (jobs) => set({ jobs }),
    removeJob: (id) => set((state) => ({ jobs: state.jobs.filter((j) => j.id !== id) })),
    setJob: (job) => set({ job }),
    getJob: (id) => get().jobs.find((j) => j.id === id) || null, // fixed
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),

    // FilteredJobs
    filteredJobs: [],
    setFilteredJobs: (jobs) => set({ filteredJobs: jobs }),
}));

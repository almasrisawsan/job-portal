import { createContext, useState } from "react";
import type { TJobForDisplay } from "~/@types";

interface IJobContext {
    jobs: TJobForDisplay[];
    setJobs: React.Dispatch<React.SetStateAction<TJobForDisplay[]>>
}

interface IProviderProps {
    children: React.ReactNode
}

export const JobContext = createContext<IJobContext>(
    {
        jobs:[], 
        setJobs: () => { }
    }
);

export const JobProvider = ({children}: IProviderProps) => {
    const [jobs, setJobs] = useState<TJobForDisplay[]>([]);
    const value = {
        jobs, 
        setJobs
    }
    return (
        <JobContext.Provider value={value}>
            {children}
        </JobContext.Provider>
    )
}

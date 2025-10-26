import React, { useContext, useState } from 'react'
import { buildCategoryIndex } from '~/_components/landing/popular/cats.utils';
import { CategoryContext } from '~/provider/category/categoryContext';
import { mapFormToJobForSend } from '../form.utils';
import { createJob } from '../service/createJob';
import { toast } from 'sonner';

const useForm = () => {
    const { cats } = useContext(CategoryContext);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);

        const categoryIndex = buildCategoryIndex(cats);
        const jobToPost = mapFormToJobForSend(fd, categoryIndex);

        try {
        setLoading(true);
        const resData = await createJob(jobToPost);
        toast.success("Job posted successfully");
        }
        catch (err) {
            toast.error("Error posting job");
        } 
        finally {
            setLoading(false);
        }
    };
    return { handleSubmit, loading };
}

export default useForm
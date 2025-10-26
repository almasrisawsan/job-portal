
import Form from '~/_components/form/Form'
import type { Route } from './+types/createJobPage';
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jobs Portal | Create Job" },
    { name: "description", content: "Create a job listing on Jobs Portal." },
  ];
}
const CreateJobPage = () => {
  return (
    <Form />
  )
}

export default CreateJobPage;
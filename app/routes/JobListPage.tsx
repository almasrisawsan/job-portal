import JobTable from "~/components/JobTable/JobTable";
import type { Route } from "./+types/JobListPage";
import { useEffect, useState } from "react";
import Button from "~/components/Button";
import Layout from "~/Layouts/Layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function JobListPage() {


  

  return (
    <Layout>
      <div className="flex justify-center items-center mb-6 text-center">
        <h2 className="text-[30px] font-semibold  text-gray-800">My Jobs List</h2>
      </div>
      <JobTable  />
    </Layout>
  );

}
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => { 
    axios
      .get("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id, title) => {
    const confirm = window.confirm(`Are You Sure to Delete ${title} Job?`);
    if (confirm) {
      axios
        .delete("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs/" + id)
        .then(() => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-medium m-6">Jobs List</h1>
      <div className="bg-white p-6 flex justify-between">
        <table className="w-dvw border p-4 rounded-l-4xl rounded-r-4xl">
          <thead className="border-b-black border-b-2">
            <tr className="text-left">
              <th className="p-3">Title</th>
              <th>Company</th>
              <th>Job Type</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td className="p-3">{item.title}</td>
                <td>{item.company}</td>
                <td>{item.type}</td>
                <td>{item.salary}</td>
                <td className="flex pt-3">
                  <Link to={`/job/${item.id}`}>
                    <EyeIcon className="size-6 text-green-700" />
                  </Link>
                  <Link to={`/update/${item.id}`}>
                    <PencilIcon className="size-6 text-teal-400 ml-4" />
                  </Link>
                  <button onClick={() => handleDelete(item.id, item.title)}>
                    <TrashIcon className="size-6 text-red-700 ml-4 cursor-pointer" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

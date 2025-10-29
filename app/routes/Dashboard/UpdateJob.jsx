import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const UpdateJob = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    title: "",
    company: "",
    type: "",
    salary: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-medium m-6">Update Job</h1>
      <div className="bg-white p-6 flex justify-center items-center">
        <form
          onSubmit={handleUpdate}
          className="w-2/4 h-2/4 shadow-emerald-900 p-6"
        >
          <div className="mb-2">
            <label
              className="font-bold text-emerald-800 text-2xl"
              htmlFor="title"
            >
              Title:{" "}
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
          </div>
          <div className="">
            <label
              className="font-bold text-emerald-800 text-2xl"
              htmlFor="company"
            >
              Company:{" "}
            </label>
            <input
              type="text"
              name="company"
              className="form-control"
              value={values.company}
              onChange={(e) =>
                setValues({ ...values, company: e.target.value })
              }
            />
          </div>
          <div className="">
            <label
              className="font-bold text-emerald-800 text-2xl"
              htmlFor="type"
            >
              Type Job:{" "}
            </label>
            <input
              type="text"
              name="type"
              className="form-control"
              value={values.type}
              onChange={(e) =>
                setValues({ ...values, type: e.target.value })
              }
            />
          </div>
          <div className="">
            <label
              className="font-bold text-emerald-800 text-2xl"
              htmlFor="salary"
            >
              Salary:{" "}
            </label>
            <input
              type="text"
              name="salary"
              className="form-control"
              value={values.salary}
              onChange={(e) => setValues({ ...values, salary: e.target.value })}
            />
          </div>
          <button className="p-1 bg-blue-500 text-amber-50 rounded mt-3 mr-3">Update</button>
          <Link to={"/dashboard"} className="p-1 bg-emerald-500 text-amber-50 rounded mt-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;

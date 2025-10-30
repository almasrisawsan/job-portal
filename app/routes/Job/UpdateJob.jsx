import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    type: "",
    deadline: "",
  });
  const [loading, setLoading] = useState(true);

  // جلب بيانات الوظيفة الحالية
  useEffect(() => {
    if (!id) return;
    fetch(`https://68f8f8e8deff18f212b83fba.mockapi.io/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob({
          title: data.title || "",
          type: data.type || "",
          deadline: data.deadline || "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (field) => (e) => {
    setJob((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) return;

    fetch(`https://68f8f8e8deff18f212b83fba.mockapi.io/jobs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/jobs-list", { replace: true });
        console.log("cc")// ⚡️ العودة لقائمة الوظائف بعد التحديث
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Job</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange("title")}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <select
          value={job.type}
          onChange={handleChange("type")}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Hourly">Hourly</option>
        </select>
        <input
          type="date"
          value={job.deadline}
          onChange={handleChange("deadline")}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Update Job
        </button>
      </form>
    </div>
  );
}

export default UpdateJob;

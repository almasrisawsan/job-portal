
import React, { useEffect, useState } from "react";
import axios from "axios";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { Job } from "src/types/jobs.type";

export default function JobListSection({ jobs }: { jobs: Job[] }) {
  if (!jobs)
    return (
      <div className="page">
        <p className="text-red-500 text-center">Jobs not found</p>
      </div>
    );

  return (
    <div className="page">
      <h1 className="job-list-title">My Jobs List</h1>
      <div className="table-card">
        <div className="table-container">
          <table className="job-table">
            <thead>
              <tr>
                <th className="w-20">Title</th>
                <th className="w-20">Company</th>
                <th className="w-20">Location</th>
                <th className="w-25">Type</th>
                <th className="w-15 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length > 0 &&
                jobs.map((job) => (
                  <tr key={job.id} className="hover-row">
                    <td className="td-title">{job.title}</td>
                    <td className="td-normal">{job.company}</td>
                    <td className="td-normal">{job.location}</td>
                    <td className="td-normal">{job.type}</td>
                    <td className="td-action">
                      <div className="action-buttons">
                        <button className="btn-view">
                          <EyeOutlined />
                        </button>
                        <button className="btn-edit">
                          <EditOutlined />
                        </button>
                        <button className="btn-delete">
                          <DeleteOutlined />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/content/constants";
import { AppAPI } from "src/services/api";

interface JobActionsProps {
  id: string;
  onDelete?: (id: string) => void;
}

export default function JobActions({ id, onDelete }: JobActionsProps) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await AppAPI.delete(`/jobs/${id}`);
      if (onDelete) onDelete(id);
      setIsModalOpen(false);
    } catch (error: any) {
      console.error(error);
      alert(error.error || "Failed to delete the job");
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => navigate(ROUTES.JOBS.INFO(id));
  const handleEdit = () => navigate(`${ROUTES.JOBS.INFO(id)}?mode=edit`);

  return (
    <>
      <div className="flex justify-center gap-2">
        <button
          className="text-green-500 hover:text-green-600 text-lg"
          onClick={handleOpen}
        >
          <EyeOutlined />
        </button>
        <button
          className="text-blue-400 hover:text-blue-500 text-lg"
          onClick={handleEdit}
        >
          <EditOutlined />
        </button>
        <button
          className="text-red-500 hover:text-red-600 text-lg"
          onClick={() => setIsModalOpen(true)}
        >
          <DeleteOutlined />
        </button>
      </div>

      {isModalOpen && (
        <div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/20"
          onClick={() => setIsModalOpen(false)} // click outside closes modal
        >
          <div
            className="bg-white shadow-lg p-6 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <h3 className="mb-4 font-semibold text-lg">Confirm Delete</h3>
            <p className="mb-6 text-gray-600">
              Are you sure you want to delete this job? This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleDelete}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

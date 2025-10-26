import { InboxOutlined } from "@ant-design/icons";

export default function JobsNotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="flex flex-col items-center gap-4 bg-white shadow-md p-10 rounded-lg">
        <InboxOutlined className="text-gray-300 text-6xl" />
        <h2 className="font-semibold text-gray-700 text-2xl">No Jobs Found</h2>
        <p className="max-w-xs text-gray-500 text-center">
          We couldn't find any job listings matching your criteria. Please check
          back later or adjust your search filters.
        </p>
      </div>
    </div>
  );
}

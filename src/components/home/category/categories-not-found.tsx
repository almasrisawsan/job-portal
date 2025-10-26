import { FileSearchOutlined } from "@ant-design/icons";

export default function CategoriesNotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 py-12 border border-gray-200 border-dashed rounded-md text-center">
      <FileSearchOutlined className="mb-3 text-primary text-5xl" />
      <p className="font-semibold text-gray-700 text-lg">No categories found</p>
      <p className="mt-1 text-gray-500 text-sm">
        Check back later for new opportunities.
      </p>
    </div>
  );
}

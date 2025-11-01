import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) onPageChange(page);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - 1 && page <= currentPage + 1)
  );

  return (
    <div className="flex justify-center items-center gap-2 mt-8 select-none">
      <button
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
        className="p-2 text-gray-600 hover:text-primary disabled:text-gray-400"
      >
        <DoubleLeftOutlined />
      </button>

      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 text-gray-600 hover:text-primary disabled:text-gray-400"
      >
        <LeftOutlined />
      </button>

      {pages.map((page, index) => (
        <span key={page}>
          {index > 0 && pages[index - 1] !== page - 1 && (
            <span className="px-2 text-gray-400">...</span>
          )}
          <button
            onClick={() => goToPage(page)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              currentPage === page
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        </span>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 text-gray-600 hover:text-primary disabled:text-gray-400"
      >
        <RightOutlined />
      </button>

      <button
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
        className="p-2 text-gray-600 hover:text-primary disabled:text-gray-400"
      >
        <DoubleRightOutlined />
      </button>
    </div>
  );
}

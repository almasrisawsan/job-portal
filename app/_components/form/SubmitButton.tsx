import React from "react";

interface IProps {
  label: string;
  loading: boolean; 
}

function SubmitButton({ label, loading }: IProps) {
  const isDisabled = loading;

  return (
    <div className="flex justify-end mt-6">
      <button
        type="submit"
        disabled={isDisabled}
        aria-busy={loading}
        aria-disabled={isDisabled}
        className={[
          "inline-flex items-center gap-2",
          "text-white font-medium px-6 py-2 rounded-md transition-colors",
          "bg-blue-600 hover:bg-blue-700",
          isDisabled ? "opacity-60 cursor-not-allowed hover:bg-blue-600" : "",
        ].join(" ")}
      >
        {loading && (
          <span
            className="inline-block size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
            aria-hidden="true"
          />
        )}
        <span>{label}</span>
      </button>
    </div>
  );
}

export default SubmitButton;

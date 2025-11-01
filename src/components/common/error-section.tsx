import { ExclamationCircleOutlined } from "@ant-design/icons";
import React from "react";

export default function ErrorSection({ error }: { error?: string | null }) {
  return (
    <section className="flex flex-col justify-center items-center bg-secondary-light py-20">
      <ExclamationCircleOutlined className="mb-3 !text-red-500 text-4xl" />
      <p className="mb-2 font-semibold text-red-600 text-xl">Error</p>
      <p className="text-gray-600">{error}</p>
    </section>
  );
}

import { LoadingOutlined } from "@ant-design/icons";

export default function LoadingSection({ text }: { text?: string }) {
  return (
    <section className="flex flex-col justify-center items-center bg-secondary-light py-20">
      <LoadingOutlined className="mb-4 text-primary text-4xl animate-spin" />
      <p className="font-medium text-gray-700 text-lg">
        Loading {text || ""}...
      </p>
    </section>
  );
}

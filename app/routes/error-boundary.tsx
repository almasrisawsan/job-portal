import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Oops!</h1>
      <p className="text-gray-600 mb-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500">
        {error instanceof Error ? error.message : "Unknown error occurred"}
      </p>
    </div>
  );
}
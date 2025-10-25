import { NavLink, useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 px-4 min-h-screen">
      <h1 className="font-extrabold text-red-600 text-6xl md:text-8xl">404</h1>
      <p className="mt-4 font-semibold text-gray-700 text-xl md:text-2xl">
        Page Not Found
      </p>
      <p className="mt-2 max-w-md text-gray-500 text-sm md:text-base text-center">
        The page you are looking for does not exist or has been moved.
      </p>

      <NavLink
        to="/"
        end
        className="bg-blue-600 hover:bg-blue-700 mt-6 px-6 py-2 rounded-md font-medium text-white transition"
      >
        Go Home
      </NavLink>
    </div>
  );
}

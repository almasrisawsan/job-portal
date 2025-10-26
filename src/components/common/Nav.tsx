import { ROUTES } from "src/content/constants";
import Button from "../ui/button";
import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav className="flex sm:flex-row flex-col justify-between items-center gap-3 md:gap-0 px-4 md:px-8 py-3 border-gray-200 border-b">
      <div className="font-bold text-primary text-2xl md:text-3xl lg:text-4xl">
        <NavLink to={ROUTES.HOME}>JobsPortal</NavLink>
      </div>

      <div className="flex sm:flex-row flex-col items-center gap-2 w-full sm:w-auto">
        <Button variant="ghost" className="px-3 py-2 w-full sm:w-auto text-sm">
          <NavLink to={ROUTES.JOBS.LIST}>Dashboard</NavLink>
        </Button>
        <Button
          variant="default"
          className="px-3 py-2 w-full sm:w-auto text-sm"
        >
          <NavLink className="text-white" to={ROUTES.JOBS.CREATE}>
            Post a Job
          </NavLink>
        </Button>
      </div>
    </nav>
  );
}

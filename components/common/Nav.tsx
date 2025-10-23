import Button from "./ui/Button";
import { Link } from "react-router";

export default function Nav() {
  return (
    <nav className="flex md:justify-between justify-center px-11 py-4 items-center flex-col md:flex-row">
      <div className="font-extrabold md:text-4xl text-xl text-primary">
        <Link to={"/"}>JobsPortal</Link>
      </div>
      <div className="flex justify-center">
        <Button variant="ghost">
          <Link to={""}>Dashboard</Link>
        </Button>
        <Button variant="default">
          <Link to={""}>Post a Job</Link>
        </Button>
      </div>
    </nav>
  );
}

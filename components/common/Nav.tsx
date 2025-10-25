import Button from "./ui/Button";
import { Link } from "react-router";

export default function Nav() {
  return (
    <nav className="flex justify-between px-11 py-5">
      <div className="font-extrabold text-4xl text-primary">
        <Link to={"/"}>JobsPortal</Link>
      </div>
      <div>
        <Button variant="ghost">
          <Link to={""}>Dashboard</Link>
        </Button>
        <Button variant="default">
          <Link className="text-white" to={""}>Post a Job</Link>
        </Button>
      </div>
    </nav>
  );
}

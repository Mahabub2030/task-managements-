import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-3">
      <div className="flex items-center">
        TASKS <span className="text-xl font-bold">Managmnets</span>
      </div>
      <div className="gap-5 flex">
        <Link to='/tasks'>Task</Link>
      <Link to='/user'>User</Link>
      </div>
      <div className="ml-auto">
        <ModeToggle/>
      </div>
    </nav>
  );
}

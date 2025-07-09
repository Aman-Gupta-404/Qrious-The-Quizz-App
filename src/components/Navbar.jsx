import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-transparent absolute w-full z-10">
      <div className="text-2xl font-bold text-white">QuizMaster</div>
      <Link
        to="/login"
        className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
      >
        Login
      </Link>
    </nav>
  );
}

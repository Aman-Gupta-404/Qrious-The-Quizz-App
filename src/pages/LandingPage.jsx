import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-white">QuizMaster</div>
        <Link
          to="/login"
          className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
        >
          Login
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Master Your Skills
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          Take fun and challenging quizzes to sharpen your knowledge in tech,
          coding, and more.
        </p>
        <Link
          to="/login"
          className="bg-indigo-600 px-6 py-3 text-lg rounded-lg hover:bg-indigo-700 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

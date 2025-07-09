import { useDispatch, useSelector } from "react-redux";
import { startQuiz } from "../features/quiz/quizSlice";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quizzes = useSelector((state) => state.quiz.quizzes);

  const handleStartQuiz = (quizId) => {
    dispatch(startQuiz(quizId)); // ✅ Select quiz
    navigate(`/quiz/${quizId}`); // ✅ Go to quiz page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-indigo-700">QuizMaster</h1>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
          onClick={() => alert("Logout logic here")}
        >
          Logout
        </button>
      </nav>

      {/* Header */}
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold text-gray-800">Available Quizzes</h2>
        <p className="text-gray-500 mt-2">
          Select a quiz to test your knowledge
        </p>
      </div>

      {/* Quiz Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-10">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {quiz.name}
              </h3>
              <p className="text-gray-500 text-sm">{quiz.description}</p>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => handleStartQuiz(quiz.id)} // ✅ Set current quiz
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm"
              >
                Start Quiz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

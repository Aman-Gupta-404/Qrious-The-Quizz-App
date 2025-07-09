import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tick, answerQuestion } from "../features/quiz/quizSlice";

export default function QuizPage() {
  const dispatch = useDispatch();
  const { currentQuiz, timeLeft, answers } = useSelector((state) => state.quiz);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  if (!currentQuiz)
    return <p className="text-center mt-10">No quiz selected!</p>;

  // Dummy single question for UI testing
  const question = {
    id: 1,
    text: "What is the output of 2 + '2' in JavaScript?",
    options: ["22", "4", "NaN", "Error"],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-indigo-700">QuizMaster</h1>
        <div className="text-sm font-semibold text-red-600">
          Time Left: {Math.floor(timeLeft / 60)}:
          {String(timeLeft % 60).padStart(2, "0")}
        </div>
      </nav>

      {/* Quiz Content */}
      <div className="flex justify-center items-center p-6">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {question.text}
          </h2>

          <div className="space-y-4">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() =>
                  dispatch(
                    answerQuestion({ questionId: question.id, answer: opt })
                  )
                }
                className={`w-full text-left px-4 py-3 rounded-lg border transition
                  ${
                    answers[question.id] === opt
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-gray-50 hover:bg-indigo-50 border-gray-300"
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="mt-8 text-right">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

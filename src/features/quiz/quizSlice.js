import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [
    {
      id: "1",
      name: "General Knowledge",
      description: "Test your general knowledge with fun questions.",
      time: 300, // seconds
      questions: [
        {
          id: 1,
          text: "What is the capital of France?",
          options: ["Paris", "Berlin", "Rome", "Madrid"],
          correctAnswer: "Paris",
        },
        {
          id: 2,
          text: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Venus"],
          correctAnswer: "Mars",
        },
        {
          id: 3,
          text: "Who wrote 'Hamlet'?",
          options: [
            "William Wordsworth",
            "William Shakespeare",
            "Charles Dickens",
            "Jane Austen",
          ],
          correctAnswer: "William Shakespeare",
        },
      ],
    },
    {
      id: "2",
      name: "Science Quiz",
      description: "Challenge your science knowledge with tricky questions.",
      time: 180, // seconds
      questions: [
        {
          id: 1,
          text: "What is H2O commonly known as?",
          options: ["Oxygen", "Hydrogen", "Water", "Helium"],
          correctAnswer: "Water",
        },
        {
          id: 2,
          text: "What gas do plants absorb from the atmosphere?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
          correctAnswer: "Carbon Dioxide",
        },
      ],
    },
  ],
  currentQuiz: null,
  currentQuestionIndex: 0,
  answers: {}, // { questionId: answer }
  timeLeft: 0,
  quizCompleted: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state, action) => {
      const quizId = action.payload;
      const quiz = state.quizzes.find((q) => q.id === quizId);

      if (quiz) {
        state.currentQuiz = quiz;
        state.currentQuestionIndex = 0;
        state.answers = {};
        state.timeLeft = quiz.time;
        state.quizCompleted = false;
      }
    },
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    nextQuestion: (state) => {
      if (
        state.currentQuiz &&
        state.currentQuestionIndex < state.currentQuiz.questions.length - 1
      ) {
        state.currentQuestionIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuiz && state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    tick: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      } else {
        state.quizCompleted = true;
      }
    },
    endQuiz: (state) => {
      state.quizCompleted = true;
      state.currentQuiz = null;
      state.currentQuestionIndex = 0;
      state.answers = {};
      state.timeLeft = 0;
    },
  },
});

export const {
  startQuiz,
  answerQuestion,
  nextQuestion,
  prevQuestion,
  tick,
  endQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;

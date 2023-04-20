import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// import function from API.ts file and Types named difficulty
import { Difficulty, fetchQuizQuestions, QuestionState } from "./API";

import QuestionCard from "./Components/QuestionCard";

// Type answer object
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

// API LINK HERE TO SAVE https://opentdb.com/api.php?amount=10&category=15&type=multiple

// Set amount of questions that we can change later if we want
const TOTAL_QUESTIONS = 10;

function App() {
  // States
  const [loading, setLoading] = useState(false);
  // letting it know the array will be from Question state so if anything other than that it will error
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  // array of objectss that match the AnswerObject Type
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // CONSOLE.LOG QUIZ QUESTIONS TO SEE in browsser console, for testing early on
  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY), "fetch quiz qs on app.tsx")

  // START TRIVIA BY RUNNING THIS | Connect it to onClick for the button in the HTML ====
  const startTrivia = async () => {
    // set loading to true
    setLoading(true);
    // its not game over so its false
    setGameOver(false);

    try {
      // Grab data from fetchQuizQuestions
      const newQuestions = await fetchQuizQuestions(
        // # of questions
        TOTAL_QUESTIONS,
        // Difficulty
        Difficulty.EASY
      );

      // Set the questions to the data we grabbed from the await
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      // done loading
      setLoading(false);
    } catch (error) {
      console.log(error, "Error in App.tsx startTrivia funct");
    }
  };

  // CHECK ANSWER FUNCTION ====
  // Tell it the type by writing React.MouseEvent and let it knows its an HTML button that will be clicked
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If game isnt over and not loading
    if (!gameOver && !loading) {
      // Get users answer. the current target value is whatever button is being clicked. Must add a value prop to button on Q card
      const answer = e.currentTarget.value;
      // Check answer against correct answer. Will give true or false
      const correct = questions[number].correct_answer === answer;
      // Add to score if answer is correct
      if (correct) {
        setScore((prev) => prev + 1);
      }
      // Save answer in the array for user answers
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, AnswerObject]);
    }
  };

  // NEXT QUESTION FUNCTION ====
  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestion = number + 1;
    // if nextQuestion === Total questions which is 10 would mean its no the last one, since its not we move to the else.
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      // set the number state to whatever number question we are on
      setNumber(nextQuestion);
    }
  };

  return (
    <div
      className="container max-w-full h-screen text-white bg-[url('https://imgur.com/N6abCOy.png')]"
      id="main-container"
    >
      <div className="flex flex-row justify-center grid-rows-1 h-3/4">
        <div className="flex flex-col grid-cols-1 justify-center items-center">
        <h1 className="text-6xl mb-5">Video Game Quiz!</h1>
        {/* ternary to get rid of start button after its hit */}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="btn btn-indigo " onClick={startTrivia}>
            Start Game
          </button>
        ) : (
          null
        )}

        {/* If gameover = false (not game over) show score while game isnt over*/}
        {!gameOver ? <p className="font-bold text-xl mb-5">Score: {score}</p> : null}
        {/* if loading show a p like below */}
        {loading ? <p className="">Loading Questions ...</p> : null}

        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {/* Only show the next question button if game isnt over, isnt loading, and userAnswerss is === etc etc */}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="btn btn-indigo" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import function from API.ts file and Types named difficulty
import { Difficulty, fetchQuizQuestions, QuestionState} from './API'

import QuestionCard from './Components/QuestionCard'


// Type answer object
type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;

}


// API LINK HERE TO SAVE https://opentdb.com/api.php?amount=10&category=15&type=multiple


// Set amount of questions that we can change later if we want
const TOTAL_QUESTIONS = 10;



function App() {

  // States
  const [loading, setLoading] = useState(false)
  // letting it know the array will be from Question state so if anything other than that it will error
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)


  // CONSOLE.LOG QUIZ QUESTIONS TO SEE in browsser console, for testing early on
  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY), "fetch quiz qs on app.tsx")


// START TRIVIA BY RUNNING THIS | Connect it to onClick for the button in the HTML
  const startTrivia = async () => {
    // set loading to true
    setLoading(true)
    // its not game over so its false
    setGameOver(false)


    try {
      // Grab data from fetchQuizQuestions
    const newQuestions = await fetchQuizQuestions(
      // # of questions
      TOTAL_QUESTIONS,
      // Difficulty
      Difficulty.EASY
    );

    // Set the questions to the data we grabbed from the await
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    // done loading
    setLoading(false)

    } catch (error) {
      console.log(error, 'Error in App.tsx startTrivia funct')
      
    }

  }


  // Tell it the type by writing React.MouseEvent and let it knows its an HTML button that will be clicked
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  } 


  const nextQuestion = () => {


  }



  return (
    <div className="container max-w-full h-screen text-white bg-[url('https://imgur.com/N6abCOy.png')]" id='main-container'>
      <h1>Trivia</h1>
      <button className='' onClick={startTrivia}>Start Game</button>
      <p className=''>Score:</p>
      <p className=''>Loading Questions ...</p>
      {/* <QuestionCard 
      questionNr={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      /> */}
      <button className='' onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default App

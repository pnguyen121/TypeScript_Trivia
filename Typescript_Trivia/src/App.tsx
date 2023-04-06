import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import function from API.ts file and Types named difficulty
import { Difficulty, fetchQuizQuestions } from './API'

import QuestionCard from './Components/QuestionCard'



// API LINK HERE TO SAVE https://opentdb.com/api.php?amount=10&category=15&type=multiple


// Set amount of questions that we can change later if we want
const TOTAL_QUESTIONS = 10;




function App() {

  // States
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)


  // CONSOLE.LOG QUIZ QUESTIONS TO SEE in browsser console
  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY), "fetch quiz qs on app.tsx")


  const startTrivia = async () => {


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

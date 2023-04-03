import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import QuestionCard from './Components/QuestionCard'

// API LINK HERE TO SAVE https://opentdb.com/api.php?amount=10&category=15&type=multiple




function App() {

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
      <QuestionCard />
      <button className='' onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default App

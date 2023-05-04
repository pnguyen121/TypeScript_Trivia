import React, { useState } from "react";

// Import Types from app.tsx
import { AnswerObject } from "../App";

// This is where we set the types
type Props = {
  // normal string
  question: string;
  // indicates an array of strings
  answers: string[];
  // indicates it can be any type
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // AnswerObject or undefined
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

// Since i used the normal function delaration instead of arrow function like const myFunc = () => {}
// Has to be formatted this way and use ReactNode instead of React.FC

// ReactNode was throwing JSX errow so hangedd it to JSX.Element | callback is check answer function in app.tsx
function QuestionCard({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}: Props): JSX.Element {
  return (
    <div className="mb-5 text-black" id="wrapper-div">
      <p className="pb-5 text-center">
        Question: {questionNr} / {totalQuestions}
      </p>
      {/* must use dangerouslySetInnerHTML to render text with react to recognize the HTML tags */}
      <p className="pb-5" dangerouslySetInnerHTML={{ __html: question }} />

      {/* Map through each answer and create a div to put answers in */}
      <div className="">
        {answers.map((answer) => (
          <div key={answer} correct-ans={userAnswer?.correctAnswer === answer} user-Clicked={userAnswer?.answer === answer}>
            <button
              className={userAnswer?.correctAnswer == answer ? 'btn-3' : 'btn-2' ? userAnswer?.answer == answer ? 'btn-4' : 'btn-2' : ''} 
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span
                className="text-black"
                dangerouslySetInnerHTML={{ __html: answer }}
              ></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;

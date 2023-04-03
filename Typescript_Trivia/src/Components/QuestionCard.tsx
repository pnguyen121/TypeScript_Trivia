import React from "react";


// This is where we set the types
type Props = {
    // normal string
    question: string;
    // indicates an array of strings 
    answers: string[];
    // indicates it can be any type
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}



// Since i used the normal function delaration instead of arrow function like const myFunc = () => {} 
// Has to be formatted this way and use ReactNode instead of React.FC 
function QuestionCard ({question, answers, callback, userAnswer, questionNr, totalQuestions}: Props): React.ReactNode{
    return ( 
        <div>
            <p className="">
                Question: {questionNr} / {totalQuestions}
            </p>
            {/* must use dangerouslySetInnerHTML to render text with react to recognize the HTML tags */}
            <p dangerouslySetInnerHTML={{__html: question}} />

{/* Map through each answer and create a div to put answers in */}
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}></span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default QuestionCard;
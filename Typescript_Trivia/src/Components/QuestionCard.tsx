import React from "react";


// This is where we set the types
type Props = {
    // normal string
    question: string;
    // indicates an array of strings 
    answer: string[];
    // indicates it can be any type
    callback: any;
    userAnswer: string;
    questionNr: number;
    totalQuestions: number;
}



// Since i used the normal function delaration instead of arrow function like const myFunc = () => {} 
// Has to be formatted this way and use ReactNode instead of React.FC 
function QuestionCard ({question, answer, callback, userAnswer, questionNr, totalQuestions}: Props): React.ReactNode{
    return ( 
        <div>
            Question Card
        </div>
     );
}

export default QuestionCard;
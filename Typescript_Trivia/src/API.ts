// import shuffle array function in
import { shuffleArray } from "./utils";


// specify type for each question
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

// Adding to the Question above, adding answers in an array of strings.
export type QuestionState = Question & {answers: string[]}


// Set difficulty so the function can grab
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {

    // API link from website with added variables 
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=15&type=multiple`
    // Double await first await the fetch then await when convertint to json
    const data = await (await fetch(endpoint)).json()
    // console log to see how json data its laid out when looking in browser console
    console.log(data, "data from fetch quiz questions")
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}
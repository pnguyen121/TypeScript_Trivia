


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
}
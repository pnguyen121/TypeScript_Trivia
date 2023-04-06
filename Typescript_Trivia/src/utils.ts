

// Randomizer function to shuffle array
export const shuffleArray = (array: any[]) => 
    [...array].sort(() => Math.random() - 0.5);
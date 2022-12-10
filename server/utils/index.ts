// function to shuffle an array of objects
export function shuffleArray(array: any[]) {
  array.sort(() => Math.random() - 0.5)
}

// constant to define the length of the words list
export const WORDS_LIST_LENGTH = 10

// constant do define number of points for each correct answer
export const POINTS_PER_CORRECT_ANSWER = 10

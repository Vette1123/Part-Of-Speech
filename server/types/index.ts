export interface WordListObject {
  id: number
  word: string
  pos: string
}

export interface Data {
  wordList: WordListObject[]
  scoresList: number[]
}

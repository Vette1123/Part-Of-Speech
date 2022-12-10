import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import { WORDS_LIST_LENGTH, shuffleArray } from '../utils'
import { WordListObject } from '../types'
import path from 'path'
import fs from 'fs/promises'

// function to get the words from the file
const getWords = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // read the data from json file
    const data = await fs.readFile(
      path.join(__dirname, '../data/TestData.json'),
      'utf-8'
    )

    // parse the data and extract the words list from the data
    const words = JSON.parse(data.toString()).wordList
    shuffleArray(words)

    //  filter the unique words from the words list
    const uniqueWords = words.filter(
      (word: WordListObject, index: number) =>
        words.findIndex(
          (singleWord: WordListObject) => singleWord.pos === word.pos
        ) === index
    )
    // filter the non-unique words from the words list
    const nonUniqueWords = words.filter(
      (word: WordListObject, index: number) =>
        words.findIndex(
          (singleWord: WordListObject) => singleWord.pos === word.pos
        ) !== index
    )

    // merge the unique words with shuffled words array to get the final words list
    const finalWords = [...uniqueWords, ...nonUniqueWords].slice(
      0,
      WORDS_LIST_LENGTH
    )

    // send the final words list
    res.status(200).json(finalWords)
  }
)
export default getWords

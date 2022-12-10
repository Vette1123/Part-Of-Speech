import { Request, Response, NextFunction } from 'express'
import { POINTS_PER_CORRECT_ANSWER, WORDS_LIST_LENGTH } from '../utils'
import fs from 'fs/promises'
import path from 'path'

// function to get the rank from the userScore
const getRank = async (req: Request, res: Response, next: NextFunction) => {
  //   make sure the userScore is a number and exists
  if (!req.body.userScore || isNaN(req.body.userScore)) {
    return res.status(400).json({ message: 'Score is required' })
  }

  // get the userScore from the request body
  const { userScore } = req.body

  // get the max userScore
  const maxScore = POINTS_PER_CORRECT_ANSWER * WORDS_LIST_LENGTH

  //   make sure the userScore is not greater than the max userScore or less than 0
  if (userScore > maxScore || userScore < 0) {
    return res.status(400).json({ message: 'Invalid userScore' })
  }

  // read the data from json file
  const data = await fs.readFile(
    path.join(__dirname, '../data/TestData.json'),
    'utf-8'
  )

  // parse the data and extract the words list from the data
  const scores = JSON.parse(data.toString()).scoresList

  //   loop over the scores list and increment the rank if the userScore is greater than the current userScore
  let lessThanCurrent = 0

  scores.forEach((currentScore: any) => {
    if (userScore > currentScore) {
      lessThanCurrent++
    }
  })

  //   send the rank
  const rank =
    (Math.ceil(lessThanCurrent / scores.length) * maxScore * 100) / maxScore

  res.status(200).json({ rank })
}

export default getRank

import express from 'express'
import getWords from '../controllers/wordsController'

// initialize router
const router = express.Router()

// define routes
router.get('/', getWords)

export default router

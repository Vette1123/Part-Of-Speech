import express from 'express'
import getRank from '../controllers/rankController'

// initialize router
const router = express.Router()

// define routes
router.post('/', getRank)

export default router

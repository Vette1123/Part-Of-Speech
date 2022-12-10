import express from 'express'
import dotenv from 'dotenv'
import { Request, Response, NextFunction } from 'express'
import wordsRoutes from './routes/wordsRoutes'
import rankRoutes from './routes/rankRoutes'
import cors from 'cors'

// Create express server
const app = express()
// Define port
const port = process.env.PORT || 5000
// Load env variables
dotenv.config()
// Body parser middleware
app.use(express.json())
// URL encoded middleware
app.use(express.urlencoded({ extended: false }))
// Cors middleware
app.use(cors())

app.use('/api/words', wordsRoutes)
app.use('/api/rank', rankRoutes)
// send 404 if no route is matched get or post request
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send('404 Not Found')
})

app.listen(port, () => console.log(`Server started on port ${port}`))

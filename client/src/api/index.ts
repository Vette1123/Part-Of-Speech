import axios from 'axios'

// making the base url dynamic
export const BASE_URL = process.env.REACT_APP_BASE_URL
  ? process.env.REACT_APP_BASE_URL
  : 'http://localhost:5000'

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
export const getWords = async () => await axiosClient.get('/api/words')

export const getRanking = async (userScore: number) =>
  await axiosClient.post('/api/rank', { userScore: userScore * 10 })

import axios from 'axios'

export const BASE_URL = process.env.REACT_APP_BASE_URL
  ? process.env.REACT_APP_BASE_URL
  : 'http://localhost:5000'

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
export const getWords = async () => await axiosClient.get('/words')

export const getRanking = async (userScore: number) =>
  await axiosClient.post('/rank', { userScore: userScore * 10 })

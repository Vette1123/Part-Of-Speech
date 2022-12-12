import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getWords = async () => await axiosClient.get('/words')

export const getRanking = async (userScore: number) =>
  await axiosClient.post('/rank', { userScore: userScore * 10 })

import React, { createContext, useState, useMemo, useEffect } from 'react'
import useMultistepForm from 'hooks/useMultiStep'
import LandingPage from 'pages/LandingPage'
import Quizz from 'pages/Quizz'
import FinalPage from 'pages/FinalPage'
import { toast } from 'react-toastify'
import { getWords, getRanking } from 'api'

interface Props {
  children: React.ReactNode
}
const AppContext = createContext({
  step: <div />,
  isLastStep: false,
  isFirstStep: false,
  goTo: (step: number) => {},
  back: () => {},
  words: [],
  getUserRanking: (userScore: number) => {},
  userRank: 0,
  userScore: 0,
  setUserScore: (score: number) => {},
  getClientWords: () => {},
  resetUserScoreAndRank: () => {},
})

export const AppProvider: React.FC<Props> = ({ children }) => {
  const { back, goTo, isFirstStep, isLastStep, step, currentStepIndex } =
    useMultistepForm([<LandingPage />, <Quizz />, <FinalPage />])
  const [words, setWords] = useState([])
  const [userScore, setUserScore] = useState(0)
  const [userRank, setUserRank] = useState(0)

  const getClientWords = async () => {
    const response = await getWords()
    if (response && response?.status === 200) {
      setWords(response.data)
    } else {
      toast.error('Something went wrong, please try again later.')
    }
  }
  const resetUserScoreAndRank = () => {
    setUserScore(0)
    setUserRank(0)
  }

  const getUserRanking = async (userScore: number) => {
    const response = await getRanking(userScore)
    if (response && response?.status === 200) {
      setUserRank(response?.data?.rank)
    } else {
      toast.error('Something went wrong, please try again later.')
    }
  }
  useEffect(() => {
    getClientWords()
  }, [])

  const value = useMemo(
    () => ({
      step,
      isLastStep,
      isFirstStep,
      goTo,
      back,
      words,
      getUserRanking,
      userRank,
      userScore,
      setUserScore,
      getClientWords,
      resetUserScoreAndRank,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentStepIndex, userScore, userRank]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContext

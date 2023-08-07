import React, { useContext } from 'react'
import AppContext from 'context'
import Button from 'components/Button'

const FinalPage = () => {
  const { goTo, getClientWords, userRank, userScore, resetUserScoreAndRank } =
    useContext(AppContext)
  return (
    <div className='lg:w-1/2'>
      <div className='py-16 px-4 sm:py-24 sm:px-6 lg:px-8 rounded-3xl shadow-2xl'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center'>
          You Scored {userScore * 10}
        </h2>
        <p className='mt-2 text-lg text-gray-900 text-center font-medium'>
          You ranked higher than {userRank}% of the users
        </p>
        <p className='mt-2 text-lg text-gray-600 text-center'>
          You have completed the quizz!, You really know your words!
        </p>
        <div className='mt-8'>
          <div className='mt-10 flex justify-center'>
            <Button
              className='hover:scale-95 transition duration-300 ease-in-out'
              onClick={() => {
                getClientWords()
                resetUserScoreAndRank()
                goTo(1)
              }}
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalPage

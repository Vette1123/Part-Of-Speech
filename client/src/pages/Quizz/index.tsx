import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import AppContext from 'context'
import { CurrentWordProps } from 'types'
import Button from 'components/Button'
import Options from 'components/Options'
import ProgressBar from 'components/ProgressBar'
import Spinner from 'components/Spinner'

const QuizzPage = () => {
  const { words, userScore, setUserScore, goTo, getUserRanking } =
    useContext(AppContext)

  const [selected, setSelected] = useState<any>('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState<CurrentWordProps>(
    words[currentWordIndex]
  )
  const [sumbitClicked, setSumbitClicked] = useState(false)
  const [istLoading, setIsLoading] = useState(false)
  const isLastWord = currentWordIndex === words.length - 1

  return (
    <div className='bg-white w-full h-screen flex justify-center items-center'>
      <div className='max-w-7xl px-4 py-16 sm:px-6 lg:px-8 rounded-3xl shadow-2xl'>
        <div className='flex justify-center items-center gap-4'>
          <h2 className='text-5xl font-extrabold text-gray-900 text-center capitalize subpixel-antialiased'>
            {currentWord?.word}
          </h2>
          <p className='mt-2 text-lg text-gray-500 text-center'>is...</p>
        </div>
        <div className='mt-12 relative'>
          <Options
            selected={selected}
            setSelected={setSelected}
            currentWord={currentWord}
            sumbitClicked={sumbitClicked}
          />
          {istLoading && (
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-20'>
              <Spinner />
            </div>
          )}
        </div>
        <div className='mt-8'>
          <div>
            <ProgressBar
              percentage={Math.floor((currentWordIndex / words.length) * 100)}
            />
          </div>
          <div className='flex justify-end mt-4 px-4'>
            <Button
              onClick={() => {
                if (selected) {
                  setIsLoading(true)
                  setSumbitClicked(true)
                  if (currentWord.pos === selected?.value) {
                    setUserScore((prev: number) => prev + 1)
                  }
                  setTimeout(() => {
                    setSumbitClicked(false)
                    setSelected('')
                    setCurrentWordIndex(currentWordIndex + 1)
                    setCurrentWord(words[currentWordIndex + 1])
                    setIsLoading(false)
                  }, 800)
                  if (isLastWord) {
                    getUserRanking(userScore)
                    setTimeout(() => {
                      toast.success('You have completed the quizz!')
                      goTo(2)
                    }, 500)
                  }
                }
              }}
            >
              {selected ? 'Sumbit Your Answers' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizzPage

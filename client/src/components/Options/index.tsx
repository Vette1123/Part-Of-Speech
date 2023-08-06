import { RadioGroup } from '@headlessui/react'
import { CurrentWordProps } from 'types'

const answers = [
  {
    name: 'Noun',
    value: 'noun',
  },
  {
    name: 'Verb',
    value: 'verb',
  },
  {
    name: 'Adverb',
    value: 'adverb',
  },
  {
    name: 'Adjective',
    value: 'adjective',
  },
]
interface Props {
  selected: string
  setSelected: (value: string) => void
  currentWord: CurrentWordProps
  sumbitClicked: boolean
}

function Example({ sumbitClicked, currentWord, selected, setSelected }: Props) {
  return (
    <div className='w-full px-4'>
      <div className='mx-auto min-w-[400px]'>
        <RadioGroup value={selected} onChange={setSelected}>
          <div className='space-y-4'>
            {answers.map((answer) => (
              <RadioGroup.Option
                key={answer.name}
                value={answer}
                disabled={sumbitClicked}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked
                      ? 'bg-blue-700 bg-opacity-75 text-white'
                      : 'bg-gray-200'
                  }
                  ${
                    sumbitClicked && checked && currentWord.pos === answer.value
                      ? 'bg-green-700 bg-opacity-75 text-white'
                      : ''
                  }
                  ${
                    sumbitClicked && checked && currentWord.pos !== answer.value
                      ? 'bg-red-700 bg-opacity-75 text-white'
                      : ''
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-lg focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className='flex w-full items-center justify-between'>
                      <div className='flex items-center'>
                        <div className='text-sm'>
                          <RadioGroup.Description
                            as='span'
                            className={`inline ${
                              checked ? 'text-white' : 'text-gray-500'
                            }`}
                          >
                            <span className='font-bold inline-block text-lg'>
                              {answer.name}
                            </span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className='shrink-0 text-white'>
                          <CheckIcon className='h-6 w-6' />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props: any) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default Example

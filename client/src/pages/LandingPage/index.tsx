import { useContext } from 'react'
import AppContext from 'context'
import Button from 'components/Button'
const wordsList = [
  {
    name: 'Noun',
    description:
      'A noun is a word that refers to a person, place, thing, or idea.',
  },
  {
    name: 'Verb',
    description:
      'A verb is a word that describes an action, state, or occurrence.',
  },
  {
    name: 'Adverb',
    description:
      'An adverb is a word that describes a verb, an adjective, or another adverb.',
  },
  {
    name: 'Adjective',
    description: 'An adjective is a word that describes a noun or pronoun.',
  },
]

const LandingPage = () => {
  const { goTo } = useContext(AppContext)

  return (
    <div className='mx-auto'>
      <div className='py-16 px-4 sm:py-24 sm:px-6 lg:px-8 rounded-3xl shadow-2xl'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center'>
          Part Of Speech (POS).
        </h2>
        <div className='mt-20'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-4'>
            {wordsList?.map((item) => (
              <div className='relative' key={item?.name}>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white hover:rotate-90 transition-all duration-100	'>
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                      />
                    </svg>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    {item?.name}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  {item?.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className='mt-10 flex justify-center'>
            <Button
              className='hover:scale-95 transition duration-300 ease-in-out'
              onClick={() => goTo(1)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

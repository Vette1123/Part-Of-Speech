interface PercentageProps {
  percentage: number
}
function ProgressBar({ percentage }: PercentageProps) {
  return (
    <div className='relative pt-1'>
      <div className='flex flex-col mb-3'>
        <div>
          <span className='text-sm text-black'>Your Progress is</span>
        </div>
        <span className='text-sm font-semibold inline-block text-black'>
          {percentage}%
        </span>
      </div>
      <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200'>
        <div
          style={{ width: `${percentage}%` }}
          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transform-gpu transition-all duration-300 ease-in-out'
        />
      </div>
    </div>
  )
}

export default ProgressBar

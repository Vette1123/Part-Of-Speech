import React, { useContext } from 'react'
import AppContext from 'context'

const MainPage = () => {
  const { step } = useContext(AppContext)
  return (
    <div className='h-screen lg:flex lg:flex-col justify-center items-center p-4'>
      {step}
    </div>
  )
}

export default MainPage

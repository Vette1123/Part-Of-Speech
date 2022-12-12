import React, { useContext } from 'react'
import AppContext from 'context'

const MainPage = () => {
  const { step } = useContext(AppContext)
  return <>{step}</>
}

export default MainPage

import React from 'react'
import MainPage from 'pages/MainPage'
import { AppProvider } from 'context'

const App = () => {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  )
}

export default App

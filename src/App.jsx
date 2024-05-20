import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoSeriesPage from './pages/VideoSeriesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VideoSeriesPage />
    </>
  )
}

export default App

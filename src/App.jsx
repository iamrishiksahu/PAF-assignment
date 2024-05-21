import { useState } from 'react'
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

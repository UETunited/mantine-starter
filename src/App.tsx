import { useState } from 'react'
import logo from './logo.svg'
import Router from './routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router/>
    </div>
  )
}

export default App

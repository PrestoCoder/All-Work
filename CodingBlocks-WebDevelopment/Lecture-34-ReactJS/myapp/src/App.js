// All import statements go at the top
// import is analogous to require in normal JS
import './App.css'
import React from 'react'

// JS
let randomNumber = Math.floor(Math.random() * 10)

const App = () => {
  return (
    <div>
      {/* Use curly braces to insert JS code */}
      <h1>Yeh hai header - {randomNumber}</h1>
      <div className = "div-1">
        Nested element - 1
      </div>
      <div className = "div-2">
        Nested element - 2
      </div>
    </div>
  )
}

export default App
import { useState } from 'react'

import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [input, setInput] = useState('')

  function darOLike(){
    setLikes(prevLikes => prevLikes + 1)
    
    console.log(likes)
  }


  return (
    <div>
      <p>QTD de Likes: {likes}</p>
      <button onClick={darOLike}>Like</button>
    
      <p>O que você digitou no input: {input}</p>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <p></p>
    </div>
  )
}

export default App

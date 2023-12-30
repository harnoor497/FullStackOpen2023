import { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const maxNo=anecdotes.length-1

  function getRandomArbitrary(maxNo) {
    console.log("selected no",Math.floor(Math.random() * (maxNo)))
    return Math.floor(Math.random() * (maxNo));
  }
  
  const generateNext = ()=>{
    setSelected(getRandomArbitrary(maxNo))
  }

  const voteHandler=()=>{
      const voteArr =[...vote]
      voteArr[selected]+=1
      
      if(voteArr[selected]>mostVoted[0]){
        const mostVoted1=[...mostVoted]
        mostVoted1[0]=voteArr[selected]
        mostVoted1[1]=selected
        setMostVoted(mostVoted1)
      }
      setVote(voteArr)
  }


  const [selected, setSelected] = useState(getRandomArbitrary(maxNo))
  const [vote, setVote]=useState(Array(anecdotes.length).fill(0))
  const [mostVoted,setMostVoted]=useState([0,3])
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={voteHandler}>vote</button>
      <button onClick={generateNext}>next anecdotes</button>
      <h1>Anecdotes with most votes</h1>
      {anecdotes[mostVoted[1]]}
      <p>has {vote[mostVoted[1]]}</p>
    </div>
  )
}

export default App
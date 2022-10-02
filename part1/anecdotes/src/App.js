import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.click}>Next anecdote</button>
)

const Vote = (props) => (<button onClick={props.click}>Vote</button>)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [vote0, setVote0] = useState(0)
  const [vote1, setVote1] = useState(0)
  const [vote2, setVote2] = useState(0)
  const [vote3, setVote3] = useState(0)
  const [vote4, setVote4] = useState(0)
  const [vote5, setVote5] = useState(0)
  const [vote6, setVote6] = useState(0)
  const [index, setIndex] = useState(0)
  const [vote, setVote] = useState(0)
  
  const ary = [0, 0, 0, 0, 0, 0, 0]
  const copy = [...ary]

  //incrémenter la valeur en position de un

  if (selected === 0) { copy[selected] = vote0 }
  else if (selected === 1) { copy[selected] = vote1 }
  else if (selected === 2) { copy[selected] = vote2 }
  else if (selected === 3) { copy[selected] = vote3 }
  else if (selected === 4) { copy[selected] = vote4 }
  else if (selected === 5) { copy[selected] = vote5 }
  else if (selected === 6) { copy[selected] = vote6 }

  return (
    <div>
      <h1>Anecdote of day</h1>
      {anecdotes[selected]}
      <p>has {copy[selected]} votes</p>
      <Vote click={() => {

        if (selected === 0) { setVote0(vote0 + 1) }
        else if (selected === 1) { setVote1(vote1 + 1) }
        else if (selected === 2) { setVote2(vote2 + 1) }
        else if (selected === 3) { setVote3(vote3 + 1) }
        else if (selected === 4) { setVote4(vote4 + 1) }
        else if (selected === 5) { setVote5(vote5 + 1) }
        else if (selected === 6) { setVote6(vote6 + 1) }


       
        if(copy[selected]>=vote){
          setVote(copy[selected]+1)
          setIndex(selected)
        }


      }} />
      <Button click={() => { setSelected(Math.floor(Math.random() * 6)) }} />
      <h1>Anecdotes with most votes</h1>
      {anecdotes[index]}
      <p>has {vote} votes</p>
    </div>
  )
}

export default App

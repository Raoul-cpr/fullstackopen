import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.click} >{props.text}</button>
)
const StatisticsLine = (props) => (

  <div>

    {props.text}
    {props.state}

  </div>
)

const Statistics = (props) => 
   (
    <div>
      <table>
      <tr>
      <td><StatisticsLine text="Good"/></td>
      <td><StatisticsLine state={props.good} /></td>
      </tr>
      <tr>
      <td><StatisticsLine text="Neutral"/></td>
      <td><StatisticsLine state={props.neutral} /></td>
      </tr>
      <tr>
      <td><StatisticsLine text="Bad"/></td>
      <td><StatisticsLine state={props.bad} /></td>
      </tr>
      </table>
    </div>
  )

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stat = (total) => {
    if (total === 0) {
      return <p>No feedback given</p>
    } else {
      return (
        
        <div>
          <Statistics good={good} neutral={neutral} bad={bad} />
          <table>
            <tr>
              <td>All</td>
              <td>{good + neutral + bad}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td> {(good - bad) / (good + neutral + bad)}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td> {(good / (good + neutral + bad)) * 100}% </td>
            </tr>
          </table>
        </div>

      )
    }
  }
  return (
    <div>
      <h1>Good feedback</h1>
      <Button click={() => setGood(good + 1)} text="Good" />
      <Button click={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button click={() => setBad(bad + 1)} text="Bad" />
      <h1>Stastistics</h1>
      {stat(good + neutral + bad)}
    </div>
  )
}

export default App
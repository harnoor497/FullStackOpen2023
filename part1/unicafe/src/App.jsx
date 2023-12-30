import { useState } from 'react'
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.text === "positive" ? `${props.value} %` : props.value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const averageCal=(good-bad)/total;
  const positiveCal =((good/total)*100);
  if(total===0){
    return(<p>No Feedback Given</p>)
  }
  return(
    <table>
      <tbody>
        <StatisticLine text="Good" value={good}/>
        <StatisticLine text="Neutral" value={neutral}/>
        <StatisticLine text="Bad" value={bad}/>
        <StatisticLine text="all" value ={total} />
        <StatisticLine text="average" value ={averageCal} />
        <StatisticLine text="positive" value ={positiveCal} />
    
      </tbody>
    </table>
    )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleIncrement = (value,func)=>{
   return func(value+1);
  }
  
  return (
    <div>
    <h1>give feedback</h1>
    <button onClick={()=>handleIncrement(good,setGood)}>good</button>
    <button onClick={()=>handleIncrement(neutral,setNeutral)}>neutral</button>
    <button onClick={()=>handleIncrement(bad,setBad)}>bad</button>
    <h1>statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App;
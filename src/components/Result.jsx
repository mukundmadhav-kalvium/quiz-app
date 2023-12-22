import React, { useContext } from 'react'
import { AppContext } from './Context';
import "./Result.css"

const Result = () => {
  const{score} = useContext(AppContext)
  let userScorePercentage = (score / 5) * 100;
  return (
    <div className='result'>
    <h1 id='result--tagline'>{userScorePercentage <= 60 ? "Sorry, you failed the quiz. Try Again!" : "Congratulations! You successfully cleared the quiz!"}</h1>
    <h3 id='result--percentage'>You got {userScorePercentage}!</h3>
    </div>
  )
}
export default Result;
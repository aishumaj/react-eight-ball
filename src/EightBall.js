import { useState } from "react";
import "./EightBall.css";
import { ANSWERS, getRandom } from "./helpers";



/** Displays a Magic EightBall that shows random message when clicked.
 * 
 * Props:
 * - answers: an array of {msg, color}
 * 
 * State:
 * -result: {msg, color} of new randomized answer from answer array
 * 
 * App -> EightBall
 * 
 */
function EightBall({ answers = ANSWERS }) {

  const [result, setResult] = useState({
    msg: "Think of a Question.",
    color: "black"
  });

  const [count, setCount] = useState({
    red: 0,
    goldenrod: 0,
    green: 0
  });

  /** handles click on Magic Eightball to display a new message and update 
   * response counter */
  function handleClick() {
    let randIdx = getRandom(answers.length);
    let color = answers[randIdx].color;

    ++count[color];

    setResult(answers[randIdx]);
    setCount(count);
  }

  /** handles click on reset button and resets message and color to default, 
   * and response counters to 0 */
  function resetClick() {
    setResult({
      msg: "Think of a Question.",
      color: "black"
    });
    setCount({
      red: 0,
      goldenrod: 0,
      green: 0
    });
  }

  return (
    <div className="game">
      <div className="counter">
        <p style={{color: "red"}}> Red: {count.red} |</p>
        <p style={{color: "goldenrod"}}> Yellow: {count.goldenrod} |</p>
        <p style={{color: "green"}}> Green: {count.green} </p>
      </div>
      <div className="EightBall"
        onClick={handleClick}
        style={{ backgroundColor: result.color }}>
        <p className="msg"> {result.msg} </p>
      </div>
      <button onClick={resetClick}>Reset</button>
    </div>
  );
}

export default EightBall;
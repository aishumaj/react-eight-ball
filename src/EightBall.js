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



  function handleClick() {
    let randIdx = getRandom(answers.length);
    setResult(answers[randIdx]);
  }

  return (
    <div className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: result.color }}>
      <p className="msg"> {result.msg} </p>
    </div>
  );
}

export default EightBall;
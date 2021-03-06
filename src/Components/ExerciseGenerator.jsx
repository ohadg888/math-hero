import React, { useContext, useState, useEffect } from "react";
import "./ExerciseGenerator.css";
import AppContext from "../context/AppContext";

function ExerciseGenerator() {
  const { setAnswer, question } = useContext(AppContext);
  const [max, setMax] = useState(9);
  const [output, setOutput] = useState([]);
  const [instructions, setInstructions] = useState(
    "How many Animals do you see?"
  );
  const [imojis, setImojis] = useState([
    "🐒",
    "🐈",
    "🦨",
    "🐿",
    "🐇",
    "🦔",
    "🐫",
  ]);

  useEffect(() => {}, []);

  useEffect(() => {
		if (max !== 0) {
			const initArray = [];
			const randImoji = imojis[Math.floor(Math.random() * imojis.length)];
			for (let i = 0; i < Math.floor(Math.random() * max + 1); i++) {
				initArray.push(randImoji);
			}
			setAnswer(initArray.length);
			setOutput(initArray);
		}
	}, [max, question]);

  return (
    <div className="generator-wrap">
      <div className="instructions">{instructions}</div>
      <div className="imojis">
        {output.map((item, key) => {
          return (
            <div key={key} className="imoji-wrap">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExerciseGenerator;

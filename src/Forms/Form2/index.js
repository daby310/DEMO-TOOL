
import { useState } from "react"
import Question from "../../Question/index.js"
const QuestionSeparator = () => <div className="separator"></div>;

export default function Form2() {

    const [answers, setAnswers] = useState({
        level1: {
          question1: null,
          question2: null,
          question3: null,
          question4: null,
          question5: null,
        }
    })

    const handleAnswerChange = (point, question, answer) => {
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          [point]: {
            ...prevAnswers[point],
            [question]: answer,
          },
        }));
      }

    return (
        <>
            <h2 className="mb-3">FR2</h2>
            <h3 className="mb-2">Level 1</h3>
            <Question 
                srNo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} 
                question={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ultrices ante. In iaculis mauris quis cursus commodo. Morbi nec nulla tortor. Cras volutpat sit amet erat id mattis. Nunc libero tellus, cursus ac ipsum vel, tincidunt ornare dui. Integer tristique neque nec semper fermentum. Donec ex enim, porttitor sed risus sed, luctus suscipit nunc. Morbi eleifend odio massa, in facilisis lectus mattis et. Praesent fermentum felis ipsum, ut vestibulum velit bibendum sed."}
                auditionNote={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                id="ques1"
            />
            <QuestionSeparator />
            <Question 
                srNo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} 
                question={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ultrices ante. In iaculis mauris quis cursus commodo. Morbi nec nulla tortor. Cras volutpat sit amet erat id mattis. Nunc libero tellus, cursus ac ipsum vel, tincidunt ornare dui. Integer tristique neque nec semper fermentum. Donec ex enim, porttitor sed risus sed, luctus suscipit nunc. Morbi eleifend odio massa, in facilisis lectus mattis et. Praesent fermentum felis ipsum, ut vestibulum velit bibendum sed."}
                auditionNote={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                id="ques2"
            />
        </>
    )
}
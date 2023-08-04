// Form.js
import React, { useState } from "react";
import Question from "../Question/index.js";

const QuestionSeparator = () => <div className="separator"></div>;
const Form = (props) => {
  const [form, setForm] = useState(props.levels);

  const handleAnswerChange = (level, srNo, selectedOption) => {
    setForm((prevForm) => {
      const updatedLevels = prevForm.levels.map((prevLevel) => {
        if (prevLevel.level === level) {
          const updatedQuestions = prevLevel.questions.map((question) => {
            if (question.srNo === srNo) {
              return {
                ...question,
                response: selectedOption,
              };
            }
            return question;
          });
  
          return {
            ...prevLevel,
            questions: updatedQuestions,
          };
        }
        return prevLevel;
      });
  
      return {
        ...prevForm,
        levels: updatedLevels,
      };
    });
  };
  

  return (
    <>
      <h2 className="mb-3">{`"FR1"${props.fr}`}</h2>
      {Object.keys(form).map((entry, lId) => (
        <React.Fragment key={lId}>
          <h3 className="mb-2">{`Level ${entry.level}`}</h3>
          {Object.keys(entry.questions).map((ques, qId) => (
            <React.Fragment key={qId}>
              <QuestionSeparator />
              <Question
                fr={props.fr}
                level={entry.level}
                srNo={ques.srNo}
                sr={ques.sr}
                desc={ques.desc}
                hint={ques.hint}
                question={ques.question}
                initialAnswer={ques.response}
                initialComment={ques.comment}
                onAnswerChange={handleAnswerChange}
              />
              <p>Answer: {ques.response}</p>
            </React.Fragment>
          ))}
          <div style={{ padding: "30px 0" }}></div>
        </React.Fragment>
      ))}
    </>
  )
};

export default Form;




// {levels:{
//  level:1,
//     questions:{question:"question1",
//                response:"yes", 
//                comment:"Dhruvit Dabhi"}
//               }
// }
//   
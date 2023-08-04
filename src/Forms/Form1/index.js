// // Form1.js
// import React, { useState } from "react";
// import Question from "../../Question/index.js";

// const QuestionSeparator = () => <div className="separator"></div>;

// const questionSet = {
//     level1: {
//       question1: 
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ultrices ante. In iaculis mauris quis cursus commodo. Morbi nec nulla tortor. Cras volutpat sit amet erat id mattis. Nunc libero tellus, cursus ac ipsum vel, tincidunt ornare dui. Integer tristique neque nec semper fermentum. Donec ex enim, porttitor sed risus sed, luctus suscipit nunc. Morbi eleifend odio massa, in facilisis lectus mattis et. Praesent fermentum felis ipsum, ut vestibulum velit bibendum sed.",
//       question2: 
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ultrices ante. In iaculis mauris quis cursus commodo. Morbi nec nulla tortor. Cras volutpat sit amet erat id mattis. Nunc libero tellus, cursus ac ipsum vel, tincidunt ornare dui. Integer tristique neque nec semper fermentum. Donec ex enim, porttitor sed risus sed, luctus suscipit nunc. Morbi eleifend odio massa, in facilisis lectus mattis et. Praesent fermentum felis ipsum, ut vestibulum velit bibendum sed.",
//     },
//     level2: {
//       question1: 
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ultrices ante. In iaculis mauris quis cursus commodo. Morbi nec nulla tortor. Cras volutpat sit amet erat id mattis. Nunc libero tellus, cursus ac ipsum vel, tincidunt ornare dui. Integer tristique neque nec semper fermentum. Donec ex enim, porttitor sed risus sed, luctus suscipit nunc. Morbi eleifend odio massa, in facilisis lectus mattis et. Praesent fermentum felis ipsum, ut vestibulum velit bibendum sed.",
//       question2: 
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ultrices ante. In iaculis mauris quis cursus commodo. Morbi nec nulla tortor. Cras volutpat sit amet erat id mattis. Nunc libero tellus, cursus ac ipsum vel, tincidunt ornare dui. Integer tristique neque nec semper fermentum. Donec ex enim, porttitor sed risus sed, luctus suscipit nunc. Morbi eleifend odio massa, in facilisis lectus mattis et. Praesent fermentum felis ipsum, ut vestibulum velit bibendum sed.",
//     },
// }
// const Form1 = () => {
//   const [answers, setAnswers] = useState({
//     level1: {
//       question1: null,
//       question2: null,
//     },
//     level2: {
//       question1: null,
//       question2: null,
//     },
//   });

//   const handleAnswerChange = (point, question, answer) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [point]: {
//         ...prevAnswers[point],
//         [question]: answer,
//       },
//     }));
//   };

//   return (
//     <>
//       <h2 className="mb-3">FR1</h2>
//       {Object.keys(questionSet).map((point, lId) => (
//         <React.Fragment key={lId}>
//           <h3 className="mb-2">{`Level ${lId + 1}`}</h3>
//           {Object.keys(questionSet[point]).map((questionId, qId) => (
//             <React.Fragment key={qId}>
//               <QuestionSeparator />
//               <Question
//                 srNo={`Ques ${qId + 1}`}
//                 point={point}
//                 id={`question${questionId}`}
//                 question={questionSet[point][questionId]}
//                 initialAnswer={answers[point][`question${questionId}`]}
//                 onAnswerChange={handleAnswerChange}
//               />
//               <p>Answer: {answers[point][`question${questionId}`]}</p>
//             </React.Fragment>
//           ))}
//           <div style={{ padding: "30px 0" }}></div>
//         </React.Fragment>
//       ))}
//     </>
//   )
// };

// export default Form1;


// Form.js
import React, { useState } from "react";
import Question from "../../Question/index.js";

const QuestionSeparator = () => <div className="separator"></div>;
const Form1 = (props) => {
  const [form, setForm] = useState(props.levels || [] );




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

  // const addNewLevel = () => {
  //   const newLevel = {
  //     level: "New Level", // Replace with the desired level name
  //     questions: [
  //       {
  //         srNo: "New SR",
  //         sr: "New SysReq",
  //         desc: "Description for New SR",
  //         question: "New question?",
  //         hint: "Hint for New question",
  //         response: "No",
  //         comment: "Comment for New question",
  //       },
  //     ],
  //   };
  //   setForm((prevForm) => [...prevForm, newLevel]);
  // };

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

export default Form1;

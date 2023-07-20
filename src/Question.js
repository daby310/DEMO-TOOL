import React from "react";

const Question = ({ pointName, question, handleAnswerChange, answer }) => {
  return (
    <div className="question">
      <p>{question}</p>
      <div className="options">
        <button
          className={answer === "Yes" ? "yes" : ""}
          onClick={() => handleAnswerChange(pointName, question, "Yes")}
        >
          Yes
        </button>
        <button
          className={answer === "No" ? "no" : ""}
          onClick={() => handleAnswerChange(pointName, question, "No")}
        >
          No
        </button>
        <button
          className={answer === "Not Applicable" ? "not-applicable" : ""}
          onClick={() => handleAnswerChange(pointName, question, "Not Applicable")}
        >
          Not Applicable
        </button>
      </div>
      {answer === "No" && (
        <div className="explanation">
          <p>Explanation: Why the answer is wrong and what can be done.</p>
        </div>
      )}
    </div>
  );
};

export default Question;

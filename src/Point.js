import React from "react";
import Question from "./Question";
import Graph from "./Graph";

const Point = ({ pointName, questions, handleAnswerChange, answers, graphData }) => {
  return (
    <div className="point">
      <h2>{pointName}</h2>
      {questions.map((question, index) => (
        <Question
          key={index}
          pointName={pointName}
          question={question}
          handleAnswerChange={handleAnswerChange}
          answer={answers[pointName][`question${index + 1}`]}
        />
      ))}
      {/* Display the graph only if any one of the answers in the point is "Yes" */}
      {Object.values(answers[pointName]).includes("Yes") && (
        <div className="graph-container">
          <h3>Percentage Graph for {pointName}</h3>
          <Graph data={graphData[pointName]} />
        </div>
      )}
    </div>
  );
};

export default Point;

import React, { useState, useEffect } from "react";
import "./App.css";
import Graph from "./Graph"; // Make sure to adjust the path if needed

const DemoTool = () => {
  const [answers, setAnswers] = useState({
    point1: {
      question1: null,
      question2: null,
      question3: null,
      question4: null,
      question5: null,
    },
    point2: {
      question1: null,
      question2: null,
      question3: null,
      question4: null,
      question5: null,
    },
    // Add other points and questions here
  });

  const handleAnswerChange = (point, question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [point]: {
        ...prevAnswers[point],
        [question]: answer,
      },
    }));
  };

  // const graphData = {
  //   point1: {
  //     Yes: 0,
  //     No: 0,
  //     "Not Applicable": 0,
  //   },
  //   point2: {
  //     Yes: 0,
  //     No: 0,
  //     "Not Applicable": 0,
  //   },
  //   // Initialize graph data for other points
  // };

  // useEffect(() => {
  //   const calculateGraphData = () => {
  //     Object.keys(graphData).forEach((point) => {
  //       // Reset counts for each answer option
  //       Object.keys(graphData[point]).forEach((option) => {
  //         graphData[point][option] = 0;
  //       });

  //       // Loop through each question and update the counts
  //       Object.keys(answers[point]).forEach((question) => {
  //         if (answers[point][question] !== null) {
  //           graphData[point][answers[point][question]] += 1;
  //         }
  //       });
  //     });
  //   };

  //   calculateGraphData();
  // }, [answers]);

  return (
    <div className="app">
      <h1>Demo Tool</h1>
      <div className="points-container">
        {/* Point 1 */}
        <div className="point">
          <h2>Point 1</h2>
          {/* Add questions for Point 1 */}
          {/* Question 1 */}
          <div className="question">
            <p>Question 1: Random Question 1?</p>
            <div className="options">
              <button
                className={answers.point1.question1 === "Yes" ? "yes" : ""}
                onClick={() => handleAnswerChange("point1", "question1", "Yes")}
              >
                Yes
              </button>
              <button
                className={answers.point1.question1 === "No" ? "no" : ""}
                onClick={() => handleAnswerChange("point1", "question1", "No")}
              >
                No
              </button>
              <button
                className={answers.point1.question1 === "Not Applicable" ? "not-applicable" : ""}
                onClick={() => handleAnswerChange("point1", "question1", "Not Applicable")}
              >
                Not Applicable
              </button>
            </div>
            {answers.point1.question1 === "No" && (
              <div className="explanation">
                <p>Explanation: Why the answer is wrong and what can be done.</p>
              </div>
            )}
          </div>

          {/* Repeat for other questions for Point 1 */}
          {/* Question 2 */}
          <div className="question">
            <p>Question 2: Random Question 2?</p>
            <div className="options">
              <button
                className={answers.point1.question2 === "Yes" ? "yes" : ""}
                onClick={() => handleAnswerChange("point1", "question2", "Yes")}
              >
                Yes
              </button>
              <button
                className={answers.point1.question2 === "No" ? "no" : ""}
                onClick={() => handleAnswerChange("point1", "question2", "No")}
              >
                No
              </button>
              <button
                className={answers.point1.question2 === "Not Applicable" ? "not-applicable" : ""}
                onClick={() => handleAnswerChange("point1", "question2", "Not Applicable")}
              >
                Not Applicable
              </button>
            </div>
            {answers.point1.question2 === "No" && (
              <div className="explanation">
                <p>Explanation: Why the answer is wrong and what can be done.</p>
              </div>
            )}
          </div>

          {/* Question 3 */}
          <div className="question">
            <p>Question 3: Random Question 3?</p>
            <div className="options">
              <button
                className={answers.point1.question3 === "Yes" ? "yes" : ""}
                onClick={() => handleAnswerChange("point1", "question3", "Yes")}
              >
                Yes
              </button>
              <button
                className={answers.point1.question3 === "No" ? "no" : ""}
                onClick={() => handleAnswerChange("point1", "question3", "No")}
              >
                No
              </button>
              <button
                className={answers.point1.question3 === "Not Applicable" ? "not-applicable" : ""}
                onClick={() => handleAnswerChange("point1", "question3", "Not Applicable")}
              >
                Not Applicable
              </button>
            </div>
            {answers.point1.question3 === "No" && (
              <div className="explanation">
                <p>Explanation: Why the answer is wrong and what can be done.</p>
              </div>
            )}
          </div>

          {/* Question 4 */}
          <div className="question">
            <p>Question 4: Random Question 4?</p>
            <div className="options">
              <button
                className={answers.point1.question4 === "Yes" ? "yes" : ""}
                onClick={() => handleAnswerChange("point1", "question4", "Yes")}
              >
                Yes
              </button>
              <button
                className={answers.point1.question4 === "No" ? "no" : ""}
                onClick={() => handleAnswerChange("point1", "question4", "No")}
              >
                No
              </button>
              <button
                className={answers.point1.question4 === "Not Applicable" ? "not-applicable" : ""}
                onClick={() => handleAnswerChange("point1", "question4", "Not Applicable")}
              >
                Not Applicable
              </button>
            </div>
            {answers.point1.question4 === "No" && (
              <div className="explanation">
                <p>Explanation: Why the answer is wrong and what can be done.</p>
              </div>
            )}
          </div>

          {/* Question 5 */}
          <div className="question">
            <p>Question 5: Random Question 5?</p>
            <div className="options">
              <button
                className={answers.point1.question5 === "Yes" ? "yes" : ""}
                onClick={() => handleAnswerChange("point1", "question5", "Yes")}
              >
                Yes
              </button>
              <button
                className={answers.point1.question5 === "No" ? "no" : ""}
                onClick={() => handleAnswerChange("point1", "question5", "No")}
              >
                No
              </button>
              <button
                className={answers.point1.question5 === "Not Applicable" ? "not-applicable" : ""}
                onClick={() => handleAnswerChange("point1", "question5", "Not Applicable")}
              >
                Not Applicable
              </button>
            </div>
            {answers.point1.question5 === "No" && (
              <div className="explanation">
                <p>Explanation: Why the answer is wrong and what can be done.</p>
              </div>
            )}
          </div>
        </div>

        {/* Point 2 */}
        <div className="point">
          <h2>Point 2</h2>
          {/* Add questions for Point 2 */}
          {/* Question 1 */}
          <div className="question">
            <p>Question 1: Random Question 1?</p>
            <div className="options">
              <button
                className={answers.point2.question1 === "Yes" ? "yes" : ""}
                onClick={() => handleAnswerChange("point2", "question1", "Yes")}
              >
                Yes
              </button>
              <button
                className={answers.point2.question1 === "No" ? "no" : ""}
                onClick={() => handleAnswerChange("point2", "question1", "No")}
              >
                No
              </button>
              <button
                className={answers.point2.question1 === "Not Applicable" ? "not-applicable" : ""}
                onClick={() => handleAnswerChange("point2", "question1", "Not Applicable")}
              >
                Not Applicable
              </button>
            </div>
            {answers.point2.question1 === "No" && (
              <div className="explanation">
                <p>Explanation: Why the answer is wrong and what can be done.</p>
              </div>
            )}
          </div>

          {/* Repeat for other questions for Point 2 */}
          {/* Question 2 */}
          <div className="question">
            <p>Question 2: Random Question 2?</p>
            <div className="options">
              <button
                className={answers.point2.question2 === "Yes" ? "yes" : ""}
                onClick={() => handleAnswerChange("point2", "question2", "Yes")}
              >
                Yes
              </button>
              <button
                className={answers.point2.question2 === "No" ? "no" : ""}
                onClick={() => handleAnswerChange("point2", "question2", "No")}
              >
                No
              </button>
              <button
                className={answers.point2.question2 === "Not Applicable" ? "not-applicable" : ""}
                onClick={() => handleAnswerChange("point2", "question2", "Not Applicable")}
              >
                Not Applicable
              </button>
            </div>
            {answers.point2.question2 === "No" && (
              <div className="explanation">
                <p>Explanation: Why the answer is wrong and what can be done.</p>
              </div>
            )}
          </div>

          {/* Question 3 */}
          <div className="question">
            <p>Question 3: Random Question 3?</p>
            <div className="options">
              <button
                className={answers.point2.question3 === "Yes" ? "yes" : ""}
                onClick={() => handleAnswerChange("point2", "question3", "Yes")}
              >
                Yes
              </button>
              <button
                className={answers.point2.question3 === "No" ? "no" : ""}
                onClick={() => handleAnswerChange("point2", "question3", "No")}
              >
                No
              </button>
              <button
                className={answers.point2.question3 === "Not Applicable" ? "not-applicable" : ""}
                onClick={() => handleAnswerChange("point2", "question3", "Not Applicable")}
              >
                Not Applicable
              </button>
            </div>
            {answers.point2.question3 === "No" && (
              <div className="explanation">
                <p>Explanation: Why the answer is wrong and what can be done.</p>
              </div>
            )}
          </div>

          {/* Question 4 */}
          <div className="question">
            <p>Question 4: Random Question 4?</p>
            <div className="options">
              <button
                className={answers.point2.question4 === "Yes" ? "yes" : ""}
                onClick={() => handleAnswerChange("point2", "question4", "Yes")}
              >
                Yes
              </button>
              <button
                className={answers.point2.question4 === "No" ? "no" : ""}
                onClick={() => handleAnswerChange("point2", "question4", "No")}
              >
                No
              </button>
              <button
                className={answers.point2.question4 === "Not Applicable" ? "not-applicable" : ""}
                onClick={() => handleAnswerChange("point2", "question4", "Not Applicable")}
              >
                Not Applicable
              </button>
            </div>
            {answers.point2.question4 === "No" && (
              <div className="explanation">
                <p>Explanation: Why the answer is wrong and what can be done.</p>
              </div>
            )}
          </div>

          {/* Question 5 */}
          <div className="question">
            <p>Question 5: Random Question 5?</p>
            <div className="options">
              <button
                className={answers.point2.question5 === "Yes" ? "yes" : ""}
                onClick={() => handleAnswerChange("point2", "question5", "Yes")}
              >
                Yes
              </button>
              <button
                className={answers.point2.question5 === "No" ? "no" : ""}
                onClick={() => handleAnswerChange("point2", "question5", "No")}
              >
                No
              </button>
              <button
                className={answers.point2.question5 === "Not Applicable" ? "not-applicable" : ""}
                onClick={() => handleAnswerChange("point2", "question5", "Not Applicable")}
              >
                Not Applicable
              </button>
            </div>
            {answers.point2.question5 === "No" && (
              <div className="explanation">
                <p>Explanation: Why the answer is wrong and what can be done.</p>
              </div>
            )}
          </div>
        </div>

        {/* Add more points here */}
        {/* ... */}
      </div>

      {/* Display the graph only if any one of the answers in Point 1 is "Yes" */}
      {/* {Object.values(answers.point1).includes("Yes") && (
        <div className="graph-container">
          <h3>Percentage Graph for Point 1</h3>
          <Graph data={graphData.point1} />
        </div>
      )} */}

      {/* Display the graph only if any one of the answers in Point 2 is "Yes" */}
      {/* {Object.values(answers.point2).includes("Yes") && (
        <div className="graph-container">
          <h3>Percentage Graph for Point 2</h3>
          <Graph data={graphData.point2} />
        </div>
      )} */}

      {/* Display more graphs for other points here */}
      {/* ... */}
    </div>
  );
};

export default DemoTool;

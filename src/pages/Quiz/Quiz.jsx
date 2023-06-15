import React, { useState, useEffect } from "react";
import { RiTimerLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  // Add more questions here...
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [timer, setTimer] = useState(60);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timer > 0 && !showModal) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setShowModal(true);
    }
  }, [timer, showModal]);

  useEffect(() => {
    if (selectedOption === questions[currentQuestion]?.answer) {
      setScore((prevScore) => prevScore + 1);
    }
  }, [selectedOption, currentQuestion]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion]?.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setSelectedOption("");
    if (currentQuestion + 1 === questions.length) {
      setShowModal(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-40">
      <div className="flex justify-between items-center">
        <div
          className={`text-lg flex items-center ${
            timer <= 10 ? "text-red-500" : ""
          }`}
        >
          <RiTimerLine className="mr-1" />
          <span>:&nbsp;{timer}s</span>
        </div>
        <div className="progress-bar flex-grow ml-4">
          <div
            className="progress-bar-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-2xl font-bold">
        {`Q.${currentQuestion+1}`} &nbsp; {questions[currentQuestion]?.question}
        </h1>
        <div className="my-4">
          {questions[currentQuestion]?.options.map((option, index) => (
            <div
              key={index}
              className={`p-2 mb-2 border rounded cursor-pointer ${
                selectedOption === option
                  ? "bg-white text-black font-semibold"
                  : ""
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <button
          className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextQuestion}
        >
          {currentQuestion + 1 === questions.length
            ? "Show Result"
            : "Next Question"}
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded shadow p-20 flex justify-center items-center flex-col">
            {timer === 0 ? (
              <p className="text-2xl text-red-500 font-semibold mt-2">
                Sorry, your time is over!
              </p>
            ) : (
              <>
                <h2
                  className={`text-2xl font-bold mb-2 ${
                    score >= questions.length / 2
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {score >= questions.length / 2
                    ? "Congratulations! 🎉✨🎉"
                    : "Failed! ☹☹☹"}
                </h2>
                <p className="font-semibold text-black">
                  Your score: {score}/{questions.length}
                </p>
              </>
            )}
            <Link to="/bootcamps/ethereum">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={handleCloseModal}
              >
                Done
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

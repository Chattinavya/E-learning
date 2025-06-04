import React, { useEffect, useState } from "react";

function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default function QuizApp() {
  const [questions, setQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=30&category=18&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        // Prepare questions with answers shuffled
        const prepared = data.results.map((q) => {
          const answers = [...q.incorrect_answers, q.correct_answer];
          // shuffle answers
          for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
          }
          return {
            question: decodeHtml(q.question),
            correct_answer: decodeHtml(q.correct_answer),
            answers: answers.map(decodeHtml),
          };
        });
        setQuestions(prepared);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch questions", err);
        setLoading(false);
      });
  }, []);

  function handleAnswer(answer) {
    setSelectedAnswer(answer);
    if (answer === questions[currentQIndex].correct_answer) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    setSelectedAnswer(null);
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      setShowScore(true);
    }
  }

  function handleRestart() {
    setScore(0);
    setCurrentQIndex(0);
    setSelectedAnswer(null);
    setShowScore(false);
  }

  if (loading) return <div style={{ padding: "20px" }}>Loading questions...</div>;

  if (showScore)
    return (
      <div style={styles.container}>
        <h2>Quiz Completed!</h2>
        <p>
          Your score: {score} / {questions.length}
        </p>
        <button onClick={handleRestart} style={styles.button}>
          Restart Quiz
        </button>
      </div>
    );

  const currentQ = questions[currentQIndex];

  return (
    <div style={styles.container}>
      <h2>Technical Skills Quiz</h2>
      <div style={styles.questionBox}>
        <p style={{ fontWeight: "bold" }}>
          Question {currentQIndex + 1} / {questions.length}
        </p>
        <p>{currentQ.question}</p>

        <div style={styles.answersContainer}>
          {currentQ.answers.map((answer) => {
            const isSelected = answer === selectedAnswer;
            const isCorrect = answer === currentQ.correct_answer;
            let bgColor = "white";

            if (selectedAnswer) {
              if (isSelected) {
                bgColor = isCorrect ? "#4CAF50" : "#F44336"; // green or red
              } else if (isCorrect) {
                bgColor = "#4CAF50";
              }
            }

            return (
              <button
                key={answer}
                onClick={() => !selectedAnswer && handleAnswer(answer)}
                disabled={!!selectedAnswer}
                style={{
                  ...styles.answerButton,
                  backgroundColor: bgColor,
                  cursor: selectedAnswer ? "default" : "pointer",
                }}
              >
                {answer}
              </button>
            );
          })}
        </div>

        {selectedAnswer && (
          <button onClick={handleNext} style={styles.nextButton}>
            {currentQIndex + 1 === questions.length ? "Finish" : "Next Question"}
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "30px auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: 20,
    border: "2px solid #ddd",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  questionBox: {
    marginTop: 20,
  },
  answersContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 15,
    gap: 10,
  },
  answerButton: {
    padding: "10px 15px",
    fontSize: 16,
    borderRadius: 5,
    border: "1px solid #ccc",
    textAlign: "left",
    transition: "background-color 0.3s ease",
  },
  nextButton: {
    marginTop: 20,
    padding: "10px 20px",
    fontSize: 16,
    borderRadius: 5,
    border: "none",
    backgroundColor: "#2196F3",
    color: "white",
    cursor: "pointer",
  },
  button: {
    padding: "10px 20px",
    fontSize: 16,
    borderRadius: 5,
    border: "none",
    backgroundColor: "#2196F3",
    color: "white",
    cursor: "pointer",
  },
};

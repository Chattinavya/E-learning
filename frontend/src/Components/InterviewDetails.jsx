import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { interviewQuestions } from "./interviewQuestion";

function InterviewDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const questions = interviewQuestions[id];

  if (!questions) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Company not found</h2>
        <button onClick={() => navigate("/interview")}>Back to Companies</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
        {id.charAt(0).toUpperCase() + id.slice(1)} Interview Questions
      </h1>

      {Object.entries(questions).map(([section, quesArr]) => (
        <div key={section} style={{ marginBottom: "30px" }}>
          <h2 style={{ borderBottom: "2px solid #0072C6", paddingBottom: "6px", marginBottom: "15px" }}>
            {section}
          </h2>
          <ol>
            {quesArr.map((q, idx) => (
              <li key={idx} style={{ marginBottom: "10px" }}>{q}</li>
            ))}
          </ol>
        </div>
      ))}

      <button
        onClick={() => navigate("/interview")}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          backgroundColor: "#0072C6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Back to Companies
      </button>
    </div>
  );
}

export default InterviewDetails;

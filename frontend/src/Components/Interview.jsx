import { useNavigate } from "react-router-dom";
import background from "/Images/acc.png";

function Interview() {
  const navigate = useNavigate();

  const companies = [
    { id: "accenture", name: "Accenture" },
    { id: "cognizant", name: "Cognizant" },
  ];

  const handleCardClick = (id) => {
    navigate(`/interview/${id}`);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "32px",
        padding: "60px 40px",
        justifyContent: "center",
        background: "#f7f9fc",
        minHeight: "100vh",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        flexWrap: "wrap",
      }}
    >
      {companies.map((company) => {
        const isAccent = company.id === "accenture";

        return (
          <div
            key={company.id}
            onClick={() => handleCardClick(company.id)}
            style={{
              position: "relative",
              borderRadius: "16px",
              width: "280px",
              height: "210px",
              cursor: "pointer",
              overflow: "hidden",
              boxShadow:
                "0 6px 16px rgba(0, 0, 0, 0.09), 0 3px 8px rgba(0, 0, 0, 0.06)",
              backgroundColor: "#fff",
              transition:
                "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: isAccent ? "#fff" : "#1e1e1e",
              border: isAccent ? "none" : "1.8px solid #d1d9e6",
              backgroundImage: isAccent
                ? `linear-gradient(180deg, rgba(0,114,198,0.75) 0%, rgba(0,57,114,0.85) 100%), url(${background})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              fontWeight: "700",
              userSelect: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow =
                "0 20px 50px rgba(0, 114, 198, 0.35), 0 12px 24px rgba(0, 57, 114, 0.3)";
              if (!isAccent) {
                e.currentTarget.style.borderColor = "#0072c6";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(0, 0, 0, 0.09), 0 3px 8px rgba(0, 0, 0, 0.06)";
              if (!isAccent) {
                e.currentTarget.style.borderColor = "#d1d9e6";
              }
            }}
          >
            <h2
              style={{
                marginBottom: "14px",
                fontSize: "2rem",
                letterSpacing: "1.3px",
                textShadow: isAccent
                  ? "1.5px 1.5px 6px rgba(0,0,0,0.7)"
                  : "none",
              }}
            >
              {company.name}
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                color: isAccent ? "rgba(255,255,255,0.9)" : "#555",
                textShadow: isAccent
                  ? "1px 1px 4px rgba(0,0,0,0.6)"
                  : "none",
                margin: 0,
                maxWidth: "180px",
                lineHeight: "1.4",
              }}
            >
              Click to see Interview Questions
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Interview;

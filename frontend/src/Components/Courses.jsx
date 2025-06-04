import React from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";
import { FaBook, FaLanguage, FaBrain } from "react-icons/fa";
import Sidebar from "./Sidebar";

const courses = [
  {
    id: "data-structures",
    title: "Data Structures and Algorithms",
    date: "26-5-2025",
    description: "Data Structures and Algorithms – programming and problem-solving.",
    modules: 17,
    tests: 15,
    progress: "0%",
    timeSpent: "0s",
    icon: <FaBook size={30} color="#007acc" />
  },
  {
    id: "verbal",
    title: "Verbal",
    date: "1-5-2025",
    description: "Boost your English skills with grammar, vocabulary, and comprehension.",
    modules: 20,
    tests: 19,
    progress: "0%",
    timeSpent: "0s",
    icon: <FaLanguage size={30} color="#007acc" />
  },
  {
    id: "reasoning-aptitude",
    title: "Reasoning Aptitude",
    date: "1-5-2025",
    description: "Sharpen your logical thinking and problem-solving skills through structured reasoning.",
    modules: 19,
    tests: 19,
    progress: "0%",
    timeSpent: "0s",
    icon: <FaBrain size={30} color="#007acc" />
  }
];

export default function Courses() {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className={`courses-page ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <h2>View the Courses</h2>
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => navigate(`/courses/${course.id}`)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

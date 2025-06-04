// CourseCard.jsx
import './Coursecard.css'
import { FaLaptopCode, FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  if (!course) return null;

  const handleStartClick = () => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <div className="bytexl-card">
      <div className="card-header">
        <div className="course-icon">{course.icon}</div>
        <div>
          <h3>{course.title}</h3>
          <p className="date">{course.date}</p>
        </div>
      </div>

      <p className="desc">{course.description}</p>

      <div className="course-stats">
        <div><FaLaptopCode style={{ marginRight: '6px' }} />{course.modules} Modules</div>
        <div><FaFileAlt style={{ marginRight: '6px' }} />{course.tests} Tests</div>
      </div>

      <button className="start-button" onClick={handleStartClick}>
        Start
      </button>
    </div>
  );
}

import CourseCard from "../components/CourseCard.jsx";
import { courses } from "../data/mockData.js";

const Courses = () => (
  <div className="page">
    <header className="section-header section-header--stack">
      <div>
        <h2>Courses</h2>
        <p className="muted">
          Manage all your learning tracks, cohorts, and curriculum updates.
        </p>
      </div>
      <div className="filters">
        <button type="button" className="button button--ghost">
          Filter
        </button>
        <button type="button" className="button button--primary">
          Add course
        </button>
      </div>
    </header>
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </div>
);

export default Courses;

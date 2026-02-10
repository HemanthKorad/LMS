import { Link } from "react-router-dom";

const CourseCard = ({ course }) => (
  <article className="course-card">
    <div className="course-card__header">
      <span className={`pill pill--${course.status.toLowerCase()}`}>
        {course.status}
      </span>
      <span className="course-card__category">{course.category}</span>
    </div>
    <h3>{course.title}</h3>
    <p className="course-card__description">{course.description}</p>
    <div className="course-card__meta">
      <span>👩‍🎓 {course.learners} learners</span>
      <span>⭐ {course.rating}</span>
      <span>⏱ {course.duration}</span>
    </div>
    <div className="course-card__footer">
      <div>
        <p className="course-card__label">Instructor</p>
        <p>{course.instructor}</p>
      </div>
      <Link to={`/courses/${course.id}`} className="button button--ghost">
        View details
      </Link>
    </div>
  </article>
);

export default CourseCard;

import { useParams } from "react-router-dom";
import { courses } from "../data/mockData.js";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((item) => item.id === id) ?? courses[0];

  return (
    <div className="page">
      <header className="section-header section-header--stack">
        <div>
          <h2>{course.title}</h2>
          <p className="muted">
            Detailed performance and course management controls.
          </p>
        </div>
        <div className="filters">
          <button type="button" className="button button--ghost">
            Export
          </button>
          <button type="button" className="button button--primary">
            Edit course
          </button>
        </div>
      </header>
      <section className="detail-grid">
        <div className="detail-card">
          <h3>Course overview</h3>
          <p className="muted">{course.description}</p>
          <div className="detail-list">
            <div>
              <p className="muted">Status</p>
              <p>{course.status}</p>
            </div>
            <div>
              <p className="muted">Category</p>
              <p>{course.category}</p>
            </div>
            <div>
              <p className="muted">Duration</p>
              <p>{course.duration}</p>
            </div>
            <div>
              <p className="muted">Learners</p>
              <p>{course.learners}</p>
            </div>
          </div>
        </div>
        <div className="detail-card">
          <h3>Engagement</h3>
          <div className="progress-list">
            <div>
              <p className="muted">Completion rate</p>
              <div className="progress-bar">
                <span style={{ width: "86%" }} />
              </div>
              <p>86%</p>
            </div>
            <div>
              <p className="muted">Avg. quiz score</p>
              <div className="progress-bar progress-bar--accent">
                <span style={{ width: "74%" }} />
              </div>
              <p>74%</p>
            </div>
            <div>
              <p className="muted">Weekly activity</p>
              <div className="progress-bar progress-bar--success">
                <span style={{ width: "92%" }} />
              </div>
              <p>92%</p>
            </div>
          </div>
        </div>
        <div className="detail-card">
          <h3>Upcoming tasks</h3>
          <ul className="task-list">
            <li>
              <span>Review lesson 4 feedback</span>
              <span className="pill pill--active">Due today</span>
            </li>
            <li>
              <span>Schedule Q&amp;A session</span>
              <span className="pill pill--draft">Tomorrow</span>
            </li>
            <li>
              <span>Update resources</span>
              <span className="pill pill--paused">Next week</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;

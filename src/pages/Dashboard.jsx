import StatCard from "../components/StatCard.jsx";
import CourseCard from "../components/CourseCard.jsx";
import DataTable from "../components/DataTable.jsx";
import { courses, stats, students } from "../data/mockData.js";

const Dashboard = () => (
  <div className="page">
    <section className="stats-grid">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </section>
    <section className="grid-layout">
      <div className="grid-main">
        <header className="section-header">
          <div>
            <h2>Course performance</h2>
            <p className="muted">
              Track active programs and monitor learner engagement.
            </p>
          </div>
          <button type="button" className="button button--ghost">
            View analytics
          </button>
        </header>
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <aside className="grid-side">
        <DataTable
          title="Learner pulse"
          columns={["Student", "Cohort", "Progress"]}
          rows={students.map((student) => ({
            id: student.id,
            cells: [student.name, student.cohort, student.progress]
          }))}
          actionLabel="Message cohort"
        />
        <div className="callout-card">
          <h3>Upcoming live sessions</h3>
          <ul>
            <li>
              <span>Leadership Clinic</span>
              <span className="muted">Today · 3:00 PM</span>
            </li>
            <li>
              <span>Design Sprint AMA</span>
              <span className="muted">Tomorrow · 11:00 AM</span>
            </li>
            <li>
              <span>Data Lab Office Hours</span>
              <span className="muted">Fri · 1:00 PM</span>
            </li>
          </ul>
          <button type="button" className="button button--primary">
            Schedule session
          </button>
        </div>
      </aside>
    </section>
  </div>
);

export default Dashboard;

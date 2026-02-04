import DataTable from "../components/DataTable.jsx";
import { instructors } from "../data/mockData.js";

const Instructors = () => (
  <div className="page">
    <header className="section-header">
      <div>
        <h2>Instructors</h2>
        <p className="muted">
          Manage faculty schedules, quality, and learner feedback.
        </p>
      </div>
      <button type="button" className="button button--primary">
        Add instructor
      </button>
    </header>
    <DataTable
      title="Teaching faculty"
      columns={["Instructor", "Speciality", "Courses", "Rating", "Learners"]}
      rows={instructors.map((instructor) => ({
        id: instructor.id,
        cells: [
          instructor.name,
          instructor.speciality,
          instructor.courses,
          instructor.rating,
          instructor.learners
        ]
      }))}
      actionLabel="Assign course"
    />
  </div>
);

export default Instructors;

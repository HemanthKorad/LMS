import DataTable from "../components/DataTable.jsx";
import { students } from "../data/mockData.js";

const Students = () => (
  <div className="page">
    <header className="section-header">
      <div>
        <h2>Students</h2>
        <p className="muted">
          Track learner progress, engagement, and support requests.
        </p>
      </div>
      <button type="button" className="button button--primary">
        Invite student
      </button>
    </header>
    <DataTable
      title="Active learners"
      columns={["Student", "Cohort", "Courses", "Progress", "Status"]}
      rows={students.map((student) => ({
        id: student.id,
        cells: [
          student.name,
          student.cohort,
          student.courses,
          student.progress,
          student.status
        ]
      }))}
      actionLabel="Export list"
    />
  </div>
);

export default Students;

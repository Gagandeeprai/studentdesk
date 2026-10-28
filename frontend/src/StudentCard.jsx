
function StudentCard({ s_name, department, semester }) {
  return (
    <div className="student-card">
      <h2>{s_name}</h2>
      <p>Department: {department}</p>
      <p>Semester: {semester}</p>
    </div>
  );
}

export default StudentCard;


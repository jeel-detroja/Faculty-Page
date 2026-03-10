import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentData = () => {
      fetch(`http://localhost:4000/student/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Error fetching student data');
          }
          return res.json();
        })
        .then((data) => {
          setStudent(data);
        })
        .catch((err) => {
          setError('Error fetching student data: ' + err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchStudentData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!student) return <div>No student data available</div>;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-3 mb-5 bg-body rounded">
        <div className="row g-0">
          <div className="col-md-4 text-center">
            <img
              src={student.image}
              className="img-fluid rounded-circle p-3 student-image"
              alt="Student"
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title text-dark">{student.name}</h2>
              <p className="card-text"><strong>Email:</strong> {student.email}</p>
              <p className="card-text"><strong>Address:</strong> {student.address}</p>
              <p className="card-text"><strong>Mobile:</strong> {student.mobile}</p>
              <p className="card-text"><strong>Roll Number:</strong> {student.roll}</p>
              <p className="card-text"><strong>Enrollment Number:</strong> {student.enrollment}</p>
              <p className="card-text"><strong>Course:</strong> {student.course}</p>
              <Link to={`/student/edit/${id}`}>
                <button className="btn btn-primary mt-3">
                  Edit
                </button>
              </Link>
              <button className="btn btn-secondary mt-3 ms-2" onClick={handleBack}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentList.css'; 

function StudentList() {
    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const fetchStudents = async () => {
        const apiUrl = 'http://localhost:4000/student';
        try {
            const res = await fetch(apiUrl);
            if (!res.ok) {
                throw new Error('Failed to fetch students');
            }
            const data = await res.json();
            const sortedData = data.sort((a, b) => a.id - b.id);
            setStudents(sortedData);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleDelete = async (id) => {
        const apiUrl = `http://localhost:4000/student/${id}`;
        try {
            const res = await fetch(apiUrl, { method: 'DELETE' });
            if (!res.ok) {
                throw new Error('Failed to delete student');
            }
            await res.json();
            setMessage('Student deleted successfully!');
            fetchStudents();
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    const filteredStudents = students.filter((student) => {
        const isCourseMatch = selectedCourse === 'All' || student.course === selectedCourse;
        const isSearchMatch = student.enrollment.toLowerCase().includes(searchQuery.toLowerCase());
        return isCourseMatch && isSearchMatch;
    });

    const studentRows = filteredStudents.length > 0 ? (
        filteredStudents.map((student) => (
            <tr key={student._id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.roll}</td>
                <td>{student.course}</td>
                <td>
                    <Link 
                        to={`/student/${student.id}`} 
                        className="btn btn-sm me-2 read-more-btn"
                    >
                        Read More
                    </Link>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student._id)}>
                        Delete
                    </button>
                </td>
            </tr>
        ))
    ) : (
        <tr><td colSpan="5" className="text-center">No students found</td></tr>
    );

    return (
        <div className="container mt-4">
            {message && <div className="alert alert-success">{message}</div>}

            <div className="row mb-3">
                <div className="col-md-6">
                    <select
                        id="course-select"
                        className="form-select"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="BCA">BCA</option>
                        <option value="EE">EE</option>
                        <option value="CSE">CSE</option>
                        <option value="ME">ME</option>
                        <option value="CE">CE</option>
                    </select>
                </div>

                <div className="col-md-6 d-flex justify-content-end align-items-end">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Enrollment Number"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {studentRows}
                    <tr>
                        <td colSpan="5" className="text-center">
                            <Link to="/student/add">
                                <button className="btn btn-primary">Add New Student</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;

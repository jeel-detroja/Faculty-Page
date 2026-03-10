import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({
        id: '',
        name: '',
        email: '',
        address: '',
        mobile: '',
        roll: '',
        enrollment: '',
        course: '',
        image: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/student/${id}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setStudent(data);
            } catch (err) {
                setError('Error fetching student data: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStudentData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch(`http://localhost:4000/student/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(student),
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            console.log('Student updated:', data);
            navigate(`/student`);
        } catch (err) {
            setError('Error updating student: ' + err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Edit Student Details</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={student.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={student.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea className="form-control" id="address" name="address" rows="2" value={student.address} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="text" className="form-control" id="mobile" name="mobile" value={student.mobile} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="roll" className="form-label">Roll Number</label>
                    <input type="text" className="form-control" id="roll" name="roll" value={student.roll} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="enrollment" className="form-label">Enrollment Number</label>
                    <input type="text" className="form-control" id="enrollment" name="enrollment" value={student.enrollment} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="course" className="form-label">Course</label>
                    <input type="text" className="form-control" id="course" name="course" value={student.course} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input type="url" className="form-control" id="image" name="image" value={student.image} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default EditStudent;

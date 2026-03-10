import React, { useState } from 'react';

function AddStudent() {
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

    const [submittedMessage, setSubmittedMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            id: student.id, 
            name: student.name,
            email: student.email,
            address: student.address,
            mobile: student.mobile,
            roll: student.roll,
            enrollment: student.enrollment,
            course: student.course,
            image: student.image
        };

        console.log("Submitting student data:", formData);

        try {
            const response = await fetch('http://localhost:4000/student/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Student added:', data);
            setSubmittedMessage('Student added successfully!');
            setErrorMessage('');
            setStudent({
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
        } catch (error) {
            console.error('Error adding student:', error);
            setErrorMessage('Error adding student. Please try again.');
            setSubmittedMessage('');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Add Student</h2>
            {submittedMessage && (
                <div className="alert alert-success text-center">{submittedMessage}</div>
            )}
            {errorMessage && (
                <div className="alert alert-danger text-center">{errorMessage}</div>
            )}
            <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="id" className="form-label">ID</label>
                        <input type="text" className="form-control" id="id" name="id" value={student.id} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={student.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={student.email} onChange={handleChange} required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input type="text" className="form-control" id="mobile" name="mobile" value={student.mobile} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="roll" className="form-label">Roll Number</label>
                        <input type="text" className="form-control" id="roll" name="roll" value={student.roll} onChange={handleChange} required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="enrollment" className="form-label">Enrollment Number</label>
                        <input type="text" className="form-control" id="enrollment" name="enrollment" value={student.enrollment} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="course" className="form-label">Course</label>
                        <input type="text" className="form-control" id="course" name="course" value={student.course} onChange={handleChange} required />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea className="form-control" id="address" name="address" rows="2" value={student.address} onChange={handleChange} required></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input type="url" className="form-control" id="image" name="image" value={student.image} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Add Student</button>
            </form>
        </div>
    );
}

export default AddStudent;

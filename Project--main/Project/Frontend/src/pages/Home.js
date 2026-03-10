import React from 'react';
import './Home.css';

const faculty = {
    name: 'Dr. Jane Smith',
    department: 'Computer Science',
    photo: 'https://cdn.leonardo.ai/users/07b1ae50-8cc2-4cc9-a8bc-dbc9490abe99/generations/d2cbef53-b672-46bd-9fc7-425468b72f98/Leonardo_Phoenix_A_highly_detailed_and_realistic_high_dynamic_3.jpg',
    education: [
        'Ph.D. in Computer Science - University of Oxford (2015)',
        'M.Sc. in Artificial Intelligence - Stanford University (2012)',
        'B.Sc. in Computer Science - University of California, Berkeley (2010)'
    ],
    researchInterests: ['Machine Learning', 'Artificial Intelligence', 'Computer Vision'],
    publications: [
        'Smith, J. (2023). "Deep Learning for Image Recognition". Journal of AI Research.',
        'Smith, J. (2022). "A Comprehensive Study on Neural Networks". Computer Science Review.',
        'Smith, J. & Doe, J. (2021). "Understanding AI Ethics". AI & Society.'
    ],
    contact: {
        email: 'jane.smith@ox.ac.uk',
        phone: '+44 1234 567890'
    },
    lectures: [
        { course: 'Algorithms', time: '10:00 AM - 12:00 PM', day: 'Monday', location: 'Room 101' },
        { course: 'Data Structures', time: '2:00 PM - 4:00 PM', day: 'Wednesday', location: 'Room 202' }
    ],
    tasks: [
        { title: 'Research Paper Review', deadline: 'Friday, 15th October', description: 'Review papers for AI Journal.' },
        { title: 'Project Supervision', deadline: 'Tuesday, 12th October', description: 'Supervise student project on Quantum Computing.' }
    ]
};

const getCurrentDayLectures = () => {
    const today = new Date().toLocaleString('en-us', { weekday: 'long' });
    return faculty.lectures.filter(lecture => lecture.day === today);
};

const Home = () => {
    const todayLectures = getCurrentDayLectures();

    return (
        <div className="container my-5">
            <h1 className="text-center mb-5 animated-title">Welcome to the Faculty Panel</h1>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card h-100 shadow-sm transition-card">
                        <img 
                            src={faculty.photo} 
                            alt={faculty.name} 
                            className="card-img-top img-fluid faculty-photo"
                        />
                        <div className="card-body">
                            <h4 className="card-title">{faculty.name}</h4>
                            <p><strong>Department:</strong> {faculty.department}</p>
                            <h5>Education:</h5>
                            <ul className="list-group mb-3">
                                {faculty.education.map((degree, i) => (
                                    <li className="list-group-item" key={i}>{degree}</li>
                                ))}
                            </ul>
                            <h5>Research Interests:</h5>
                            <p>{faculty.researchInterests.join(', ')}</p>
                            <h5>Publications:</h5>
                            <ul className="list-group mb-3">
                                {faculty.publications.map((pub, i) => (
                                    <li className="list-group-item" key={i}>{pub}</li>
                                ))}
                            </ul>
                            <h5>Contact Information:</h5>
                            <p><strong>Email:</strong> {faculty.contact.email}</p>
                            <p><strong>Phone:</strong> {faculty.contact.phone}</p>
                            <h5>Today's Lectures ({new Date().toLocaleDateString()}):</h5>
                            {todayLectures.length > 0 ? (
                                <ul className="list-group mb-3">
                                    {todayLectures.map((lecture, i) => (
                                        <li className="list-group-item" key={i}>
                                            <strong>{lecture.course}</strong> - {lecture.time}, {lecture.location}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No lectures today.</p>
                            )}
                            <h5>Assigned Tasks:</h5>
                            <ul className="list-group">
                                {faculty.tasks.map((task, i) => (
                                    <li className="list-group-item" key={i}>
                                        <strong>{task.title}</strong> - {task.deadline}
                                        <p>{task.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

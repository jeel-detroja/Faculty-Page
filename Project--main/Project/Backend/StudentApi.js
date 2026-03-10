const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const Contact =require('./Contect.js')
const Student = require('./Student.js');
const port = 4000;
const hostname = '127.0.0.1';
const connectionString = "mongodb://localhost:27017/ekadi_project";

// Set up multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

mongoose.connect(connectionString).then(() => {
    const app = express();
    console.log("Connected with Database");

    app.use(express.json());
    app.use(cors());
    app.use('/uploads', express.static('uploads'));

    // Get all students
    app.get('/student', async (req, res) => {
        const ans = await Student.find();
        res.send(ans);
    });

    // Get student by ID
    app.get('/student/:id', async (req, res) => {
        const ans = await Student.findOne({ id: req.params.id });
        if (!ans) {
            return res.status(404).send({ message: 'Student not found' });
        }
        res.send(ans);
    });

    // Add a new student
    app.post('/student/add', async (req, res) => {
        const { id, name, email, address, mobile, roll, enrollment, course, image } = req.body;

        const newStudent = new Student({
            id,
            name,
            email,
            address,
            mobile,
            roll,
            enrollment,
            course,
            image
        });

        try {
            await newStudent.save();
            res.status(201).json(newStudent);
        } catch (error) {
            console.error("Error saving student:", error);
            res.status(500).json({ message: "Error adding student" });
        }
    });

    // Delete a student by ID
    app.delete('/student/:id', async (req, res) => {
        try {
            const ans = await Student.deleteOne({ _id: req.params.id });
            if (ans.deletedCount === 0) {
                return res.status(404).send({ message: 'Student not found' });
            }
            res.send({ message: 'Student deleted successfully' });
        } catch (error) {
            res.status(500).send({ message: 'Error deleting student', error });
        }
    });

    // Update a student by ID
    app.patch('/student/:id', async (req, res) => {
        try {
            const student = await Student.findOne({ id: req.params.id });

            if (!student) {
                return res.status(404).send({ message: 'Student not found' });
            }

            student.id = req.body.id;
            student.name = req.body.name;
            student.email = req.body.email;
            student.address = req.body.address;
            student.mobile = req.body.mobile;
            student.roll = req.body.roll;
            student.enrollment = req.body.enrollment;
            student.course = req.body.course;
            student.image = req.body.image || student.image;

            const updatedStudent = await student.save();
            res.send(updatedStudent);
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: 'An error occurred while updating the student' });
        }
    });

    // Contact
    app.post('/contact', async (req, res) => {
        try {
            const newContact = new Contact(req.body);
            await newContact.save();
            res.json({ item: newContact });
        } catch (error) {
            res.status(500).json({ message: 'Error adding contact:', error });
        }
    });

    app.listen(port, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}).catch((error) => {
    console.error("Database connection failed:", error);
});

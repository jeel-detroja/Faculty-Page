const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    // Remove manual 'id' field, let it auto-increment
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    roll: { type: String, required: true },
    enrollment: { type: String, required: true },
    course: { type: String, required: true },
    image: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

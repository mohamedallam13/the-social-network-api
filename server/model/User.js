const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create Student model
const studentSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        first: {
            type: String,
            required: true,
            max_length: 50,
        },
        last: {
            type: String,
            required: true,
            max_length: 50,
        },
        thoughts: {},
        friends: {},
        assignments: [assignmentSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Student = model('student', studentSchema);

module.exports = Student;

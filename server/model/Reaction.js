const { Schema, model } = require('mongoose');
const { validateEmail, convertToLowerCase } = require("../utils")

// Schema to create Student model
const reactionSchema = {
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, "Please provide a corerct email address"]
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
}
const schema = new Schema(
    reactionSchema,
    {
        toJSON: {
            getters: true,
        },
    }
);

schema.pre("save", convertToLowerCase);

const Reaction = model('Reaction', schema);

module.exports = Reaction;

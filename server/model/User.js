const { Schema, model } = require('mongoose');
const { validateEmail, convertToLowerCase } = require("../utils")

// Schema to create Student model
const userSchema = {
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
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: "Thought"
    },
    friends: {},
    assignments: [],
}
const schema = new Schema(
    userSchema,
    {
        toJSON: {
            getters: true,
        },
    }
);

schema.pre("save", convertToLowerCase);

const User = model('User', schema);

module.exports = User;

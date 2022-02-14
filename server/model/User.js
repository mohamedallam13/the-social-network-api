const { Schema, model } = require('mongoose');
const { validateEmail, convertToLowerCase } = require("../utils")

// Schema to create User model
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
        validate: [validateEmail, "Please provide a correct email address"]
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
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought"
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
}
const schema = new Schema(
    userSchema,
    {
        toJSON: {
            virtuals: true,
        },
    }
);

schema.pre("save", convertToLowerCase);

// Create a virtual property `fullName` that gets and sets the user's full name
schema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return this.friends.length;
    })

const User = model('User', schema);

module.exports = User;

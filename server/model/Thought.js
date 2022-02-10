const { Schema, model } = require('mongoose');
const { validateEmail, convertToLowerCase } = require("../utils")

// Schema to create Student model
const thoughtSchema = {
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    }
}
const schema = new Schema(
    thoughtSchema,
    {
        toJSON: {
            getters: true,
        },
    }
);

schema.pre("save", convertToLowerCase);

const Thought = model('Thought', schema);

module.exports = Thought;

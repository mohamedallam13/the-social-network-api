const { Schema } = require('mongoose');

// Schema to create Student model
const reactionSchema = {
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    username: {
        type: String,
        required: true
    }
}
const schema = new Schema(
    reactionSchema,
    {
        toJSON: {
            virtuals: true,
        },
    }
);

module.exports = schema;

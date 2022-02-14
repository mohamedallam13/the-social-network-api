const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


// Schema to create Thought model
const thoughtSchema = {
    thoughtText: {
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
    },
    reactions: [reactionSchema]
}
const schema = new Schema(
    thoughtSchema,
    {
        toJSON: {
            virtuals: true,
        },
    }
);

schema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return this.reactions.length;
    })

const Thought = model('Thought', schema);

module.exports = Thought;

const User = require("../model/User");
const Thought = require("../model/Thought");

//DONE
const addThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            { username: req.body.username },
            { $addToSet: { thoughts: thought._id } },
            { new: true }
        )

        console.log(thought, user)
        res.status(200).json({ user, thought });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

//DONE
const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

//DONE
const getThoughtById = async (req, res) => {
    const _id = req.params.id;
    try {
        const thought = await Thought.findOne({ _id })
        if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' })
        }
        return res.status(200).json(thought);
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Bad value for ID' })
    }
}

//DONE
const updateThought = async (req, res) => {
    const _id = req.params.id;
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id },
            { $set: req.body },
            { runValidators: true, new: true });
        if (!thought) {
            return res.status(404).json("Thought not found!")
        }
        console.log(thought);
        return res.status(200).json(thought);
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Bad value for ID' })
    }
}

//DONE
const deleteThought = async (req, res) => {
    const _id = req.params.id;
    try {
        const thought = await Thought.findOneAndDelete({ _id });
        if (!thought) {
            return res.status(404).json({ message: "Thought does not exist!" });
        }
        console.log(thought)
        const thought_id = thought._id;
        const username = thought.username;
        await User.findOneAndUpdate(
            { username },
            { $pull: { thoughts: thought_id } },
            { new: true }
        )
        return res.status(200).json({ message: "Thought Deleted!" });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

//DONE
const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        );
        if (!thought) {
            res.status(404).json({ message: 'No thought with this id!' });
        } else {
            res.json(thought);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

//DONE
const deleteReaction = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { reactions: { _id: req.params.reaction_id } } },
            { runValidators: true, new: true }
        );
        if (!thought) {
            res.status(404).json({ message: 'No thought with this id!' });
        } else {
            res.json(thought);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {
    addThought,
    getAllThoughts,
    getThoughtById,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

}
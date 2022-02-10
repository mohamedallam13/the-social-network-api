const User = require("../model/User");
const Reaction = require("../model/Reaction");
const Thought = require("../model/Thought");

const addUser = async (req, res) => {
    const { username, email } = req.body;
    try {
        const user = await User.create({
            username,
            email,

        })
        console.log(user);
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err)
    }
}
const addThought = async (req, res) => {
    try {

    } catch (err) {

    }
}
const addReaction = async (req, res) => {
    try {

    } catch (err) {

    }
}

module.exports = {
    addUser,
    addThought,
    addReaction
}
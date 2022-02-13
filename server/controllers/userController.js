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

const getAllUsers = async (req, res) => {
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
const getUserById = async (req, res) => {
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
const updateUser = async (req, res) => {
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
const deleteUser = async (req, res) => {
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
const addFriend = async (req, res) => {
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
const removeFriend = async (req, res) => {
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

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
}
const User = require("../model/User");
const Reaction = require("../model/Reaction");
const Thought = require("../model/Thought");

// DONE
const addUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(200).json(user);
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

// DONE
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json(err)
    }
}

//DONE
const getUserById = async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findOne({ _id })
        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' })
        }
        return res.status(200).json(user);
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Bad value for ID' })
    }
}

//DONE
const updateUser = async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findOneAndUpdate(
            { _id },
            { $set: req.body },
            { runValidators: true, new: true });

        console.log(user);
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err)
    }
}
//TODO
const deleteUser = async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findOneAndDelete({ _id });
        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' })
        }
        await Thought.deleteMany({ _id: { $in: user.thoughts } }) //TODO: Delete All thoughts associated with the user

        return res.status(200).json({ message: 'User and associated thoughts deleted!' });
    } catch (err) {
        return res.status(500).json(err)
    }
}

//DONE
const addFriend = async (req, res) => {
    const _id = req.params.id;
    const friend_id = req.params.friend_id;
    console.log(_id, friend_id)
    try {
        const user = await User.findOneAndUpdate(
            { _id },
            { $addToSet: { friends: friend_id } },
            { new: true }
        );

        const friend = await User.findOneAndUpdate(
            { _id: friend_id },
            { $addToSet: { friends: _id } },
            { new: true }
        );

        return res.status(200).json([user, friend]);
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

//DONE
const removeFriend = async (req, res) => {
    const _id = req.params.id;
    const friend_id = req.params.friend_id;
    try {
        const user = await User.findOneAndUpdate(
            { _id },
            { $pull: { friends: friend_id } },
            { new: true }
        )

        const friend = await User.findOneAndUpdate(
            { _id: friend_id },
            { $pull: { friends: _id } },
            { new: true }
        )

        // console.log([user, friend]);
        return res.status(200).json([user, friend]);
    } catch (err) {
        console.log(err)
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
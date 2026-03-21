const { Router } = require("express");
const {
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend

} = require("../../controllers/userController");

const router = Router();

router
    .post("/", addUser)
    .get("/", getAllUsers)
    .get("/:id", getUserById)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser)
    .post("/:id/friends/:friend_id", addFriend)
    .delete("/:id/friends/:friend_id", removeFriend)

module.exports = router;

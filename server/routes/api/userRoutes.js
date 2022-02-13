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
    .post("/:id/friends/:friendId", addFriend)
    .delete("/:id/friends/:friendId", removeFriend)

module.exports = router;

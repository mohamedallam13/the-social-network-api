const { Router } = require("express");
const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require("../../controllers/thoughtController");

const router = Router();

router
    .post("/", addThought)
    .get("/", getAllThoughts)
    .get("/:id", getThoughtById)
    .put("/:id", updateThought)
    .delete("/:id", deleteThought)
    .post("/:id/reactions/", addReaction)
    .delete("/:id/reactions/:reactionId", deleteReaction)

module.exports = router;

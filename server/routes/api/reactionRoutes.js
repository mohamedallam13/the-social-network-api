const { Router } = require("express");
const { addReaction } = require("../../controllers");

const router = Router();

router.post("/", addReaction);

module.exports = router;

const { Router } = require("express");
const { addUser } = require("../../controllers");

const router = Router();

router.post("/", addUser);

module.exports = router;

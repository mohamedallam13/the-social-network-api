const { Router } = require("express");
const { addThought } = require("../../controllers");

const router = Router();

router.post("/", addThought)
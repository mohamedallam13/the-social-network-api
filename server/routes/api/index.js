const { Router } = require("express");
const { userRoutes } = require("./userRoutes");
const { thoughtRoutes } = require("./thoughtRoutes");
const { reactionRoutes } = require("./reactionRoutes");

const router = Router();

router.use("/user", userRoutes)
router.use("/thought", thoughtRoutes)
router.use("/reaction", reactionRoutes)

module.exports = router;
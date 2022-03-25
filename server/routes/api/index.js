const { Router } = require("express");
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

const router = Router();

router.use("/user", userRoutes)
router.use("/thought", thoughtRoutes)

module.exports = router;
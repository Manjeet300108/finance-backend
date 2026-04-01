const router = require("express").Router();
const { getSummary } = require("../controllers/dashboard.controller");
const { verifyToken } = require("../middlewares/auth.middleware");

router.get("/summary", verifyToken, getSummary);

module.exports = router;
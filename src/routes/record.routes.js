const router = require("express").Router();
const controller = require("../controllers/record.controller");
const { verifyToken } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");

router.post("/", verifyToken, authorize("admin"), controller.createRecord);
router.get("/", verifyToken, authorize("admin", "analyst", "viewer"), controller.getRecords);
router.put("/:id", verifyToken, authorize("admin"), controller.updateRecord);
router.delete("/:id", verifyToken, authorize("admin"), controller.deleteRecord);


module.exports = router;
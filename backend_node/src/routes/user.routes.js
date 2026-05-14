const { Router } = require("express");
const userController = require("../controllers/users.controller");
const auth = require("../middlewares/auth");

const router = Router();

router.get("/test", userController.test);

router.get("/", auth, userController.userProfile);
router.post("/", auth, userController.updateProfile);

module.exports = router;
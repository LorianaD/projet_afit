const { Router } = require("express");
const userController = require('../controllers/users.controller');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/test', userController.test);
router.get('/', userController.userProfile);
router.post('/', userController.updateProfile);

module.exports = router;
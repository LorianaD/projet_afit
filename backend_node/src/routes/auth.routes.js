const { Router } = require("express");
const authController = require('../controllers/auth.controller');
const { registerRules, loginRules } = require('../middlewares/validators/auth.validators');

const router = Router();

router.get('/test', authController.test);

router.post('/register', registerRules, authController.register);
router.post('/login', loginRules, authController.login);

module.exports = router;
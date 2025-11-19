const { Router } = require("express");
const authController = require('../controllers/auth.controller');
// recuperer les middleware des rules

const router = Router();

router.get('/test', authController.test);
// ajouter les rules aux routes
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
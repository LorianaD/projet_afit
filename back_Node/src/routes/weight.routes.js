const { Router } = require("express");
const weightController = require('../controllers/weight.controller');
const { registerRules, loginRules } = require('../middlewares/validators/auth.validators');

const router = Router();

router.get('/test', weightController.test);
router.post('/', weightController.createWeight);

module.exports = router;
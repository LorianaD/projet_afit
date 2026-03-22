const { Router } = require("express");
const weightController = require('../controllers/weight.controller');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/test', weightController.test);
router.post('/', auth, weightController.createWeight);
router.get('/', auth, weightController.weightList);

module.exports = router;
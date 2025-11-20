const { Router } = require("express");

const router = Router();

router.use('/auth', require('./auth.routes'));
router.use('/weight', require('./weight.routes'));

module.exports = router;
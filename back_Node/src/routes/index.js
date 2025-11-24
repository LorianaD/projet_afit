const { Router } = require("express");

const router = Router();

router.use('/auth', require('./auth.routes'));
router.use('/weight', require('./weight.routes'));
router.use('/user', require('./user.routes'));

module.exports = router;
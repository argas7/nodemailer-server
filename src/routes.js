const router = require('express').Router();

const mailController = require('./mailController');

router.route('/form').post(mailController);

module.exports = router;

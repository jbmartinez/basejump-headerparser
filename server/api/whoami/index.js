'use strict';

var express = require('express');
var controller = require('./whoami.controller');

var router = express.Router();

router.get('/', controller.parse);

module.exports = router;

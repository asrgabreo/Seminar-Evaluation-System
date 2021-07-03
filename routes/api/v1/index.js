const express = require('express');


const router = express.Router();


const user = require('./user');
const assignment = require('./assignment');


router.use('/user', user);
router.use('/assignment', assignment);


module.exports = router;

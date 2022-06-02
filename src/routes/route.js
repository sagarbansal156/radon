const express = require('express');
const externalModule = require('./logger')
const logger = require('../logger/logger')
const router = express.Router();
const Date1 = require('../util/helper')
const Month1 = require('../util/helper')
const Batchinfo = require('../util/helper')
const Flatter1 = require('../validator/formattor')
const Flatter2 = require('../validator/formattor')
const Flatter3 = require('../validator/formattor')
router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    logger.welcome()
    Date1.PrintDate()
    Month1.PrintMonth()
    Batchinfo.getbatchinfo()
    Flatter1.Trim()
    Flatter2.lowercase()
    Flatter3.uppercase()


    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason
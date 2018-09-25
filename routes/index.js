var express = require('express');
var router = express.Router();

/* GET home page. */


// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

router.get ('/', function (req, res) {
    res.send('Welcome to my api');
});

router.post('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);

router.put('/update/:id', product_controller.product_update);

router.delete('/delete/:id', product_controller.product_delete);

router.get('/all',product_controller.product_all);

module.exports = router;

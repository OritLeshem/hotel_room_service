var express = require('express');
var router = express.Router();
const orderCrtl=require('../controllers/orders')

/* GET menu to start order */
router.get('/', orderCrtl.start_menu)
router.post('/',orderCrtl.create_order)
router.get('/:id',orderCrtl.confirm)
router.get('/all_info',orderCrtl.all_info)


module.exports = router;

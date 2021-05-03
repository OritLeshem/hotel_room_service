var express = require('express');
var router = express.Router();
const orderCrtl=require('../controllers/orders')

/* GET menu to start order */
router.get('/', orderCrtl.start_menu)
router.post('/',orderCrtl.create_order)
router.get('/all_info',orderCrtl.all_info)
router.get('/:id',orderCrtl.confirm)


module.exports = router;

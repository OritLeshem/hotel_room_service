var express = require('express');
var router = express.Router();
const orderCrtl=require('../controllers/orders')

/* GET menu to start order */
router.get('/', orderCrtl.start_menu)
router.post('/',orderCrtl.create_order)
router.post('/side_dish',orderCrtl.add_side_dish)
router.post('/dessert_dish',orderCrtl.add_dessert_dish)
router.get('/all_info',orderCrtl.all_info)
router.get('/confirm',orderCrtl.confirm)
router.get('/:id',orderCrtl.side_dish)
router.get('/:id/dessert_dish',orderCrtl.dessert_dish)

module.exports = router;

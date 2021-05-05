var express = require('express');
var router = express.Router();
const orderCrtl=require('../controllers/orders')

/* GET menu to start order */
router.get('/', orderCrtl.start_menu)
router.post('/',orderCrtl.create_order)
router.post('/:id/side_dish',orderCrtl.add_side_dish)
router.post('/:id/dessert_dish',orderCrtl.add_dessert_dish)
router.post('/:id/edit_main_dish',orderCrtl.edit_main_dish)

router.get('/all_info',orderCrtl.all_info)
router.delete('/delete_all_info',orderCrtl.delete_all_info)
router.get('/:id',orderCrtl.side_dish)
router.get('/:id/dessert_dish',orderCrtl.dessert_dish)
router.get('/:id/confirm',orderCrtl.confirm)
router.get('/:id/edit_order',orderCrtl.edit_order)
router.delete('/all_info/:id',orderCrtl.delete_one_info)
module.exports = router;

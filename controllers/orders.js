const Order = require('../models/order');
const Room = require('../models/room');

module.exports={
    create_order,
    start_menu,
    all_info,
    confirm
    };

function start_menu(req,res){
    console.log("start menu");
    res.render("orders");
}

function create_order(req,res){
    const order = new Order(req.body);
    order.save(function(err){
        if(err) return res.redirect('/orders');
        res.redirect(`/orders/${order._id}`)
    })
    // console.log(order);
}

function all_info(req, res) {
    Order.find({},function(err, orders){
    Room.find({}, function (err, r_num) {
        // console.log("r_num___>",r_num);
        // console.log("orders--->",orders);
        res.render('all_info',{orders,r_num});
        });
    });
}
function confirm(req, res) {
    Order.findById((req.params.id),function(err, order) {
        //console.log("req.body---->",order.roomNum)

    Room.find({room_num:order.roomNum}, function (err, r_num) {
        console.log("r_num[0]._id---->",r_num[0]._id)
    order.room_data.push(r_num[0]._id);
    order.save()
        // console.log(r_num);
        res.render('confirm', {order,r_num})
   });
    });
         
}


     
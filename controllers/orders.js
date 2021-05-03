const Order = require('../models/order');

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
    console.log(order);
}

function all_info(req, res) {
    Order.find({},function(err, orders){
        console.log(orders);
        res.render('all_info',{orders});
    });
}
function confirm(req, res) {
    Order.findById((req.params.id),function(err, order) {
    //   order.room.findOne({room_num:`${order.roomNum}`}, function (err, r_num) {});
         console.log(order.room[0]);
         res.render('confirm', {order})
    });
}


     
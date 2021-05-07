const Order = require('../models/order');
const Room = require('../models/room');

module.exports={ 
    create_order,
    start_menu,
    side_dish,
    add_side_dish,
    dessert_dish,
    add_dessert_dish,
    all_info,
    confirm,
    edit_order,
    edit_main_dish,
    delete_one_info,
    delete_all_info,
    from_chef
    };

function start_menu(req,res){
    res.render("orders/main_dish");
}

function from_chef(req,res){
    console.log("start menu");
    res.render("from_chef");
}

function create_order(req,res){
    const order = new Order(req.body);
    order.save(function(err){
        if(err) return res.send(err);
        res.redirect(`/orders/${order._id}`)
    })
}

function edit_order(req,res){
    Order.findById((req.params.id),function(err, order) {
        res.render('orders/edit_order',{order});
    })
}

function edit_main_dish(req, res){
    Order.findByIdAndUpdate(req.params.id,{main_dish:req.body.main_dish},function(err,order){
        res.redirect(`/orders/${order._id}`)
    })
}

function side_dish(req,res){
    Order.findById((req.params.id),function(err, order) {
       res.render('orders/side_dish',{order});
    })
}

function add_side_dish(req, res){
    Order.findByIdAndUpdate(req.params.id,{side_dish:req.body.side_dish},function(err,order){
        res.redirect(`/orders/${order._id}/dessert_dish`)
    })
}

function dessert_dish(req,res){
    Order.findById((req.params.id),function(err, order) {
        res.render('orders/dessert_dish',{order});
    })
}

function add_dessert_dish(req, res){
    Order.findByIdAndUpdate(req.params.id,{dessert_dish:req.body.dessert_dish,allergies:req.body.allergies },function(err,order){
        res.redirect(`/orders/${order._id}/confirm`)        
    });
}

function all_info(req, res) {
    Order.find({}).
    populate('room_data').
    exec(function (err,orders){
        if (err) return handleError(err);
        res.render('all_info',{orders}); 
    });
}

function confirm(req, res) {
    Order.findById((req.params.id),function(err, order) {
          Room.find({room_num:order.roomNum}, function (err, r_num) {
                if(r_num[0]!==undefined){    
                 order.room_data.push(r_num[0]._id);
                 order.save()
                 res.render('confirm', {order,r_num})
                }else{
                res.render("room_err");
                }
            });
    });
}

function delete_one_info(req,res){
    Order.deleteOne({_id:req.params.id},function(err, order){
        res.redirect('/orders/all_info')
    });
}

function delete_all_info(req,res){
    Order.deleteMany(function(err, order){
        res.redirect('/orders/all_info')
    });
}

     
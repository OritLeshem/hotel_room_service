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
    delete_all_info
    };

function start_menu(req,res){
    console.log("start menu");
    res.render("orders/main_dish");
}

function create_order(req,res){
    const order = new Order(req.body);
    order.save(function(err){
        console.log("create_order parms---->",req.params)
        if(err) return res.send(err);
        res.redirect(`/orders/${order._id}`)
    })
   
}
function edit_order(req,res){
    Order.findById((req.params.id),function(err, order) {
        res.render('orders/:id/edit_order',{order});
    })
}


function edit_main_dish(req, res){
    Order.findByIdAndUpdate(req.params.id,{main_dish:req.body.main_dish},function(err,order){
      
      res.redirect(`/orders/${order._id}`)
    })
  }



function side_dish(req,res){
   
    Order.findById((req.params.id),function(err, order) {
        console.log("side_dish parms---->",req.params)
        res.render('orders/side_dish',{order});
    })
}

function add_side_dish(req, res){
    console.log("add_side_dish parms before---->",req.params)
  Order.findByIdAndUpdate(req.params.id,{side_dish:req.body.side_dish},function(err,order){
    console.log("add_side_dish parms after---->",req.params)
    res.redirect(`/orders/${order._id}/dessert_dish`)
    console.log("add_side_dish end order._id---->",order._id)
  })
}

function dessert_dish(req,res){
    console.log("dessert_dish parms---->",req.params)
    Order.findById((req.params.id),function(err, order) {
        res.render('orders/dessert_dish',{order});
    })
}

function add_dessert_dish(req, res){
    console.log("dessert_dish parms---->",req.params)
    Order.findByIdAndUpdate(req.params.id,{dessert_dish:req.body.dessert_dish,allergies:req.body.allergies },function(err,order){
        console.log("add_dessert_dish parms---->",req.params)
        res.redirect(`/orders/${order._id}/confirm`)        
        // res.redirect(`/orders/${order._id}/dessert_dish`)

        
       });
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
        // console.log("r_num[0]._id---->",r_num[0]._id)
    order.room_data.push(r_num[0]._id);
    order.save()
        // console.log(r_num);
        res.render('confirm', {order,r_num})
   });
    });
         
}

function delete_one_info(req,res){
    console.log("delete function wae reached",req.params.id)
    Order.deleteOne({_id:req.params.id},function(err, order){
        res.redirect('/orders/all_info')
    });
    
    

}

function delete_all_info(req,res){
    Order.deleteMany();
    res.redirect('/orders/all_info')

}

     
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
  roomNum:Number,
  main_dish: String,
  side_dish: String,
  dessert_dish:String,
  allergies:String,
  room_data: [{type: Schema.Types.ObjectId, ref: 'Room'}],
  
});


module.exports = mongoose.model('Order', orderSchema);
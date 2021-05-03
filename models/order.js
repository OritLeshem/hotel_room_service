const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema= new Schema({
  room_num: Number,
  full_name:String,
  num_of_people: Number
})
const orderSchema = new Schema({
  rooms:[roomSchema],
  main_dish: String,
  side_dish: String,
  dessert_dish:String,
  allergies:String,
  roomNum:Number,
});


module.exports = mongoose.model('Order', orderSchema);
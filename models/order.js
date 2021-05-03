const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  main_dish: String,
  side_dish: String,
  dessert_dish:String,
  allergies:String
});


module.exports = mongoose.model('Order', orderSchema);
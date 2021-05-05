const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema= new Schema({
  
  room_num: Number,
  full_name:String,
  num_of_people: Number
})



module.exports = mongoose.model('Room', roomSchema);
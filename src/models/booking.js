const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({

    room_id: { type: Number, required: true },
    user_id: { type: String, required: true},
    date: {from: Date,  to: Date}
  }),
  
    
 
  const Booking = mongoose.model("Booking", bookingSchema);


module.exports = Booking

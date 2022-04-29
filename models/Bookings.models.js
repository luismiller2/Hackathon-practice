const { Schema, model } = require("mongoose");

const bookingsSchema = new Schema({
    studio: { type: Schema.Types.ObjectId, ref: "Studio" },
    schedule: { type: Schema.Types.ObjectId, ref: "Time" },
    
  });

  const Bookings = model("Bookings", bookingsSchema);

module.exports = Bookings;
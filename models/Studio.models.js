const { Schema, model } = require("mongoose");

// add schedule array (morning: 8-10, 10-12, afternoon: 12-2, 2-4, night: 4-6, 6-8)

const studioSchema = new Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    address: {
      type: String,
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
    cost: {
      type: String,
    },
    
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],

    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    schedule: {
      type: Object,
    },
    addOns: {
      type: String,
    },
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Studio = model("Studio", studioSchema);


module.exports = Studio;

const { Schema, model } = require("mongoose");

const studioSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    availability: {
      type: String,
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

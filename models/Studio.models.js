const { Schema, model } = require("mongoose");

const studioSchema = new Schema(
  {
    studioName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    cost: {
      type: Number,
    },
    phoneNumber: {
      type: Number,
    },
    email: {
      type: String,
    },
    availability: {
      type: Boolean,
    },
    addOns: {
      type: Array,
    },
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Studio = model("Studio", studioSchema);
// const Studio = model("Studio", studiosSchema);

module.exports = Studio;

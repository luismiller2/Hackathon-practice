const { Schema, model } = require("mongoose");

const studioSchema = new Schema(
  {
    studiosName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
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
    cost: {
      type: Number,
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
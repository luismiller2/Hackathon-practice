const { Schema, model } = require("mongoose");

const studioSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
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
// const Studio = model("Studio", studiosSchema);

module.exports = Studio;

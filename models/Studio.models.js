const { Schema, model } = require("mongoose");

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
    cost: {
      type: String,
    },
    
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    schedule: {
      type: Object,
    },
    
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Studio = model("Studio", studioSchema);


module.exports = Studio;

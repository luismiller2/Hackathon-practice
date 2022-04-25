const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },

    studio: {
      type: String,
    },
    review: {
      type: String,
    },
  },
  
  {
    timeseries: true,
    timestamps: true,
  }

);

const Review = model("Review", reviewSchema);

module.exports = Review;
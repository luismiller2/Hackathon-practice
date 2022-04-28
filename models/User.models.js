const { Schema, model } = require("mongoose");

const userSchema = new Schema(

  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    schedule: {
      type: Object,
    },
    phoneNumber: {
      type: String,
    }
  },
  
  {
    timeseries: true,
    timestamps: true,
  }

);

const User = model("User", userSchema);

module.exports = User;

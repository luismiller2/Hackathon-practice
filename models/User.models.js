const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    //stay inside these curly braces
  },

  //stay above this line 
  {
    timeseries: true,
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;

const { Schema, model } = require("mongoose");

const userSchema = new Schema(
// const studiosSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    
    name: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    email: {
      type: String,
    }

  },
  // { 
  //   studios: {
  //     type: String,
  //     required: true,
  //   },
  //   name: {
  //     type: String,
  //   }
  //   phoneNumber: {
  //     type: Number,
  //   }
  //   email: {
  //     type: String,
  //   }
  //   address: {
  //     type: String,
  //   }
  //   availability: {
  //     type: Boolean,
  //   }
  //   cost: {
  //     type: Number,
  //   }
  //   addOns: {
  //     type: Array,
  //   }
  // },
  {
    timeseries: true,
    timestamps: true,
  }

);

const User = model("User", userSchema);
// const Studio = model("Studio", studiosSchema);

module.exports = User;

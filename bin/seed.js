const mongoose = require('mongoose');
const User = require('../models/User.models')

let users = [
    {
    user: 'Nick',
    name: "Nick",
    phoneNumber: 33333333,
    email: "nick@mail.com"
    },
    {
    user: 'Luis',
    name: "Luis",
    phoneNumber: 33333333,
    email: "luis@mail.com"
    }
  ]

mongoose
  .connect("mongodb://localhost/hackathon-practice")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));


  User.create(users)
  .then(function(results){
      console.log("Users saved", results)
  })
  .catch(function(error){
      console.log('Something went wrong', error.message)
      mongoose.connection.close();
  })
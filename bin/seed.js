const mongoose = require('mongoose');
const User = require('../models/User.models')

let users = [
    {
    user: 'Nick',
    name: "Nick",
    phoneNumber: 303-333-3333,
    email: "nick@gmail.com"
    },
    {
    user: 'Luis',
    name: "Luis",
    phoneNumber: 303-333-3333,
    email: "luis@gmail.com"
    },
    {
    user: 'Toyota',
    name: "Miguel",
    phoneNumber: 505-644-0222,
    email: "miguel@toyota.com"
    },
    {
    user: 'Wal-Mart',
    name: "Carlos",
    phoneNumber:  212-413-8747,
    email: "carlos@walmart.com"
    },
    {
    user: 'Ricardo',
    name: "Ricardo",
    phoneNumber: 213-936-1868,
    email: "rars@gmail.com"
    },
    {
    user: 'Ironhack',
    name: "Mike",
    phoneNumber: 582-282-4633,
    email: "mike@ironhack.com"
    },

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
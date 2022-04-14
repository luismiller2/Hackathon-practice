const mongoose = require('mongoose');
const Studio = require('../models/Studio.models');
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


let studio = [
    {
    name: 'HGAB',
    address: '46 NW 36th St Unit 2, Miami, FL 33127',
    cost: '$50-80/hr',
    availability: 'Yes/No',
    phoneNumber: '(305) 200-3056',
    email: 'info@hgabstudios.com',
    addOns: 'Yes/No',
    },

    {
    name:  'Backhaus',
    address: '7245 NE 4th Ave, Unit 105-1, Miami, FL 33126',
    cost: '$100/hr',
    availability: 'Yes/No',
    phoneNumber: '(786)-262-0104',
    email: 'contact@vacostudio.com',
    addOns: 'Yes/No',
    },
    {
    name: 'Vault Place',
    address: '540 NW 71st St, Miami, FL 33150',
    cost: '$100-150/hr',
    availability: 'Yes/No',
    phoneNumber: 'N/A',
    email: 'info@vaultplace.com',
    addOns: 'Yes/No',
    },
    {
    name: 'The Warehouse Miami',
    address: '1747 West Flagler Street, Miami, Florida 33135',
    cost: '$100/hr',
    availability: 'Yes/No',
    phoneNumber: 'N/A',
    email: 'info@thewarehousemia.com',
    addOns: 'Yes/No',
    },
    {
    name: 'Ampersand Studios',
    address: '31 NE 17th St, Miami, FL 33132',
    cost: '$350-3000/10hrs',
    availability: 'Yes/No',
    phoneNumber: '(786) 769-0055',
    email: 'info@amperstudios.com',
    addOns: 'Yes/No',
    },
    {
    name: 'CFX Studios',
    address: '1075 W 21st Pl, Hialeah, FL 33010',
    cost: '$300/3hrs - $1200/day',
    availability: 'Yes/No',
    phoneNumber: '(877) 576-4239',
    email: 'INFO@CFX.MIAMI',
    addOns: 'Yes/No',
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

  Studio.create(studio) 
  .then(function(results){
      console.log("Studio Data", results)
  })
  .catch(function(error){
      console.log('Something went wrong', error.message)
      mongoose.connection.close();
  })
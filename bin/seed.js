const mongoose = require("mongoose");
const Studio = require("../models/Studio.models");
const User = require("../models/User.models");

let users = [
  {
    user: "Nick",
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



let studio = [
    {
    image: 'https://www.hgabstudios.com/wp-content/uploads/2019/11/Studio-A-Cyc-Wall-scaled.jpg',
    name: 'HGAB',
    address: '46 NW 36th St Unit 2, Miami, FL 33127',
    cost: '$50-80/hr',
    availability: 'Yes/No',
    phoneNumber: '(305) 200-3056',
    email: 'info@hgabstudios.com',
    addOns: 'Yes/No',
    },

    {
    image: 'https://images.squarespace-cdn.com/content/v1/604677e9bce50f097d8b5a6b/e3c2330e-d96a-4544-ac73-e73d77b11bc7/IMG_1989.jpg?format=1000w',
    name: 'Vault Place',
    address: '540 NW 71st St, Miami, FL 33150',
    cost: '$100-150/hr',
    availability: 'Yes/No',
    phoneNumber: 'N/A',
    email: 'info@vaultplace.com',
    addOns: 'Yes/No',
    },

    {
    image: 'https://img1.wsimg.com/isteam/ip/67681eb1-0240-461…h:520,cg:true,m/cr=w:1400,h:520,ax:50%25,ay:50%25',
    name: 'The Warehouse Miami',
    address: '1747 West Flagler Street, Miami, Florida 33135',
    cost: '$100/hr',
    availability: 'Yes/No',
    phoneNumber: 'N/A',
    email: 'info@thewarehousemia.com',
    addOns: 'Yes/No',
    },

    {
    image: 'https://amperstudios.com/wp-content/uploads/2020/06/FILM-SET_-scaled.jpg',
    name: 'Ampersand Studios',
    address: '31 NE 17th St, Miami, FL 33132',
    cost: '$350-3000/10hrs',
    availability: 'Yes/No',
    phoneNumber: '(786) 769-0055',
    email: 'info@amperstudios.com',
    addOns: 'Yes/No',
    },

    {
    image: 'https://images.squarespace-cdn.com/content/v1/6027dd4af0e0ae0e3d2da9f5/1613225514930-ESMX2NI9M3TW62ZXEAKC/Studio-1+white+cyclorama%2C+Production+House%2C+Miami+FL%2C+CFXSTUDIOSMIAMI?format=750w',
    name: 'CFX Studios',
    address: '1075 W 21st Pl, Hialeah, FL 33010',
    cost: '$300/3hrs - $1200/day',
    availability: 'Yes/No',
    phoneNumber: '(877) 576-4239',
    email: 'INFO@CFX.MIAMI',
    addOns: 'Yes/No',
    },

    {
    image: '',
    name:  'Backhaus',
    address: '7245 NE 4th Ave, Unit 105-1, Miami, FL 33126',
    cost: '$100/hr',
    availability: 'Yes/No',
    phoneNumber: '(786)-262-0104',
    email: 'contact@vacostudio.com',
    addOns: 'Yes/No',
    },

    {
    image: 'https://static.wixstatic.com/media/36b093_d3d0538d4a5448169c92186adc484a5b~mv2.jpg/v1/fill/w_2782,h_1360,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/36b093_d3d0538d4a5448169c92186adc484a5b~mv2.jpg',
    name:  'Wuul Studios',
    address: '202 NE 55th Terrace Miami, FL 33137',
    cost: '$89/hr',
    availability: 'Yes/No',
    phoneNumber: '(786) 491-0001',
    email: 'booking@wuulstudios.com',
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
  .then(function (results) {
    console.log("Users saved", results);
  })
  .catch(function (error) {
    console.log("Something went wrong", error.message);
    mongoose.connection.close();
  });

Studio.create(studio)
  .then(function (results) {
    console.log("Studio Data", results);
  })
  .catch(function (error) {
    console.log("Something went wrong", error.message);
    mongoose.connection.close();
  });

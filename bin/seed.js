const mongoose = require("mongoose");
const Studio = require("../models/Studio.models");
require('dotenv/config')

let studio = [
    {
    name: 'HGAB',
    image: 'https://www.hgabstudios.com/wp-content/uploads/2021/03/Studio-C-2.jpg',
    address: '46 NW 36th St Unit 2, Miami, FL 33127',
    cost: '$50-80/hr',
    phoneNumber: '(305) 200-3056',
    email: 'info@hgabstudios.com',
    schedule: {
      'Morning' : ["8-10am", "10-12pm"],
      'Afternoon': ["12-2pm", "2-4pm"],
      'Night' : ["4-6pm", "6-8pm"],
    },
    },

    {
    name: 'Vault Place',
    image: 'https://images.squarespace-cdn.com/content/v1/604677e9bce50f097d8b5a6b/e3c2330e-d96a-4544-ac73-e73d77b11bc7/IMG_1989.jpg?format=1000w',
    address: '540 NW 71st St, Miami, FL 33150',
    cost: '$100-150/hr',
    phoneNumber: 'N/A',
    email: 'info@vaultplace.com',
    schedule: {
      'Morning' : ["8-10am", "10-12pm"],
      'Afternoon': ["12-2pm", "2-4pm"],
      'Night' : ["4-6pm", "6-8pm"],
    },
    },

    {
      name:  'Wuul Studios',
      image: 'https://static.wixstatic.com/media/36b093_d3d0538d4a5448169c92186adc484a5b~mv2.jpg/v1/fill/w_2782,h_1360,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/36b093_d3d0538d4a5448169c92186adc484a5b~mv2.jpg',
      address: '202 NE 55th Terrace Miami, FL 33137',
      cost: '$89/hr',
      phoneNumber: '(786) 491-0001',
      email: 'booking@wuulstudios.com',
      schedule: {
        'Morning' : ["8-10am", "10-12pm"],
        'Afternoon': ["12-2pm", "2-4pm"],
        'Night' : ["4-6pm", "6-8pm"],
      },
      },

    {
    name: 'Ampersand Studios',
    image: 'https://amperstudios.com/wp-content/uploads/2020/06/FILM-SET_-scaled.jpg',
    address: '31 NE 17th St, Miami, FL 33132',
    cost: '$350-3000/10hrs',
    phoneNumber: '(786) 769-0055',
    email: 'info@amperstudios.com',
    schedule: {
      'Morning' : ["8-10am", "10-12pm"],
      'Afternoon': ["12-2pm", "2-4pm"],
      'Night' : ["4-6pm", "6-8pm"],
    },
    },

    {
    name: 'CFX Studios',
    image: 'https://images.squarespace-cdn.com/content/v1/6027dd4af0e0ae0e3d2da9f5/1613225514930-ESMX2NI9M3TW62ZXEAKC/Studio-1+white+cyclorama%2C+Production+House%2C+Miami+FL%2C+CFXSTUDIOSMIAMI?format=750w',
    address: '1075 W 21st Pl, Hialeah, FL 33010',
    cost: '$300/3hrs - $1200/day',
    phoneNumber: '(877) 576-4239',
    email: 'INFO@CFX.MIAMI',
    schedule: {
      'Morning' : ["8-10am", "10-12pm"],
      'Afternoon': ["12-2pm", "2-4pm"],
      'Night' : ["4-6pm", "6-8pm"],
    },
    },

    {
    name:  'Backhaus',
    image: '',
    address: '7245 NE 4th Ave, Unit 105-1, Miami, FL 33126',
    cost: '$100/hr',
    phoneNumber: '(786)-262-0104',
    email: 'contact@vacostudio.com',
    schedule: {
      'Morning' : ["8-10am", "10-12pm"],
      'Afternoon': ["12-2pm", "2-4pm"],
      'Night' : ["4-6pm", "6-8pm"],
    },
    },

    {
      name: 'The Warehouse Miami',
      image: 'https://img1.wsimg.com/isteam/ip/67681eb1-0240-461…h:520,cg:true,m/cr=w:1400,h:520,ax:50%25,ay:50%25',
      address: '1747 West Flagler Street, Miami, Florida 33135',
      cost: '$100/hr',
      phoneNumber: 'N/A',
      email: 'info@thewarehousemia.com',
      schedule: {
        'Morning' : ["8-10am", "10-12pm"],
        'Afternoon': ["12-2pm", "2-4pm"],
        'Night' : ["4-6pm", "6-8pm"],
      },
      },

]



mongoose
  .connect( process.env.MONGODB_URI || "mongodb://localhost/hackathon-practice")
  .then((x) =>
    console.log(`SEED "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

Studio.create(studio)
  .then(function (results) {
    console.log("Studio Data", results);
  })
  .catch(function (error) {
    console.log("Something went wrong", error.message);
    mongoose.connection.close();
  });


var express = require('express');
var router = express.Router();
const Studio = require('../models/Studio.models')
const isLoggedIn = require('../middleware/isLoggedIn');


router.get("/", function (req, res, next) {
    Studio.find()
      .then(function (results) {
        console.log("Success!", results);
        res.render("studio", { studio: results });
  
      })
      .catch(function (err) {
        console.log("Something went wrong", err.message);
      });
    // res.render("studio");
  });

  router.post("/studio", function(req, res, next){
    Studio.create({
      name: req.body.name,
      image: req.body.image,
      address: req.body.address,
      cost: req.body.cost,
      availability: req.body.availability,
      schedule: req.body.schedule,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      addOns: req.body.addOns
    })
    .then(function (createdStudio) {
      res.json(createdStudio);
    })
    .catch(function (error) {
      res.json(error.message);
    });
  });

router.get("/:id/edit", (req, res, next) => {
    Studio.findById(req.params.id).then(function (studio) {
      console.log(studio);
      res.render("update-studio", { studio: studio });
    });
  })

  router.post('/:id/edit', (req, res, next) => {
    let newObj = {};
    Object.keys(req.body).forEach(function (prop){
      if (req.body[prop]) {
        newObj[prop] = req.body[prop];
      }
    });
    Studio.findByIdAndUpdate(req.params.id, {...newObj})
    .then(function(results){
      console.log("Success", results);
      res.redirect("/studio/studio")
    })
    .catch(function(error){
      console.log("Failed", error.message)
    })
  });

  router.post('/:id/delete', (req, res, next) => {
    Studio.findByIdAndRemove(req.params.id)
    .then(function () {
      res.redirect("/studio/studio");
    })
    .catch(function(error){
      console.log("Failed", error.message)
    })
  });

  router.get('/:id/review', isLoggedIn, (req, res) => {
    Studio.findById(req.params.id)
    .then((foundStudio)=> {
      res.render("review", {foundStudio: foundStudio});
    })
    .catch(()=>{
      res.redirect("/");
    });
  });

  router.post('/:id/delete', isLoggedIn, (req, res, next) => {

    Studio.findByIdAndRemove(req.params.id)
    .then((foundStudio)=> {
      res.render("review", {foundStudio: foundStudio});
    })
    .catch(function(error){
      console.log("Failed", error.message)
    })
  });

module.exports = router;
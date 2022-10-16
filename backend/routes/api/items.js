const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// @reoute GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req,res) => {
  Item.find() //return a promise 
   .sort({ date: -1 })
   .then(items => res.json(items))
});

// @reoute POST api/items
// @desc Create An Item
// @access Public
router.post('/', (req,res) => {
   const newItem = new Item({
    name: req.body.name
   });

   newItem.save().then(item => res.json(item)); //putem folosi .then, pt ca e de tip promise
  });

  // @reoute DELETE api/items/id
  // @desc Delete An Item
  // @access Public
router.delete('/:id', (req,res) => {
    Item.findById(req.params.id)
     .then(items => item.remove().then(() => res.json({success: true})))
     .catch(err => res.status(404).json({success: false}));
   });

module.exports =  router;
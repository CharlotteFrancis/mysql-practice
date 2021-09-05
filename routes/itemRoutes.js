const router = require('express').Router()
const { Item, User} = require('../models')
const passport = require('passport')

// get all items of the user
router.get('/items', passport.authenticate('jwt'), (req, res) => {
  Item.find({
    where: {
      id: req.user.id
    }
  })
    .then(items => res.json(items))
    .catch(err => res.status(400).json(err))
})

// alt (testing)
router.get('/myitems', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user.item)
})


// get one specific item

router.get('/items/:id', passport.authenticate('jwt'), (req, res) => {
  Item.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(item => res.json(item))
    .catch(err => console.log(err))
})
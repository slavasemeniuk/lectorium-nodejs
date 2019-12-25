const express = require('express')
const validate = require('./../middlewares/validator-middleware')
const validatorSchemas = require('../validators/users/validators')

const router = express.Router()

router.get('/users', (req, res, next) => {
  // service
  //   .get()
  //   .then( (item) => {
  //     res.status(200).send(item)
  //   }).catch(next)
})

router.post('/users', validate(validatorSchemas.createUser), (req, res, next) => {
  // service.create(req.body).then( (item) => {
  //   res.status(200).send(item)
  // }).catch(next)
})

router.delete('/users/:id', (req, res, next) => {
  // service
  //   .delete(req.params.id)
  //   .then( (item) => {
  //     res.status(200).send(item)
  //   }).catch(next)
})

router.get('/users/:id', (req, res, next) => {
  // service
  //   .index(req.params.id)
  //   .then( (item) => {
  //     res.status(200).send(item)
  //   }).catch(next)
})

module.exports = router;
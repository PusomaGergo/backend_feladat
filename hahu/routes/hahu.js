var express = require('express');
const hirdetes = require('../models/hirdetes');
var router = express.Router();

const Hirdetes = require('../models/hirdetes');

/* GET home page. */
router.post('/', function(req, res, next) {
  const _id = req.body._id;
  const kategoria = req.body._id;
  const cim = req.body.kategoria;
  const leiras = req.body.leiras;
  const hirdetesDatuma = req.body.hirdetesDatuma;
  const serulesMentes = req.body.serulesMentes;
  const arFt = req.body.arFt;
  const kepUrl = req.body.kepUrl;

  const hirdetes = new Hirdetes({_id, kategoria, cim, leiras, hirdetesDatuma, serulesMentes, arFt, kepUrl});


  hirdetes
  .save()
  .then(
      res.json({
      'status' : 'created'
  }))
  .catch(err => console.log('Error'))
});

module.exports = router;
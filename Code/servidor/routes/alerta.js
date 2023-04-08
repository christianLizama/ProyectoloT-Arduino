var express = require('express');
var router = express.Router();
const alerta = require('../controllers/alarmaController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respondiendo desde alerta');
});


router.get('/getAlertas', alerta.query)

module.exports = router;
var express = require('express');
var router = express.Router();
const alerta = require('../controllers/alarmaController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respondiendo desde alerta');
});

//Rutas para alarmas
router.get('/getAlertas', alerta.query);
router.get('/queryDia', alerta.queryDia);
router.get('/queryHora', alerta.queryHora);

module.exports = router;
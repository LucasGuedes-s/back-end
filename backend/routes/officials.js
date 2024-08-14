const express = require('express');
const router = express.Router();

/* GET officials listing. */
router.get('/', function(req, res, next) {
  let listaOfficials = ['Alice', 'Bob', 'Charlie'];
  res.render('officials', { officials: listaOfficials });
});

/* GET specific official by ID. */
router.get('/:id', function(req, res, next) {
  const officialId = req.params.id;
  // Logica para obter o oficial pelo ID
  res.send(`Detalhes do oficial com ID: ${officialId}`);
});

module.exports = router;

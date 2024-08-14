const express = require('express');
const router = express.Router();

// Define rotas
router.get('/', function(req, res, next) {
  // Defina a variável turma aqui
  const turma = 'Desenvolvedores Backend';

  // Passe a variável turma para a view
  res.render('index', { title: 'Página Inicial', turma: turma });
});

module.exports = router;

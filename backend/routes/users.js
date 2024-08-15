var express = require('express');
var router = express.Router();
const mysql = require('../mysql')

/* GET users listing. */
router.get('/', function(req, res, next){

  mysql.connect()
  mysql.consultUser()
    .then((users) => {
      res.render('users', {users:users}) //Usar o resultado final
      console.log(users)
    })
    .catch((error) => {
    console.error('Erro na consulta', error);
    });
    
  mysql.disconnect()
  
});

router.get('/new', function(req, res){
  res.render('novoUsuario', {title: 'Cadastros de usuarios'})

})

router.get('/atualizar', function(req,res){
  res.render('updateUsers', {title:'Atualizar Cadrastro dos Usuarios'})
})

router.post('/updateuser', function(req,res){
  console.log("Cheguei aqui")
  const {cpf} = req.body
  if (cpf != ''){
    mysql.buscarUsuarioCPF(cpf).then((result) =>{
      console.log(result)
      if(result.length>0){
        res.render('alterarUsuario', { result: result })
      }
  else{
    res.send("Nenhum usuário encontrado")
  }
    }).catch((error) =>{
      console.error('Erro na consulta', error)
      res.render("Ocorreu um erro no processamento dos dados")
    })
  }
})
  

router.post('/newuser', function(req, res){
  const {nome,cpf,idade,endereco} = req.body
  console.log(req.body)

  let cadrastro =  mysql.insertUser(cpf, nome, idade, endereco)
  console.log(cadrastro)
  if (cadrastro){
    //res.status(200).send('Efetuado com Sucesso')
    res.send("Efetuado com Sucesso, Redirecionado para a pagina de confirmação")

  }else{
    //res.status(304).send("Ocorreu algum ploblema"),
    res.send("Ocorreu algum Problema!")
  }


})

module.exports = router;
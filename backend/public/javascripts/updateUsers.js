const mysql = require('../../mysql')

function pesquisarUsuarios(){
    let cpf = document.getElementById('cpfUser').valur
    let nome = document.getElementById('nameUser').value

    if (cpf !=''){
        let name, cpf, endereco, idade=   mysql.buscarUsuarioCPF(cpf)
    }else{
        let name, cpf, endereco, idade=   mysql.buscarUsuarionome(nome)
    }
}
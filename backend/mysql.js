const mysql = require('mysql2')

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'backend'
})

function connect(){
    conection.connect((error) => {
        if(error){
            console.error('Não foi possivel conectar ao banco de dados!', error.stack)
            return 
        }else{
            console.log("Banco de dados conectado com sucesso")
        }
    })
}

function disconnect(){
    conection.end((error) => {
        if(error){
            console.log('erro ao se disconetar', error.stack);
        }else{
            console.log('Desconectado com sucesso!')
        }
    })
}

async function consultUser(){
    try{
        const [result] = await conection.promise().query('SELECT * FROM Users')
        return result; //Retorna o resultado diretamente
    }catch (error){
        console.log("erro ao consultar sua tabela", error.stack);
        throw error; //Lança o erro para ser tratado externamente
    }
}

async function insertUser (cpf, nome, idade,endereco){
    try{
        console.log("Cheguei aqii")
        await conection.promise().query(`INSERT INTO Users(CPF, nome, idade, endereco) VALUES(' ${cpf}', '${nome}', '${idade}',  '${endereco}'); `)
        return true;
    } catch (error){
        console.log("Não foi possivel cadrastrar o usuario", error.stack)
        return false;
    }
}

module.exports = {connect,disconnect,consultUser, insertUser}
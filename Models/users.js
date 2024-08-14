const User = Mysql.model('User', {
    name: String, 
    cpf: String,
    age: Number,
    cellphone: String,
    permission: Number,
    login: String,
    password: String,

})
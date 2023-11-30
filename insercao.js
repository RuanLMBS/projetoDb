const {Client} = require('pg')

const client = new Client({
    host:'localhost',
    user:'postgres',
    port:5432,
    password:'sonic20102003',
    database:'postgres'
})

function adicionaUsuarios(nome, senha) {
    client.connect();
    client.query('INSERT INTO sistema.usuario (nome, senha) VALUES ($1, $2)',[nome,senha], (err,res)=>{
        if(!err) {
            console.log("Usuário adicionado com sucesso!")
        } else {
            console.log(err.message)
        }
        client.end
    })
}

function adicionaFarmacia(nome,logradouro,f_id) {
    client.connect();
    client.query('INSERT INTO sistema.farmacia (nome,logradouro,f_id) VALUES ($1,$2,$3)',[nome,logradouro,f_id],(err,res)=>{
        if(!err) {
            console.log("Adicionado com sucesso!")
        } else {
            console.log(err.message)
        }
        client.end
    })
}

function adicionaMedicamento(nome,bula,lote,validade,laboratorio) {
    client.connect();
    client.query('INSERT INTO sistema.medicamento (nome,bula,lote,validade,laboratorio) VALUES ($1,$2,$3,$4,$5)',[nome,bula,lote,validade,laboratorio],(err,res)=>{
        if(!err) {
            console.log("Adicionado com sucesso!")
        } else {
            console.log(err.message)
        }
        client.end
    })
}

function adicionaNovoEstoque(f_id,m_id,qt) {
    client.connect();
    client.query('INSERT INTO sistema.estoque (f_id,m_id,quantidade) VALUES ($1,$2,$3)',[f_id,m_id,qt],(err,res)=>{
        if(!err) {
            console.log("Adicionado com sucesso!")
        } else {
            console.log(err.message)
        }
        client.end
    })
}

function alteraEstoque(qt,f_id,m_id) {
    client.connect();
    client.query('UPDATE sistema.estoque SET quantidade=quantidade+($1) WHERE f_id=($2) AND m_id=($3)',[qt,f_id,m_id],(err,res)=>{
        if(!err) {
            console.log("Adicionado com sucesso!")
        } else {
            console.log(err.message)
        }
        client.end
    })
}

/* FUNÇÕES */

/* adicionaUsuarios (nome,senha) {}
    Utilizada para fazer a adição de novos usuários
---------------------------------------------------*/

/* adicionaFarmacia(nome,logradouro,f_id) {}
    Utilizada para fazer a adição de novas farmácias
---------------------------------------------------*/

/* adicionaNovoEstoque(f_id,m_id) {}
    Utilizada para fazer a adição de um medicamento (não existente no estoque
    anteriormente) no estoque.
----------------------------------------------------------------------------*/
adicionaNovoEstoque(2,1,20)
/* alteraEstoque(qt,f_id,m_id) {}
    Altera a quantidade um certo medicamento existente no estoque de uma farmácia
--------------------------------------------------------------------------------*/


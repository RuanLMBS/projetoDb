const {Client} = require('pg')

const client = new Client({
    host:'localhost',
    user:'postgres',
    port:5432,
    password:'sonic20102003',
    database:'postgres'
})

function verificaEstoque(f_id) {
    client.connect();
    client.query('SELECT med.nome,estq.quantidade FROM sistema.medicamento med JOIN sistema.estoque estq ON med.id = estq.m_id JOIN sistema.farmacia farm ON estq.f_id = farm.id WHERE farm.id=($1)',[f_id],(err,res)=>{
        if(!err) {
            console.log(res.rows)
        } else {
            console.log(err.message)
        }
        client.end
    })
}

function listaUsuarios() {
    client.connect();
    client.query('SELECT * FROM sistema.usuario', (err,res)=>{
        if(!err) {
            console.log(res.rows)
        } else {
            console.log(err.message)
        }
        client.end
    })
} 

function listaFarmacias() {
    client.connect();
    client.query('SELECT * FROM sistema.farmacia',(err,res)=>{
        if(!err) {
            console.log(res.rows)
        } else {
            console.log(err.message)
        }
        client.end
    })

function verificaUsuario(nome) {
        client.connect();
        client.query('SELECT * FROM sistema.usuario WHERE usuario.nome=($1)',[nome], (err,res)=>{
            if(!err) {
                if(res.rows.length==0) {
                    console.log("Não há nenhum usuário com este nome!")
                } else {
                    console.log(res.rows)
                }
            } else {
                console.log(err.message)
            }
            client.end
        })
    } 
    
}

/* FUNÇÕES */

/* verificaEstoque (f_id) {}
    Verifica o estoque de uma farmácia, retorna o nome e a quantidade
    dos medicamentos lá existentes
--------------------------------------------------------------------*/


/* listaUsuarios () {}
    Lista de usuários existentes no banco de dados
---------------------------------------------------*/

verificaEstoque(2)
/* verificaEstoque (f_id) {}
    Verifica o estoque de uma farmácia, retorna o nome e a quantidade
    dos medicamentos lá existentes
--------------------------------------------------------------------*/

/* listaFarmacias () {}
    Lista de farmácias existentes no banco de dados
--------------------------------------------------*/

/* verificaUsuario (nome) {}
    Verifica se um nome de usuário passado como parâmetro existe
    no banco de dados
--------------------------------------------------------------*/


const {Client} = require('pg')

const client = new Client({
    host:'localhost',
    user:'postgres',
    port:5432,
    password:'sonic20102003',
    database:'postgres'
})

function removeItem(qt,id,farm) {
    client.connect();
    client.query('UPDATE sistema.estoque SET quantidade = quantidade-($1) WHERE m_id=($2) AND f_id=($3) ',[qt,id,farm], (err,res)=>{
        if(!err) {
            console.log("Alterado com sucesso!")
        } else {
            console.log(err.message)
        }
        client.end
    })
    
}

function removeEstoque(id,farm) {
    client.connect();
    client.query('DELETE FROM sistema.estoque WHERE m_id=($1) AND f_id=($2) ',[id,farm], (err,res)=>{
        if(!err) {
            console.log("Removido com sucesso!")
        } else {
            console.log(err.message)
        }
        client.end
    })
    
}



/* FUNÇÕES */

/* removeItem (qt,id,farm) {}
    Remove uma quantidade qt de itens id de uma farmácia farm
------------------------------------------------------------*/

zeraEstoque(2,1)

/* removeEstoque  (id,farm) {}
    Remove um medicamento específico (id) do estoque de uma farmácia (farm)
-------------------------------------------------------------------------*/

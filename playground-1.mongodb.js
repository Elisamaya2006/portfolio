// // const collection = 'NEW_COLLECTION_NAME';

// //CREATE DATABASE TEST
// //USE TEST
// use("test");
// //Apagando a collection antes de inserir novos dados.
// db.cardapio.drop();

// //Código para criar uma nova collection
// db.createCollection("cardapio");

// //Código para inserir vários dados em uma collection criada anteriormente
// db.cardapio.insertMany([
//     {nome:"Macarrão",preco:29.99,ingredientes:"Macarrão"},
//     {nome:"Strogonoff",preco:59.99,ingredientes:"Carne Wagyu e Arroz"},
//     {nome:"Pirão",preco:50,ingredientes:"Farinha, Frango Caipira, Arroz"},
//     {nome:"Rozcowvo",preco:29.99,ingredientes:"Ovo, Arroz, Feijão"},
//     {nome:"Prato do Dia",preco:10.99,ingredientes:"Arroz, Feijão e Bife"}
// ])

// //SELECT * FROM test.cardapio;

// //No mongo para selecionar vamos usar o comando find

// //devolve todos os dados da collection
// db.cardapio.find();

// //Filtrando pelo nome
// //SELECT * FROM cardapio where nome="Macarrão"; 
// db.cardapio.find({nome:"Macarrão"});

// //Para selecionar as colunas usamos a projeção
// //SELECT nome, preco FROM cardapio where nome="Macarrão"; 
// db.cardapio.find({nome:"Macarrão"},{nome:true,preco:true});

// //FIND ({QUERY},{PROJEÇÃO})

use("teretreino");
db.treino.insertOne(
    {
        nome:"Peito e Biceps",
        diaSemana:"Segunda",
        exercicios:[
            {
                
                nome:"Rosca Scott",
                serie:5,
                repeticoes:12
            },
            
        ]
    }
)
use("teretreino");
db.treino.find({_id:ObjectId ("64f8c02565059e522f04cd17")})

use("teretreino");
db.treino.updateOne(
    {_id:ObjectId ("64f741c7c86afd16041f907f"), "nome":"Rosca Scott"},)


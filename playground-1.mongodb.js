//Código para criar uma nova collection
use("patissier");
db.dropDatabase()
use("patissier");
db.createCollection("cake");

//Inserindo dados
db.cake.insertOne(
    {_id:1,
        nome:"Bolo de Cenoura",
        peso:"1kg", 
        preco:60.00,
        ingredientes:"cenouras, ovos, oleo, acucar, farinha de trigo, fermento em pó"}
);
db.cake.insertOne(
    {_id:2,
        nome:"Bolo de Chocolate",
        peso:"1.800kg", 
        preco:45.00,
        ingredientes:"achocolatado em pó, ovos, oleo, acucar, farinha de trigo, fermento em pó"}
);
db.cake.insertOne(
    {_id:3,
        nome:"Red Velvet",
        peso:"2.800kg", 
        preco:180.00,
        ingredientes:"corante vermelho, ovos, manteiga, acucar, farinha de trigo, fermento em pó"}
);
db.cake.insertOne(
    {_id:4,
        nome:"Bolo de Limão",
        peso:"2kg", 
        preco:69.00,
        ingredientes:"achocolatado em pó, ovos, oleo, acucar, farinha de trigo, fermento em pó"}
);


//Excluindo o document cake com _id = 1
db.cake.deleteOne({_id: 1});

//Listando o nome e o preço de todos os bolos
db.cake.find({}, 
    {nome: "Bolo de Cenoura", preco: 60.00});
db.cake.find({}, 
    {nome: "Bolo de Chocolate", preco: 45.00});
db.cake.find({}, 
    {nome: "Red Velvet", preco: 180.00});
db.cake.find({}, 
    {nome: "Bolo de Limão", preco: 69.00});
db.cake.find({},
    {nome: "Bolo de Morango", preco: 142.50});

//Listando nome e o preço de todos os bolos com o preço menor ou igual a 70
db.cake.find({preco: { $lte: 70 }}, {nome: "Bolo de Cenoura", preco: 60.00});
db.cake.find({preco: { $lte: 70 }}, {nome: "Bolo de Chocolate", preco: 45.00});
db.cake.find({preco: { $lte: 70 }}, {nome: "Red Velvet", preco: 180.00});
db.cake.find({preco: { $lte: 70 }}, {nome: "bolo de Limão", preco: 69.00});
db.cake.find({preco: { $lte: 70 }}, {nome: "Bolo de Morango", preco: 142.50});

//Consulta que muda o nome, peso e acrescenta 1 ingrediente no bolo _id = 2. (Usando update)
db.cake.updateOne({_id: 2}), {
    $set: {
        
    }
}

//Código para criar update modificando 1 ingrediente de um bolo para ovos e quantidade = "3 unidades"

//Código para criar uma nova collection
use("portfolio");
db.dropDatabase()
use("portfolio");
db.createCollection("projetos");

//Inserindo dados
db.projetos.insertOne(
    {_id:1,
        título:"A Dança das Cores",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:2,
        título:"Sorriso & Mágia",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:3,
        título:"Em Sintonia com a Natureza",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:4,
        título:"Reflexos do Amor",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:5,
        título:"Cores Vibrantes",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:6,
        título:"Horizonte Calmo",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:7,
        título:"O Encanto",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:8,
        título:"Reflexões da Alma",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:9,
        título:"Olhar",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:10,
        título:"Refúgio Verde",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:11,
        título:"Alturas",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:12,
        título:"Essência",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:13,
        título:"Entre Árvores",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);
db.projetos.insertOne(
    {_id:14,
        título:"O Amor em suas mãos",
        data:"22/07/2022", 
        local:"Parque Sucurira",
        modelo:"Ana Alice Oliveira da Silva"}
);

//Excluindo o document projetos com _id = 1
db.projetos.deleteOne({_id: 1});

//Listando o título e a data de todos os projetos
db.projetos.find({}, 
    {título: "A Dança das Cores", data: "22/07/2022"});
db.projetos.find({}, 
    {título: "Sorriso & Mágia", data: "22/07/2022"});
db.projetos.find({}, 
    {título: "Em Sintonia com a Natureza", data: "22/07/2022"});
db.projetos.find({}, 
    {título: "Reflexos do Amor", data: "22/07/2022"});
db.projetos.find({},
    {título: "Cores Vibrantes", data: "22/07/2022"});

//Listando título e a data de todos os projetos com a data 
db.projetos.find({data: { $lte: 70 }}, {título: "A Dança das cores", data: "22/07/2022"});
db.projetos.find({data: { $lte: 70 }}, {título: "Sorriso & Mágia", data: "22/07/2022"});
db.projetos.find({data: { $lte: 70 }}, {título: "Red Velvet", data: "22/07/2022"});
db.projetos.find({data: { $lte: 70 }}, {título: "Reflexos do Amor", data: "22/07/2022"});
db.projetos.find({data: { $lte: 70 }}, {título: "Bolo de Morango", data: "22/07/2022"});

//Consulta que muda o título, data e acrescenta 1 local no projeto _id = 2. (Usando update)
db.projetos.updateOne({_id: 2},{
    $set:{
        título: "Sorriso & Mágia",
        data: "22/07/2022",
        local:{
            ...this.local,
            "Centro da cidade": 10
        }
    }
});

//Código para criar update modificando 1 local de um projeto para Centro da cidade e Horário = "07:30h"
db.projetos.updateOne({_id: 2},{
    $set:{
        local:{
            "Centro da cidade":{
                $set:{
                    horário: "07:30h"
                }
            }
        }
    }
});
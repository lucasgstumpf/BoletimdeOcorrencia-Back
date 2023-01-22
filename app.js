const bool = false;
const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/User");
const Furto = require("./models/Furto");
const Acidente = require("./models/Acidente");
const ViolenciaDomestica = require("./models/violenciaDomestica");
const sequelize = require("sequelize");
const db = require("./models/db");

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Página home");
});

app.post("/cadastrar", async (req, res) => {
  // console.log(req.body);
  let sql = ``
  if (bool){
    sql = `call insereUsuario('${req.body[`name`]}', '${req.body[`senha`]}', '${req.body[`cpf`]}','${req.body[`telefone`]}', '${req.body[`data_nascimento`]}', now(), now());`
  } else {
    sql = `INSERT INTO users (name, senha, cpf, telefone, data_nascimento, createdAt, updatedAt)  
    VALUES ('${req.body[`name`]}', '${req.body[`senha`]}', '${req.body[`cpf`]}','${req.body[`telefone`]}', '${req.body[`data_nascimento`]}', now(), now());`
  }

  await db.query(sql, {
    type: sequelize.QueryTypes.INSERT
  })
});

app.post("/cadastrarFurto", async (req, res) => {
  
  let sql = ``

  if (bool){
    sql = `call insereFurto('${req.body[`caracteristica_agressor`]}', '${req.body[`endereco`]}', '${req.body[`pertences_perdidos`]}','${req.body[`resumo`]}', '${req.body[`cpf`]}', now(), now()');`
  } else {
     sql = `INSERT INTO furto_roubos (caracteristica_agressor, endereco, pertences_perdidos, resumo, cpf, createdAt, updatedAt)  
    VALUES ('${req.body[`caracteristica_agressor`]}', '${req.body[`endereco`]}', '${req.body[`pertences_perdidos`]}','${req.body[`resumo`]}', '${req.body[`cpf`]}', now(), now());`
  }
  await db.query(sql, {
    type: sequelize.QueryTypes.INSERT
  })
});

app.post("/cadastrarViolenciaDomestica", async (req, res) => {
  let sql = ``

  if (bool){
    sql = `call insereViolencia('${req.body[`nome_agressor`]}', '${req.body[`caracteristica_agressor`]}', '${req.body[`endereco`]}','${req.body[`resumo`]}', '${req.body[`cpf`]}', now(), now()');`
  } else {
    sql = `INSERT INTO violenciadomesticas (nome_agressor, caracteristica_agressor, endereco, resumo,cpf, createdAt, updatedAt)  
    VALUES ('${req.body[`nome_agressor`]}', '${req.body[`caracteristica_agressor`]}', '${req.body[`endereco`]}','${req.body[`resumo`]}', '${req.body[`cpf`]}', now(), now());`
  }
  await db.query(sql, {
    type: sequelize.QueryTypes.INSERT
  })
});

app.post("/cadastrarAcidente", async (req, res) => {
  let sql = ``

  if (bool){
    sql = `call insereAcidente('${req.body[`endereco`]}', '${req.body[`resumo`]}', '${req.body[`marca_veiculo`]}','${req.body[`modelo_veiculo`]}', '${req.body[`placa_veiculo`]}',  '${req.body[`cor_veiculo`]}', '${req.body[`cpf`]}',now(), now()');`
  } else {
    sql = `INSERT INTO acidentes (endereco, resumo, marca_veiculo, modelo_veiculo, placa_veiculo, cor_veiculo,cpf,createdAt, updatedAt)
    VALUES ('${req.body[`endereco`]}', '${req.body[`resumo`]}', '${req.body[`marca_veiculo`]}','${req.body[`modelo_veiculo`]}', '${req.body[`placa_veiculo`]}', '${req.body[`cor_veiculo`]}', '${req.body[`cpf`]}',now(), now());`
  }
  await db.query(sql, {
    type: sequelize.QueryTypes.INSERT
  })
});


app.post("/registrosViolencia", async (req, res) => {
  console.log(req.body['cpf']);

  const sql = `SELECT resumo, createdAt  FROM violenciadomesticas WHERE cpf = ${req.body[`cpf`]}`
  
  const resposta = await db.query(sql, {
    type: sequelize.QueryTypes.SELECT })

  const teste = JSON.stringify(resposta);
  console.log(resposta)
  return res.json(resposta);
  

});

app.post("/registrosFurto", async (req, res) => {
  console.log(req.body['cpf']);
  const sql = `SELECT resumo, createdAt FROM furto_roubos WHERE cpf = ${req.body[`cpf`]}`
  const resposta = await db.query(sql, {
    type: sequelize.QueryTypes.SELECT })

  const teste = JSON.stringify(resposta);
  console.log(resposta)
  return res.json(resposta);
  
});

app.post("/registrosAcidente", async (req, res) => {
  console.log(req.body['cpf']);
  const sql = `SELECT resumo, createdAt FROM acidentes WHERE cpf = ${req.body[`cpf`]}`
  const resposta = await db.query(sql, {
    type: sequelize.QueryTypes.SELECT })

  const teste = JSON.stringify(resposta);
  console.log(resposta)
  return res.json(resposta);
  
});

app.post("/registrosDelegadoAcidente", async (req, res) => {
  console.log(req.body['cpf']);
  const sql = `SELECT endereco, resumo, placa_veiculo, cpf FROM acidentes}`
  const resposta = await db.query(sql, {
    type: sequelize.QueryTypes.SELECT })

  const teste = JSON.stringify(resposta);
  console.log(resposta)
  return res.json(resposta);
  
});

app.post("/registrosDelegadoViolencia", async (req, res) => {
  console.log(req.body['cpf']);

  const sql = `SELECT nome_agressor, caracteristica_agressor, cpf  FROM violenciadomestica}`
  
  const resposta = await db.query(sql, {
    type: sequelize.QueryTypes.SELECT })

  const teste = JSON.stringify(resposta);
  console.log(resposta)
  return res.json(resposta);
  

});

app.post("/registrosDelegadoFurto", async (req, res) => {
  const sql = `SELECT caracteristica_agressor, endereco, resumo, cpf FROM furto_roubos}`
  const resposta = await db.query(sql, {
    type: sequelize.QueryTypes.SELECT })

  const teste = JSON.stringify(resposta);
  console.log(resposta)
  return res.json(resposta);
  
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});

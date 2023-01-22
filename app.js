const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/User");
const Furto = require("./models/Furto");
const Acidente = require("./models/Acidente");
const ViolenciaDomestica = require("./models/violenciaDomestica");


app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Página home");
});

app.post("/cadastrar", async (req, res) => {
  // console.log(req.body);
  await User.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        message: "Usuario cadastrado com sucesso!",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        erro: true,
        message: err,
      });
    });
});

app.post("/cadastrarFurto", async (req, res) => {
  console.log(req.body);
  await Furto.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        message: "Ocorrência registrada com sucesso!",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        erro: true,
        message: err,
      });
    });
});

app.post("/cadastrarViolenciaDomestica", async (req, res) => {
  await ViolenciaDomestica.create(req.body)
    .then(() => {
      res.json({
        erro: false,
        message: "Ocorrência registrada com sucesso!",
      });
      res.redirect('');
    })
    .catch((err) => {
      return res.status(400).json({
        erro: true,
        message: err,
      });
    });
});

app.post("/cadastrarAcidente", async (req, res) => {
  console.log(req.body);
  await Acidente.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        message: "Ocorrência registrada com sucesso!",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        erro: true,
        message: err,
      });
    });
});


app.get("/registrosCpf", async (req, res) => {

  console.log(req.body);
  const resposta = await Acidente.findAll({
    attributes: ["id","endereco"],
    raw: true,
  });

  const teste = JSON.stringify(resposta);
  console.log(typeof(teste))
  return res.json(resposta);
  
  
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});

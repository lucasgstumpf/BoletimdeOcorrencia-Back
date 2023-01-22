const Sequelize = require("sequelize");

const sequelize = new Sequelize("boletimOcorrencias", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
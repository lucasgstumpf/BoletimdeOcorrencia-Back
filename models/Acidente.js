const Sequelize = require("sequelize");
const db = require("./db");

const Acidente = db.define('acidentes', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    resumo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    marca_veiculo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    modelo_veiculo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    placa_veiculo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cor_veiculo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
    }

})

Acidente.sync()

module.exports = Acidente;
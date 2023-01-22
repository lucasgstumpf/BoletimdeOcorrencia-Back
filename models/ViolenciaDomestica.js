const Sequelize = require("sequelize");
const db = require("./db");

const Vd = db.define('violenciaDomestica', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome_agressor:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    caracteristica_agressor:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    resumo:{
        type: Sequelize.STRING,
        allowNull: false,
    },

})

// Vd.sync()

module.exports = Vd;
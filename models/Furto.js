const Sequelize = require("sequelize");
const db = require("./db");

const Furto = db.define('furto_roubos', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    caracteristica_agressor:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    pertences_perdidos:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    resumo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
    }

})

Furto.sync();

module.exports = Furto;
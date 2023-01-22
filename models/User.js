const Sequelize = require("sequelize");
const db = require("./db");

const User = db.define('users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_nascimento:{
        type: Sequelize.DATE,
        allowNull: false,
    }

})
// User.sync()

module.exports = User;
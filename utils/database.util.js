/*  ORM connection with BD  */
const { Sequelize, DataTypes } = require("sequelize");

/* Establish db connection  */
const db = new Sequelize({
    dialect: "postgres", //! Que base de datos nos conectaremos
    host: "127.0.0.1", //! localhost
    username: "postgres", //! usuario administrador (se puede crear otros)
    password: "posgresql01", //! cuando se instalo postgres
    port: 5432,
    database: "node_db_curso", //! nombre de la base de datos
    logging: false, //! muestra mensaje en consola : true
});

/* Exports */
module.exports = { db, DataTypes };

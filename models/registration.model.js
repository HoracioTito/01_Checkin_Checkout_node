//**   ORM connection with BD  */
const { db, DataTypes } = require("../utils/database.util");

//** Create Table registrations
//**  Tipo de datos : DataType

const tRegistration = db.define("registrations", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "working",
    },
});

module.exports = { tRegistration };

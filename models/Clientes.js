const {Sequelize, DataTypes, Model} = require('sequelize');

const db = require('../config/connection');

const Cliente = db.define('cliente', {
    cond_numero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cond_documento: DataTypes.STRING,
    cond_nombre: DataTypes.STRING,
    cond_fecha_nacimiento: DataTypes.STRING,
    cond_sexo: DataTypes.CHAR,
    cond_direccion: DataTypes.STRING,
},
{
    db,
    sequelize: db,
    modelName: 'Clientes',
    tableName: 'cliente'
});

module.exports = Cliente;
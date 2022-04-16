const {Sequelize, DataTypes, Model} = require('sequelize');

const db = require('../config/connection');

const Producto = db.define('producto', {
    cond_numero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cond_nombre: DataTypes.STRING,
    cond_tipo: DataTypes.STRING,
    cond_descripcion: DataTypes.STRING,
    cond_cantidad: DataTypes.INTEGER,
},
{
    db,
    sequelize: db,
    modelName: 'Productos',
    tableName: 'producto'
});

module.exports = Producto;
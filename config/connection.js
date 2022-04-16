const {Sequelize, DataTypes, Model} = require('sequelize');

const db = new Sequelize('farmingWeb', 'root', '', {
    host : 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    }
});

try {
    db.authenticate();
    console.log('La conexion se ha establecido correctamente');
} catch {
    console.log('No ha sido posible la conexion de la base de datos');
}
module.exports = db;
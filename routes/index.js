const express= require('express');
//const req = require('express/lib/request');
const router= express.Router();

//importamos el controlador
const proyectosController = require('../controllers/proyectosController');

module.exports = function(){
    //Ruta para el home
    router.get('/', proyectosController.proyectosHome);

    router.get('/nuevo-agricultor', proyectosController.formularioNuevoAgricultor);
    router.post('/nuevo-agricultor', proyectosController.nuevoAgricultor);
    router.get('/agricultores', proyectosController.verAgricultores);
    router.get('/borrar-agricultor/:cond_numero', proyectosController.borrarAgricultor);
    router.get('/editar-agricultor/:cond_numero', proyectosController.editarAgricultor);
    router.post('/editar-agricultor/:cond_numero', proyectosController.actualizarAgricultor);


    router.get('/nuevo-cliente', proyectosController.formularioNuevoCliente);
    router.post('/nuevo-cliente', proyectosController.nuevoCliente);
    router.get('/clientes', proyectosController.verClientes);
    router.get('/borrar-cliente/:cond_numero', proyectosController.borrarCliente);
    router.get('/editar-cliente/:cond_numero', proyectosController.editarCliente);
    router.post('/editar-cliente/:cond_numero', proyectosController.actualizarCliente);

    router.get('/nuevo-producto', proyectosController.formularioNuevoProducto);
    router.post('/nuevo-producto', proyectosController.nuevoProducto);
    router.get('/productos', proyectosController.verProductos);
    router.get('/borrar-producto/:cond_numero', proyectosController.borrarProducto);
    router.get('/editar-producto/:cond_numero', proyectosController.editarProducto);
    router.post('/editar-producto/:cond_numero', proyectosController.actualizarProducto);

    return router;
}

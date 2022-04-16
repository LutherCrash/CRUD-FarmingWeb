const Agricultor = require('../models/Agricultores');
const Agricultores = require('../models/Agricultores')
const Clientes = require('../models/Clientes')
const Productos = require('../models/Productos')

exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePagina : 'FarmingWeb'
    });
}

exports.verAgricultores = async(req, res) => {
    const agricultores = await Agricultores.findAll();
    res.render('Agricultores', {
        nombrePagina: 'Lista de agricultores',
        agricultores
    })
}

exports.formularioNuevoAgricultor = (req, res) => {
    res.render('nuevoAgricultor', {
        nombrePagina : 'Nuevo agricultor'
    });
}

exports.nuevoAgricultor = async(req, res) => {
    // Enviar a consola lo que el usuario escriba
    const { cond_documento } = req.body;
    const { cond_nombre } = req.body;
    const { cond_fecha_nacimiento } = req.body;
    const { cond_sexo } = req.body;
    const { cond_direccion } = req.body;
    
    let errores = [];

    if (!cond_documento) {
        errores.push({ 'texto': 'Agregar un numero de identificacion'})
    }
    // Si hay errores
    if (errores.length > 0) {
        res.render('nuevoAgricultor', {
            nombrePagina: 'nuevo Agricultor',
            errores
        })
    } else {
        const agricultor = await Agricultores.create({
            cond_documento: { cond_documento }.cond_documento,
            cond_nombre: { cond_nombre }.cond_nombre,
            cond_fecha_nacimiento: { cond_fecha_nacimiento }.cond_fecha_nacimiento,
            cond_sexo: { cond_sexo }.cond_sexo,
            cond_direccion: { cond_direccion }.cond_direccion
        });
        res.redirect('/agricultores');
    }

}

exports.editarAgricultor = async(req, res, next) => {
    const cond_numero = req.params.cond_numero;
        const agricultorEditar = await Agricultores.findOne({
        where: {
            cond_numero : cond_numero
        }
    });
    res.render('editarAgricultores', {
        nombrePagina: 'Editar agricultor',
        agricultorEditar
    })
}

exports.actualizarAgricultor = async(req, res, next) => {
    const cond_numero = req.params.cond_numero;
    const cond_documento = req.body.cond_documento;
    const cond_nombre = req.body.cond_nombre;
    const cond_fecha_nacimiento = req.body.cond_fecha_nacimiento;
    const cond_sexo = req.body.cond_sexo;
    const cond_direccion = req.body.cond_direccion;

    let errores = [];

    if (!cond_documento) {
        errores.push({ 'texto': 'Agregar un numero de identificacion'})
    }
    // Si hay errores
    if (errores.length > 0) {
        res.render('nuevoAgricultor', {
            nombrePagina: 'nuevo Agricultor',
            errores
        })
    } else {
        try {
            await Agricultores.update ({
                cond_documento: cond_documento,
                cond_nombre: cond_nombre,
                cond_fecha_nacimiento: cond_fecha_nacimiento,
                cond_sexo: cond_sexo,
                cond_direccion: cond_direccion
            },
            {
                where: {
                    cond_numero: cond_numero
                }
            });
            console.log("Agricultor actualizado correctamente");
            res.redirect('/agricultores');
        }
        catch(err) {
            console.log("Error al intentar actualizar agricultor");
            res.redirect('/agricultores');
        }
    }
}

exports.borrarAgricultor = async(req, res) => {
    try{
        const cond_numero = req.params.cond_numero;
        const borrarAgricultor = await Agricultor.destroy({where:{cond_numero}})
        console.log("Agricultor Borrado correctamente");
        res.redirect('/agricultores');
    }
    catch(err){
        console.log("Error al intentar borrar agricultor");
        res.redirect('/agricultores');
    }
}

exports.verClientes = async(req, res) => {
    const clientes = await Clientes.findAll();
    res.render('Clientes', {
        nombrePagina: 'Lista de clientes',
        clientes
    })
}

exports.formularioNuevoCliente = (req, res) => {
    res.render('nuevoCliente', {
        nombrePagina : 'Nuevo cliente'
    });
}

exports.nuevoCliente = async(req, res) => {
    // Enviar a consola lo que el usuario escriba
    const { cond_documento } = req.body;
    const { cond_nombre } = req.body;
    const { cond_fecha_nacimiento } = req.body;
    const { cond_sexo } = req.body;
    const { cond_direccion } = req.body;
    let errores = [];

    if (!cond_documento) {
        errores.push({ 'texto': 'Agregar un numero de identificacion'})
    }
    // Si hay errores
    if (errores.length > 0) {
        res.render('nuevoCliente', {
            nombrePagina: 'nuevo Cliente',
            errores
        })
    } else {
        const cliente = await Clientes.create({
            cond_documento: { cond_documento }.cond_documento,
            cond_nombre: { cond_nombre }.cond_nombre,
            cond_fecha_nacimiento: { cond_fecha_nacimiento }.cond_fecha_nacimiento,
            cond_sexo: { cond_sexo }.cond_sexo,
            cond_direccion: { cond_direccion }.cond_direccion
        });
        res.redirect('/clientes');
    }

}

exports.editarCliente = async(req, res, next) => {
    const cond_numero = req.params.cond_numero;
        const clienteEditar = await Clientes.findOne({
        where: {
            cond_numero : cond_numero
        }
    });
    res.render('editarClientes', {
        nombrePagina: 'Editar cliente',
        clienteEditar
    })
}

exports.actualizarCliente = async(req, res, next) => {
    const cond_numero = req.params.cond_numero;
    const cond_documento = req.body.cond_documento;
    const cond_nombre = req.body.cond_nombre;
    const cond_fecha_nacimiento = req.body.cond_fecha_nacimiento;
    const cond_sexo = req.body.cond_sexo;
    const cond_direccion = req.body.cond_direccion;

    let errores = [];

    if (!cond_documento) {
        errores.push({ 'texto': 'Agregar un numero de identificacion'})
    }
    // Si hay errores
    if (errores.length > 0) {
        res.render('nuevoCliente', {
            nombrePagina: 'nuevo Cliente',
            errores
        })
    } else {
        try {
            await Clientes.update ({
                cond_documento: cond_documento,
                cond_nombre: cond_nombre,
                cond_fecha_nacimiento: cond_fecha_nacimiento,
                cond_sexo: cond_sexo,
                cond_direccion: cond_direccion
            },
            {
                where: {
                    cond_numero: cond_numero
                }
            });
            console.log("Cliente actualizado correctamente");
            res.redirect('/clientes');
        }
        catch(err) {
            console.log("Error al intentar actualizar cliente");
            res.redirect('/clientes');
        }
    }
}

exports.borrarCliente = async(req, res) => {
    try{
        const cond_numero = req.params.cond_numero;
        const borrarCliente = await Clientes.destroy({where:{cond_numero}})
        console.log("Cliente Borrado correctamente");
        res.redirect('/clientes');
    }
    catch(err){
        console.log("Error al intentar borrar cliente");
        res.redirect('/clientes');
    }
}

exports.verProductos = async(req, res) => {
    const productos = await Productos.findAll();
    res.render('Productos', {
        nombrePagina: 'Lista de productos',
        productos
    })
}

exports.formularioNuevoProducto = (req, res) => {
    res.render('nuevoProducto', {
        nombrePagina : 'Nuevo producto'
    });
}

exports.nuevoProducto = async(req, res) => {
    // Enviar a consola lo que el usuario escriba
    const { cond_nombre } = req.body;
    const { cond_tipo } = req.body;
    const { cond_descripcion } = req.body;
    const { cond_cantidad } = req.body;
    let errores = [];

    if (!cond_nombre) {
        errores.push({ 'texto': 'Agregar un nombre al producto'})
    }
    // Si hay errores
    if (errores.length > 0) {
        res.render('nuevoProducto', {
            nombrePagina: 'nuevo Producto',
            errores
        })
    } else {
        const producto = await Productos.create({
            cond_nombre: { cond_nombre }.cond_nombre,
            cond_tipo: { cond_tipo }.cond_tipo,
            cond_descripcion: { cond_descripcion }.cond_descripcion,
            cond_cantidad: { cond_cantidad }.cond_cantidad
        });
        res.redirect('/productos');
    }
}

exports.editarProducto = async(req, res, next) => {
    const cond_numero = req.params.cond_numero;
        const productoEditar = await Productos.findOne({
        where: {
            cond_numero : cond_numero
        }
    });
    res.render('editarProductos', {
        nombrePagina: 'Editar producto',
        productoEditar
    })
}

exports.actualizarProducto = async(req, res, next) => {
    const cond_numero = req.params.cond_numero;
    const cond_nombre = req.body.cond_nombre;
    const cond_tipo = req.body.cond_tipo;
    const cond_descripcion = req.body.cond_descripcion;
    const cond_cantidad = req.body.cond_cantidad;

    let errores = [];

    if (!cond_nombre) {
        errores.push({ 'texto': 'Agregar un nombre al producto'})
    }
    // Si hay errores
    if (errores.length > 0) {
        res.render('nuevoProducto', {
            nombrePagina: 'nuevo Producto',
            errores
        })
    } else {
        try {
            await Productos.update ({
                cond_nombre: cond_nombre,
                cond_tipo: cond_tipo,
                cond_descripcion: cond_descripcion,
                cond_cantidad: cond_cantidad
            },
            {
                where: {
                    cond_numero: cond_numero
                }
            });
            console.log("Producto actualizado correctamente");
            res.redirect('/productos');
        }
        catch(err) {
            console.log("Error al intentar actualizar producto");
            res.redirect('/productos');
        }
    }
}

exports.borrarProducto = async(req, res) => {
    try{
        const cond_numero = req.params.cond_numero;
        const borrarProducto = await Productos.destroy({where:{cond_numero}})
        console.log("Producto Borrado correctamente");
        res.redirect('/productos');
    }
    catch(err){
        console.log("Error al intentar borrar producto");
        res.redirect('/productos');
    }
}
    // TAREA
    // 5 x 1 = 5
    // 5 x 2 = 10
    // ...
    // 5 x 10 = 50
    // asd

    const { crearArchivo } = require('./helpers/multiplicar');
    const { argv } = require('./config/yargs');
    
    // Aplica colores del paquete colors de npm
    const colors = require('colors');

    // Para limpiar la consola
    console.clear();

    // console.log( process.argv );
    console.log( argv );

    // console.log( 'base: yargs', argv.l );

    // const [ , , arg3 = 'base=5' ] = process.argv;
    // const [ , base = 5] = arg3.split('=');
    

    // const base = 110;
    
    // crearArchivo( argv.b )
    //     .then( nombreArchivo => console.log( nombreArchivo, 'creado' ) )
    //     .catch( err => console.log( err ) );

    crearArchivo( argv.b, argv.l, argv.h )
        .then ( nombreArchivo => console.log( nombreArchivo.rainbow, `creada correctamente.` ) )
        .catch( err => console.log( err ) );

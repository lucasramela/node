    // Importamos la libreria Fyle System
    const fs = require('fs');

    // Aplica colores del paquete colors de npm
    const colors = require('colors/safe');

    const crearArchivo = async( base=5, listar=false, hasta=10 ) => {

        try {
        
            let salida  = '';
            let consola = '';

            

            for (let i = 1; i <= hasta; i ++) {

                salida += `${ base } x ${ i } = ${ base * i }\n`;
                consola += `${ base } ${`x`.green} ${ i } ${`=`.green} ${ base * i }\n`;
            };

            if ( listar ) {

                console.log(`=================================`.green);
                console.log(`    Esta es la tabla del: `,colors.yellow( base ));
                console.log(`=================================`.green);
                console.log( consola );

            }

            

            fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

            return `Tabla-${ base }.txt`;


        } catch (error) {
            
            throw error;

        }
        


    };

    module.exports = {

        crearArchivo

    };

    
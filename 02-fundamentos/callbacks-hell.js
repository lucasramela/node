
    const id = 3;

    const empleados = [

        {
            id: 1,
            nombre: `Lucas`
        },

        {
            id: 2,
            nombre: `Erick`
        },

        {
            id: 3,
            nombre: `Karen`
        }

    ];

    const salarios = [

        {
            id: 1,
            salario: 1000
        },

        {
            id: 2,
            salario: 1500
        },


    ];

    const getEmpleadoById = ( id, callback ) => {

        const empleado = empleados.find( e => e.id === id );
        
        if ( empleado ){

            callback ( null, empleado );

        }else{

            callback ( `Empleado con id ${ id } no existe.` );

        }
        

    };

    getEmpleadoById ( id, ( err, empleado ) => {

        if ( err ){
            
            console.log( `ERROR!` );
            return console.log(empleado.nombre);
        
        }else{

            console.log( `Empleado existe!` );
            console.log( empleado );

        }
    } ) ;


    const getSalarios = ( id, callback ) => {

        const salario = salarios.find( s => s.id === id )?.salario;

        if ( salario ) {

            callback ( null, salario );

        }else{

            callback ( `El empleado con id $( id ) no tiene salario` );

        }

    };

    getSalarios ( id, ( err, salario ) => {

        if ( err ){

            console.log( `ERROR` );
            return console.log( err );

        }else{

            console.log( `Salario existe!` );
            console.log( salario );

        };




    } );




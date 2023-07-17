
    const deadpool = {

        nombre: 'Wade',
        apellido: 'Winston',
        poder: 'Regeneración',
        getNombre() {

            return `${ this.nombre } ${ this.apellido } ${ this.poder }`

        }

    }

    // const nombre   = deadpool.nombre;
    // const apellido = deadpool.apellido;
    // const poder    = deadpool.poder;

    // DESESTRUCTURACION DE OBJETOS
    // const { nombre, apellido, poder, edad } = deadpool;
    // console.log(nombre, apellido, poder, edad);

    const heroes = [ `Deadpool`, `Superman`, `Batman`];

    // const h1 = heroes[0];
    // const h2 = heroes[1];
    // const h3 = heroes[2];

    // DESESTRUCTURACION DE ARRAY
    const [ h1, h2, h3 ] = heroes;

    console.log(h1, h2, h3);
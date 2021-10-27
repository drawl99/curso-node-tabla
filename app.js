
const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
require('colors');




console.clear()




// const [, , arg3 = '5'] = process.argv;
// const [, base = 5] = arg3.split('=')
// const base = 4;


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, ' creado'))
    .catch(err => console.log(err))
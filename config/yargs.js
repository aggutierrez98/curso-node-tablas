const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "string",
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar"
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        default: false,
        describe: "Muestra la tabla en consola"
    })
    .option("h", {
        alias: 'hasta',
        type: "string",
        default: 10,
        describe: "Es el numero que representara el largo de la tabla"
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un numero"
        }
        return true;
    })
    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw "El valor hasta tiene que ser un numero"
        }
        return true;
    })
    .argv;

module.exports = argv;

/* .options({
     "b": {
         alias: "base",
         type: "string",
         demandOption: true
     }
 }, {
     "l": {
         alias: "listar",
         demandOption: false,
         default: false,
         type: "boolean"
     }
 }) */
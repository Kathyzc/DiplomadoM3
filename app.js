require('colors');
console.clear();

//importamos nuestros paquetes

const{mostrarMenu}=require('./helpers/mensajes')
const{inquirerMenu,pausa,leerInput}=require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const Tarea = require('./models/tarea');
const { guardarBD } = require('./helpers/guardarArchivo');

//Funcion asincrona
const main = async()=>{
    let opt="";
    const tareas = new Tareas();

    do {
       opt = await inquirerMenu();
       switch (opt) {
        case '1':
          const desc= await leerInput('Descripcion: ');
          tareas.crearTarea(desc);
        break;

        case '2':
          console.log(tareas.listadoArr);
        break;

        case '3':
        
        break;

       
        default:
            break;
       }
        await pausa();
        guardarBD(tareas.listadoArr);
    } while (opt!='0');

    //mostrarMenu();
    //pausa();
}

main();
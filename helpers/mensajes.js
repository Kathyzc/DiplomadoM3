require('colors');

const mostrarMenu=()=>{
    return new Promise(resolve=>{
        console.clear();
        console.log("=======================".green);
        console.log("Selecciona una opcion".green);
        console.log("=======================".green);
        console.log(`${'1.'.green} Crear Tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas Completas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tarea(s)`);
        console.log(`${'6.'.green} Borrar Tarea`);
        console.log(`${'0.'.green} Salir`);

        //Paquete propio de node

        const readline=require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
        
        readline.question('Seleccione una opción: ',(opt=>{
            console.log(opt);
            readline.close();
            resolve(opt);
        }));
    })
    
}

const pausa=()=>{
    return new Promise(resolve=>{
    const readline=require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
    });
    readline.question(`\nPresione ${'Enter'.green} para continuar\n`,(opt)=>{
        readline.close();
        resolve();
    }) 

  })
}

//Para que nuestra funcion pueda ser invocada
module.exports={
    mostrarMenu,
    pausa
}
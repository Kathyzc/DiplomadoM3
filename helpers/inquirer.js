const inquirer = require('inquirer');
require('colors');

const preguntas=[
    {
        type:'list',
        name:'opcion',
        message:'¿Qué desea hacer?',
        choices:[
           {value:'1',
            name:`${'1.'.green} Crear Tarea`},
           {value:'2',
            name:`${'2.'.green} Listar Tareas`},
            {valu:'3',
            name:`${'3.'.green} Listar Tareas Completas`},
           {value:'4',
            name:`${'4.'.green} Listar Tareas Pendientes`},
            {value:'5',
            name:`${'5.'.green} Completar Tarea(s)`},
           {value:'6',
            name:`${'6.'.green} Borrar Tarea`},
            {valu:'0',
            name:`${'0.'.green} Salir`}
         ]
    }
];


const inquirerMenu=async()=>{
    console.clear();
    console.log("=======================".green);
    console.log("Selecciona una opcion".green);
    console.log("=======================".green);
        
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async()=>{
    const question=[
        {
            type:'input',
            name:'enter',
            message:`Presione ${'Enter'.green} para continuar`,
        }
    ]
    console.log("\n");
    await inquirer.prompt(question);
}

const leerInput = async(message)=>{
    const question=[
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if (value.length===0) {
                    return "Por favor ingrese un valor"
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}

module.exports={
    inquirerMenu,
    pausa,
    leerInput
}
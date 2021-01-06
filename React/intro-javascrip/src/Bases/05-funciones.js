//Funciones en JS
const saludar = function (nombre){
    return `Hola, ${ nombre }`;
}

const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola mundo`;


//console.log( saludar('Goku') )

console.log( saludar4() );

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1501'
    });

const user = getUser();

//Tarea
//1. Transformen a una funcion de Flecha
//2. Tiene que retornan un objeto implícito
//3. Pruebas
const getUsuarioActivo = ( nombre) => ({
        uid: 'ABC567',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );


const personajes = ['Goku','Vegetta','Trunks'];

/*console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);*/


//f2 cambiar nombra a variable

const[ , , p2 ]=personajes;
console.log(p2);

const retornaArreglo=()=>
{
    return ['ABC',123];
}

const[letras,numeros]=retornaArreglo();
console.table([letras,numeros]);

//tarea
//1. el primer del valor del arreglo se llamara nombre
//2. el segundo del valor del arreglo se llamara obtener nombre

const state=(valor)=>{
    return [valor,()=>{console.log('Hola Mundo')}];
}

//const arr=state('Goku');

const[nombre,obtenerNombre]=state(p2);
console.log(nombre)

obtenerNombre();


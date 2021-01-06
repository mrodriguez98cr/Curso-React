//desestructuracion 
//asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'soldado'
};

//const{ nombre,edad,clave}=persona;

/*console.log(nombre);
console.log(edad);
console.log(clave);*/

const Context = ({nombre,edad,clave,rango='Capitan'})=>
{
    //console.log(nombre,edad,rango);
    return {
        nombreClave: clave,
        anios: edad,
        lating:
        {
            lat: 14.69,
            lng: -28.65
        }
    }
}

const{nombreClave, anios,lating:{lat,lng} }= Context(persona);

console.log(nombreClave,anios);
console.log(lat,lng);
